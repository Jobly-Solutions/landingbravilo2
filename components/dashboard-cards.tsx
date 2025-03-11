import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DashboardCards() {
  const cards = [
    {
      title: "Actividad Reciente",
      description: "Últimas acciones realizadas en la plataforma",
      content: (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-4 pb-4 border-b">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">{i}</div>
              <div>
                <p className="font-medium">Acción realizada #{i}</p>
                <p className="text-sm text-muted-foreground">
                  Usuario realizó una acción hace {i} hora{i !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
      footer: (
        <Button variant="outline" className="w-full">
          Ver todas las actividades
        </Button>
      ),
    },
    {
      title: "Tareas Pendientes",
      description: "Tareas que requieren tu atención",
      content: (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              <span>Tarea pendiente #{i}</span>
            </div>
          ))}
        </div>
      ),
      footer: (
        <Button variant="outline" className="w-full">
          Administrar tareas
        </Button>
      ),
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>{card.content}</CardContent>
          <CardFooter>{card.footer}</CardFooter>
        </Card>
      ))}
    </div>
  )
}

