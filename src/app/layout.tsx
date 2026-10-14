
import type { Metadata, Viewport } from "next";
import { Caveat, Playfair_Display, Poppins } from "next/font/google";

import RevealObserver from "@/components/ui/RevealObserver";
import SvgSprite from "@/components/ui/SvgSprite";
import { site } from "@/data/site";

import "@/styles/base.css";
import "@/styles/animations.css";
import "@/styles/reveal.css";

// ── Typography ────────────────────────────────────────────────

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-hand",
  display: "swap",
});

// ── Site configuration ────────────────────────────────────────

const SITE_URL = site.url.replace(/\/+$/, "");
const SITE_NAME = site.name;

// IMPORTANT: Replace this with your actual social preview image.
// The file must exist at public/images/og-image.png.
const SOCIAL_IMAGE = "/images/og-image.jpeg";

const SOCIAL_IMAGE_URL = new URL(
  SOCIAL_IMAGE,
  `${SITE_URL}/`,
).toString();

// ── SEO keywords ──────────────────────────────────────────────

const KEYWORDS = [
  "primary school tutor",
  "online tutoring UK",
  "EYFS tuition",
  "EYFS tutor",
  "KS1 tutor",
  "KS2 tutor",
  "primary school tuition",
  "one-to-one tuition",
  "1-to-1 tutoring",
  "qualified teacher",
  "Mrs A Tutors",
];

// ── Structured data ───────────────────────────────────────────

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: site.description,
  sameAs: ["https://www.instagram.com/mrsatutors/"],
};

// ── Metadata ──────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),

  title: {
    default: site.title,
    template: `%s | ${SITE_NAME}`,
  },

  description: site.description,
  applicationName: SITE_NAME,

  keywords: KEYWORDS,

  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: SITE_NAME,
    title: site.title,
    description: site.description,
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — tutoring support for children`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [SOCIAL_IMAGE_URL],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "education",
};

// ── Browser viewport ──────────────────────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4246f",
};

// ── Root layout ───────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${heading.variable} ${body.variable} ${hand.variable} antialiased`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <SvgSprite />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        {children}

        <RevealObserver />
      </body>
    </html>
  );
}
