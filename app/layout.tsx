import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ChainDeskBubble } from '../components/bravilo-bubble'

export const metadata: Metadata = {
  title: 'Bravilo - Scouts de IA para negocios',
  description:
    'Bravilo automatiza y optimiza tareas repetitivas para liberar el potencial de tu negocio con scouts de IA personalizados.',
  generator: 'braviloai.com',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
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
      <body>
        {children}
        <ChainDeskBubble />
      </body>
    </html>
  )
}
