import { CreditCard, CalendarClock, Settings, CheckSquare, Rocket } from "lucide-react"

export function Process() {
  const steps = [
    {
      number: "1",
      title: "Elige tu plan",
      description: "Selecciona el plan que mejor se adapte a tus necesidades y presupuesto",
      icon: CreditCard,
    },
    {
      number: "2",
      title: "Reunión de Onboarding",
      description: "Un especialista te guiará en la configuración inicial y resolverá tus dudas",
      icon: CalendarClock,
    },
    {
      number: "3",
      title: "Configuración de scouts",
      description: "Adaptamos los scouts a tus procesos y herramientas existentes",
      icon: Settings,
    },
    {
      number: "4",
      title: "Prueba y validación",
      description: "Verifica el funcionamiento con casos reales de tu empresa",
      icon: CheckSquare,
    },
    {
      number: "5",
      title: "Lanzamiento",
      description: "Implementación completa y capacitación a tu equipo",
      icon: Rocket,
    },
  ]

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nosotros nos encargamos de TODO</h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Ponte cómodo y deja que nosotros hagamos lo más complicado
        </p>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-5 gap-6 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10">
                {/* Indicador de paso con número */}
                <div className="w-12 h-12 rounded-full bg-white border border-[#0071E3] flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-5 h-5 text-[#0071E3]" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0071E3] text-white flex items-center justify-center text-xs font-medium">
                    {step.number}
                  </div>
                </div>

                {/* Contenido */}
                <div className="text-center">
                  <h3 className="text-base font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

