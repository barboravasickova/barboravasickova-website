import LanguageSwitch from "@/components/LanguageSwitch";
import Reveal from "@/components/Reveal";
import { staggerStep } from "@/lib/motion";
import { uiCopy } from "@/data/copy";
import type { Locale } from "@/data/projects";

type AboutPageContentProps = {
  locale: Locale;
};

export default function AboutPageContent({ locale }: AboutPageContentProps) {
  const copy = uiCopy[locale];

  return (
    <main className="page page-footer-flush">
      <LanguageSwitch locale={locale} page="about" showBrandTrail brandTrailCurrentLabel={copy.aboutTitle} />

      <section className="content-section product-design-subpage-content" aria-labelledby="about-me-heading">
        <Reveal>
          <h1 id="about-me-heading" className="content-section-title">
            {copy.aboutTitle}
          </h1>

          <h2 className="about-clean-subheading">{copy.aboutSubheading}</h2>
        </Reveal>

        {copy.aboutItems.map((item, index) => (
          <Reveal key={item.title} className="project-section" delay={index * staggerStep}>
            <h3>{item.title}</h3>
            <p className="project-detail-text">{item.text}</p>
          </Reveal>
        ))}

        <Reveal delay={0.12}>
          <p className="project-detail-text">{copy.aboutClosing}</p>

          <p className="project-detail-text">
            <a href="https://www.baia.cz/" className="about-clean-link">
              {copy.aboutBaiaLink}
            </a>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
