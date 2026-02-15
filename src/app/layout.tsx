import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Providers} from "@/providers/providers";
import Header from "@/components/UI/header";
import {siteConfig} from "@/config/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main className="flex flex-col h-[calc(100vh-60px-80px)] w-full justify-start items-center">
            {children}
          </main>
          <footer className={"h-[${LayoutConfig.footerHeight}] flex justify-center items-center"}>
            <p>{siteConfig.description}</p>
          </footer>
        </Providers>
      
       
      </body>
    </html>
  );
}
