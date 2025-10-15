import type { Metadata } from 'next';

import localFont from 'next/font/local';

import AuthProvider from '@/provider/AuthProvider';
import TanStackQueryProvider from '@/provider/TanstackProvider';
import { ThemeProvider } from '@/provider/theme-provider';
import { FloatingActionButton } from "@/components/landing/floating-action-button"
import { Toaster } from 'sonner';
import { Navbar } from '@/components/landing/navbar';
import { FooterWrapper } from '@/components/landing/footer-wrapper';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Merit Ranker",
  url: "https://meritranker.com/",
  logo: "https://meritranker.com/logo.png", // ENSURE public/logo.png exists (e.g., 112x112px or larger, square or rectangular)
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91 9876543210",
      contactType: "customer service",
      areaServed: "MM",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      email: "info@meritranker.com",
      contactType: "customer service",
      areaServed: "MM",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://x.com/meritRanker", // REPLACE with your actual primary social media link
    // "https://www.facebook.com/eSIMMyanmar", // Example: Add other social media links
    // "https://www.linkedin.com/company/esimmyanmar", // Example
  ],
}

// Metadata for SEO and Social Sharing
export const metadata: Metadata = {
  metadataBase: new URL("https://meritranker.com/"), // Crucial for resolving relative image paths
  title: {
    default: "Meritranker | AI Learning App & Teacher Tools for Govt & Competitive Exam Preparation",
    template: "Meritranker - AI-Powered Learning",
  },
  description:
    "Meritranker is an AI learning app for students and teachers. Create smart study materials, prepare for UPSC, government, and competitive exams with free AI tools.",
  keywords: [
    "teacher tools online",
    "ai learning app",
    "ai for govt exam preparation",
    "free ai for upsc preparation",
    "study material for students",
  ],
  authors: [{ name: "Merit Ranker Team", url: "https://meritranker.com/about" }],
  creator: "Merit Ranker",
  publisher: "Merit Ranker",
  openGraph: {
    title: "Meritranker – AI Learning App for Students & Smart Teacher Tools for Exam Preparation",
    description:
      "Meritranker empowers students and teachers with AI tools for UPSC, government, and competitive exam preparation. Create and learn from smart study materials for free.",
    url: "https://meritranker.com/",
    siteName: "Merit Ranker",
    images: [
      {
        url: "/og-image.png", // PLACEHOLDER - Create public/og-image.png (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Meritranker - AI-Powered Learning",
      },
    ],
    locale: "en_US", // Consider 'my_MM' if primary content is Burmese
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meritranker - AI-Powered Learning",
    description:
      "Learn, practice, and succeed. Study from top teachers, attempt mocks, and use AI to plan & revise smarter.",
    site: "@meritRanker", // REPLACE with your actual Twitter handle if available
    creator: "@CreatorHandle", // REPLACE with the content creator's Twitter handle if different
    images: ["/twitter-image.png"], // PLACEHOLDER - Create public/twitter-image.png (e.g., 1200x675px or 1200x600px)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    // Favicon configuration
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png", // Place in /public/apple-touch-icon.png
  },
  manifest: "/manifest.json", // Place in /public/manifest.json for PWA capabilities
  alternates: {
    // Canonical URL
    canonical: "https://meritranker.com/",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" suppressHydrationWarning>
          <head>
        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {/* Any other critical head elements */}
      </head>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <TanStackQueryProvider>
      <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              {children}
               <FooterWrapper />
              <FloatingActionButton />
              <Toaster />
            </ThemeProvider>            
      </AuthProvider>
    </TanStackQueryProvider>
          </body>
        </html>
  );
}
