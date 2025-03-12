import type { Metadata } from 'next'
import Script from "next/script"; // Importar correctamente
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
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0ZSDZM57LM"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0ZSDZM57LM');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
