"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealTransition, staggerStep } from "@/lib/motion";

type HeroProps = {
  headlineLines?: string[];
  supporting: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  ctaVariant?: "button" | "arrow";
};

export default function Hero({
  headlineLines,
  supporting,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  ctaVariant = "button"
}: HeroProps) {
  const introText = supporting[1] ?? "";
  const reduceMotion = useReducedMotion();

  const item = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { ...revealTransition, delay: index * staggerStep }
        };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-headline">
      <div className="hero-inner">
        <motion.h1 id="hero-headline" className="hero-headline" {...item(0)}>
          {headlineLines?.length ? (
            headlineLines.map((line, index) => (
              <span key={`${index}-${line}`} className="hero-headline-line">
                {line}
              </span>
            ))
          ) : (
            supporting[0]
          )}
        </motion.h1>
        {introText ? (
          <motion.p className="hero-intro" {...item(1)}>
            {introText}
          </motion.p>
        ) : null}

        <motion.div className="hero-cta-group" {...item(introText ? 2 : 1)}>
          <a
            className={ctaVariant === "arrow" ? "hero-cta-arrow" : "hero-cta"}
            href={ctaHref}
            aria-label={ctaVariant === "arrow" ? ctaLabel : undefined}
          >
            {ctaVariant === "arrow" ? (
              <svg
                className="hero-cta-arrow-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 5V19M12 19L6 13M12 19L18 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              ctaLabel
            )}
          </a>
          {secondaryCtaLabel && secondaryCtaHref ? (
            <a className="hero-cta" href={secondaryCtaHref}>
              {secondaryCtaLabel}
            </a>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
