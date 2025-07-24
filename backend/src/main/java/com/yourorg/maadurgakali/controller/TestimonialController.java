package com.yourorg.maadurgakali.controller;

import com.yourorg.maadurgakali.model.Testimonial;
import com.yourorg.maadurgakali.repository.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/testimonials")
public class TestimonialController {
    @Autowired
    private TestimonialRepository testimonialRepository;

    @Value("${testimonial.upload.dir:uploads}")
    private String uploadDir;

    @GetMapping
    public List<Testimonial> getAllTestimonials() {
        return testimonialRepository.findAll();
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<Testimonial> createTestimonial(
            @RequestParam("name") String name,
            @RequestParam("location") String location,
            @RequestParam("content") String content,
            @RequestParam("date") String date,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) throws IOException {
        String imageUrl = "";
        if (image != null && !image.isEmpty()) {
            String ext = org.springframework.util.StringUtils.getFilenameExtension(image.getOriginalFilename());
            String filename = java.util.UUID.randomUUID().toString() + (ext != null ? "." + ext : "");
            File dir = new File(uploadDir);
            if (!dir.exists()) dir.mkdirs();
            Path filePath = Paths.get(uploadDir, filename);
            Files.copy(image.getInputStream(), filePath);
            imageUrl = "/uploads/" + filename;
        }
        Testimonial testimonial = new Testimonial();
        testimonial.setName(name);
        testimonial.setLocation(location);
        testimonial.setContent(content);
        testimonial.setDate(date);
        testimonial.setImage(imageUrl);
        Testimonial saved = testimonialRepository.save(testimonial);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public Testimonial updateTestimonial(@PathVariable Long id, @RequestBody Testimonial updatedTestimonial) {
        return testimonialRepository.findById(id)
            .map(testimonial -> {
                testimonial.setName(updatedTestimonial.getName());
                testimonial.setLocation(updatedTestimonial.getLocation());
                testimonial.setContent(updatedTestimonial.getContent());
                testimonial.setDate(updatedTestimonial.getDate());
                testimonial.setImage(updatedTestimonial.getImage());
                return testimonialRepository.save(testimonial);
            })
            .orElseThrow(() -> new RuntimeException("Testimonial not found with id " + id));
    }

    @DeleteMapping("/{id}")
    public void deleteTestimonial(@PathVariable Long id) {
        testimonialRepository.deleteById(id);
    }
} 