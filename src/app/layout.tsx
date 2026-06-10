import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EthioGuard — Your Guide. Your Guard.",
  description:
    "Experience Ethiopia with complete confidence. Local guides, fair pricing, and authentic experiences — curated just for you.",
  openGraph: {
    title: "EthioGuard — Your Guide. Your Guard.",
    description:
      "Experience Ethiopia with complete confidence. Local guides, fair pricing, and authentic experiences.",
    siteName: "EthioGuard",
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
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "font-sans antialiased"
        )}
      >
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
