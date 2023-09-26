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
        {children}
        Footer
        </body>
    </html>
  )
}
