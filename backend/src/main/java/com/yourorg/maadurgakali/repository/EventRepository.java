package com.yourorg.maadurgakali.repository;

import com.yourorg.maadurgakali.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {} 