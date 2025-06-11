import { Geist, Geist_Mono } from "next/font/google";

import "@dismantled/ui/globals.css";

import type { Metadata } from "next";
import { headers } from "next/headers";

import { ThemeProvider } from "@/app/_shared/ui/theme-provider";

import DynamicProvider from "../providers/dynamic-provider";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Next.js Monorepo Template",
  description: "Next.js Monorepo Template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = (await headers()).get("cookie");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DynamicProvider cookie={cookie}>{children}</DynamicProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
