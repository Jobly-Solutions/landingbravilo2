import { Users, Briefcase, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardStats() {
  const stats = [
    {
      title: "Candidatos Activos",
      value: "342",
      change: "+18%",
      icon: Users,
    },
    {
      title: "Vacantes Abiertas",
      value: "24",
      change: "+5%",
      icon: Briefcase,
    },
    {
      title: "Tiempo Promedio",
      value: "18 días",
      change: "-12%",
      icon: Clock,
    },
    {
      title: "Contrataciones",
      value: "42",
      change: "+24%",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-xs text-green-500">{stat.change}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

