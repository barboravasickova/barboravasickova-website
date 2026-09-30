import Image from "next/image";
import LanguageSwitch from "@/components/LanguageSwitch";
import Reveal from "@/components/Reveal";
import { staggerStep } from "@/lib/motion";
import { uiCopy } from "@/data/copy";
import type { Locale } from "@/data/projects";
import portrait from "@/images/barbora-vasickova-photo.png";

type AboutPageContentProps = {
  locale: Locale;
};

export default function AboutPageContent({ locale }: AboutPageContentProps) {
  const copy = uiCopy[locale];

  return (
    <main className="page page-footer-flush">
      <LanguageSwitch locale={locale} page="about" showBrandTrail brandTrailCurrentLabel={copy.aboutTitle} />

      <section
        className="content-section product-design-subpage-content about-page-section"
        aria-labelledby="about-me-heading"
      >
        <div className="about-page-text">
          <Reveal>
            <h1 id="about-me-heading" className="content-section-title">
              {copy.aboutGreeting}
            </h1>

            <p className="project-detail-text">{copy.aboutIntro}</p>
          </Reveal>

          {copy.aboutSections.map((section, index) => (
            <Reveal
              key={section.title}
              className="about-page-block"
              delay={(index + 1) * staggerStep}
            >
              <h2 className="about-page-heading">{section.title}</h2>
              <p className="project-detail-text">{section.text}</p>
            </Reveal>
          ))}

          <Reveal
            className="about-page-block"
            delay={(copy.aboutSections.length + 1) * staggerStep}
          >
            <h2 className="about-page-heading">{copy.aboutSkillsTitle}</h2>
            <ul className="about-skills-list">
              {copy.aboutSkills.map((skill) => (
                <li key={skill.label} className="project-detail-text">
                  <strong>{skill.label}:</strong> {skill.items}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            className="about-page-block"
            delay={(copy.aboutSections.length + 2) * staggerStep}
          >
            <h2 className="about-page-heading">{copy.aboutFreeTimeTitle}</h2>
            <p className="project-detail-text">{copy.aboutFreeTimeText}</p>

            <p className="about-collab">
              {copy.aboutCollabPrompt}{" "}
              <a
                href="mailto:vasickovabara@gmail.com"
                className="about-collab-link"
              >
                {copy.aboutCollabLink}
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal className="about-page-photo" delay={staggerStep}>
          <Image
            src={portrait}
            alt="Barbora Vašíčková"
            sizes="(max-width: 959px) 0px, 200px"
            quality={95}
          />
        </Reveal>
      </section>
    </main>
  );
}
