import AboutMeSection from "@/components/AboutMeSection";
import LanguageSwitch from "@/components/LanguageSwitch";
import { uiCopy } from "@/data/copy";

export default function ProcessPage() {
  const copy = uiCopy.cz;

  return (
    <main className="page">
      <LanguageSwitch locale="cz" page="process" showBrandTrail brandTrailCurrentLabel={copy.processTitle} />
      <AboutMeSection locale="cz" />
    </main>
  );
}
