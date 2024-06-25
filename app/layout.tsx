import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/page";
const inter = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
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
      <body
        className={`${inter.className} bg-gray-100 dark:bg-gray-400 text-gray-950 dark:text-gray-50`}
      >
        <ProgressBarProvider>
          <Navbar />
          {children}
        </ProgressBarProvider>
      </body>
    </html>
  );
}
