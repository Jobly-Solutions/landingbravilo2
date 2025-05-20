import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  ArrowRight,
  Building2,
  Scale,
  Truck,
  Wheat,
  Stethoscope,
  Landmark,
  Laptop,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Utensils,
  Plane,
  Wrench,
  Leaf,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SectoresPage() {
  // Lista de sectores principales
  const sectoresPrincipales = [
    {
      id: "inmobiliaria",
      nombre: "Inmobiliaria",
      descripcion: "Mejora la captación de clientes, seguimiento de ventas y administración de propiedades.",
      icono: <Building2 className="h-6 w-6 text-primary" />,
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
    },
    {
      id: "estudios-juridicos",
      nombre: "Estudios Jurídicos",
      descripcion: "Automatiza la gestión de consultas, coordinación de audiencias y seguimiento de expedientes.",
      icono: <Scale className="h-6 w-6 text-primary" />,
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
    },
    {
      id: "logistica",
      nombre: "Logística",
      descripcion: "Automatiza la coordinación de entregas, seguimiento y optimización de rutas.",
      icono: <Truck className="h-6 w-6 text-primary" />,
      color: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
    },
    {
      id: "agro",
      nombre: "Agro",
      descripcion: "Optimiza la gestión de cultivos, monitoreo de campos y administración de recursos agrícolas.",
      icono: <Wheat className="h-6 w-6 text-primary" />,
      color: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
    },
  ]

  // Lista de sectores adicionales
  const sectoresAdicionales = [
    {
      id: "salud",
      nombre: "Salud",
      descripcion: "Mejora la gestión de pacientes, agendamiento de citas y seguimiento de tratamientos.",
      icono: <Stethoscope className="h-6 w-6 text-primary" />,
    },
    {
      id: "finanzas",
      nombre: "Finanzas",
      descripcion: "Automatiza procesos financieros, análisis de riesgos y atención al cliente.",
      icono: <Landmark className="h-6 w-6 text-primary" />,
    },
    {
      id: "tecnologia",
      nombre: "Tecnología",
      descripcion: "Optimiza el soporte técnico, seguimiento de proyectos y gestión de recursos.",
      icono: <Laptop className="h-6 w-6 text-primary" />,
    },
    {
      id: "retail",
      nombre: "Retail",
      descripcion: "Mejora la experiencia de compra, gestión de inventario y fidelización de clientes.",
      icono: <ShoppingCart className="h-6 w-6 text-primary" />,
    },
    {
      id: "consultoria",
      nombre: "Consultoría",
      descripcion: "Automatiza la captación de clientes, gestión de proyectos y seguimiento de resultados.",
      icono: <Briefcase className="h-6 w-6 text-primary" />,
    },
    {
      id: "educacion",
      nombre: "Educación",
      descripcion: "Mejora la comunicación con estudiantes, gestión académica y seguimiento de aprendizaje.",
      icono: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      id: "gastronomia",
      nombre: "Gastronomía",
      descripcion: "Optimiza la gestión de reservas, pedidos y fidelización de clientes.",
      icono: <Utensils className="h-6 w-6 text-primary" />,
    },
    {
      id: "turismo",
      nombre: "Turismo",
      descripcion: "Automatiza la gestión de reservas, atención al cliente y promoción de servicios.",
      icono: <Plane className="h-6 w-6 text-primary" />,
    },
    {
      id: "servicios-profesionales",
      nombre: "Servicios Profesionales",
      descripcion: "Mejora la captación de clientes, gestión de proyectos y facturación.",
      icono: <Wrench className="h-6 w-6 text-primary" />,
    },
    {
      id: "medio-ambiente",
      nombre: "Medio Ambiente",
      descripcion: "Optimiza la gestión de proyectos ambientales, monitoreo y reportes de sostenibilidad.",
      icono: <Leaf className="h-6 w-6 text-primary" />,
    },
    {
      id: "construccion",
      nombre: "Construcción",
      descripcion:
        "Optimiza la gestión de proyectos, seguimiento de obras y coordinación de equipos en el sector de la construcción.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <path d="M3 6h18"></path>
          <path d="M10 16l4-4"></path>
          <path d="M14 16l-4-4"></path>
        </svg>
      ),
    },
    {
      id: "manufactura",
      nombre: "Manufactura",
      descripcion:
        "Mejora la eficiencia en procesos de producción, control de calidad y gestión de la cadena de suministro.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M2 12h2"></path>
          <path d="M6 12h2"></path>
          <path d="M10 12h2"></path>
          <path d="M18 12h2"></path>
          <path d="M14 12h2"></path>
          <path d="M6 8v8"></path>
          <path d="M18 8v8"></path>
          <path d="M14 8v8"></path>
          <path d="M10 8v8"></path>
        </svg>
      ),
    },
    {
      id: "seguros",
      nombre: "Seguros",
      descripcion:
        "Automatiza la gestión de pólizas, evaluación de riesgos y procesamiento de reclamos en el sector asegurador.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        </svg>
      ),
    },
    {
      id: "transporte",
      nombre: "Transporte",
      descripcion:
        "Optimiza la gestión de flotas, seguimiento de vehículos y coordinación de rutas en el sector de transporte.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-primary"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
          <path d="M6 14h.01"></path>
          <path d="M18 14h.01"></path>
        </svg>
      ),
    },
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
          <Link href="/sectores" className="text-sm font-medium text-primary border-b-2 border-primary">
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
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                SOLUCIONES POR INDUSTRIA
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Scouts de IA para cada{" "}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">sector</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
                Descubre cómo nuestros scouts de IA se adaptan a las necesidades específicas de tu industria para
                maximizar resultados y optimizar procesos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-12 px-8">
                  Comenzar prueba gratuita
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                  Ver demo <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sectores Principales */}
        <section className="container py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                SECTORES PRINCIPALES
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Soluciones especializadas para tu industria
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Nuestros scouts de IA están diseñados para adaptarse a las necesidades específicas de cada sector,
                ofreciendo soluciones personalizadas que maximizan la eficiencia y los resultados.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {sectoresPrincipales.map((sector) => (
                <Link
                  key={sector.id}
                  href={`/sectores/${sector.id}`}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${sector.color} border ${sector.borderColor}`}
                  >
                    {sector.icono}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{sector.nombre}</h3>
                  <p className="mb-6 flex-1 text-base text-gray-700">{sector.descripcion}</p>
                  <div className={`mt-auto flex items-center font-medium ${sector.textColor} group-hover:underline`}>
                    Ver soluciones <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sectores Adicionales */}
        <section className="container py-16 bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                MÁS INDUSTRIAS
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Otras industrias que potenciamos
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Nuestros scouts de IA son versátiles y se adaptan a una amplia variedad de sectores, ofreciendo
                soluciones personalizadas para cada necesidad.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sectoresAdicionales.map((sector) => (
                <div
                  key={sector.id}
                  className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      {sector.icono}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{sector.nombre}</h3>
                  </div>
                  <p className="mb-4 text-base text-gray-700">{sector.descripcion}</p>
                  <Link
                    href={`https://api.whatsapp.com/send/?phone=%2B5493584267977`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="link" className="mt-auto self-start p-0">
                      Ver soluciones <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
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
                ¿Por qué elegir scouts especializados por sector?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Nuestros scouts están diseñados específicamente para cada industria, lo que les permite ofrecer
                soluciones más precisas y efectivas.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="m4.93 4.93 2.83 2.83" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="m4.93 19.07 2.83-2.83" />
                    <path d="m16.24 7.76 2.83-2.83" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Conocimiento especializado</h3>
                <p className="text-base text-gray-700">
                  Nuestros scouts están entrenados con conocimientos específicos de cada industria, lo que les permite
                  entender y resolver problemas particulares de tu sector.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Soluciones personalizadas</h3>
                <p className="text-base text-gray-700">
                  Adaptamos nuestras soluciones a las necesidades específicas de tu industria, ofreciendo
                  funcionalidades y flujos de trabajo diseñados para maximizar la eficiencia en tu sector.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Implementación rápida</h3>
                <p className="text-base text-gray-700">
                  Al estar preconfigurados para tu industria, nuestros scouts pueden implementarse rápidamente,
                  permitiéndote ver resultados en días, no en meses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-primary/80 to-primary p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                ¿Listo para potenciar tu negocio con scouts especializados?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Comienza hoy mismo con una prueba gratuita y descubre cómo nuestros scouts pueden transformar tu forma
                de trabajar
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Comenzar prueba gratuita
                </Button>
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
