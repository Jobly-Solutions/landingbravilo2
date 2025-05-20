import type { Metadata } from 'next'
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
        <Script strategy="afterInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0ZSDZM57LM');
          `}
        </Script>

        <script src="https://cdn.brevo.com/js/sdk-loader.js" async></script>
<script>
    // Version: 2.0
    window.Brevo = window.Brevo || [];
    Brevo.push([
        "init",
        {
        client_key: "g44xy8xk1tyc66zvl16ihigd",
        // Optional: Add other initialization options, see documentation
        }
    ]);
</script>
      </head>
      <body>
        {children}
        <Script
          type="module"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              import Chatbox from 'https://cdn.jsdelivr.net/npm/@bravilo/embeds@latest/dist/chatbox/index.js';
              Chatbox.initBubble({
                agentId: 'cm8rscw3d0000rj7wkb231fht',
              });
            `
          }}
        />
      </body>
    </html>
  )
}
