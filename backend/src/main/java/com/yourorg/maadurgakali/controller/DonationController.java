package com.yourorg.maadurgakali.controller;

import com.yourorg.maadurgakali.model.Donation;
import com.yourorg.maadurgakali.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin(origins = "*")
public class DonationController {
    @Autowired
    private DonationRepository donationRepository;

    @Autowired(required = false)
    private JavaMailSender mailSender;

    private static final String ADMIN_EMAIL = "8840abhishek@gmail.com";
    private static final List<String> ADMIN_MOBILES = Arrays.asList(
        "+918840201500",
        "+918850319144",
        "+919930504840",
        "+919930504846"
    );

    private String toE164(String phone) {
        String digits = phone.replaceAll("[^\\d]", "");
        if (digits.startsWith("91") && digits.length() == 12) {
            return "+" + digits;
        } else if (digits.length() == 10) {
            return "+91" + digits;
        } else if (digits.startsWith("0") && digits.length() == 11) {
            return "+91" + digits.substring(1);
        } else if (digits.startsWith("91") && digits.length() == 13) {
            return "+" + digits.substring(1);
        }
        return phone.startsWith("+") ? phone : "+" + phone;
    }

    @Value("${twilio.account.sid:}")
    private String twilioAccountSid;
    @Value("${twilio.auth.token:}")
    private String twilioAuthToken;
    @Value("${twilio.phone.number:}")
    private String twilioPhoneNumber;



    @GetMapping
    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Donation> createDonation(@RequestBody Donation donation) {
        try {
            if (donation.getPhone() == null || donation.getPhone().trim().isEmpty() || 
                donation.getAmount() == null || donation.getAmount() <= 0) {
                return ResponseEntity.badRequest().build();
            }

            // Set default values
            if (donation.getStatus() == null) {
                donation.setStatus("PENDING");
            }
            if (donation.getDate() == null) {
                donation.setDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
            }
            if (donation.getAnonymous() == null) {
                donation.setAnonymous(false);
            }

            Donation saved = donationRepository.save(donation);

        // Send email notification to admin
        if (mailSender != null) {
            try {
                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(ADMIN_EMAIL);
                mail.setSubject("New Donation Intention Received");
                mail.setText("A new donation intention has been received:\n\n" +
                        "Name: " + (donation.getAnonymous() ? "Anonymous" : donation.getName()) + "\n" +
                        "Email: " + (donation.getEmail() != null ? donation.getEmail() : "-") + "\n" +
                        "Phone: " + donation.getPhone() + "\n" +
                        "Amount: ₹" + donation.getAmount() + "\n" +
                        "Purpose: " + donation.getPurpose() + "\n" +
                        "Payment Method: " + (donation.getPaymentMethod() != null ? donation.getPaymentMethod() : "Not specified") + "\n" +
                        "Date: " + donation.getDate() + "\n" +
                        "Message: " + (donation.getMessage() != null ? donation.getMessage() : "-"));
                mailSender.send(mail);
            } catch (Exception e) {
                System.out.println("Failed to send email: " + e.getMessage());
            }
        }

        // Send SMS notification to admin and user if Twilio is configured
        if (twilioAccountSid != null && !twilioAccountSid.isEmpty() && twilioAuthToken != null && !twilioAuthToken.isEmpty() && twilioPhoneNumber != null && !twilioPhoneNumber.isEmpty()) {
            try {
                Twilio.init(twilioAccountSid, twilioAuthToken);
                // SMS to all admins
                for (String adminMobile : ADMIN_MOBILES) {
                    Message.creator(
                        new PhoneNumber(toE164(adminMobile)),
                        new PhoneNumber(twilioPhoneNumber),
                        "Jai Mata Di!\nNew donation intention received.\n" +
                        "Name: " + (donation.getAnonymous() ? "Anonymous" : donation.getName()) + "\n" +
                        "Amount: ₹" + donation.getAmount() + "\n" +
                        "Purpose: " + donation.getPurpose() + "\n" +
                        "Phone: " + donation.getPhone() + "\n" +
                        "Please contact the devotee for payment completion."
                    ).create();
                }
                // SMS to user
                Message.creator(
                    new PhoneNumber(toE164(donation.getPhone())),
                    new PhoneNumber(twilioPhoneNumber),
                    "Thank you for your donation intention of ₹" + donation.getAmount() + " to Maa Durgakali Shaktipeeth. " +
                    "Please complete the payment using the methods provided on our website. " +
                    "We will contact you shortly to confirm the payment."
                ).create();
            } catch (Exception e) {
                System.out.println("Failed to send SMS via Twilio: " + e.getMessage());
            }
        } else {
            // Log SMS notification to admin
            System.out.println("[SMS to " + ADMIN_MOBILES + "]: New donation intention from " + (donation.getAnonymous() ? "Anonymous" : donation.getName()) + ", Amount: ₹" + donation.getAmount() + ", Purpose: " + donation.getPurpose() + ", Phone: " + donation.getPhone());
            // Log SMS notification to user
            System.out.println("[SMS to user " + donation.getPhone() + "]: Thank you for your donation intention of ₹" + donation.getAmount() + " to Maa Durgakali Shaktipeeth. Please complete the payment using the methods provided on our website.");
        }

        // Send confirmation email to user if email is present
        if (mailSender != null && donation.getEmail() != null && !donation.getEmail().trim().isEmpty()) {
            try {
                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(donation.getEmail());
                mail.setSubject("Thank you for your donation intention - Maa Durgakali Shaktipeeth");
                mail.setText("Dear " + (donation.getAnonymous() ? "Devotee" : donation.getName()) + ",\n\n" +
                        "Thank you for your generous donation intention of ₹" + donation.getAmount() + " to Maa Durgakali Shaktipeeth.\n\n" +
                        "Donation Details:\n" +
                        "Amount: ₹" + donation.getAmount() + "\n" +
                        "Purpose: " + donation.getPurpose() + "\n" +
                        "Date: " + donation.getDate() + "\n\n" +
                        "Please complete the payment using any of the following methods:\n" +
                        "1. UPI: maa.durgakali@okicici\n" +
                        "2. Bank Transfer: ICICI Bank A/C 1234567890\n" +
                        "3. Cash donation at temple\n\n" +
                        "We will contact you shortly to confirm the payment and provide you with a receipt.\n\n" +
                        "Jai Mata Di!\n" +
                        "Maa Durgakali Shaktipeeth");
                mailSender.send(mail);
            } catch (Exception e) {
                System.out.println("Failed to send confirmation email to user: " + e.getMessage());
            }
        }

        return new ResponseEntity<>(saved, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("Error creating donation: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Donation> updateDonation(@PathVariable Long id, @RequestBody Donation updated) {
        Optional<Donation> optional = donationRepository.findById(id);
        if (optional.isPresent()) {
            Donation donation = optional.get();
            donation.setName(updated.getName());
            donation.setEmail(updated.getEmail());
            donation.setPhone(updated.getPhone());
            donation.setAmount(updated.getAmount());
            donation.setPurpose(updated.getPurpose());
            donation.setMessage(updated.getMessage());
            donation.setAnonymous(updated.getAnonymous());
            donation.setPaymentMethod(updated.getPaymentMethod());
            donation.setStatus(updated.getStatus());
            donation.setDate(updated.getDate());
            return ResponseEntity.ok(donationRepository.save(donation));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDonation(@PathVariable Long id) {
        if (donationRepository.existsById(id)) {
            donationRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Donation> getDonation(@PathVariable Long id) {
        Optional<Donation> donation = donationRepository.findById(id);
        return donation.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
} 