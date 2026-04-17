import Header from "./components/Header"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Brighture",
  description: "Engineering Human Intelligence for the AI Future",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full p-6 text-xs opacity-50">
          © {new Date().getFullYear()} Brighture
        </footer>
      </body>
    </html>
  )
}