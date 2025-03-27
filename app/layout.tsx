import type { Metadata } from 'next'
import Script from "next/script"
import './globals.css'

export const metadata: Metadata = {
  title: 'Bravilo - Scouts de IA para la gestión de talento',
  description: 'Con Bravilo automatiza y optimiza tus tareas repetitivas, mejora la gestión de talento y libera el potencial de tu equipo con nuestros scouts de IA.',
  generator: 'braviloai.com',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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

        {/* ChainDesk Chat Bubble */}
        <Script
          id="chaindesk-bubble"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (async () => {
                const { default: Chatbox } = await import('https://cdn.jsdelivr.net/npm/@chaindesk/embeds@latest/dist/chatbox/index.js');
                const widget = await Chatbox.initBubble({
                  agentId: 'cm8rscw3d0000rj7wkb231fht',
                  initialMessages: ['Hola 👋 ¿En qué puedo ayudarte hoy?'],
                  context: 'Estás hablando con un usuario que visita braviloai.com. Asistilo de forma clara y amigable.',
                });
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
