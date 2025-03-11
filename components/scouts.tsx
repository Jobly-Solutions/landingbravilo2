import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Scouts() {
  const scouts = [
    {
      name: "Bruno",
      image:
        "Bruno-bravilo.jpg",
      title: "Encuentra talento proactivamente",
      description:
        "Recorre bases de datos y plataformas para encontrar el perfil perfecto antes de que lo necesites.",
      capabilities: [
        "Búsqueda proactiva de talento",
        "Análisis de perfiles",
        "Recomendaciones personalizadas",
      ],
    },
    {
      name: "Clara",
      image:
        "Clara-bravilo.jpg",
      title: "Optimiza decisiones de contratación",
      description:
        "Analiza cultura, habilidades y expectativas para asegurar que cada contratación tenga sentido.",
      capabilities: [
        "Evaluación de fit cultural",
        "Análisis de competencias",
        "Predicción de rendimiento",
      ],
    },
    {
      name: "Mateo",
      image:
        "Mateo-bravilo.jpg",
      title: "Planifica el crecimiento del equipo",
      description:
        "Analiza brechas de talento y sugiere perfiles para construir estructuras escalables.",
      capabilities: ["Planificación estratégica", "Análisis de gaps", "Proyecciones de crecimiento"],
    },
  ]

  return (
    <section id="scouts" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Conoce a tus nuevos scouts de talento</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Tres asistentes especializados que revolucionarán tu gestión de talento
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {scouts.map((scout, i) => (
            <Card key={i} className="border-2 hover:border-[#0071E3] transition-colors flex flex-col">
              {/* Contenedor para la imagen, con posición relativa y altura fija */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                 src={scout.image || "/placeholder.svg"}
                 alt={scout.name}
                 fill
                 className="object-cover object-center"
                 sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>


              <CardHeader>
                <CardTitle className="text-2xl text-[#0071E3]">{scout.name}</CardTitle>
                <h4 className="font-semibold">{scout.title}</h4>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-6">{scout.description}</p>
                <div className="space-y-3">
                  <h5 className="font-semibold">Capacidades:</h5>
                  {scout.capabilities.map((capability, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#0071E3]" />
                      <span className="text-sm">{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <div className="p-6 pt-0 mt-auto">
              <a
    href="https://calendar.app.google/FXgPt1w8ZTGpU8Fa9"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
                <Button className="w-full bg-[#0071E3] hover:bg-[#0071E3]/90">
                  Contratar {scout.name}
                </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
