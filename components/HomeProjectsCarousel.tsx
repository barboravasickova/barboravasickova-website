"use client";

import { useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import lagomPreview from "@/images/lagom_iphone.jpg";
import psochazkyPreview from "@/images/psochazky_nahled.png";
import salonUPotokaPreview from "@/images/salon-u-potoka-nahled.png";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type HomeProjectsCarouselProps = {
  projects: Project[];
  detailBasePath: string;
  detailLabel: string;
};

const previewImageById: Partial<Record<Project["id"], StaticImageData | string>> = {
  "lagom-app": lagomPreview,
  psochazky: psochazkyPreview,
  "salon-u-potoka": salonUPotokaPreview
};

/** Sudý počet kopií — CSS posune track o −50 % pro bezspojovou smyčku. */
const MARQUEE_LOOP_COPIES = 6;

export default function HomeProjectsCarousel({
  projects,
  detailBasePath,
  detailLabel
}: HomeProjectsCarouselProps) {
  const reduceMotion = useReducedMotion();
  const loopProjects = reduceMotion
    ? projects
    : Array.from({ length: MARQUEE_LOOP_COPIES }, () => projects).flat();

  return (
    <div className="home-projects-carousel" aria-label={detailLabel}>
      <div className="home-projects-carousel-viewport">
        <div
          className={`home-projects-carousel-track${reduceMotion ? " home-projects-carousel-track-static" : ""}`}
        >
          {loopProjects.map((project, index) => {
            const previewImage = previewImageById[project.id];
            const previewStyleClass = `project-card-media-placeholder project-preview-${project.id}`;
            const href = `${detailBasePath}/projects/${project.id}`;

            return (
              <Link
                key={`${project.id}-${index}`}
                href={href}
                className="home-project-slide"
                aria-label={`${detailLabel}: ${project.name}`}
              >
                <div className="home-project-slide-media">
                  {previewImage ? (
                    <Image
                      src={previewImage}
                      alt={project.previewAlt}
                      className="home-project-slide-image"
                      fill
                      sizes="320px"
                    />
                  ) : (
                    <div className={previewStyleClass} aria-label={project.previewAlt} role="img" />
                  )}
                </div>
                <div className="home-project-slide-meta">
                  <h3 className="home-project-slide-title">{project.name}</h3>
                  <div className="home-project-slide-type-row">
                    <p className="home-project-slide-type">{project.type}</p>
                    <span className="home-project-slide-arrow" aria-hidden>
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
