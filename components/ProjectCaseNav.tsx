"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/data/projects";
import { uiCopy } from "@/data/copy";

const NAV_ITEM_IDS = ["o-projektu", "research", "idea", "design", "reflexe"] as const;

type ProjectCaseNavProps = {
  locale?: Locale;
};

export default function ProjectCaseNav({ locale = "cz" }: ProjectCaseNavProps) {
  const copy = uiCopy[locale];
  const navItems = [
    { id: "o-projektu", label: copy.caseAbout },
    { id: "research", label: copy.caseResearch },
    { id: "idea", label: copy.caseIdea },
    { id: "design", label: copy.caseDesign },
    { id: "reflexe", label: copy.caseReflection }
  ] as const;
  const [activeId, setActiveId] = useState<(typeof NAV_ITEM_IDS)[number]>("o-projektu");

  useEffect(() => {
    const sections = NAV_ITEM_IDS.map((itemId) => document.getElementById(itemId)).filter(
      (section): section is HTMLElement => Boolean(section)
    );

    if (sections.length === 0) {
      return;
    }

    const getActivationY = () => {
      const topNavigation = document.getElementById("top-navigation");
      const navHeight = topNavigation?.getBoundingClientRect().height ?? 0;
      const viewportLead = Math.min(Math.max(window.innerHeight * 0.22, 140), 260);
      return window.scrollY + navHeight + viewportLead;
    };

    let ticking = false;

    const updateActiveSection = () => {
      const activationY = getActivationY();
      const sectionTops = sections.map((section) => ({
        id: section.id as (typeof NAV_ITEM_IDS)[number],
        top: section.getBoundingClientRect().top + window.scrollY
      }));

      const firstSection = sectionTops[0];
      const lastSection = sectionTops[sectionTops.length - 1];

      if (!firstSection || !lastSection) {
        return;
      }

      if (activationY <= firstSection.top) {
        setActiveId(firstSection.id);
        return;
      }

      if (activationY >= lastSection.top) {
        setActiveId(lastSection.id);
        return;
      }

      for (let index = 0; index < sectionTops.length - 1; index += 1) {
        const current = sectionTops[index];
        const next = sectionTops[index + 1];

        if (activationY >= current.top && activationY < next.top) {
          setActiveId(current.id);
          return;
        }
      }
    };

    const onScrollOrResize = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <aside className="project-case-nav" aria-label={copy.caseNavAria}>
      {navItems.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={isActive ? "is-active" : undefined}
            aria-current={isActive ? "true" : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </aside>
  );
}
