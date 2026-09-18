"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import PageLoader from "@/components/PageLoader";

const MIN_VISIBLE_MS = 420;
const LEAVE_MS = 320;

export default function InitialPageLoader() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"visible" | "leaving" | "hidden">("visible");

  useEffect(() => {
    if (reduceMotion) {
      setPhase("hidden");
      return;
    }

    const startedAt = Date.now();

    const finish = () => {
      const elapsed = Date.now() - startedAt;
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);

      window.setTimeout(() => {
        setPhase("leaving");
        window.setTimeout(() => setPhase("hidden"), LEAVE_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }
  }, [reduceMotion]);

  if (phase === "hidden") {
    return null;
  }

  return <PageLoader fullscreen leaving={phase === "leaving"} />;
}
