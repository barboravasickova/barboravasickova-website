import LanguageSwitch from "@/components/LanguageSwitch";
import Reveal from "@/components/Reveal";
import { uiCopy } from "@/data/copy";
import type { Locale } from "@/data/projects";

type ContactPageContentProps = {
  locale: Locale;
};

export default function ContactPageContent({ locale }: ContactPageContentProps) {
  const copy = uiCopy[locale];

  return (
    <main className="page page-footer-flush">
      <LanguageSwitch locale={locale} page="contact" showBrandTrail brandTrailCurrentLabel={copy.navContact} />

      <section
        id="contact"
        className="contact-section-content product-design-subpage-content"
        aria-labelledby="about-connect-heading"
      >
        <Reveal>
          <p className="contact-final-eyebrow">{copy.contactEyebrow}</p>
          <h1 id="about-connect-heading" className="contact-final-title">
            vasickovabara@gmail.com
          </h1>
          <p className="contact-final-subtitle">
            {copy.contactSubtitle}{" "}
            <a href="https://www.baia.cz/" className="contact-final-inline-link">
              BAIA
            </a>
            .
          </p>
          <div className="contact-final-cta-wrap">
            <a href="mailto:vasickovabara@gmail.com" className="hero-cta">
              {copy.contactEmailCta}
            </a>
          </div>
          <div className="contact-final-links">
            <a href="mailto:vasickovabara@gmail.com">vasickovabara@gmail.com</a>
            <a href="https://www.linkedin.com/in/barbora-vasickova/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
