import Image from "next/image";
import LanguageSwitch from "@/components/LanguageSwitch";
import ContactForm from "@/components/ContactForm";
import { uiCopy } from "@/data/copy";
import type { Locale } from "@/data/projects";
import linkedinIcon from "@/images/linkedin-icon.svg";
import githubIcon from "@/images/github-icon.svg";
import mailIcon from "@/images/mail-icon.svg";
import locationIcon from "@/images/location-icon.svg";

type ContactPageContentProps = {
  locale: Locale;
};

export default function ContactPageContent({ locale }: ContactPageContentProps) {
  const copy = uiCopy[locale];

  return (
    <main className="page page-footer-flush">
      <LanguageSwitch locale={locale} page="contact" showBrandTrail brandTrailCurrentLabel={copy.navContact} />

      <section className="contact-page-section product-design-subpage-content" aria-labelledby="contact-page-heading">
        <div className="contact-page-grid">
          <div className="contact-page-main">
            <h1 id="contact-page-heading" className="contact-page-title">
              {copy.contactTitle}
            </h1>
            <p className="contact-page-subtitle">{copy.contactSubtitle}</p>
            <ContactForm
              email="vasickovabara@gmail.com"
              subjectPrefix={copy.contactEmailSubject}
              nameLabel={copy.contactFormNameLabel}
              surnameLabel={copy.contactFormSurnameLabel}
              emailLabel={copy.contactFormEmailLabel}
              messageLabel={copy.contactFormMessageLabel}
              messagePlaceholder={copy.contactFormMessagePlaceholder}
              submitLabel={copy.contactFormSubmit}
              statusMessage={copy.contactFormStatus}
            />
          </div>

          <aside className="contact-page-details" aria-labelledby="contact-details-heading">
            <h2 id="contact-details-heading" className="contact-page-details-title">
              {copy.contactDetailsTitle}
            </h2>
            <ul className="contact-page-details-list">
              <li>
                <Image src={mailIcon} alt="" aria-hidden="true" className="contact-page-icon" />
                <span className="contact-page-detail-copy">
                  <span className="contact-page-detail-label">{copy.contactEmailLabel}</span>
                  <a href="mailto:vasickovabara@gmail.com">vasickovabara@gmail.com</a>
                </span>
              </li>
              <li>
                <Image src={linkedinIcon} alt="" aria-hidden="true" className="contact-page-icon" />
                <a href="https://www.linkedin.com/in/barbora-vasickova/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <Image src={githubIcon} alt="" aria-hidden="true" className="contact-page-icon" />
                <a href="https://github.com/barboravasickova" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <Image src={locationIcon} alt="" aria-hidden="true" className="contact-page-icon" />
                <span className="contact-page-detail-copy">
                  <span className="contact-page-detail-label">{copy.contactLocationLabel}</span>
                  <span className="contact-page-detail-value">{copy.contactLocation}</span>
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
