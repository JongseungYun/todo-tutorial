import type { Metadata } from "next"
import { Nunito_Sans, Noto_Serif } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const notoSerif = Noto_Serif({subsets:['latin'],variable:'--font-serif'});

const nunitoSans = Nunito_Sans({subsets:['latin'],variable:'--font-sans'})

export const metadata: Metadata = {
  title: "todo",
  description:
    "Claude Code Playbook 강의 실습용 Next.js · shadcn/ui Todo 앱 저장소.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", nunitoSans.variable, "font-serif", notoSerif.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
