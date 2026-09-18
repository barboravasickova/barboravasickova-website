import Link from "next/link";
import type { Locale } from "@/data/projects";
import { uiCopy } from "@/data/copy";
import { getRoutes } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

type AboutProps = {
  locale?: Locale;
};

export default function About({ locale = "cz" }: AboutProps) {
  const copy = uiCopy[locale];
  const routes = getRoutes(locale);

  return (
    <Reveal as="section" id="contact" className="contact-section" delay={0.05}>
      <div className="contact-section-inner">
        <div className="contact-section-content" aria-labelledby="about-connect-heading">
          <p className="contact-final-eyebrow">{copy.homeContactEyebrow}</p>
          <h3 id="about-connect-heading" className="contact-final-title">
            vasickovabara@gmail.com
          </h3>
          <p className="contact-final-subtitle">
            {copy.homeContactSubtitle}{" "}
            <a href="https://www.baia.cz/" className="contact-final-inline-link">
              BAIA
            </a>
            .
          </p>
          <div className="contact-final-cta-wrap">
            <Link href={routes.contact} className="hero-cta">
              {copy.homeContactCta}
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
