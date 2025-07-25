package com.yourorg.maadurgakali.model;

import jakarta.persistence.*;

@Entity
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String timings; // Comma-separated string
    private String type;

    public Service() {}

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getTimings() { return timings; }
    public void setTimings(String timings) { this.timings = timings; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
} 