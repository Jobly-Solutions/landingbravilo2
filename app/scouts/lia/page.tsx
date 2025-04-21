import Image from "next/image"
import HeroSection from "@/components/hero-section"
import CTAButton from "@/components/cta-button"
import { Header } from "@/components/header"
export default function LiaPage() {
  return (
    <>
    <Header />
      <HeroSection
        title="Lía - Atención al cliente 24/7"
        subtitle="Responde consultas frecuentes, gestiona reclamos y acompaña al cliente en cada paso, sin demoras ni descansos."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Atención al cliente sin interrupciones</h2>
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
                    <h3 className="text-xl font-semibold mb-2">Respuestas instantáneas</h3>
                    <p className="text-gray-600">
                      Tus clientes reciben respuestas inmediatas a sus consultas más frecuentes, sin tiempos de espera.
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
                    <h3 className="text-xl font-semibold mb-2">Gestión de reclamos eficiente</h3>
                    <p className="text-gray-600">
                      Lía registra, categoriza y resuelve reclamos comunes, derivando solo los casos complejos a tu
                      equipo.
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
                    <h3 className="text-xl font-semibold mb-2">Soporte multicanal</h3>
                    <p className="text-gray-600">
                      Atiende consultas por WhatsApp, email, chat web y redes sociales desde una única plataforma.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CTAButton text="Conocer más sobre Lía" />
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative h-[400px] w-[300px]">
                <Image
                  src="/Lia400.png?height=400&width=400"
                  alt="Lía - Asistente de atención al cliente"
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
          <h2 className="text-3xl font-bold text-center mb-12">¿Cómo Lía transforma tu atención al cliente?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Disponibilidad 24/7</h3>
              <p className="text-gray-600">
                Tus clientes reciben atención en cualquier momento, incluso fuera del horario laboral, fines de semana y
                feriados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Reducción de costos</h3>
              <p className="text-gray-600">
                Disminuye hasta un 70% los costos de atención al cliente al automatizar las consultas más frecuentes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Escalabilidad inmediata</h3>
              <p className="text-gray-600">
                Atiende cientos de consultas simultáneas sin perder calidad ni aumentar tu estructura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para transformar tu atención al cliente?</h2>
          <CTAButton text="Comenzar con Lía" className="text-lg px-8 py-3" />
        </div>
      </section>
    </>
  )
}
