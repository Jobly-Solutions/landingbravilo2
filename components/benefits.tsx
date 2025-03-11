import { Check, X } from "lucide-react"

export function Benefits() {
  const withScouts = [
    {
      title: "Decisiones basadas en datos",
      description: "Análisis profundo y recomendaciones basadas en datos reales para cada decisión de contratación.",
    },
    {
      title: "Procesos automatizados",
      description: "Tareas repetitivas gestionadas automáticamente, liberando tiempo para lo estratégico.",
    },
    {
      title: "Respuesta inmediata",
      description: "Atención 24/7 a candidatos y empleados, mejorando la experiencia.",
    },
  ]

  const withoutScouts = [
    {
      title: "Decisiones subjetivas",
      description: "Procesos basados en intuición y criterios no estandarizados.",
    },
    {
      title: "Trabajo manual",
      description: "Tiempo valioso perdido en tareas administrativas y repetitivas.",
    },
    {
      title: "Tiempos de espera",
      description: "Demoras en respuestas y procesos que generan frustración.",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          ¿Por qué automatizar la gestión de talento con nuestros scouts?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Con scouts */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#0071E3] mb-6">Con nuestros scouts</h3>
            {withScouts.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0071E3]/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#0071E3]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sin scouts */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Sin nuestros scouts</h3>
            {withoutScouts.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
