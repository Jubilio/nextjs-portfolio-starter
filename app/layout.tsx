import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jubilio Mausse - Backend Developer and GIS Analyst",
  description: "Portfolio website of Jubilio Mausse, a Backend Developer",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <div className="fixed inset-0 w-full h-full z-10">
          <video autoPlay loop muted className="w-full h-full object-cover object-center">
            <source src="/bgvid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 backdrop-blur-md"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
