import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/page";
const inter = Inter({ subsets: ["latin"] });
import ProgressBarProvider from "@/Components/ProgressBarProvider/page";

export const metadata: Metadata = {
  title: "Shortlisted Users",
  description: "Shortlisted Users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBarProvider>
          <Navbar />
          {children}
        </ProgressBarProvider>
      </body>
    </html>
  );
}
