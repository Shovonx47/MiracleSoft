"use client";

import "@/styles/globals.css";
import clsx from "clsx";
import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen ">
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <main className="dark:bg-custom-gradient -z-20">{children}</main>
            <Footer />
            <AppointmentModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </Providers>
      </body>
    </html>
  );
}