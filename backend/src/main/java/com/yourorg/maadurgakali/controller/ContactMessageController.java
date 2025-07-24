package com.yourorg.maadurgakali.controller;

import com.yourorg.maadurgakali.model.ContactMessage;
import com.yourorg.maadurgakali.repository.ContactMessageRepository;
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

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contact")
public class ContactMessageController {
    @Autowired
    private ContactMessageRepository contactMessageRepository;

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
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<ContactMessage> createMessage(@RequestBody ContactMessage message) {
        if (message.getPhone() == null || message.getPhone().trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        ContactMessage saved = contactMessageRepository.save(message);
        // Send email notification to admin
        if (mailSender != null) {
            try {
                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(ADMIN_EMAIL);
                mail.setSubject("New Contact Query Received");
                mail.setText("A new contact query has been received:\n\n" +
                        "Name: " + message.getName() + "\n" +
                        "Email: " + (message.getEmail() != null ? message.getEmail() : "-") + "\n" +
                        "Phone: " + message.getPhone() + "\n" +
                        "Date: " + message.getDate() + "\n" +
                        "Message: " + message.getMessage());
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
                        "Jai Mata Di!\nYou have received a new contact query.\n" +
                        "Name: " + message.getName() + "\n" +
                        (message.getEmail() != null && !message.getEmail().isEmpty() ? ("Email: " + message.getEmail() + "\n") : "") +
                        "Phone: " + message.getPhone() + "\n" +
                        "Message: " + message.getMessage() + "\n" +
                        "Please reach out to the devotee as soon as possible."
                    ).create();
                }
                // SMS to user
                Message.creator(
                    new PhoneNumber(toE164(message.getPhone())),
                    new PhoneNumber(twilioPhoneNumber),
                    "Thank you for contacting us, we will get in touch with you soon."
                ).create();
            } catch (Exception e) {
                System.out.println("Failed to send SMS via Twilio: " + e.getMessage());
            }
        } else {
            // Log SMS notification to admin (replace with real SMS API if needed)
            System.out.println("[SMS to " + ADMIN_MOBILES + "]: New contact query from " + message.getName() + ", Email: " + (message.getEmail() != null ? message.getEmail() : "-") + ", Phone: " + message.getPhone() + ", Message: " + message.getMessage());
            // Log SMS notification to user
            System.out.println("[SMS to user " + message.getPhone() + "]: Thank you for contacting us, we will get in touch with you soon.");
        }
        // Send confirmation email to user if email is present
        if (mailSender != null && message.getEmail() != null && !message.getEmail().trim().isEmpty()) {
            try {
                SimpleMailMessage mail = new SimpleMailMessage();
                mail.setTo(message.getEmail());
                mail.setSubject("Thank you for contacting Maa Durgakali Shaktipeeth");
                mail.setText("Dear " + message.getName() + ",\n\nThank you for contacting us. We have received your message and will get in touch with you soon.\n\nRegards,\nMaa Durgakali Shaktipeeth");
                mailSender.send(mail);
            } catch (Exception e) {
                System.out.println("Failed to send confirmation email to user: " + e.getMessage());
            }
        }
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContactMessage> updateMessage(@PathVariable Long id, @RequestBody ContactMessage updated) {
        Optional<ContactMessage> optional = contactMessageRepository.findById(id);
        if (optional.isPresent()) {
            ContactMessage message = optional.get();
            message.setName(updated.getName());
            message.setEmail(updated.getEmail());
            message.setPhone(updated.getPhone());
            message.setMessage(updated.getMessage());
            message.setDate(updated.getDate());
            return ResponseEntity.ok(contactMessageRepository.save(message));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        if (contactMessageRepository.existsById(id)) {
            contactMessageRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
} 