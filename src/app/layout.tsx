import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from '@organisms'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psychologist Website",
  description: "Major Project Contibutors Shivbhan Kushwaha, Abhay Sharma, Ayush Jaiswal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
