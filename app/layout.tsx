import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/page";
import ScrollToTop from "../components/ScrollToTop/page";
import ProgressBarProvider from "../components/ProgressBarProvider/page";
import Footer from "@/components/Footer/page";
const inter = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shortlisted Users - Banao Technologies",
  description: "Shortlisted Users",
  keywords: "Shortlisted Users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 dark:bg-gray-400 text-gray-950 dark:text-gray-50`}
      >
        <ProgressBarProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
