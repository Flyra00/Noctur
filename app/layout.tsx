import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOCTUR — Youth Nightlife, Culinary Trails & Festival Guide",
  description: "Platform kurasi gaya hidup malam anak muda: kafe estetik, pasar malam, festival musik remaja, ruang kumpul komunitas, dan jejak kuliner digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-[#090a10] text-zinc-100 flex flex-col antialiased selection:bg-amber-500/30 selection:text-amber-300">
        {children}
      </body>
    </html>
  );
}
