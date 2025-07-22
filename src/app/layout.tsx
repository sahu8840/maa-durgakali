import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeInWrapper from "@/components/layout/FadeInWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "मां दुर्गाकाली शक्तिपीठ अयोध्या धाम",
  description: "Welcome to Maa Durgakali Shaktipeeth Ayodhya Dham - A spiritual abode for Lord Durga and Kali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white antialiased`}>
        <Navbar />
        <main className="flex-grow pt-16">
          <FadeInWrapper>{children}</FadeInWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
