import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Harmony-Net Women Safety App",
  description: "Empowering women with advanced safety features and instant emergency response.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
