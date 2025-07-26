# Donation System Setup Guide

## Overview
The donation system has been successfully integrated into the Maa Durga Kali Shaktipeeth website. It includes a modern, responsive donation page with multiple payment methods and backend integration.

## Features Implemented

### Frontend (Next.js)
- **Modern Donation Page**: Located at `/donations`
- **Hero Section**: Animated background with call-to-action buttons
- **Donation Methods**: Three payment options (UPI, Bank Transfer, Cash)
- **Donation Form**: Collects donor information and donation details
- **Responsive Design**: Works on all devices
- **Copy-to-Clipboard**: Easy copying of payment details
- **Form Validation**: Client-side validation for required fields

### Backend (Spring Boot)
- **Donation Model**: JPA entity for storing donation data
- **Donation Repository**: Data access layer
- **Donation Controller**: REST API endpoints
- **Email Notifications**: Automatic emails to admin and donors
- **SMS Notifications**: Twilio integration for SMS alerts
- **Status Tracking**: PENDING, COMPLETED, CANCELLED statuses

## Setup Instructions

### 1. Update Payment Details
Edit the payment information in `src/components/donations/DonationMethods.tsx`:

```typescript
const donationMethods = [
  {
    id: 'upi',
    name: 'UPI Payment',
    icon: '📱',
    description: 'Quick and easy UPI transfer',
    details: {
      upiId: 'YOUR_ACTUAL_UPI_ID', // Replace with your UPI ID
      qrCode: '/your-qr-code.png', // Replace with your QR code image
      instructions: 'Scan QR code or use UPI ID to pay'
    }
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    icon: '🏦',
    description: 'Direct bank account transfer',
    details: {
      accountName: 'YOUR_ACCOUNT_NAME',
      accountNumber: 'YOUR_ACCOUNT_NUMBER',
      ifscCode: 'YOUR_IFSC_CODE',
      bankName: 'YOUR_BANK_NAME',
      branch: 'YOUR_BRANCH_NAME'
    }
  },
  // ... cash donation details
];
```

### 2. Add QR Code Image
1. Place your UPI QR code image in the `public/` folder
2. Update the `qrCode` path in the donation methods component
3. Recommended image size: 200x200 pixels or larger

### 3. Add Background Images (Optional)
For the hero section, add temple donation background images:
- `public/temple-donation-bg.jpg`
- `public/temple-donation-bg2.jpg`
- `public/temple-donation-bg3.jpg`

### 4. Backend Configuration
The backend is already configured with:
- Email notifications to: `8840abhishek@gmail.com`
- SMS notifications to admin numbers
- Automatic status tracking

### 5. Environment Variables
Make sure these environment variables are set in your backend:
```properties
# Email Configuration
spring.mail.host=your-smtp-host
spring.mail.port=587
spring.mail.username=your-email
spring.mail.password=your-password

# Twilio Configuration (Optional)
twilio.account.sid=your-twilio-sid
twilio.auth.token=your-twilio-token
twilio.phone.number=your-twilio-phone
```

### 6. Database Migration
The donation table will be automatically created when you start the Spring Boot application.

## API Endpoints

### Create Donation
```
POST /api/donations
Content-Type: application/json

{
  "name": "Donor Name",
  "email": "donor@email.com",
  "phone": "9876543210",
  "amount": 1000.0,
  "purpose": "general",
  "message": "Optional message",
  "anonymous": false,
  "paymentMethod": "UPI"
}
```

### Get All Donations
```
GET /api/donations
```

### Get Single Donation
```
GET /api/donations/{id}
```

### Update Donation
```
PUT /api/donations/{id}
```

### Delete Donation
```
DELETE /api/donations/{id}
```

## Donation Purposes
The system includes these predefined donation purposes:
- General Donation
- Construction
- Religious Events
- Charity Work
- Education

## Features for Donors
- **Quick Amount Selection**: Preset amounts (₹100, ₹500, ₹1000, ₹2100, ₹5100, ₹11000)
- **Anonymous Donations**: Option to donate anonymously
- **Multiple Payment Methods**: UPI, Bank Transfer, Cash
- **Copy Payment Details**: One-click copying of payment information
- **Form Validation**: Ensures all required information is provided
- **Confirmation**: Email and SMS confirmations

## Admin Notifications
When a donation intention is submitted:
1. **Email Notification**: Sent to admin email with donation details
2. **SMS Notification**: Sent to all admin numbers via Twilio
3. **User Confirmation**: Email and SMS sent to donor with payment instructions

## Security Features
- Input validation on both frontend and backend
- SQL injection protection through JPA
- XSS protection through proper encoding
- CORS configuration for API access

## Testing
1. Start the Spring Boot backend
2. Start the Next.js frontend
3. Navigate to `/donations`
4. Fill out the donation form
5. Check admin notifications
6. Verify database entries

## Customization
You can customize:
- Donation purposes in the form
- Preset amounts
- Email templates
- SMS message templates
- Admin contact information
- Payment method details

## Support
For any issues or customization requests, please contact the development team. 