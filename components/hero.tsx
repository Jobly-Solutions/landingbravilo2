"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function Hero() {
  useEffect(() => {
    const borderAnimation = document.createElement("style")
    borderAnimation.innerHTML = `
      @keyframes borderLight {
        0%, 100% {
          background-position: 0% 0%;
        }
        50% {
          background-position: 100% 100%;
        }
      }
    `
    document.head.appendChild(borderAnimation)

    return () => {
      document.head.removeChild(borderAnimation)
    }
  }, [])

  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden">
      {/* Fondo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0071E3]/10 via-white to-[#0071E3]/20 z-0"></div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#0071E3]">
          Optimiza tu equipo con Bravilo Scouts
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Automatizá tareas repetitivas, respondé más rápido a tus clientes y hacé que tu negocio crezca sin sumar más
          carga operativa.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <a
            href="https://calendar.app.google/FXgPt1w8ZTGpU8Fa9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-[#0071E3] hover:bg-[#0071E3]/90 text-lg px-8 py-6">
              Agendar Demo
            </Button>
          </a>
        </div>

        {/* Imagen de la plataforma con borde brillante animado */}
        <div className="relative mx-auto max-w-6xl mt-20 mb-[-120px]">
          <div
            className="absolute -inset-[2px] rounded-xl z-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 20%, rgba(0,113,227,0.2) 50%, transparent 80%)",
              backgroundSize: "200% 200%",
              animation: "borderLight 6s linear infinite",
            }}
          />
          <div className="relative rounded-xl overflow-hidden bg-white shadow-2xl z-10">
            <img
              src="braviloapp.png"
              alt="Plataforma Bravilo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
