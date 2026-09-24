import type { Metadata } from "next";
import { Roboto, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SeekhoHub | Learn, Explore & Grow",
  description:
    "SeekhoHub brings useful knowledge, practical guides, technology, career, education and everyday information in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${notoDevanagari.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}