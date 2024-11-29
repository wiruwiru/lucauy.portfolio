import "../styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <Component {...pageProps} />
      </main>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className={`${inter.className} min-h-screen bg-background text-foreground dark:bg-black dark:text-white`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}