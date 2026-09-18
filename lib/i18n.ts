import type { Locale } from "@/data/projects";

export type AppPage = "home" | "projects" | "about" | "contact" | "process" | "project";

export type AppRoutes = {
  home: string;
  projects: string;
  about: string;
  contact: string;
  process: string;
  project: (id: string) => string;
};

export function getRoutes(locale: Locale): AppRoutes {
  if (locale === "en") {
    return {
      home: "/en",
      projects: "/en/projects",
      about: "/en/about",
      contact: "/en/contact",
      process: "/en/process",
      project: (id: string) => `/en/projects/${id}`
    };
  }

  return {
    home: "/",
    projects: "/projekty",
    about: "/o-mne",
    contact: "/kontakt",
    process: "/proces",
    project: (id: string) => `/projects/${id}`
  };
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "cz";
}

export function getPageHref(locale: Locale, page: AppPage, projectId?: string) {
  const routes = getRoutes(locale);

  if (page === "project") {
    return projectId ? routes.project(projectId) : routes.projects;
  }

  return routes[page];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "cz" ? "en" : "cz";
}
