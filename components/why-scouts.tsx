import { Check, X } from "lucide-react"

export function WhyScouts() {
  const comparisons = [
    {
      withScouts: {
        title: "Atención 24/7 a clientes",
        description: "Tus scouts responden consultas, asesoran y derivan a humanos solo cuando es necesario.",
      },
      withoutScouts: {
        title: "Tiempos de espera",
        description: "Clientes insatisfechos por demoras en respuestas y procesos lentos.",
      },
    },
    {
      withScouts: {
        title: "Procesos automatizados",
        description: "Gestión de pedidos, agendamiento y seguimiento sin intervención manual.",
      },
      withoutScouts: {
        title: "Trabajo manual",
        description: "Tiempo valioso perdido en tareas administrativas repetitivas.",
      },
    },
    {
      withScouts: {
        title: "Conversión de ventas",
        description: "Mayor tasa de conversión gracias a respuestas inmediatas y personalizadas.",
      },
      withoutScouts: {
        title: "Oportunidades perdidas",
        description: "Potenciales clientes que abandonan por falta de atención oportuna.",
      },
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Por qué automatizar la gestión de tu negocio con nuestros scouts?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#0071E3] text-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Con nuestros scouts</h3>
            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <div key={`with-${index}`} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{item.withScouts.title}</h4>
                    <p className="text-blue-100">{item.withScouts.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Sin nuestros scouts</h3>
            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <div key={`without-${index}`} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">{item.withoutScouts.title}</h4>
                    <p className="text-gray-600">{item.withoutScouts.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

