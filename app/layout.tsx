import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "NuruAI - Boost Your Business with AI Automation",
    template: "%s | NuruAI",
  },
  description:
    "NuruAI helps businesses automate their workflows, save time, and scale faster using smart AI and no-code tools like n8n. Discover the future of intelligent automation made simple.",
  keywords: [
    "NuruAI",
    "AI automation agency",
    "workflow automation",
    "business automation",
    "Low code automation",
    "n8n automation",   
    "n8n experts",
    "no-code automation",
    "automate with AI",
    "AI tools for business",
    "process automation",
    "AI integration agency",
  ],
  authors: [{ name: "NuruAI Team", url: "https://smartcv-landingpage.vercel.app" }],
  creator: "NuruAI",
  publisher: "NuruAI",
  metadataBase: new URL("https://smartcv-landingpage.vercel.app"),
  alternates: {
    canonical: "https://smartcv-landingpage.vercel.app",
  },
  openGraph: {
    title: "NuruAI - Boost Your Business with AI Automation",
    description:
      "We help businesses automate repetitive tasks and optimize workflows using AI and tools like n8n, Make, and Zapier. Let AI work for you.",
    url: "https://smartcv-landingpage.vercel.app",
    siteName: "NuruAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NuruAI - Automate Your Business with AI",
    description:
      "Save time and scale smarter with AI-driven workflow automation by NuruAI.",
    creator: "@NuruAI",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
