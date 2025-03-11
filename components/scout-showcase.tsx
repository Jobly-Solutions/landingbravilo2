import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ScoutShowcase() {
  const scouts = [
    {
      name: "Bruno",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRUNO%20AI-l2U3HqJunVpFG9rwLkeXYypj0ohx3c.webp",
      title: "Buscador de Talento",
      description:
        "Encuentra talento antes de que lo necesites. Recorre bases de datos, redes y plataformas para encontrar el perfil perfecto para tu equipo, sin que pierdas tiempo buscando en el océano de candidatos.",
      action: "Activar Bruno",
    },
    {
      name: "Clara",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara%20AI-PGjvuoMzbd7sAxoYmtMKZApUKsahgv.webp",
      title: "Evaluadora de Candidatos",
      description:
        "No es solo un 'match'. Clara analiza cultura, skills y expectativas de cada candidato para asegurarse de que la contratación tenga sentido. Evita entrevistas innecesarias.",
      action: "Activar Clara",
    },
    {
      name: "Mateo",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MATEO%20AI-glWTfgRWVpg6tikqIt01nCwafil6aX.webp",
      title: "Estratega de Equipo",
      description:
        "Mateo no solo te ayuda a contratar, sino a pensar en el futuro de tu equipo. Analiza brechas de talento, te sugiere qué perfiles sumar y te ayuda a construir estructuras escalables.",
      action: "Activar Mateo",
    },
  ]

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tus Scouts AI</h2>
        <Button variant="outline">Ver todos</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {scouts.map((scout, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="bg-black p-4 flex justify-center">
              <Image
                src={scout.image || "/placeholder.svg"}
                alt={scout.name}
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-blue-600">{scout.name}</CardTitle>
              <CardDescription>{scout.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{scout.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{scout.action}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

