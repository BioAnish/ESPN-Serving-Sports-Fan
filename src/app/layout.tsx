import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderCarousel from "@/Components/Molecules/HeaderCarousel/HeaderCarousel";
import NavBar from "@/Components/Molecules/NarBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESPN",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderCarousel />
        <NavBar regionTeams={[]} />
        {children}
      </body>
    </html>
  );
}
