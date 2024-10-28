import BackgroundColor from "@/components/background-color";
import Header from "@/components/header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import ActiveSectionContextProvider from "../../context/active-context-provider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JexHsu | Personal Portfolio",
  description: "JexHsu is a full-stack developer with 8 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative h-[9999px] bg-gray-50 pt-28 text-gray-950 antialiased sm:pt-36`}
      >
        <BackgroundColor />
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
