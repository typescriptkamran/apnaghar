import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SupabaseProvider } from "@/contexts/SupabaseProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import FallbackUI from "@/components/FallbackUI";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Housing Society Booking Platform",
  description:
    "A comprehensive platform for booking new housing society properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <SupabaseProvider>
          <ErrorBoundary fallback={<FallbackUI />}>
            {children}
            <TempoInit />
          </ErrorBoundary>
        </SupabaseProvider>
      </body>
    </html>
  );
}
