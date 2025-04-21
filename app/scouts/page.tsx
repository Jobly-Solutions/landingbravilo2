import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"

export default function ScoutsPage() {
  return (
    <>
      <HeroSection
        title="Conocé nuestros Scouts de IA"
        subtitle="Ellos se encargan de hacer el trabajo repetitivo y tedioso, para que tu equipo pueda enfocarse en lo que realmente importa."
      />

      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-blue-50 p-4 md:p-6 flex justify-center items-center">
                  <div className="relative h-[160px] md:h-[200px] w-[120px] md:w-[150px]">
                    <Image
                      src="/placeholder.svg?height=200&width=150"
                      alt="Lía - Atención al cliente"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Lía</h2>
                  <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Atención al cliente 24/7</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    Responde consultas frecuentes, gestiona reclamos y acompaña al cliente en cada paso, sin demoras ni
                    descansos.
                  </p>
                  <Link
                    href="/scouts/lia"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm md:text-base"
                  >
                    Ver más detalles
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-blue-50 p-4 md:p-6 flex justify-center items-center">
                  <div className="relative h-[160px] md:h-[200px] w-[120px] md:w-[150px]">
                    <Image
                      src="/placeholder.svg?height=200&width=150"
                      alt="Simón - Ventas automatizadas"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Simón</h2>
                  <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Ventas automatizadas</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    Capta leads, responde dudas y concreta ventas por WhatsApp, email o desde tu web. Siempre
                    disponible.
                  </p>
                  <Link
                    href="/scouts/simon"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm md:text-base"
                  >
                    Ver más detalles
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-blue-50 p-4 md:p-6 flex justify-center items-center">
                  <div className="relative h-[160px] md:h-[200px] w-[120px] md:w-[150px]">
                    <Image
                      src="/placeholder.svg?height=200&width=150"
                      alt="Vera - Gestión de pedidos"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Vera</h2>
                  <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Gestión de pedidos</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    Recibe pedidos, los organiza, hace cálculos automáticos y coordina entregas o retiros sin
                    intervención humana.
                  </p>
                  <Link
                    href="/scouts/vera"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm md:text-base"
                  >
                    Ver más detalles
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-blue-50 p-4 md:p-6 flex justify-center items-center">
                  <div className="relative h-[160px] md:h-[200px] w-[120px] md:w-[150px]">
                    <Image
                      src="/placeholder.svg?height=200&width=150"
                      alt="Tomi - Asistente de agenda"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">Tomi</h2>
                  <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Asistente de agenda</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    Agenda turnos o reuniones según disponibilidad, envía recordatorios y mejora tu organización diaria.
                  </p>
                  <Link
                    href="/scouts/tomi"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm md:text-base"
                  >
                    Ver más detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">¿Cómo funcionan nuestros scouts?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-3xl md:text-4xl font-bold mb-3 md:mb-4">01</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Entrenamiento personalizado</h3>
              <p className="text-sm md:text-base text-gray-600">
                Cada scout se entrena con la información específica de tu negocio para responder exactamente como lo
                harías tú.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-3xl md:text-4xl font-bold mb-3 md:mb-4">02</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Integración con tus sistemas</h3>
              <p className="text-sm md:text-base text-gray-600">
                Se conectan con tus herramientas actuales: CRM, calendario, sistema de gestión y más.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 text-3xl md:text-4xl font-bold mb-3 md:mb-4">03</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Mejora continua</h3>
              <p className="text-sm md:text-base text-gray-600">
                Aprenden y mejoran constantemente a partir de cada interacción, optimizando sus respuestas y procesos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">¿Listo para conocer a nuestros scouts en acción?</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Agenda una demo personalizada y descubre cómo nuestros scouts pueden transformar tu negocio.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 md:px-8 py-2 md:py-3 rounded-md text-base md:text-lg"
          >
            Agendar Demo
          </Link>
        </div>
      </section>
    </>
  )
}
