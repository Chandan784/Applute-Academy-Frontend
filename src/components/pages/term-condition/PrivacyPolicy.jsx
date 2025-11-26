"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Privacy Policy – Applute Academy
      </h1>

      <p className="mb-4">
        At <strong>Applute Academy</strong>, accessible from
        <strong> https://academy.applute.com</strong>, we are committed to
        protecting your personal information and your right to privacy. If you
        have any questions or concerns, please contact us at:
      </p>

      <ul className="list-disc ml-6 mb-4">
        <li>Email: <strong>appluteacademy@gmail.com</strong></li>
        <li>Phone: <strong>6370302039</strong></li>
      </ul>

      {/* 1. Information We Collect */}
      <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
      <p className="mb-4">We collect the following types of information:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal Information (Name, Email, Phone Number)</li>
        <li>Account Details (login data, purchase history)</li>
        <li>Payment Information (processed securely via Razorpay/others)</li>
        <li>Device & Usage Data (IP address, browser, access time)</li>
      </ul>

      {/* 2. How We Use Your Information */}
      <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">We use your information for:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Course enrollment & account verification</li>
        <li>Processing payments</li>
        <li>Sending notifications and updates</li>
        <li>Improving website and user experience</li>
      </ul>

      {/* 3. Sharing of Your Information */}
      <h2 className="text-xl font-semibold mt-6 mb-3">3. Sharing of Your Information</h2>
      <p className="mb-4">
        We do <strong>not</strong> sell or trade your personal data. However, we may share data with:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Trusted service providers (payment gateway, analytics)</li>
        <li>Legal authorities when required</li>
      </ul>

      {/* 4. Cookies & Tracking */}
      <h2 className="text-xl font-semibold mt-6 mb-3">4. Cookies & Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies to enhance user experience, analyze traffic, and store user preferences.
      </p>

      {/* 5. Data Protection */}
      <h2 className="text-xl font-semibold mt-6 mb-3">5. Data Protection & Security</h2>
      <p className="mb-4">
        We implement strong security measures to protect your information. All payments are
        processed using secure SSL encryption.
      </p>

      {/* 6. Your Rights */}
      <h2 className="text-xl font-semibold mt-6 mb-3">6. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Right to access your data</li>
        <li>Right to update or delete your information</li>
        <li>Right to withdraw consent</li>
      </ul>

      {/* 7. Third-Party Services */}
      <h2 className="text-xl font-semibold mt-6 mb-3">7. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services such as Google Analytics, Razorpay, and social login providers.
      </p>

      {/* 8. Children's Privacy */}
      <h2 className="text-xl font-semibold mt-6 mb-3">8. Children's Privacy</h2>
      <p className="mb-4">
        Our services are not intended for children under 13. We do not knowingly collect data from minors.
      </p>

      {/* Shipping Policy */}
      <h2 className="text-xl font-semibold mt-6 mb-3">9. Shipping Policy</h2>
      <p className="mb-4">
        All courses, eBooks, and digital products offered by Applute Academy are delivered **digitally**.
        No physical shipping is required or provided.
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Access to purchased courses is provided instantly after successful payment.</li>
        <li>Digital materials such as PDFs or notes are downloadable from the dashboard.</li>
        <li>If access is not visible, users can contact support for immediate help.</li>
      </ul>

      {/* Cancellations & Refunds */}
      <h2 className="text-xl font-semibold mt-6 mb-3">10. Cancellations & Refunds Policy</h2>
      <p className="mb-4">
        Since our services include digital courses and downloadable materials, we follow a **strict no-refund policy**
        except in the following cases:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Duplicate payment</li>
        <li>Payment deducted but access not granted</li>
        <li>Technical issues from our side preventing course access</li>
      </ul>
      <p className="mb-4">
        Refund requests must be submitted within **48 hours of purchase**.  
        No cancellations are allowed once access to course content is granted.
      </p>

      {/* Policy Updates */}
      <h2 className="text-xl font-semibold mt-6 mb-3">11. Policy Updates</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically. The latest version will always be available on this page.
      </p>

      {/* Contact */}
      <h2 className="text-xl font-semibold mt-6 mb-3">12. Contact Us</h2>
      <p className="mb-4">For any questions or concerns regarding this policy, contact us:</p>
      <ul className="list-disc ml-6">
        <li>Email: <strong>appluteacademy@gmail.com</strong></li>
        <li>Phone: <strong>6370302039</strong></li>
        <li>Company: <strong>Applute Technologies Private Limited</strong></li>
      </ul>
    </div>
  );
}
