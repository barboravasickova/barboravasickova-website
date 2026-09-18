import AboutMeSection from "@/components/AboutMeSection";
import LanguageSwitch from "@/components/LanguageSwitch";
import { uiCopy } from "@/data/copy";

export default function EnglishProcessPage() {
  const copy = uiCopy.en;

  return (
    <main className="page">
      <LanguageSwitch locale="en" page="process" showBrandTrail brandTrailCurrentLabel={copy.processTitle} />
      <AboutMeSection locale="en" />
    </main>
  );
}
