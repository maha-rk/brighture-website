import './globals.css'
import Link from 'next/link'

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
      <body className="bg-black text-white antialiased">
        {/* Header */}
        <header className="w-full p-6">
          <nav className="max-w-7xl mx-auto flex gap-8 text-sm uppercase tracking-wider">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ai-labs">AI Labs</Link>
            <Link href="/ai-trainings">AI Trainings</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

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