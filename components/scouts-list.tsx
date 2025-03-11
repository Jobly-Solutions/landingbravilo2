import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Settings, MessageSquare } from "lucide-react"
import Image from "next/image"

export function ScoutsList() {
  const scouts = [
    {
      id: 1,
      name: "Bruno",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BRUNO%20AI-l2U3HqJunVpFG9rwLkeXYypj0ohx3c.webp",
      description: "Buscador de talento proactivo",
      visibility: "public",
    },
    {
      id: 2,
      name: "Clara",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara%20AI-PGjvuoMzbd7sAxoYmtMKZApUKsahgv.webp",
      description: "Evaluadora de candidatos",
      visibility: "public",
    },
    {
      id: 3,
      name: "Mateo",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MATEO%20AI-glWTfgRWVpg6tikqIt01nCwafil6aX.webp",
      description: "Estratega de equipo",
      visibility: "public",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Scouts</h1>
        <Button className="bg-[#0D6EFD] hover:bg-[#0B5ED7] text-white">+ Nuevo Scout</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        {scouts.map((scout) => (
          <div key={scout.id} className="bg-white rounded-lg border overflow-hidden">
            <div className="bg-black p-4 flex justify-center">
              <Image
                src={scout.image || "/placeholder.svg"}
                alt={scout.name}
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#0D6EFD]">{scout.name}</h3>
              <p className="text-gray-600">{scout.description}</p>
              <Button className="w-full mt-4 bg-[#0D6EFD] hover:bg-[#0B5ED7] text-white">Activar {scout.name}</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="text-gray-600">
          Los Scouts de Jobly son tu equipo de reclutamiento AI. Analizan, filtran y entrevistan candidatos
          automáticamente, aprendiendo de tus bases de datos para optimizar cada contratación. Inteligencia real para
          decisiones de talento sin fricción.
        </p>
      </div>

      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Visibilidad</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scouts.map((scout) => (
              <TableRow key={scout.id}>
                <TableCell className="font-medium">{scout.name}</TableCell>
                <TableCell>{scout.description}</TableCell>
                <TableCell>
                  <span className="text-green-600">{scout.visibility}</span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between text-sm text-gray-500 px-2">
        <span>1 / 200 Scouts</span>
        <span>1249 / 200000 Consultas</span>
      </div>
    </div>
  )
}

