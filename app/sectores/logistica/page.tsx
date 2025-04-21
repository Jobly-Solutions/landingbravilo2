import Image from "next/image"
import HeroSection from "@/components/hero-section"
import CTAButton from "@/components/cta-button"
import { Header } from "@/components/header"


export default function LogisticaPage() {
  return (
    <>
    <Header />
      <HeroSection
        title="Soluciones para Logística"
        subtitle="Automatiza la coordinación de entregas, seguimiento y comunicación con clientes para optimizar tus operaciones logísticas."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimiza tus operaciones logísticas con IA</h2>
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
                    <h3 className="text-xl font-semibold mb-2">Coordinación eficiente de rutas</h3>
                    <p className="text-gray-600">
                      Optimiza la planificación de rutas y horarios de entrega para maximizar la eficiencia de tus
                      recursos.
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
                    <h3 className="text-xl font-semibold mb-2">Notificaciones automáticas de estado</h3>
                    <p className="text-gray-600">
                      Mantén a tus clientes informados en tiempo real sobre el estado y ubicación de sus envíos.
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
                    <h3 className="text-xl font-semibold mb-2">Resolución inmediata de incidencias</h3>
                    <p className="text-gray-600">
                      Gestiona y resuelve problemas comunes en tiempo real, mejorando la satisfacción del cliente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CTAButton text="Optimiza tu logística" />
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative h-[400px] w-[400px]">
                <Image
                  src="/logis.png?height=400&width=400"
                  alt="Soluciones para logística"
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
          <h2 className="text-3xl font-bold text-center mb-12">¿Cómo nuestros scouts ayudan a tu inmobiliaria?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="relative h-16 w-16">
                  <Image src="/Lia.png?height=64&width=64" alt="Lía" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Lía</h3>
              <p className="text-gray-600">
                Responde consultas sobre propiedades, precios y disponibilidad las 24 horas, todos los días.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="relative h-16 w-16">
                  <Image src="/Simon.png?height=64&width=64" alt="Simón" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Simón</h3>
              <p className="text-gray-600">
                Califica leads y realiza seguimiento automático para aumentar tus conversiones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="relative h-16 w-16">
                  <Image src="/Vera.png?height=64&width=64" alt="Vera" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Vera</h3>
              <p className="text-gray-600">
                Gestiona contratos, pagos y documentación necesaria para cerrar operaciones.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="relative h-16 w-16">
                  <Image src="/Tomi.png?height=64&width=64" alt="Tomi" fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Tomi</h3>
              <p className="text-gray-600">
                Coordina visitas a propiedades según la disponibilidad de tus agentes y clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white border rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Caso de éxito: Express Logistics</h2>
            <blockquote className="text-gray-700 italic mb-6">
              "Desde que implementamos los scouts de Bravilo, redujimos un 30% los errores en la coordinación de
              entregas y aumentamos la satisfacción de nuestros clientes en un 45%. La comunicación automática sobre el
              estado de los envíos ha sido clave para mejorar nuestra operación."
            </blockquote>
            <div className="flex items-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image src="/ale-logistica.png?height=48&width=48" alt="Testimonio" fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold">Alejandro Méndez</p>
                <p className="text-sm text-gray-600">Director de Operaciones, Express Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para optimizar tu logística?</h2>
          <CTAButton text="Solicitar demo personalizada" className="text-lg px-8 py-3" />
        </div>
      </section>
    </>
  )
}
