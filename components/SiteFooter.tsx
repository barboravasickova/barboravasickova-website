"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Reveal from "@/components/Reveal";
import { uiCopy } from "@/data/copy";
import { getLocaleFromPathname, getRoutes } from "@/lib/i18n";

export default function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = uiCopy[locale];
  const routes = getRoutes(locale);
  const currentYear = new Date().getFullYear();

  return (
    <Reveal as="footer" className="site-footer site-footer-product-design" aria-label={copy.footerAria}>
      <div className="site-footer-inner">
        <span>Barbora Vašíčková © {currentYear}</span>
        <nav className="site-footer-nav" aria-label={copy.footerNavAria}>
          <Link href={routes.projects}>{copy.navProjects}</Link>
          <Link href={routes.about}>{copy.navAbout}</Link>
          <Link href={routes.contact}>{copy.navContact}</Link>
        </nav>
      </div>
    </Reveal>
  );
}
