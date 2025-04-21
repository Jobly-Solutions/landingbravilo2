import Image from "next/image"
import HeroSection from "@/components/hero-section"
import CTAButton from "@/components/cta-button"
import { Header } from "@/components/header"

export default function InmobiliariasPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="text-center px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0071E3] mb-4">
            Soluciones para Inmobiliarias
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Mejora la captación de clientes, agendamiento de visitas y seguimiento de operaciones con nuestros scouts de IA.
          </p>
          <CTAButton text="Solicitar Demo" className="w-full md:w-auto" />
        </div>

        <div className="px-4 py-8">
          <div className="flex justify-center mb-12">
            <div className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
              <Image
                src="/inmo.png"
                alt="Soluciones para inmobiliarias"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Transforma tu inmobiliaria con IA
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
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Calificación automática de leads</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Identifica y prioriza automáticamente a los clientes con mayor potencial de compra o alquiler.
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
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Agendamiento inteligente</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Coordina visitas a propiedades según la disponibilidad de tus agentes y envía recordatorios automáticos.
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
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Seguimiento personalizado</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Mantén el contacto con tus clientes potenciales mediante seguimientos automáticos y personalizados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <CTAButton text="Potencia tu inmobiliaria" className="w-full md:w-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-12 mt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Nuestros scouts para tu inmobiliaria
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16">
                    <Image src="/lia.png" alt="Lía" fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold">Lía</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  Responde consultas sobre propiedades, precios y disponibilidad las 24 horas, todos los días.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16">
                    <Image src="/simon.png" alt="Simón" fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold">Simón</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  Califica leads y realiza seguimiento automático para aumentar tus conversiones.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16">
                    <Image src="/vera.png" alt="Vera" fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold">Vera</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  Gestiona contratos, pagos y documentación necesaria para cerrar operaciones.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16">
                    <Image src="/tomi.png" alt="Tomi" fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold">Tomi</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  Coordina visitas a propiedades según la disponibilidad de tus agentes y clientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Caso de éxito: Lopez Inmobiliaria
              </h2>
              <blockquote className="text-gray-700 italic mb-6 text-sm md:text-base">
                "Desde que implementamos los scouts de Bravilo, aumentamos un 40% nuestras visitas a propiedades y
                redujimos un 60% el tiempo que nuestros agentes dedicaban a tareas administrativas. Ahora pueden enfocarse
                en lo que realmente importa: cerrar operaciones."
              </blockquote>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="/diego-inmo.jpg" alt="Testimonio" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Diego Lopez</p>
                  <p className="text-xs md:text-sm text-gray-600">Director, Lopez Inmobiliaria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-12 text-center bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Listo para transformar tu inmobiliaria?
          </h2>
          <CTAButton text="Solicitar demo personalizada" className="w-full md:w-auto text-base md:text-lg px-6 md:px-8 py-3" />
        </div>
      </main>
    </>
  )
}
