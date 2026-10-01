"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import type { Locale } from "@/data/projects";

type MobileNavMenuProps = {
  locale: Locale;
  sectionLinks: { label: string; href: string }[];
  navAria: string;
  homeHref: string;
  homeAria: string;
  langSwitchAria: string;
  czHref: string;
  enHref: string;
};

export default function MobileNavMenu({
  locale,
  sectionLinks,
  navAria,
  homeHref,
  homeAria,
  langSwitchAria,
  czHref,
  enHref
}: MobileNavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const overlay = portalTarget
    ? createPortal(
        <div
          id="top-navigation-menu"
          className={`mobile-nav-overlay${isOpen ? " is-open" : ""}`}
          role="dialog"
          aria-modal={isOpen}
          aria-hidden={!isOpen}
          inert={!isOpen}
          aria-label={navAria}
        >
          <div className="mobile-nav-overlay-header">
            <Link href={homeHref} className="top-nav-brand-badge" aria-label={homeAria} onClick={closeMenu}>
              BV
            </Link>
            <button
              type="button"
              className="mobile-nav-overlay-close"
              aria-label={locale === "cz" ? "Zavřít menu" : "Close menu"}
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="mobile-nav-overlay-links" aria-label={navAria}>
            {sectionLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-nav-overlay-lang" role="group" aria-label={langSwitchAria}>
            {locale === "cz" ? (
              <span className="top-nav-lang-current" lang="cs" aria-current="true">
                CZ
              </span>
            ) : (
              <Link href={czHref} hrefLang="cs" lang="cs" onClick={closeMenu}>
                CZ
              </Link>
            )}
            <span aria-hidden="true">/</span>
            {locale === "en" ? (
              <span className="top-nav-lang-current" lang="en" aria-current="true">
                EN
              </span>
            ) : (
              <Link href={enHref} hrefLang="en" lang="en" onClick={closeMenu}>
                EN
              </Link>
            )}
          </div>
        </div>,
        portalTarget
      )
    : null;

  return (
    <div className="top-nav-end">
      <button
        type="button"
        className="top-nav-menu-toggle"
        aria-label={isOpen ? (locale === "cz" ? "Zavřít menu" : "Close menu") : locale === "cz" ? "Otevřít menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="top-navigation-menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path
            d={isOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="top-nav-menu top-nav-menu-desktop">
        <div className="top-nav-links">
          {sectionLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="top-nav-lang" role="group" aria-label={langSwitchAria}>
          {locale === "cz" ? (
            <span className="top-nav-lang-current" lang="cs" aria-current="true">
              CZ
            </span>
          ) : (
            <Link href={czHref} hrefLang="cs" lang="cs" onClick={closeMenu}>
              CZ
            </Link>
          )}
          <span aria-hidden="true">/</span>
          {locale === "en" ? (
            <span className="top-nav-lang-current" lang="en" aria-current="true">
              EN
            </span>
          ) : (
            <Link href={enHref} hrefLang="en" lang="en" onClick={closeMenu}>
              EN
            </Link>
          )}
        </div>
      </div>
      {overlay}
    </div>
  );
}