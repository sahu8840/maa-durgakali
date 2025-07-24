package com.yourorg.maadurgakali.repository;

import com.yourorg.maadurgakali.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {} 