import About from "@/components/About";
import AboutMeSection from "@/components/AboutMeSection";
import Hero from "@/components/Hero";
import LanguageSwitch from "@/components/LanguageSwitch";
import Projects from "@/components/Projects";
import { uiCopy } from "@/data/copy";
import { contentByLocale } from "@/data/projects";
import type { Locale } from "@/data/projects";
import { getRoutes } from "@/lib/i18n";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type HomePageContentProps = {
  locale: Locale;
};

export default function HomePageContent({ locale }: HomePageContentProps) {
  const content = contentByLocale[locale];
  const copy = uiCopy[locale];
  const routes = getRoutes(locale);
  const projectsSectionId = locale === "cz" ? "projekty" : "projects";

  return (
    <main className="page page-home">
      <LanguageSwitch locale={locale} page="home" showBrandTrail />
      <Hero
        headlineLines={content.hero.headlineLines}
        supporting={content.hero.supporting}
        ctaLabel={copy.heroContactCta}
        ctaHref={routes.contact}
      />
      <Projects
        id={projectsSectionId}
        projects={content.projects}
        locale={locale}
        detailLabel={copy.projectDetail}
        detailBasePath={locale === "en" ? "/en" : ""}
      />
      <Reveal>
        <div className="projects-more-cta-wrap">
          <Link href={routes.projects} className="hero-cta">
            {copy.allProjects}
          </Link>
        </div>
      </Reveal>
      <AboutMeSection locale={locale} />
      <About locale={locale} />
    </main>
  );
}
