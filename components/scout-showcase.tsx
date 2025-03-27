import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ScoutShowcase() {
  const scouts = [
    {
      id: 1,
      name: "Lía",
      role: "Atención al cliente 24/7",
      description: "Responde consultas frecuentes, gestiona reclamos y acompaña al cliente en cada paso, sin demoras ni descansos.",
      image: "/Lia.png?height=200&width=200",
    },
    {
      id: 2,
      name: "Simón",
      role: "Ventas automatizadas",
      description: "Capta leads, responde dudas y concreta ventas por WhatsApp, email o desde tu web. Siempre disponible.",
      image: "/Simon.png?height=200&width=200",
    },
    {
      id: 3,
      name: "Vera",
      role: "Gestión de pedidos",
      description: "Recibe pedidos, los organiza, hace cálculos automáticos y coordina entregas o retiros sin intervención humana.",
      image: "/Vera.png?height=200&width=200",
    },
    {
      id: 4,
      name: "Tomi",
      role: "Asistente de agenda",
      description: "Agenda turnos o reuniones según disponibilidad, envía recordatorios y mejora tu organización diaria.",
      image: "/tomi.png?height=200&width=200",
    },
  ]

  return (
    <section className="py-20 bg-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Conocé nuestros Scouts de IA</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Los encargados de hacer crecer tu negocio de forma automática.
            <br />
            Sin errores, sin quejas, y mucho más efectivos que cualquier chatbot genérico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scouts.map((scout) => (
            <div key={scout.id} className="bg-blue-50 rounded-3xl p-6 flex items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-[#0071E3] rounded-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image src={scout.image || "/placeholder.svg"} alt={scout.name} fill className="object-cover" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{scout.name}</h3>
                <p className="text-[#0071E3] font-medium mb-2">{scout.role}</p>
                <p className="text-gray-700 mb-4">{scout.description}</p>

                <div className="text-right">
                  <Button className="bg-[#0071E3] hover:bg-blue-700 text-white rounded-full px-6" size="sm">
                    Ver más detalles
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
