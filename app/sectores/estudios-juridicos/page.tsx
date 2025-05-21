import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, FileText, Calendar, MessageSquare, ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EstudiosJuridicosPage() {
  // Casos de uso específicos para estudios jurídicos
  const casosDeUso = [
    {
      titulo: "Gestión de expedientes",
      descripcion:
        "Automatiza el seguimiento de expedientes, plazos y documentación, reduciendo errores y optimizando tiempos.",
      icono: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      titulo: "Agendamiento de audiencias",
      descripcion:
        "Coordina automáticamente audiencias, reuniones y plazos procesales, evitando superposiciones y olvidos.",
      icono: <Calendar className="h-5 w-5 text-primary" />,
    },
    {
      titulo: "Atención a clientes",
      descripcion:
        "Responde consultas frecuentes, actualiza a clientes sobre el estado de sus casos y programa reuniones.",
      icono: <MessageSquare className="h-5 w-5 text-primary" />,
    },
  ]

  // Beneficios específicos para estudios jurídicos
  const beneficios = [
    "Reducción del 45% en tiempo dedicado a tareas administrativas",
    "Disminución del 30% en errores de seguimiento de plazos",
    "Aumento del 35% en la satisfacción del cliente",
    "Mejora del 40% en la organización de documentos legales",
    "Incremento del 25% en la capacidad de atención de casos",
    "Optimización del 50% en el proceso de facturación",
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
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary">
            Inicio
          </Link>
          <Link href="/scouts" className="text-sm font-medium text-gray-600 hover:text-primary">
            Scouts
          </Link>
          <Link href="/sectores" className="text-sm font-medium text-primary">
            Sectores
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-primary">
            Precios
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden text-sm font-medium text-gray-600 hover:text-primary md:block">
            Contacto
          </Link>
          <Button variant="outline" className="hidden md:inline-flex">
            Iniciar sesión
          </Button>
          <Button>Registrarse</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/sectores" className="flex items-center hover:text-primary">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Volver a sectores
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                  SECTOR JURÍDICO
                </Badge>
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                  Transforma tu estudio jurídico con IA
                </h1>
                <p className="mb-8 text-lg text-gray-700">
                  Nuestros scouts de IA están diseñados específicamente para el sector legal, automatizando tareas
                  repetitivas, mejorando el seguimiento de casos y optimizando la gestión de clientes.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/onboarding">
                  <Button size="lg" className="h-12 px-8">
                    Probar Bravilo Ahora
                  </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                    Ver demo <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-100 rounded-3xl blur-3xl opacity-30"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/modern-law-office.png"
                    alt="Estudio jurídico con IA"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de Uso Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                CASOS DE USO
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Cómo Bravilo transforma el sector jurídico
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Nuestros scouts de IA están diseñados para resolver los desafíos específicos del sector legal,
                ofreciendo soluciones personalizadas que maximizan la eficiencia y los resultados.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {casosDeUso.map((caso, index) => (
                <div key={index} className="rounded-xl bg-white p-8 shadow-sm border border-gray-100">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 border border-purple-100">
                    {caso.icono}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">{caso.titulo}</h3>
                  <p className="text-base text-gray-700">{caso.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scouts Recomendados Section */}
        <section className="container py-16 bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                SCOUTS RECOMENDADOS
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Los mejores scouts para estudios jurídicos
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Estos scouts están especialmente diseñados para potenciar tu estudio jurídico, automatizando tareas y
                mejorando resultados.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
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
                    Perfecta para el análisis de jurisprudencia, investigación legal y preparación de informes.
                    Automatiza la búsqueda de precedentes y optimiza la preparación de casos.
                  </p>
                  <Link href="/scouts/vera">
                    <Button variant="outline" size="sm" className="group-hover:bg-purple-600 group-hover:text-white">
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
                    Ideal para la gestión de expedientes, seguimiento de plazos y coordinación de audiencias. Automatiza
                    procesos administrativos y mejora la eficiencia de tu estudio jurídico.
                  </p>
                  <Link href="/scouts/simon">
                    <Button variant="outline" size="sm" className="group-hover:bg-green-600 group-hover:text-white">
                      Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                BENEFICIOS
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Resultados comprobados en el sector jurídico
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Nuestros clientes del sector legal han experimentado mejoras significativas en sus operaciones y
                resultados gracias a nuestros scouts de IA.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {beneficios.map((beneficio, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-base font-medium text-gray-700">{beneficio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="container py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="36"
                  fill="none"
                  viewBox="0 0 45 36"
                  className="text-primary/20"
                >
                  <path
                    fill="currentColor"
                    d="M13.304 0C6.027 0 0 6.04 0 13.333c0 7.292 6.027 13.333 13.304 13.333 15.965 0 6.385 9.334 0 9.334v-2.667C21.286 33.333 45 26.667 45 13.333 45 6.04 38.973 0 31.696 0H13.304Z"
                  />
                </svg>
              </div>
              <p className="mb-8 text-xl text-gray-700">
                "Bravilo ha transformado completamente la forma en que gestionamos nuestros casos. El seguimiento
                automático de plazos y la organización de expedientes nos ha permitido reducir errores y aumentar
                nuestra productividad en un 35%. Además, la atención automática a clientes ha mejorado
                significativamente su satisfacción."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200">
                  <Image
                    src="/professional-lawyer-headshot.png"
                    alt="Carlos Rodríguez"
                    width={48}
                    height={48}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Carlos Rodríguez</p>
                  <p className="text-sm text-gray-500">Socio Director, Rodríguez & Asociados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Potencia tu estudio jurídico con Bravilo
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Comienza hoy mismo con una prueba gratuita y descubre cómo nuestros scouts pueden transformar tu
                práctica legal
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/onboarding">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-white/90">
                  Probar Bravilo Ahora
                </Button>
                </link>
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
                  <Link href="/scouts" className="hover:text-white">
                    Scouts
                  </Link>
                </li>
                <li>
                  <Link href="/sectores" className="hover:text-white">
                    Sectores
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
