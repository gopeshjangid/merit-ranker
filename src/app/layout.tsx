import type { Metadata } from 'next';

import localFont from 'next/font/local';

import NextAuthProvider from '@/provider/NextAuthProvider';
import TanStackQueryProvider from '@/provider/TanstackProvider';
import { ThemeProvider } from '@/provider/theme-provider';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
  preload: true,
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Merit Ranker - AI Presentation Generator',
  description: 'Create stunning presentations with AI-powered content generation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackQueryProvider>
      <NextAuthProvider>
        <html lang="en" suppressHydrationWarning>
          <head suppressHydrationWarning>
            <link rel="dns-prefetch" href="https://images.unsplash.com" />
            <link rel="dns-prefetch" href="https://utfs.io" />
          </head>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            suppressHydrationWarning
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </body>
        </html>
      </NextAuthProvider>
    </TanStackQueryProvider>
  );
}
