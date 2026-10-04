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
  submittingMessage: string;
  statusMessage: string;
  errorMessage: string;
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
  submittingMessage,
  statusMessage,
  errorMessage
}: ContactFormProps) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const surname = String(formData.get("surname") ?? "").trim();
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const fullName = `${firstName} ${surname}`.trim();
    formData.append("_subject", `${subjectPrefix}: ${fullName}`);
    formData.append("_replyto", senderEmail);

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      const result: unknown = await response.json();
      const succeeded =
        typeof result === "object" &&
        result !== null &&
        "success" in result &&
        (result.success === true || result.success === "true");

      if (!response.ok || !succeeded) {
        throw new Error("FormSubmit rejected the submission.");
      }

      form.reset();
      setStatus(statusMessage);
    } catch (error) {
      console.error("Contact form submission failed.", error);
      setStatus(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
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
      <button type="submit" className="hero-cta" disabled={isSubmitting} aria-busy={isSubmitting}>
        {isSubmitting ? submittingMessage : submitLabel}
      </button>
      <p className="contact-page-form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}