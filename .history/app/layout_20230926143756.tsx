import './globals.css'

export const metadata = {
  title: 'Collectables',
  description: 'Collectables for al',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        Navbar
        <main>
        {children}
        </main>
        Footer
        </body>
    </html>
  )
}
