import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { QueryProviders } from "./providers/query-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Data Migration",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="w-full h-full" lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased w-full h-full`}>
        <QueryProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
