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
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '717459340964636');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=717459340964636&ev=PageView&noscript=1"
          />
        </noscript>
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
