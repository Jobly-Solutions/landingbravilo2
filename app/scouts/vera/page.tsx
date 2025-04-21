import Image from "next/image"
import HeroSection from "@/components/hero-section"
import CTAButton from "@/components/cta-button"
import { Header } from "@/components/header"


export default function VeraPage() {
  return (
    <>
    <Header />
      <HeroSection
        title="Vera - Gestión de pedidos"
        subtitle="Recibe pedidos, los organiza, hace cálculos automáticos y coordina entregas o retiros sin intervención humana."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimiza tu gestión de pedidos</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 rounded-full p-3 h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Recepción automática de pedidos</h3>
                    <p className="text-gray-600">
                      Vera recibe y procesa pedidos desde múltiples canales: WhatsApp, web, email o redes sociales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 rounded-full p-3 h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cálculos precisos y automáticos</h3>
                    <p className="text-gray-600">
                      Calcula precios, descuentos, impuestos y costos de envío sin errores humanos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-100 rounded-full p-3 h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Coordinación de entregas</h3>
                    <p className="text-gray-600">
                      Organiza y programa entregas o retiros, enviando recordatorios automáticos a tus clientes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CTAButton text="Optimiza tu gestión con Vera" />
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative h-[400px] w-[300px]">
                <Image
                  src="/vera400.png?height=400&width=300"
                  alt="Vera - Asistente de gestión de pedidos"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ventajas de automatizar la gestión de pedidos</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Reducción de errores</h3>
              <p className="text-gray-600">
                Elimina errores humanos en la toma de pedidos y cálculos, mejorando la satisfacción del cliente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Mayor eficiencia</h3>
              <p className="text-gray-600">Procesa pedidos hasta 5 veces más rápido que con métodos tradicionales.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Mejor experiencia del cliente</h3>
              <p className="text-gray-600">
                Tus clientes reciben confirmaciones instantáneas y seguimiento constante de sus pedidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para optimizar tu gestión de pedidos?</h2>
          <CTAButton text="Comenzar con Vera" className="text-lg px-8 py-3" />
        </div>
      </section>
    </>
  )
}
