import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { externals } from "@/constant/data";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./blog.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(externals.base_url),
  title: `${externals.name} . home`,
  description: externals.meta_description,
  openGraph: {
    type: "website",
    url: externals.base_url,
    title: `${externals.name} . home`,
    description: externals.meta_description,
    siteName: externals.name,
    images: [
      {
        url: "/og.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${externals.name} . home`,
    description: externals.meta_description,
    images: ["/og.png"],
  },
  alternates: {
    canonical: externals.base_url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.className, "max-w-2xl px-2 mx-auto")}>
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          {children}
          <Analytics mode="production" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
