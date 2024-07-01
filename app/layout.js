import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/navbar/page';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Email Marketing Tools",
  description: "Etsy Email Marketing Tools for Monthly Followup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}</body>
    </html>
  );
}
