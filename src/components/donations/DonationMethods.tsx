'use client';

import { useState } from 'react';

const donationMethods = [
  {
    id: 'upi',
    name: 'UPI Payment',
    icon: '📱',
    description: 'Quick and easy UPI transfer',
    details: {
      upiId: 'maa.durgakali@okicici',
      qrCode: '/qr-code-placeholder.png',
      instructions: 'Scan QR code or use UPI ID to pay'
    }
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    icon: '🏦',
    description: 'Direct bank account transfer',
    details: {
      accountName: 'Maa Durga Kali Shaktipeeth',
      accountNumber: '1234567890',
      ifscCode: 'ICIC0001234',
      bankName: 'ICICI Bank',
      branch: 'Main Branch'
    }
  },
  {
    id: 'cash',
    name: 'Cash Donation',
    icon: '💵',
    description: 'Visit temple for cash donation',
    details: {
      address: 'Maa Durga Kali Shaktipeeth, Temple Address, City, State - PIN',
      timing: 'Morning: 6:00 AM - 12:00 PM\nEvening: 4:00 PM - 9:00 PM',
      contact: '+91 98765 43210'
    }
  }
];

export default function DonationMethods() {
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const selectedMethodData = donationMethods.find(method => method.id === selectedMethod);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Donation Methods</h3>
      
      {/* Method Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {donationMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
              selectedMethod === method.id
                ? 'border-yellow-500 bg-yellow-50'
                : 'border-gray-200 hover:border-yellow-300 hover:bg-gray-50'
            }`}
          >
            <div className="text-3xl mb-2">{method.icon}</div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">{method.name}</h4>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Method Details */}
      {selectedMethodData && (
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              {selectedMethodData.name}
            </h4>
            <p className="text-gray-600">{selectedMethodData.description}</p>
          </div>

          {selectedMethod === 'upi' && (
            <div className="space-y-6">
              {/* QR Code */}
              <div className="text-center">
                <div className="inline-block p-4 bg-gray-100 rounded-xl">
                  <img
                    src={selectedMethodData.details.qrCode}
                    alt="UPI QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Scan this QR code with any UPI app
                </p>
              </div>

              {/* UPI ID */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">UPI ID</p>
                    <p className="text-lg font-mono text-gray-900">
                      {selectedMethodData.details.upiId}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(selectedMethodData.details.upiId, 'upi')}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    {copiedField === 'upi' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedMethod === 'bank' && (
            <div className="space-y-4">
              {Object.entries(selectedMethodData.details).map(([key, value]) => (
                <div key={key} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-lg font-mono text-gray-900">{value}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(value, key)}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      {copiedField === key ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedMethod === 'cash' && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700">Temple Address</p>
                <p className="text-gray-900">{selectedMethodData.details.address}</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700">Visiting Hours</p>
                <p className="text-gray-900 whitespace-pre-line">{selectedMethodData.details.timing}</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Contact Number</p>
                    <p className="text-gray-900">{selectedMethodData.details.contact}</p>
                  </div>
                  <a
                    href={`tel:${selectedMethodData.details.contact}`}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 