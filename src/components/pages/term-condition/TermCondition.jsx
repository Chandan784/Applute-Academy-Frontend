"use client";

import React, { useRef, useState } from "react";

export default function TermsAndConditionsApplute() {
  const docRef = useRef(null);
  const [agreed, setAgreed] = useState(false);

  const COMPANY = {
    name: "Applute Academy",
    website: "https://academy.applute.com",
    phone: "6370302039",
    email: "appluteacademy@gmail.com",
    docId: "751002",
  };

  function handlePrint() {
    window.print();
  }

  function handleDownloadTXT() {
    if (!docRef.current) return;
    const text = docRef.current.innerText;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `terms-and-conditions-${COMPANY.docId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <header className="px-6 py-6 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
          <h1 className="text-2xl md:text-3xl font-extrabold">
            Terms & Conditions
          </h1>
          <p className="text-sm opacity-90 mt-1">
            Document ID: <span className="font-medium">{COMPANY.docId}</span> —
            Last updated:{" "}
            <span className="font-medium">
              {new Date().toLocaleDateString()}
            </span>
          </p>
        </header>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar / TOC */}
          <nav className="md:w-1/3 border-r border-gray-100 p-6 bg-gray-50">
            <h3 className="font-semibold mb-3">On this page</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#introduction"
                  className="text-indigo-600 hover:underline"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#acceptance"
                  className="text-indigo-600 hover:underline"
                >
                  Acceptance
                </a>
              </li>
              <li>
                <a
                  href="#eligibility"
                  className="text-indigo-600 hover:underline"
                >
                  Eligibility
                </a>
              </li>
              <li>
                <a href="#account" className="text-indigo-600 hover:underline">
                  Account & Security
                </a>
              </li>
              <li>
                <a href="#content" className="text-indigo-600 hover:underline">
                  Content & IP
                </a>
              </li>
              <li>
                <a href="#payments" className="text-indigo-600 hover:underline">
                  Payments & Refunds
                </a>
              </li>
              <li>
                <a
                  href="#liability"
                  className="text-indigo-600 hover:underline"
                >
                  Limitation of Liability
                </a>
              </li>
              <li>
                <a href="#contact" className="text-indigo-600 hover:underline">
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-3">
              <button
                onClick={handlePrint}
                className="w-full py-2 text-sm font-medium rounded-md bg-white border border-gray-200 hover:bg-gray-100"
              >
                Print
              </button>
              <button
                onClick={handleDownloadTXT}
                className="w-full py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Download (TXT)
              </button>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              <p className="font-medium">Agreement</p>
              <p>
                Check the box below to confirm you have read and agree to these
                terms.
              </p>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <span className="ml-2 text-sm">
                  I agree to these Terms & Conditions
                </span>
              </label>
            </div>

            <div className="mt-6 text-sm text-gray-700">
              <p className="font-medium">Contact</p>
              <p className="mt-1">{COMPANY.name}</p>
              <p className="mt-1">
                Website:{" "}
                <a
                  href={COMPANY.website}
                  className="text-indigo-600 hover:underline"
                >
                  {COMPANY.website}
                </a>
              </p>
              <p className="mt-1">
                Phone:{" "}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-indigo-600 hover:underline"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-indigo-600 hover:underline"
                >
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </nav>

          {/* Main content */}
          <article
            ref={docRef}
            className="md:flex-1 p-6 prose prose-sm md:prose-base lg:prose-lg max-w-none"
          >
            <section id="introduction">
              <h2>1. Introduction</h2>
              <p>
                Welcome to <strong>{COMPANY.name}</strong> ("we", "our", "us").
                These Terms & Conditions ("Terms") govern your use of our
                website, products and services. By accessing or using the
                Service you agree to be bound by these Terms. If you do not
                agree, please do not use the Service.
              </p>
            </section>

            <section id="acceptance">
              <h2>2. Acceptance of Terms</h2>
              <p>
                By using our website, enrolling in any course, or accessing any
                content or service, you agree to be bound by these Terms &
                Conditions, our Privacy Policy, and all applicable laws.
              </p>
            </section>

            <section id="eligibility">
              <h2>3. Eligibility</h2>
              <p>
                You must be at least <strong>13 years old</strong> to use our
                platform. By using our services, you confirm that all
                information provided by you is accurate and true.
              </p>
            </section>

            <section id="account">
              <h2>4. Account Registration & Security</h2>
              <p>
                To access certain features or paid courses, you must create an
                account. You agree to provide accurate information and to
                safeguard your credentials. We reserve the right to suspend or
                terminate accounts for suspicious activity.
              </p>
            </section>

            <section id="content">
              <h2>5. Courses, Content & License</h2>
              <p>
                All learning materials, videos, PDF notes, quizzes, mock tests,
                and downloadable content provided by {COMPANY.name} are our
                intellectual property. You are granted a limited,
                non-transferable, non-exclusive license to access and view
                purchased content for personal educational use only.
              </p>
              <p>
                You may not resell, share, reproduce, or distribute course
                content without our written permission.
              </p>
            </section>

            <section id="payments">
              <h2>6. Payments & Refund Policy</h2>
              <p>
                All payments made on {COMPANY.website} are secure. Digital
                courses are generally non-refundable after purchase except in
                limited cases (e.g., duplicate payment or technical issues
                preventing access). Refunds are processed at our discretion.
              </p>
            </section>

            <section id="liability">
              <h2>7. Limitation of Liability</h2>
              <p>
                {COMPANY.name} is not responsible for indirect, incidental,
                special, consequential, or punitive damages arising from your
                use of the Service. Our maximum liability will not exceed the
                amount paid for the course.
              </p>
            </section>

            <section id="privacy">
              <h2>8. Privacy</h2>
              <p>
                Our Privacy Policy explains how we collect and use personal
                information. By using the Service you agree to the terms of the
                Privacy Policy.
              </p>
            </section>

            <section id="changes">
              <h2>9. Changes to Terms</h2>
              <p>
                We may update these Terms periodically. We will post the updated
                Terms on our website. Continued use after changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section id="contact">
              <h2>10. Contact</h2>
              <p>For support, questions, or concerns contact us at:</p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-indigo-600 hover:underline"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-indigo-600 hover:underline"
                >
                  {COMPANY.email}
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={COMPANY.website}
                  className="text-indigo-600 hover:underline"
                >
                  {COMPANY.website}
                </a>
              </p>
            </section>

            <footer className="mt-6 py-6 border-t border-gray-100 text-sm text-gray-600">
              <p>
                By continuing to use the Service you acknowledge that you have
                read and agree to these Terms & Conditions (Document ID:{" "}
                {COMPANY.docId}).
              </p>
            </footer>
          </article>
        </div>
      </div>

      {/* Bottom CTA when agreed */}
      <div className="max-w-5xl mx-auto mt-6 px-4">
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm">
            Agreement status:{" "}
            <span className="font-semibold">
              {agreed ? "Agreed" : "Not agreed"}
            </span>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() =>
                navigator.clipboard &&
                navigator.clipboard.writeText(window.location.href)
              }
              className="px-4 py-2 bg-gray-100 rounded-md text-sm"
            >
              Copy Link
            </button>
            <button
              onClick={() => {
                if (!agreed) {
                  alert("Please agree to the terms first.");
                  return;
                }
                alert("Thank you — you agreed to the Terms.");
              }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
