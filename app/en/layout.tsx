import type { Metadata } from "next";
import DocumentLang from "@/components/DocumentLang";
import { uiCopy } from "@/data/copy";

export const metadata: Metadata = {
  title: {
    default: "Barbora Vašíčková – Product Design",
    template: "%s | Barbora Vašíčková"
  },
  description: uiCopy.en.metadataDescription,
  alternates: {
    languages: {
      cs: "/",
      en: "/en"
    }
  }
};

export default function EnglishLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DocumentLang lang="en" />
      {children}
    </>
  );
}
