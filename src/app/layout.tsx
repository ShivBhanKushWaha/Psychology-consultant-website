import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from '@organisms'
import { Toaster } from "react-hot-toast";
import { AppWrapper } from "./Context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psychologist Website",
  description: "Major Project Contibutors are Shivbhan Kushwaha, Abhay Sharma, Ayush Jaiswal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <Toaster toastOptions={{
            style: {
              background: 'rgb(255 255 255)',
              color: '#000',
            },
            duration: 1000,
          }} />
          <Header />
          {children}
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
