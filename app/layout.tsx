import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bravilo - Scouts de IA para negocios',
  description:
    'Bravilo automatiza y optimiza tareas repetitivas para liberar el potencial de tu negocio con scouts de IA personalizados.',
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
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0ZSDZM57LM"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0ZSDZM57LM');
          `}
        </Script>

        {/* Brevo Tracker */}
        <Script
          strategy="afterInteractive"
          src="https://cdn.brevo.com/js/sdk-loader.js"
        />
        <Script id="brevo-init" strategy="afterInteractive">
          {`
            window.Brevo = window.Brevo || [];
            Brevo.push([
              "init",
              {
                client_key: "g44xy8xk1tyc66zvl16ihigd"
              }
            ]);
          `}
        </Script>
      </head>
      <body>
        {children}

        {/* Bravilo Chatbox */}
        <Script id="bravilo-chat" strategy="afterInteractive">
          {`
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@bravilo/embeds@latest/dist/chatbox/index.js';
            script.onload = () => {
              if (window.Chatbox) {
                window.Chatbox.initBubble({
                  agentId: 'cm8rscw3d0000rj7wkb231fht',
                });
              }
            };
            document.body.appendChild(script);
          `}
        </Script>
      </body>
    </html>
  )
}
