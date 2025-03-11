import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "$99",
      features: [
        "Acceso a Bruno (búsqueda de talento)",
        "Panel de rendimiento básico",
        "Integración con 1 plataforma",
        "Soporte por email",
      ],
    },
    {
      name: "Pro",
      price: "$169",
      popular: true,
      features: [
        "Acceso a Bruno y Clara",
        "Panel de rendimiento avanzado",
        "Integración con 3 plataformas",
        "Soporte prioritario",
        "Personalización básica",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Acceso a Bruno, Clara y Mateo",
        "Panel de rendimiento completo",
        "Integraciones ilimitadas",
        "Soporte 24/7",
        "Personalización avanzada",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Optimiza tu equipo con Bravilo Scouts</h2>
        <p className="text-xl text-gray-600 text-center mb-16">Planes flexibles que se adaptan a tus necesidades</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <Card key={i} className={`relative ${plan.popular ? "border-[#0071E3] border-2" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0071E3] text-white px-4 py-1 rounded-full text-sm">
                  Más popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
                  </span>
                  {typeof plan.price === "number" && <span className="text-gray-600">/mes</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#0071E3]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
              <a
    href="https://calendar.app.google/FXgPt1w8ZTGpU8Fa9"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
                <Button className="w-full bg-[#0071E3] hover:bg-[#0071E3]/90">Comenzar</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto p-8 border-2 border-[#0071E3] rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Garantía de calidad 90 días</h3>
          <p className="text-gray-600">
            Si a los 90 días de implementar los scouts los resultados no son los esperados, te devolvemos todo tu
            dinero.
          </p>
        </div>
      </div>
    </section>
  )
}

