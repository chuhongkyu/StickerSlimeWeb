import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/style.scss";

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ['400', '500', '700'],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Sticker Slime",
  description: "A fun and challenging mobile game where sticker slimes dodge falling liquid from the sky. Easy to play with simple controls but requires skill to master.",
  keywords: "mobile game, sticker slime, falling liquid, dodge game, casual game, skill game",
  authors:[{
    name: "Mr.chu",
    url: "https://litt.ly/mr_chu"
  }],
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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
