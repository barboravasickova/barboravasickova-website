"use client";

import { useState, type FormEvent } from "react";

type ContactFormProps = {
  email: string;
  subjectPrefix: string;
  nameLabel: string;
  surnameLabel: string;
  emailLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  statusMessage: string;
};

export default function ContactForm({
  email,
  subjectPrefix,
  nameLabel,
  surnameLabel,
  emailLabel,
  messageLabel,
  messagePlaceholder,
  submitLabel,
  statusMessage
}: ContactFormProps) {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const surname = String(formData.get("surname") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const fullName = `${firstName} ${surname}`.trim();
    const subject = `${subjectPrefix}: ${fullName}`;
    const body = `${nameLabel}: ${firstName}\n${surnameLabel}: ${surname}\n${emailLabel}: ${senderEmail}\n\n${messageLabel}\n${message}`;

    setStatus(statusMessage);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-page-form" onSubmit={handleSubmit}>
      <div className="contact-page-name-fields">
        <label className="contact-page-field">
          <span>{nameLabel}</span>
          <input name="firstName" type="text" autoComplete="given-name" maxLength={120} required />
        </label>
        <label className="contact-page-field">
          <span>{surnameLabel}</span>
          <input name="surname" type="text" autoComplete="family-name" maxLength={120} required />
        </label>
      </div>
      <label className="contact-page-field">
        <span>{emailLabel}</span>
        <input name="email" type="email" autoComplete="email" maxLength={254} required />
      </label>
      <label className="contact-page-field">
        <span>{messageLabel}</span>
        <textarea name="message" rows={6} maxLength={5000} placeholder={messagePlaceholder} required />
      </label>
      <button type="submit" className="hero-cta">
        {submitLabel}
      </button>
      <p className="contact-page-form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}