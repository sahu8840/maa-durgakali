package com.yourorg.maadurgakali.controller;

import com.yourorg.maadurgakali.model.Event;
import com.yourorg.maadurgakali.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventRepository eventRepository;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event updatedEvent) {
        return eventRepository.findById(id)
            .map(event -> {
                event.setTitle(updatedEvent.getTitle());
                event.setDate(updatedEvent.getDate());
                event.setTime(updatedEvent.getTime());
                event.setDescription(updatedEvent.getDescription());
                event.setImage(updatedEvent.getImage());
                return eventRepository.save(event);
            })
            .orElseThrow(() -> new RuntimeException("Event not found with id " + id));
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventRepository.deleteById(id);
    }
} 