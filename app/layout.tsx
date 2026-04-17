import Header from "./components/Header"
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'Brighture',
  description: 'Engineering Human Intelligence for the AI Future',
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
        <Header className="w-full px-10 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* Brand */}
            <div className="text-lg tracking-tight font-medium">
              Brighture
            </div>

            {/* Navigation */}
            <nav className="flex gap-10 text-sm uppercase tracking-wider text-white/80">
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="/ai-labs" className="hover:text-white transition-colors">
                AI Labs
              </a>
              <a href="/ai-trainings" className="hover:text-white transition-colors">
                AI Trainings
              </a>
              <a href="/faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>

          </div>
        </Header>

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