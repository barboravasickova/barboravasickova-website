import Link from "next/link";
import type { Locale } from "@/data/projects";
import { uiCopy } from "@/data/copy";
import { getRoutes } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import { staggerStep } from "@/lib/motion";

type AboutMeSectionProps = {
  locale?: Locale;
};

export default function AboutMeSection({ locale = "cz" }: AboutMeSectionProps) {
  const copy = uiCopy[locale];
  const routes = getRoutes(locale);

  return (
    <section id="about" className="about-me-section" aria-labelledby="about-me-heading">
      <Reveal>
        <h2 id="about-me-heading" className="about-me-title">
          {copy.aboutMeTitle}
        </h2>
        <p className="about-me-intro">{copy.aboutMeIntro}</p>
        <p className="about-me-subtitle">{copy.aboutMeSubtitle}</p>
      </Reveal>

      <div className="about-me-grid">
        {copy.steps.map((step, index) => (
          <Reveal key={step.number} as="article" className="about-me-item" delay={index * staggerStep}>
            <div className="about-me-number" aria-hidden>
              {step.number}
            </div>
            <h3 className="about-me-item-title">{step.title}</h3>
            <p className="about-me-item-text">{step.description}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.12}>
        <div className="about-me-cta-wrap">
          <Link href={routes.about} className="hero-cta">
            {copy.moreAbout}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
