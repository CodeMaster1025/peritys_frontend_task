"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import { useAuthStore } from "@/store/auth";
import { useEffect } from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Suspense } from "react";
import { useCartStore } from "@/store/cart";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import LoadingScreen from "@/components/loadingScreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { login, isLoggedIn, initializeFromLocalStorage } = useAuthStore();
  const { initializeCartFromLocalStorage } = useCartStore();
  useEffect(() => {
    if (isLoggedIn) {
      return () => {
        null;
      };
    } else {
      initializeFromLocalStorage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, login]);

  useEffect(() => {
    initializeFromLocalStorage();
    initializeCartFromLocalStorage();
  }, [initializeFromLocalStorage, initializeCartFromLocalStorage]);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <title>Exclusive</title>
        <meta
          name="title"
          content="Exclusive - The only E-Commerce website you need"
        />
        <meta
          name="description"
          content="Shop premium finds at Exclusive - your go-to for luxury e-commerce. Explore curated collections of fashion, tech, and more. Elevate your online shopping experience today!"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          {LoadingScreen()}
          <Header />
          <Navbar />
          <Suspense>{children}</Suspense>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
