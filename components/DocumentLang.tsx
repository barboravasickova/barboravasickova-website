"use client";

import { useEffect } from "react";

export default function DocumentLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previousLang = document.documentElement.lang;
    document.documentElement.lang = lang;

    return () => {
      document.documentElement.lang = previousLang || "cs";
    };
  }, [lang]);

  return null;
}
