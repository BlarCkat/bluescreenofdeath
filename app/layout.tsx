import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";


const interTight = Inter_Tight({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Screen of Death",
  description: "A few lines of code in software update could affect millions worldwide. Code responsibly or you could be responsible for one the biggest outages in history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interTight.className}>{children}
      <Analytics/>
      </body>
    </html>
  );
}
