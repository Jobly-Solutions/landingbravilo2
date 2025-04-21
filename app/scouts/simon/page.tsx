import Image from "next/image"
import HeroSection from "@/components/hero-section"
import CTAButton from "@/components/cta-button"
import { Header } from "@/components/header"
export default function SimonPage() {
  return (
    <>
    <Header />
      <HeroSection
        title="Simón - Ventas automatizadas"
        subtitle="Capta leads, responde dudas y concreta ventas por WhatsApp, email o desde tu web. Siempre disponible."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative h-[400px] w-[300px]">
                <Image
                  src="/Simon400.png?height=400&width=300"
                  alt="Simón - Asistente de ventas automatizadas"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Potencia tus ventas sin ampliar tu equipo</h2>
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
                    <h3 className="text-xl font-semibold mb-2">Captación de leads calificados</h3>
                    <p className="text-gray-600">
                      Simón identifica y califica automáticamente a tus potenciales clientes, priorizando los más
                      prometedores.
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
                    <h3 className="text-xl font-semibold mb-2">Respuestas inmediatas a consultas</h3>
                    <p className="text-gray-600">
                      Responde preguntas sobre productos, precios y disponibilidad al instante, sin hacer esperar a tus
                      clientes.
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
                    <h3 className="text-xl font-semibold mb-2">Seguimiento personalizado</h3>
                    <p className="text-gray-600">
                      Mantiene el contacto con tus leads a través de seguimientos programados y personalizados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CTAButton text="Potencia tus ventas con Simón" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Beneficios de automatizar tus ventas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Nunca pierdes una oportunidad</h3>
              <p className="text-gray-600">
                Simón responde a todas las consultas de ventas al instante, incluso fuera del horario comercial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Conversión optimizada</h3>
              <p className="text-gray-600">
                Incrementa hasta un 35% tus tasas de conversión con seguimientos consistentes y personalizados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Datos para mejorar</h3>
              <p className="text-gray-600">
                Obtén insights valiosos sobre tus clientes y optimiza tu estrategia de ventas continuamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para automatizar tus ventas?</h2>
          <CTAButton text="Comenzar con Simón" className="text-lg px-8 py-3" />
        </div>
      </section>
    </>
  )
}
