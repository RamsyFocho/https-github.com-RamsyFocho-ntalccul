import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "NtalCCUL - Ntarinkon Credit and Cooperative Union Limited",
  description:
    "Your trusted banking partner since 1972. Offering comprehensive banking services including savings accounts, loans, credit cards, and digital banking solutions.",
  keywords: "banking, credit union, loans, savings, NtalCCUL, Cameroon banking",
  generator: "bitsvalley",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">
        <Loader />
        {children}
      </body>
    </html>
  );
}
