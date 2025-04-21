import Image from "next/image"
import HeroSection from "@/components/hero-section"
import CTAButton from "@/components/cta-button"
import { Header } from "@/components/header"

export default function LiaPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="text-center px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0071E3] mb-4">
            Lía - Atención al cliente 24/7
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Responde consultas frecuentes, gestiona reclamos y acompaña al cliente en cada paso, sin demoras ni descansos.
          </p>
          <CTAButton text="Agendar Demo" className="w-full md:w-auto" />
        </div>

        <div className="px-4 py-8">
          <div className="flex justify-center mb-12">
            <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[400px]">
              <Image
                src="/Lia400.png"
                alt="Lía - Asistente de atención al cliente"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Atención al cliente sin interrupciones
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
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Respuestas instantáneas</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Tus clientes reciben respuestas inmediatas a sus consultas más frecuentes, sin tiempos de espera.
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
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Gestión de reclamos eficiente</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Lía registra, categoriza y resuelve reclamos comunes, derivando solo los casos complejos a tu equipo.
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
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Soporte multicanal</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Atiende consultas por WhatsApp, email, chat web y redes sociales desde una única plataforma.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <CTAButton text="Conocer más sobre Lía" className="w-full md:w-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-12 mt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              ¿Cómo Lía transforma tu atención al cliente?
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#0071E3] text-2xl md:text-3xl font-bold mb-3">01</div>
                <h3 className="text-xl font-semibold mb-2">Disponibilidad 24/7</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Tus clientes reciben atención en cualquier momento, incluso fuera del horario laboral, fines de semana y feriados.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#0071E3] text-2xl md:text-3xl font-bold mb-3">02</div>
                <h3 className="text-xl font-semibold mb-2">Reducción de costos</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Disminuye hasta un 70% los costos de atención al cliente al automatizar las consultas más frecuentes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#0071E3] text-2xl md:text-3xl font-bold mb-3">03</div>
                <h3 className="text-xl font-semibold mb-2">Escalabilidad inmediata</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Atiende cientos de consultas simultáneas sin perder calidad ni aumentar tu estructura.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Listo para transformar tu atención al cliente?
          </h2>
          <CTAButton text="Comenzar con Lía" className="w-full md:w-auto text-base md:text-lg px-6 md:px-8 py-3" />
        </div>
      </main>
    </>
  )
}

