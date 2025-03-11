"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, Filter } from "lucide-react"

export function CandidatesList() {
  const [searchTerm, setSearchTerm] = useState("")

  const candidates = [
    {
      id: 1,
      name: "Ana García",
      position: "Frontend Developer",
      status: "Entrevista",
      match: "92%",
      source: "Bruno AI",
      date: "10/03/2025",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "UX Designer",
      status: "Evaluación",
      match: "88%",
      source: "Clara AI",
      date: "09/03/2025",
    },
    {
      id: 3,
      name: "Laura Martínez",
      position: "Product Manager",
      status: "Contratado",
      match: "95%",
      source: "Mateo AI",
      date: "05/03/2025",
    },
    {
      id: 4,
      name: "Miguel Sánchez",
      position: "Backend Developer",
      status: "Nuevo",
      match: "78%",
      source: "Bruno AI",
      date: "10/03/2025",
    },
    {
      id: 5,
      name: "Sofía López",
      position: "Data Scientist",
      status: "Rechazado",
      match: "65%",
      source: "Clara AI",
      date: "08/03/2025",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Entrevista":
        return "bg-blue-100 text-blue-800"
      case "Evaluación":
        return "bg-purple-100 text-purple-800"
      case "Contratado":
        return "bg-green-100 text-green-800"
      case "Nuevo":
        return "bg-yellow-100 text-yellow-800"
      case "Rechazado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getMatchColor = (match: string) => {
    const percentage = Number.parseInt(match)
    if (percentage >= 90) return "text-green-600"
    if (percentage >= 80) return "text-blue-600"
    if (percentage >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar candidatos..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidato</TableHead>
              <TableHead>Posición</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Match</TableHead>
              <TableHead>Fuente</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCandidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell className="font-medium">{candidate.name}</TableCell>
                <TableCell>{candidate.position}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(candidate.status)} variant="outline">
                    {candidate.status}
                  </Badge>
                </TableCell>
                <TableCell className={`font-medium ${getMatchColor(candidate.match)}`}>{candidate.match}</TableCell>
                <TableCell>{candidate.source}</TableCell>
                <TableCell>{candidate.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Abrir menú</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                      <DropdownMenuItem>Programar entrevista</DropdownMenuItem>
                      <DropdownMenuItem>Enviar mensaje</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

