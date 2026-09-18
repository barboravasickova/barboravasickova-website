import Image from "next/image";
import Link from "next/link";
import LanguageSwitch from "@/components/LanguageSwitch";
import { uiCopy } from "@/data/copy";
import { contentByLocale } from "@/data/projects";
import type { Locale } from "@/data/projects";
import { getRoutes } from "@/lib/i18n";
import lagomPreview from "@/images/lagom_iphone.jpg";
import psochazkyPreview from "@/images/psochazky_nahled.png";
import salonUPotokaPreview from "@/images/salon-u-potoka-nahled.png";
import Reveal from "@/components/Reveal";
import { staggerStep } from "@/lib/motion";

const previewImageById = {
  "lagom-app": lagomPreview,
  psochazky: psochazkyPreview,
  "salon-u-potoka": salonUPotokaPreview
} as const;

type ProjectsOverviewPageProps = {
  locale: Locale;
};

export default function ProjectsOverviewPage({ locale }: ProjectsOverviewPageProps) {
  const content = contentByLocale[locale];
  const copy = uiCopy[locale];
  const routes = getRoutes(locale);
  const projectsOrder = ["lagom-app", "psochazky", "salon-u-potoka"];
  const sortedProjects = [...content.projects].sort((a, b) => {
    const aIndex = projectsOrder.indexOf(a.id);
    const bIndex = projectsOrder.indexOf(b.id);
    const safeA = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
    const safeB = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;
    return safeA - safeB;
  });

  return (
    <main className="page">
      <LanguageSwitch
        locale={locale}
        page="projects"
        showBrandTrail
        brandTrailCurrentLabel={copy.projectsTitle}
      />

      <section className="projects-overview product-design-subpage-content" aria-labelledby="projects-overview-heading">
        <Reveal>
          <h1 id="projects-overview-heading" className="projects-overview-title">
            {copy.projectsTitle}
          </h1>
        </Reveal>

        <div className="projects-overview-grid">
          {sortedProjects.map((project, index) => {
            const previewImage = previewImageById[project.id as keyof typeof previewImageById];

            return (
              <Reveal
                key={project.id}
                as="article"
                className="projects-overview-card"
                delay={index * staggerStep}
              >
                {previewImage ? (
                  <Link href={routes.project(project.id)} className="projects-overview-media-link">
                    <Image
                      src={previewImage}
                      alt={project.previewAlt}
                      className="projects-overview-media-image"
                      width={1600}
                      height={1000}
                      sizes="(min-width: 1100px) 30vw, (min-width: 760px) 46vw, 100vw"
                    />
                  </Link>
                ) : (
                  <div className="projects-overview-media-fallback" aria-label={project.previewAlt} role="img" />
                )}

                <div className="projects-overview-body">
                  <h2 className="projects-overview-card-title">
                    <Link href={routes.project(project.id)}>{project.name}</Link>
                  </h2>
                  <p className="project-type">{project.type}</p>
                  <p className="projects-overview-summary">{project.summary}</p>
                  <Link href={routes.project(project.id)} className="project-card-cta">
                    <span>{copy.projectDetail}</span>
                    <span className="project-card-cta-arrow" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
