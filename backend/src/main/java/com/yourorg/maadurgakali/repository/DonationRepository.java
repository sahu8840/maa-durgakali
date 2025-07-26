package com.yourorg.maadurgakali.repository;

import com.yourorg.maadurgakali.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
} 