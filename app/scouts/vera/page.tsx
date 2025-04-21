import Image from "next/image"
import HeroSection from "@/components/hero-section"
import CTAButton from "@/components/cta-button"
import { Header } from "@/components/header"

export default function VeraPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="text-center px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0071E3] mb-4">
            Vera - Gestión de pedidos
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Recibe pedidos, los organiza, hace cálculos automáticos y coordina entregas o retiros sin intervención humana.
          </p>
          <CTAButton text="Agendar Demo" className="w-full md:w-auto" />
        </div>

        <div className="px-4 py-8">
          <div className="flex justify-center mb-12">
            <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[400px]">
              <Image
                src="/vera400.png"
                alt="Vera - Asistente de gestión de pedidos"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Optimiza tu gestión de pedidos
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 rounded-full p-2 md:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Recepción automática de pedidos</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Vera recibe y procesa pedidos desde múltiples canales: WhatsApp, web, email o redes sociales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 rounded-full p-2 md:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Cálculos precisos y automáticos</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Calcula precios, descuentos, impuestos y costos de envío sin errores humanos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 rounded-full p-2 md:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Coordinación de entregas</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Organiza y programa entregas o retiros, enviando recordatorios automáticos a tus clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <CTAButton text="Optimiza tu gestión con Vera" className="w-full md:w-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-12 mt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Ventajas de automatizar la gestión de pedidos
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#0071E3] text-2xl md:text-3xl font-bold mb-3">01</div>
                <h3 className="text-xl font-semibold mb-2">Reducción de errores</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Elimina errores humanos en la toma de pedidos y cálculos, mejorando la satisfacción del cliente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#0071E3] text-2xl md:text-3xl font-bold mb-3">02</div>
                <h3 className="text-xl font-semibold mb-2">Mayor eficiencia</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Procesa pedidos hasta 5 veces más rápido que con métodos tradicionales.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#0071E3] text-2xl md:text-3xl font-bold mb-3">03</div>
                <h3 className="text-xl font-semibold mb-2">Mejor experiencia del cliente</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Tus clientes reciben confirmaciones instantáneas y seguimiento constante de sus pedidos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Listo para optimizar tu gestión de pedidos?
          </h2>
          <CTAButton text="Comenzar con Vera" className="w-full md:w-auto text-base md:text-lg px-6 md:px-8 py-3" />
        </div>
      </main>
    </>
  )
}

