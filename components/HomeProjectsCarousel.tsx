"use client";

import { useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import lagomPreview from "@/images/lagom_iphone.jpg";
import psochazkyPreview from "@/images/psochazky_nahled.png";
import salonUPotokaPreview from "@/images/salon-u-potoka-nahled.png";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, type MouseEvent, type PointerEvent } from "react";

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

/** Počet kopií projektů v tracku — posun se cyklí po délce jedné kopie. */
const MARQUEE_LOOP_COPIES = 6;
/** Doba (s), za kterou automatický posun ujede polovinu tracku. */
const AUTO_SCROLL_DURATION_DESKTOP = 160;
const AUTO_SCROLL_DURATION_MOBILE = 130;
const DRAG_THRESHOLD_PX = 6;
/** Útlum setrvačnosti po puštění (podíl rychlosti, který zůstane za 1 s). */
const FLING_FRICTION_PER_SECOND = 0.04;

type DragState = {
  pointerId: number;
  startX: number;
  startOffset: number;
  lastX: number;
  lastTime: number;
  isDragging: boolean;
};

export default function HomeProjectsCarousel({
  projects,
  detailBasePath,
  detailLabel
}: HomeProjectsCarouselProps) {
  const reduceMotion = useReducedMotion();
  const loopProjects = reduceMotion
    ? projects
    : Array.from({ length: MARQUEE_LOOP_COPIES }, () => projects).flat();

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const isPausedRef = useRef(false);
  const dragRef = useRef<DragState | null>(null);
  const suppressClickRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (reduceMotion || !track) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 719px)");
    let frameId = 0;
    let previousTime: number | null = null;

    const getLoopWidth = () => {
      const slides = track.children;
      const first = slides[0] as HTMLElement | undefined;
      const firstOfNextCopy = slides[projects.length] as HTMLElement | undefined;
      return first && firstOfNextCopy ? firstOfNextCopy.offsetLeft - first.offsetLeft : 0;
    };

    const tick = (time: number) => {
      const deltaSeconds = previousTime === null ? 0 : Math.min((time - previousTime) / 1000, 0.1);
      previousTime = time;
      const loopWidth = getLoopWidth();

      if (loopWidth > 0 && !dragRef.current?.isDragging) {
        const duration = mobileQuery.matches ? AUTO_SCROLL_DURATION_MOBILE : AUTO_SCROLL_DURATION_DESKTOP;
        const autoVelocity = isPausedRef.current ? 0 : -track.scrollWidth / 2 / duration;
        velocityRef.current =
          autoVelocity + (velocityRef.current - autoVelocity) * Math.pow(FLING_FRICTION_PER_SECOND, deltaSeconds);
        offsetRef.current += velocityRef.current * deltaSeconds;
      }

      if (loopWidth > 0) {
        offsetRef.current = ((offsetRef.current % loopWidth) - loopWidth) % loopWidth;
      }
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [reduceMotion, projects.length]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || (event.pointerType === "mouse" && event.button !== 0)) {
      return;
    }
    suppressClickRef.current = false;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startOffset: offsetRef.current,
      lastX: event.clientX,
      lastTime: event.timeStamp,
      isDragging: false
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    const distance = event.clientX - drag.startX;
    if (!drag.isDragging) {
      if (Math.abs(distance) < DRAG_THRESHOLD_PX) {
        return;
      }
      drag.isDragging = true;
      suppressClickRef.current = true;
      viewportRef.current?.setPointerCapture(event.pointerId);
      viewportRef.current?.classList.add("is-dragging");
    }

    const elapsed = event.timeStamp - drag.lastTime;
    if (elapsed > 0) {
      velocityRef.current = ((event.clientX - drag.lastX) / elapsed) * 1000;
    }
    drag.lastX = event.clientX;
    drag.lastTime = event.timeStamp;
    offsetRef.current = drag.startOffset + distance;
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }
    if (drag.isDragging && event.timeStamp - drag.lastTime > 100) {
      velocityRef.current = 0;
    }
    dragRef.current = null;
    viewportRef.current?.classList.remove("is-dragging");
    if (viewportRef.current?.hasPointerCapture(event.pointerId)) {
      viewportRef.current.releasePointerCapture(event.pointerId);
    }
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (suppressClickRef.current) {
      event.preventDefault();
      event.stopPropagation();
      suppressClickRef.current = false;
    }
  };

  return (
    <div className="home-projects-carousel" aria-label={detailLabel}>
      <div
        ref={viewportRef}
        className="home-projects-carousel-viewport"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") {
            isPausedRef.current = true;
          }
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") {
            isPausedRef.current = false;
          }
        }}
        onFocus={(event) => {
          if (event.target instanceof HTMLElement && event.target.matches(":focus-visible")) {
            isPausedRef.current = true;
          }
        }}
        onBlur={() => {
          isPausedRef.current = false;
        }}
        onClickCapture={handleClickCapture}
        onDragStart={(event) => event.preventDefault()}
      >
        <div
          ref={trackRef}
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
                draggable={false}
              >
                <div className="home-project-slide-media">
                  {previewImage ? (
                    <Image
                      src={previewImage}
                      alt={project.previewAlt}
                      className="home-project-slide-image"
                      fill
                      sizes="(max-width: 719px) 80vw, 580px"
                      quality={95}
                      draggable={false}
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
