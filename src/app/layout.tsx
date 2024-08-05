import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sticker Slime",
  description: "A fun and challenging mobile game where sticker slimes dodge falling liquid from the sky. Easy to play with simple controls but requires skill to master.",
  keywords: "mobile game, sticker slime, falling liquid, dodge game, casual game, skill game",
  authors:[{
    name: "Mr.chu",
    url: "https://litt.ly/mr_chu"
  }],
  themeColor: "#4CAF50",
  applicationName: "Sticker Slime",
  manifest: "/manifest.json",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
