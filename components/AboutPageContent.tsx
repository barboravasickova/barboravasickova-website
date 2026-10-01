import Image from "next/image";
import LanguageSwitch from "@/components/LanguageSwitch";
import Reveal from "@/components/Reveal";
import { staggerStep } from "@/lib/motion";
import { uiCopy } from "@/data/copy";
import type { Locale } from "@/data/projects";
import portrait from "@/images/barbora-vasickova-photo.png";
import linkedinIcon from "@/images/linkedin-icon.svg";
import githubIcon from "@/images/github-icon.svg";
import mailIcon from "@/images/mail-icon.svg";
import locationIcon from "@/images/location-icon.svg";

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

            {copy.aboutIntro.map((paragraph, index) => (
              <p key={`about-intro-${index}`} className="project-detail-text">
                {paragraph}
              </p>
            ))}
          </Reveal>

          {copy.aboutSections.map((section, index) => (
            <Reveal
              key={section.title}
              className="about-page-block"
              delay={(index + 1) * staggerStep}
            >
              <h2 className="about-page-heading">{section.title}</h2>
              {section.text.map((paragraph, paragraphIndex) => (
                <p key={`${section.title}-${paragraphIndex}`} className="project-detail-text">
                  {paragraph}
                </p>
              ))}
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
                    <strong>{skill.label}</strong>
                    <span>{skill.items}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            className="about-page-block"
            delay={(copy.aboutSections.length + 2) * staggerStep}
          >
            <h2 className="about-page-heading">{copy.aboutFreeTimeTitle}</h2>
            {copy.aboutFreeTimeText.map((paragraph, index) => (
              <p key={`about-free-time-${index}`} className="project-detail-text">
                {paragraph}
              </p>
            ))}

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
            className="about-page-portrait"
            sizes="240px"
            quality={95}
          />
          <address className="about-contact-card">
            <a href="https://www.linkedin.com/in/barbora-vasickova/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedinIcon} alt="" aria-hidden="true" className="about-contact-icon" />
              <span className="about-contact-link-label">LinkedIn</span>
            </a>
            <a href="https://github.com/barboravasickova" target="_blank" rel="noopener noreferrer">
              <Image src={githubIcon} alt="" aria-hidden="true" className="about-contact-icon" />
              <span className="about-contact-link-label">GitHub</span>
            </a>
            <a href="mailto:vasickovabara@gmail.com">
              <Image src={mailIcon} alt="" aria-hidden="true" className="about-contact-icon" />
              <span className="about-contact-link-label">vasickovabara@gmail.com</span>
            </a>
            <span className="about-contact-location">
              <Image src={locationIcon} alt="" aria-hidden="true" className="about-contact-icon" />
              <span>Brno, CZ</span>
            </span>
          </address>
        </Reveal>
      </section>
    </main>
  );
}
