import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, ArrowRight, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ScoutsPage() {
  // Datos de los scouts
  const scouts = [
    {
      id: "lia",
      name: "Lia",
      role: "Scout de ventas y IA",
      description:
        "Responde consultas, gestiona horarios y consolida el cierre comercial en tu empresa. Lia es experta en automatizar el proceso de ventas y seguimiento de clientes.",
      image: "/scout-lia.png",
      color: "blue",
      features: [
        "Respuesta automática a consultas de clientes",
        "Seguimiento de leads y oportunidades",
        "Agendamiento inteligente de reuniones",
        "Agendamiento inteligente de reuniones",
        "Generación de propuestas comerciales",
        "Análisis de conversiones y métricas de ventas",
      ],
      industries: ["Inmobiliaria", "Retail", "SaaS", "Consultoría"],
    },
    {
      id: "simon",
      name: "Simón",
      role: "Scout de operaciones",
      description:
        "Envía comunicaciones, gestiona turnos con clientes, analiza datos y reporta resultados. Simón optimiza los procesos operativos para maximizar la eficiencia.",
      image: "/scout-simon.png",
      color: "green",
      features: [
        "Automatización de flujos de trabajo operativos",
        "Gestión de inventario y recursos",
        "Coordinación de equipos y tareas",
        "Generación de reportes operativos",
        "Optimización de procesos internos",
      ],
      industries: ["Logística", "Manufactura", "Servicios", "Salud"],
    },
    {
      id: "vera",
      name: "Vera",
      role: "Scout de análisis",
      description:
        "Analiza datos, genera reportes, identifica tendencias y envía información valiosa. Vera transforma datos complejos en insights accionables para tu negocio.",
      image: "/scout-vera.png",
      color: "purple",
      features: [
        "Análisis predictivo de datos empresariales",
        "Generación automática de reportes",
        "Identificación de patrones y tendencias",
        "Monitoreo de KPIs y métricas clave",
        "Recomendaciones basadas en datos",
      ],
      industries: ["Finanzas", "Marketing", "E-commerce", "Tecnología"],
    },
    {
      id: "tomi",
      name: "Tomi",
      role: "Scout de soporte",
      description:
        "Responde consultas, resuelve problemas y deriva casos complejos a especialistas. Tomi mejora la experiencia de soporte al cliente con respuestas rápidas y precisas.",
      image: "/scout-tomi.png",
      color: "amber",
      features: [
        "Atención al cliente 24/7 automatizada",
        "Resolución de problemas frecuentes",
        "Escalamiento inteligente de casos complejos",
        "Base de conocimiento dinámica",
        "Seguimiento de satisfacción del cliente",
      ],
      industries: ["Tecnología", "Telecomunicaciones", "Servicios", "E-commerce"],
    },
  ]

  // Categorías de industrias para filtrar
  const industries = [
    "Todas",
    "Inmobiliaria",
    "Tecnología",
    "Finanzas",
    "Salud",
    "Logística",
    "E-commerce",
    "Servicios",
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="container z-40 flex h-20 items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/app-logo-icon.png" alt="Bravilo Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold text-primary">Bravilo</span>
            </div>
          </Link>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link href="https://braviloai.com/" className="text-sm font-medium text-gray-600 hover:text-primary">
            Inicio
          </Link>
          <Link href="https://braviloai.com/scouts" className="text-sm font-medium text-primary border-b-2 border-primary">
            Scouts
          </Link>
          <Link href="https://braviloai.com/sectores" className="text-sm font-medium text-primary">
            Sectores
          </Link>
          <Link href="https://braviloai.com#pricing" className="text-sm font-medium text-gray-600 hover:text-primary">
            Precios
          </Link>
          <Link href="https://braviloai.com/blog" className="text-sm font-medium text-gray-600 hover:text-primary">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="https://braviloai.com/contacto" className="hidden text-sm font-medium text-gray-600 hover:text-primary md:block">
            Contacto
          </Link>
          <Button variant="outline" className="hidden md:inline-flex">
            Iniciar sesión
          </Button>
          <Link href="/onboarding">
            <Button>Probar Bravilo ahora</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                SCOUTS DE IA
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Conoce a nuestros{" "}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Scouts Inteligentes
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
                Nuestros scouts de IA están diseñados para automatizar tareas específicas, optimizar procesos y
                potenciar el crecimiento de tu negocio. Descubre cuál es el ideal para tus necesidades.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/onboarding">
                  <Button size="lg" className="h-12 px-8">
                    Probar Bravilo ahora
                  </Button>
                </Link>
                
              </div>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">Todos los Scouts ({scouts.length})</h2>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm font-medium text-gray-500 mr-2">Filtrar por industria:</span>
              {industries.map((industry, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer whitespace-nowrap"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Scouts Grid */}
        <section className="container py-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Primera fila: Lia y Simon */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 transition-all hover:shadow-lg">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200 opacity-50 blur-3xl transition-all group-hover:opacity-70"></div>
              <div className="relative">
                <div className="mb-6 h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/scout-lia.png"
                    alt="Lia Scout"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Lia</h3>
                <p className="mb-2 text-sm font-medium text-blue-600">Scout de ventas y IA</p>
                <p className="mb-6 text-base text-gray-700">
                  Responde consultas, gestiona horarios y consolida el cierre comercial en tu empresa. Lia es experta en
                  automatizar el proceso de ventas y seguimiento de clientes.
                </p>
                <Link href="/scouts/lia">
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white">
                    Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 transition-all hover:shadow-lg">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-200 opacity-50 blur-3xl transition-all group-hover:opacity-70"></div>
              <div className="relative">
                <div className="mb-6 h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/scout-simon.png"
                    alt="Simón Scout"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Simón</h3>
                <p className="mb-2 text-sm font-medium text-green-600">Scout de operaciones</p>
                <p className="mb-6 text-base text-gray-700">
                  Envía comunicaciones, gestiona turnos con clientes, analiza datos y reporta resultados. Simón optimiza
                  los procesos operativos para maximizar la eficiencia.
                </p>
                <Link href="/scouts/simon">
                  <Button variant="outline" size="sm" className="group-hover:bg-green-600 group-hover:text-white">
                    Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Segunda fila: Vera y Tomi */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 transition-all hover:shadow-lg">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-200 opacity-50 blur-3xl transition-all group-hover:opacity-70"></div>
              <div className="relative">
                <div className="mb-6 h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/scout-vera.png"
                    alt="Vera Scout"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Vera</h3>
                <p className="mb-2 text-sm font-medium text-purple-600">Scout de análisis</p>
                <p className="mb-6 text-base text-gray-700">
                  Analiza datos, genera reportes, identifica tendencias y envía información valiosa. Vera transforma
                  datos complejos en insights accionables para tu negocio.
                </p>
                <Link href="/scouts/vera">
                  <Button variant="outline" size="sm" className="group-hover:bg-purple-600 group-hover:text-white">
                    Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-6 transition-all hover:shadow-lg">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-200 opacity-50 blur-3xl transition-all group-hover:opacity-70"></div>
              <div className="relative">
                <div className="mb-6 h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/scout-tomi.png"
                    alt="Tomi Scout"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Tomi</h3>
                <p className="mb-2 text-sm font-medium text-amber-600">Scout de soporte</p>
                <p className="mb-6 text-base text-gray-700">
                  Responde consultas, resuelve problemas y deriva casos complejos a especialistas. Tomi mejora la
                  experiencia de soporte al cliente con respuestas rápidas y precisas.
                </p>
                <Link href="/scouts/tomi">
                  <Button variant="outline" size="sm" className="group-hover:bg-amber-600 group-hover:text-white">
                    Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detalles de Scouts */}
        <section className="container py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                CARACTERÍSTICAS
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Scouts especializados para cada necesidad
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Cada scout está diseñado para resolver problemas específicos y optimizar diferentes áreas de tu negocio
              </p>
            </div>

            <div className="space-y-16">
              {scouts.slice(0, 4).map((scout, index) => (
                <div
                  key={scout.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="w-full md:w-2/5">
                    <div
                      className={`relative h-64 w-64 mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-${scout.color}-100 to-${scout.color}-200 p-4`}
                    >
                      <div className={`absolute inset-0 bg-${scout.color}-500 opacity-10 blur-3xl`}></div>
                      <div className="relative h-full w-full flex items-center justify-center">
                        <Image
                          src={scout.image || "/placeholder.svg"}
                          alt={`${scout.name} Scout`}
                          width={150}
                          height={150}
                          className="h-32 w-32 object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-3/5">
                    <h3 className={`mb-2 text-2xl font-bold text-${scout.color}-600`}>{scout.name}</h3>
                    <p className="mb-2 text-lg font-medium text-gray-900">{scout.role}</p>
                    <p className="mb-6 text-base text-gray-700">{scout.description}</p>
                    <div className="mb-6">
                      <p className="mb-3 font-medium text-gray-900">Características principales:</p>
                      <ul className="space-y-2">
                        {scout.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div
                              className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-${scout.color}-100`}
                            >
                              <Check className={`h-3 w-3 text-${scout.color}-600`} />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <p className="text-sm font-medium text-gray-700">Ideal para:</p>
                      {scout.industries.map((industry, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combinación de Scouts */}
        <section className="container py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                POTENCIA MULTIPLICADA
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Combina scouts para maximizar resultados
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Nuestros scouts trabajan juntos para crear soluciones integrales que transforman tu negocio
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Combinaciones populares</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="flex -space-x-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center z-10 border-2 border-white">
                          <span className="text-blue-600 font-bold">L</span>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center z-20 border-2 border-white">
                          <span className="text-green-600 font-bold">S</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Lia + Simón</p>
                        <p className="text-sm text-gray-700">
                          Automatiza el proceso de ventas y optimiza las operaciones para un flujo de trabajo perfecto
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex -space-x-2">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center z-10 border-2 border-white">
                          <span className="text-purple-600 font-bold">V</span>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center z-20 border-2 border-white">
                          <span className="text-amber-600 font-bold">T</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Vera + Tomi</p>
                        <p className="text-sm text-gray-700">
                          Analiza datos de soporte para mejorar la experiencia del cliente y optimizar la resolución de
                          problemas
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex -space-x-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center z-10 border-2 border-white">
                          <span className="text-blue-600 font-bold">L</span>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center z-30 border-2 border-white">
                          <span className="text-green-600 font-bold">S</span>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center z-20 border-2 border-white">
                          <span className="text-purple-600 font-bold">V</span>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Lia + Simon + Vera</p>
                        <p className="text-sm text-gray-700">
                          Automatiza ventas, optimiza operaciones y obtén análisis de datos avanzados para decisiones
                          estratégicas
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Beneficios de la combinación</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-700">Flujos de trabajo integrados y sin fricciones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-700">Comunicación perfecta entre diferentes áreas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-700">Análisis cruzado de datos para insights más profundos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-700">Automatización end-to-end de procesos complejos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-700">Escalabilidad mejorada para crecer sin fricción</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-primary/80 to-primary p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                ¿Listo para potenciar tu negocio con scouts de IA?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Comienza hoy mismo con una prueba gratuita y descubre cómo nuestros scouts pueden transformar tu forma
                de trabajar
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/onboarding">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Probar Bravilo ahora
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white/10"
                >
                  Agendar una demo <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/app-logo-icon.png" alt="Bravilo Logo" width={32} height={32} className="h-8 w-8" />
                <Image src="/bravilo-text-white.png" alt="Bravilo" width={100} height={24} className="h-6 w-auto" />
              </div>
              <p className="mt-4 text-sm">© 2023 Bravilo. Todos los derechos reservados.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">Producto</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Scouts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Soluciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Integraciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">Recursos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Guías
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-white">Empresa</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Términos de servicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
