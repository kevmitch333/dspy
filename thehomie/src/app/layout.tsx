import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TheHomie — Your Personal Operating System",
  description:
    "The intelligence layer that models your behavior, predicts risk, and keeps your life aligned. Turning Chaos into Clarity — and Turning Impulse into Intention.",
  openGraph: {
    title: "TheHomie — Your Personal Operating System",
    description:
      "The intelligence layer that models your behavior, predicts risk, and keeps your life aligned.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*
        Analytics: Add your GA4 or Plausible script here.
        Example GA4:
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        Example Plausible:
          <Script defer data-domain="thehomie.com" src="https://plausible.io/js/script.js" />

        Font: To use Inter from Google Fonts, add this to <head>:
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        Or use next/font/google:
          import { Inter } from "next/font/google";
          const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
        Then add inter.variable to the body className.
      */}
      <body className="font-sans antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
