import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bravilo - Scouts de IA para la gestión de talento',
  description: 'Con Bravilo automatiza y optimiza tus tareas repetitivas, mejora la gestión de talento y libera el potencial de tu equipo con nuestros scouts de IA.',
  generator: 'braviloai.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
