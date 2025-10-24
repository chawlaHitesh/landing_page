import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Roboto, Roboto_Mono } from "next/font/google"

import "styles/globals.css"
import Header from "components/Header"
import Footer from "components/Footer"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Encora - Smart Return Infrastructure",
  description: "Transform product returns into sustainable value. Reduce labor costs, minimize shrink, and maximize compliance with intelligent automation.",
  keywords: "returns management, reverse logistics, sustainability, compliance, retail technology",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${roboto.variable} ${robotoMono.variable} min-h-screen font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <div className="flex flex-col min-h-screen">
        <Header />
        
          {children}
          <Footer />
          </div>
        
        </ThemeProvider>
      </body>
    </html>
  )
}