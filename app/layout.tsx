import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Icon, icons } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  icons: {
    icon: "/fivicon.png"
  },
  title: "NuruAI - Automatisez Tout avec l'IA",
  description: "Solutions d'IA innovantes pour automatiser et transformer votre entreprise",
}

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
