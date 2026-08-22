import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";
import "@fontsource-variable/noto-sans-bengali";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import { CartProvider } from "@/context/CartContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AR Agro",
  description: "Quality agricultural products and solutions",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider>
          <CartProvider>
            <TopBar />
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
