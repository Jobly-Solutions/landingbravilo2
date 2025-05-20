"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function IntegrationOrbit() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const integrations = [
    { name: "Google Drive", logo: "/google-drive-logo.png", distance: 120, angle: 0 },
    { name: "Gmail", logo: "/gmail-logo.png", distance: 120, angle: 45 },
    { name: "Video Call", logo: "/generic-video-call-logo.png", distance: 120, angle: 90 },
    { name: "Slack", logo: "/slack-logo.png", distance: 120, angle: 135 },
    { name: "Notion", logo: "/notion-logo.png", distance: 120, angle: 180 },
    { name: "Asana", logo: "/asana-logo.png", distance: 120, angle: 225 },
    { name: "Dropbox", logo: "/dropbox-logo.png", distance: 120, angle: 270 },
    { name: "Salesforce", logo: "/salesforce-logo.png", distance: 120, angle: 315 },
  ]

  return (
    <div className="relative h-[400px] w-[400px]">
      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary/10 p-4">
        <Image src="/app-logo-icon.png" alt="Bravilo" width={48} height={48} className="h-full w-full" />
      </div>
      {integrations.map((integration, index) => {
        const angle = ((integration.angle + rotation) * Math.PI) / 180
        const x = integration.distance * Math.cos(angle)
        const y = integration.distance * Math.sin(angle)

        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2 shadow-md transition-all duration-300"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <Image
              src={integration.logo || "/placeholder.svg"}
              alt={integration.name}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </div>
        )
      })}
    </div>
  )
}
