import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { server } from "@/mocks/node";

const inter = Inter({ subsets: ["latin"] });

server.listen();

export const metadata: Metadata = {
  title: "Honey Chat",
  description: "달달한 대화",
  openGraph: {
    title: "Honey Chat",
    description: "달달한 대화",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
