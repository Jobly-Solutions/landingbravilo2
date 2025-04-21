import Image from "next/image"
import HeroSection from "@/components/hero-section"
import CTAButton from "@/components/cta-button"
import { Header } from "@/components/header"


export default function TomiPage() {
  return (
    <>
    <Header />
      <HeroSection
        title="Tomi - Asistente de agenda"
        subtitle="Agenda turnos o reuniones según disponibilidad, envía recordatorios y mejora tu organización diaria."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative h-[400px] w-[300px]">
                <Image
                  src="/Tomi400.png?height=400&width=300"
                  alt="Tomi - Asistente de agenda"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Simplifica la gestión de tu agenda</h2>
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
                    <h3 className="text-xl font-semibold mb-2">Agendamiento inteligente</h3>
                    <p className="text-gray-600">
                      Tomi coordina reuniones y turnos según tu disponibilidad real, evitando superposiciones.
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
                    <h3 className="text-xl font-semibold mb-2">Recordatorios automáticos</h3>
                    <p className="text-gray-600">
                      Envía recordatorios personalizados a tus clientes, reduciendo las ausencias y cancelaciones de
                      último momento.
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
                    <h3 className="text-xl font-semibold mb-2">Integración con calendarios</h3>
                    <p className="text-gray-600">
                      Se sincroniza con Google Calendar, Outlook y otras plataformas para mantener tu agenda unificada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CTAButton text="Organiza tu agenda con Tomi" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Beneficios de automatizar tu agenda</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Ahorro de tiempo</h3>
              <p className="text-gray-600">
                Elimina el intercambio de mensajes para coordinar horarios, ahorrando hasta 5 horas semanales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Reducción de ausencias</h3>
              <p className="text-gray-600">
                Disminuye hasta un 40% las ausencias gracias a los recordatorios automáticos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Mejor experiencia</h3>
              <p className="text-gray-600">
                Tus clientes valoran la facilidad para agendar y modificar sus citas sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para optimizar tu agenda?</h2>
          <CTAButton text="Comenzar con Tomi" className="text-lg px-8 py-3" />
        </div>
      </section>
    </>
  )
}
