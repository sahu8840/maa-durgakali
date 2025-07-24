package com.yourorg.maadurgakali.repository;

import com.yourorg.maadurgakali.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {
} 