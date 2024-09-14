import type { Metadata } from "next";

import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <ClerkProvider>
        <body>
        <NextUIProvider>
          {children}
          </NextUIProvider>
          </body>
      </ClerkProvider>
    </html>

   
  );
}