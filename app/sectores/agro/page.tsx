import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, CloudRain, LineChart, Sprout, ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AgroPage() {
  // Casos de uso específicos para agro
  const casosDeUso = [
    {
      titulo: "Monitoreo de cultivos",
      descripcion:
        "Automatiza el seguimiento del estado de los cultivos, detectando problemas tempranamente y optimizando el rendimiento.",
      icono: <Sprout className="h-5 w-5 text-primary" />,
    },
    {
      titulo: "Predicción climática",
      descripcion:
        "Anticipa condiciones meteorológicas y su impacto en los cultivos, permitiendo tomar decisiones preventivas.",
      icono: <CloudRain className="h-5 w-5 text-primary" />,
    },
    {
      titulo: "Análisis de rendimiento",
      descripcion:
        "Obtén insights valiosos sobre el rendimiento de tus cultivos, identificando áreas de mejora y optimización.",
      icono: <LineChart className="h-5 w-5 text-primary" />,
    },
  ]

  // Beneficios específicos para agro
  const beneficios = [
    "Aumento del 25% en el rendimiento de los cultivos",
    "Reducción del 30% en el uso de recursos hídricos",
    "Disminución del 40% en el uso de pesticidas",
    "Mejora del 35% en la precisión de la siembra",
    "Optimización del 45% en la gestión de inventario agrícola",
    "Reducción del 20% en costos operativos generales",
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
          <Link href="https://braviloai.com/scouts" className="text-sm font-medium text-gray-600 hover:text-primary">
            Scouts
          </Link>
          <Link href="https://braviloai.com/sectores" className="text-sm font-medium text-primary">
            Sectores
          </Link>
          <Link href="https://braviloai.com#pricing" className="text-sm font-medium text-gray-600 hover:text-primary">
            Precios
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="https://braviloai.com/contacto" className="hidden text-sm font-medium text-gray-600 hover:text-primary md:block">
            Contacto
          </Link>
          <Button variant="outline" className="hidden md:inline-flex">
            Iniciar sesión
          </Button>
          <Link href="https://braviloai.com/onboarding" className="text-sm font-medium text-gray-600 hover:text-primary">
          <Button>Probar Bravilo ahora</Button>
          </Link>
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
        <section className="bg-gradient-to-b from-amber-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                  SECTOR AGRÍCOLA
                </Badge>
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                  Revoluciona tu producción agrícola con IA
                </h1>
                <p className="mb-8 text-lg text-gray-700">
                  Nuestros scouts de IA están diseñados específicamente para el sector agrícola, optimizando el
                  monitoreo de cultivos, la gestión de recursos y la toma de decisiones basada en datos.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/onboarding">
                <Button size="lg" className="h-12 px-8">
                  Probar Bravilo ahora
                </Button>
              </Link>
               
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-100 rounded-3xl blur-3xl opacity-30"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&query=modern agriculture with technology and drones"
                    alt="Agricultura con IA"
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
                Cómo Bravilo transforma el sector agrícola
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Nuestros scouts de IA están diseñados para resolver los desafíos específicos del sector agrícola,
                ofreciendo soluciones personalizadas que maximizan la eficiencia y los resultados.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {casosDeUso.map((caso, index) => (
                <div key={index} className="rounded-xl bg-white p-8 shadow-sm border border-gray-100">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 border border-amber-100">
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
                Los mejores scouts para agricultura
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Estos scouts están especialmente diseñados para potenciar tu producción agrícola, automatizando tareas y
                mejorando resultados.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
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
                    Perfecto para la gestión de recursos agrícolas, planificación de siembra y cosecha, y coordinación
                    de equipos de campo. Automatiza procesos operativos y mejora la eficiencia de tu producción.
                  </p>
                  <Link href="/scouts/simon">
                    <Button variant="outline" size="sm" className="group-hover:bg-green-600 group-hover:text-white">
                      Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

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
                    Ideal para el análisis de datos agrícolas, predicción de rendimientos y optimización de recursos.
                    Automatiza la generación de informes y mejora la toma de decisiones basada en datos.
                  </p>
                  <Link href="/scouts/vera">
                    <Button variant="outline" size="sm" className="group-hover:bg-purple-600 group-hover:text-white">
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
                Resultados comprobados en el sector agrícola
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Nuestros clientes del sector agrícola han experimentado mejoras significativas en sus operaciones y
                resultados gracias a nuestros scouts de IA.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {beneficios.map((beneficio, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
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
                "Bravilo ha transformado nuestra forma de gestionar nuestros cultivos. Gracias a los scouts de IA, hemos
                aumentado nuestro rendimiento en un 25% y reducido el uso de recursos hídricos en un 30%. La capacidad
                de predecir problemas antes de que ocurran ha sido un cambio revolucionario para nuestro negocio."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=48&width=48&query=professional farmer headshot"
                    alt="Juan Pérez"
                    width={48}
                    height={48}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Juan Pérez</p>
                  <p className="text-sm text-gray-500">Director de Operaciones, Agrícola del Sur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Potencia tu producción agrícola con Bravilo
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Comienza hoy mismo con una prueba gratuita y descubre cómo nuestros scouts pueden transformar tu negocio
                agrícola
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/onboarding">
                <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-white/90">
                  Probar Bravilo Ahora
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
