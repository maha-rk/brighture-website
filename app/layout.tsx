import './globals.css'

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
        <header className="w-full p-6">
          <nav className="max-w-7xl mx-auto flex gap-8 text-sm uppercase tracking-wider">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/ai-labs">AI Labs</a>
            <a href="/ai-trainings">AI Trainings</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="w-full p-6 text-xs opacity-50">
          © {new Date().getFullYear()} Brighture
        </footer>
      </body>
    </html>
  )
}