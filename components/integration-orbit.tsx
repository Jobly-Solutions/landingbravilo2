"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface IntegrationIcon {
  name: string
  logo: string
  color: string
}

export function IntegrationOrbit() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Primera órbita de integraciones
  const innerIntegrations: IntegrationIcon[] = [
    { name: "WhatsApp", logo: "/whatsapp-logo.png", color: "#25D366" },
    { name: "Excel", logo: "/excel-logo.png", color: "#217346" },
    { name: "Instagram", logo: "/instagram-logo.png", color: "#E4405F" },
    { name: "Zapier", logo: "/zapier-logo.png", color: "#FF4A00" },
    { name: "Telegram", logo: "/telegram-logo.png", color: "#0088CC" },
    { name: "Mercado Pago", logo: "/mercadopago-logo.png", color: "#00B1EA" },
  ]

  // Segunda órbita de integraciones
  const outerIntegrations: IntegrationIcon[] = [
    { name: "Facebook", logo: "/facebook-logo.png", color: "#1877F2" },
    { name: "Make", logo: "/make-logo.png", color: "#8A2BE2" },
    { name: "Google Calendar", logo: "/calendar-logo.png", color: "#4285F4" },
    { name: "Gmail", logo: "/gmail-logo.png", color: "#EA4335" },
    { name: "Slack", logo: "/slack-logo.png", color: "#4A154B" },
    { name: "Zoom", logo: "/generic-video-call-logo.png", color: "#2D8CFF" },
    { name: "Notion", logo: "/notion-logo.png", color: "#000000" },
    { name: "Drive", logo: "/drive-logo.webp", color: "#0F9D58" },
  ]

  useEffect(() => {
    const innerIcons = document.querySelectorAll(".inner-orbit-icon")
    const outerIcons = document.querySelectorAll(".outer-orbit-icon")
    const innerTotal = innerIcons.length
    const outerTotal = outerIcons.length
    let angle = 0

    const animate = () => {
      angle += 0.002 // Velocidad de rotación

      // Animar la órbita interna
      innerIcons.forEach((icon, index) => {
        const iconAngle = angle + index * ((2 * Math.PI) / innerTotal)
        const x = Math.cos(iconAngle) * 120 // Radio de la órbita interna
        const y = Math.sin(iconAngle) * 120

        const iconElement = icon as HTMLElement
        iconElement.style.transform = `translate(${x}px, ${y}px)`
      })

      // Animar la órbita externa (dirección opuesta)
      outerIcons.forEach((icon, index) => {
        const iconAngle = -angle + index * ((2 * Math.PI) / outerTotal)
        const x = Math.cos(iconAngle) * 200 // Radio de la órbita externa
        const y = Math.sin(iconAngle) * 200

        const iconElement = icon as HTMLElement
        iconElement.style.transform = `translate(${x}px, ${y}px)`
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="relative h-[450px] w-[450px] mx-auto" ref={containerRef}>
      {/* Círculos de fondo */}
      <div className="absolute inset-0 rounded-full border-2 border-blue-100 opacity-30"></div>
      <div className="absolute inset-[60px] rounded-full border-2 border-blue-200 opacity-50"></div>
      <div className="absolute inset-[-50px] rounded-full border-2 border-blue-100 opacity-30"></div>

      {/* Logo central */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
        <Image src="/app-logo-icon.png" alt="Bravilo" width={60} height={60} className="h-16 w-16 object-contain" />
      </div>

      {/* Íconos de integración - Órbita interna */}
      <div className="absolute inset-0">
        {innerIntegrations.map((integration, index) => (
          <div
            key={`inner-${index}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center inner-orbit-icon transition-transform duration-300 hover:scale-110 z-[5]"
            style={{
              transform: `translate(${Math.cos(index * ((2 * Math.PI) / innerIntegrations.length)) * 120}px, ${Math.sin(index * ((2 * Math.PI) / innerIntegrations.length)) * 120}px)`,
            }}
          >
            <Image
              src={integration.logo || "/placeholder.svg"}
              alt={integration.name}
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Íconos de integración - Órbita externa */}
      <div className="absolute inset-0">
        {outerIntegrations.map((integration, index) => (
          <div
            key={`outer-${index}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center outer-orbit-icon transition-transform duration-300 hover:scale-110"
            style={{
              transform: `translate(${Math.cos(index * ((2 * Math.PI) / outerIntegrations.length)) * 200}px, ${Math.sin(index * ((2 * Math.PI) / outerIntegrations.length)) * 200}px)`,
            }}
          >
            <Image
              src={integration.logo || "/placeholder.svg"}
              alt={integration.name}
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
