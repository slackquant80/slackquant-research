import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ExternalLinkPolicy } from "@/components/ExternalLinkPolicy";
import { site } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const gaMeasurementId = "G-6GE45R8S4F";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  verification: {
    other: {
      "naver-site-verification": "020357b85fccf2b9789761b19856fbe92abc4290",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ExternalLinkPolicy />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
      </body>
    </html>
  );
}
