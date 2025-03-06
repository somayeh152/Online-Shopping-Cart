import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import QueryProvider from "../providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Shopping Cart",
    description: "An online shopping cart with NextJs and React-Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fa">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <QueryProvider>
          <CartProvider>
              <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
                  <Link href="/" className="text-xl font-bold">Home</Link>
                  <Link href="/cart" className="bg-blue-500 px-4 py-2 rounded">🛒 Shopping Cart</Link>
              </nav>
              {children}
          </CartProvider>
      </QueryProvider>
      </body>
      </html>
  );
}
