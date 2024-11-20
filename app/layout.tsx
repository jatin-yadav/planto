import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Planto: Breath Natural",
  description: "Create Jatin Rao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-hero-pattern bg-fixed bg-center bg-no-repeat bg-cover sm:bg-none sm:bg-background-1 text-content`}
      >
        {children}
      </body>
    </html>
  );
}
