import Link from "next/link";
import type { Locale } from "@/data/projects";
import { uiCopy } from "@/data/copy";
import { getPageHref, type AppPage } from "@/lib/i18n";

type LanguageSwitchProps = {
  locale: Locale;
  page: AppPage;
  projectId?: string;
  showBrandTrail?: boolean;
  brandTrailCurrentLabel?: string;
  includeProjectsInTrail?: boolean;
};

export default function LanguageSwitch({
  locale,
  page,
  projectId,
  showBrandTrail = false,
  brandTrailCurrentLabel,
  includeProjectsInTrail = false
}: LanguageSwitchProps) {
  const copy = uiCopy[locale];
  const homeHref = getPageHref(locale, "home");
  const projectsHref = getPageHref(locale, "projects");
  const aboutHref = getPageHref(locale, "about");
  const contactHref = getPageHref(locale, "contact");
  const czHref = getPageHref("cz", page, projectId);
  const enHref = getPageHref("en", page, projectId);
  const sectionLinks = [
    { label: copy.navProjects, href: projectsHref },
    { label: copy.navAbout, href: aboutHref },
    { label: copy.navContact, href: contactHref }
  ];

  return (
    <nav id="top-navigation" className="top-nav" aria-label={copy.navAria}>
      {showBrandTrail ? (
        <div className="top-nav-brand-trail" aria-label={locale === "cz" ? "Navigační cesta" : "Breadcrumb"}>
          <Link href={homeHref} className="top-nav-brand-badge" aria-label={copy.homeAria}>
            BV
          </Link>
          <Link
            href={homeHref}
            className={brandTrailCurrentLabel ? "top-nav-brand-link" : "top-nav-brand-link-current"}
          >
            Product design
          </Link>
          {includeProjectsInTrail ? (
            <>
              <span aria-hidden="true">/</span>
              <Link href={projectsHref} className="top-nav-brand-link">
                {copy.navProjects}
              </Link>
            </>
          ) : null}
          {brandTrailCurrentLabel ? (
            <>
              <span aria-hidden="true">/</span>
              <span className="top-nav-brand-link-current">{brandTrailCurrentLabel}</span>
            </>
          ) : null}
        </div>
      ) : (
        <Link href={homeHref} className="top-nav-back-link" aria-label={copy.homeAria}>
          <span aria-hidden="true">←</span>
        </Link>
      )}
      <div className="top-nav-end">
        <div className="top-nav-links">
          {sectionLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="top-nav-lang" role="group" aria-label={copy.langSwitchAria}>
          {locale === "cz" ? (
            <span className="top-nav-lang-current" lang="cs" aria-current="true">
              CZ
            </span>
          ) : (
            <Link href={czHref} hrefLang="cs" lang="cs">
              CZ
            </Link>
          )}
          <span aria-hidden="true">/</span>
          {locale === "en" ? (
            <span className="top-nav-lang-current" lang="en" aria-current="true">
              EN
            </span>
          ) : (
            <Link href={enHref} hrefLang="en" lang="en">
              EN
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
