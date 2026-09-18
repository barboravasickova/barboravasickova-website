import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import InitialPageLoader from "@/components/InitialPageLoader";
import SiteFooter from "@/components/SiteFooter";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import productDesignFaviconDark from "@/images/product-design-favicon-dark.svg";
import productDesignFaviconLight from "@/images/product-design-favicon-light.svg";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Barbora Vašíčková – Product Design",
    template: "%s | Barbora Vašíčková"
  },
  description: "Portfolio UX a produktového designu – Barbora Vašíčková.",
  alternates: {
    languages: {
      cs: "/",
      en: "/en"
    }
  },
  icons: {
    icon: [
      {
        url: productDesignFaviconDark.src,
        media: "(prefers-color-scheme: light)"
      },
      {
        url: productDesignFaviconLight.src,
        media: "(prefers-color-scheme: dark)"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <InitialPageLoader />
        <div className={`app-shell ${dmSans.className}`}>
          <div className="app-shell-main">{children}</div>
          <SiteFooter />
        </div>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
