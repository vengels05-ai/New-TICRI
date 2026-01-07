import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TICRI - The Informed Constitutional Republic Initiative",
  description: "Plain-English explainers of the Constitution, rights, federalism, state power, funding, and party history.",
  icons: {
    icon: [
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "TICRI - The Informed Constitutional Republic Initiative",
    description: "Plain-English explainers of the Constitution, rights, federalism, state power, funding, and party history.",
    url: 'https://ticri.org',
    siteName: 'TICRI',
    images: [
      {
        url: '/TICRI.png',
        width: 1200,
        height: 630,
        alt: 'TICRI Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TICRI - The Informed Constitutional Republic Initiative',
    description: 'Plain-English explainers of the Constitution, rights, federalism, state power, funding, and party history.',
    images: ['/TICRI.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
