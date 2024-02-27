import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CLS Games - Descubra jogos incriveis para se divertir",
  description: "Mais de 10 mil jogos te esperando e organizados",
  keywords: ["games", "jogos", "steam"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}, relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
