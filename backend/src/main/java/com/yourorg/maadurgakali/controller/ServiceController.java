package com.yourorg.maadurgakali.controller;

import com.yourorg.maadurgakali.model.Service;
import com.yourorg.maadurgakali.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/services")

public class ServiceController {
    @Autowired
    private ServiceRepository serviceRepository;

    // Helper to convert timings string <-> list
    private List<String> timingsToList(String timings) {
        if (timings == null || timings.isEmpty()) return new ArrayList<>();
        return Arrays.asList(timings.split(","));
    }
    private String timingsToString(List<String> timings) {
        return timings == null ? "" : String.join(",", timings);
    }

    @GetMapping
    public List<Map<String, Object>> getAllServices() {
        return serviceRepository.findAll().stream().map(service -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", service.getId());
            map.put("name", service.getName());
            map.put("description", service.getDescription());
            map.put("timings", timingsToList(service.getTimings()));
            map.put("type", service.getType());
            return map;
        }).collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<Service> createService(@RequestBody Map<String, Object> payload) {
        Service service = new Service();
        service.setName((String) payload.get("name"));
        service.setDescription((String) payload.get("description"));
        service.setType((String) payload.get("type"));
        List<String> timings = (List<String>) payload.get("timings");
        service.setTimings(timingsToString(timings));
        Service saved = serviceRepository.save(service);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody Map<String, Object> payload) {
        Optional<Service> optional = serviceRepository.findById(id);
        if (!optional.isPresent()) return ResponseEntity.notFound().build();
        Service service = optional.get();
        service.setName((String) payload.get("name"));
        service.setDescription((String) payload.get("description"));
        service.setType((String) payload.get("type"));
        List<String> timings = (List<String>) payload.get("timings");
        service.setTimings(timingsToString(timings));
        Service saved = serviceRepository.save(service);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        if (!serviceRepository.existsById(id)) return ResponseEntity.notFound().build();
        serviceRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
} 