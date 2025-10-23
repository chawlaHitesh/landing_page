import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Roboto, Roboto_Mono } from "next/font/google"

import "styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Encora - Smart Return Infrastructure",
  description: "Encora: Smart Return Infrastructure Platform",
  generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${roboto.variable} ${robotoMono.variable} bg-white dark:bg-[#194C4D] min-h-screen font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
