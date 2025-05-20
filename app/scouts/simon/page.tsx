"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, MessageSquare, BarChart, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SimonScoutPage() {
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
          <Link href="/scouts" className="text-sm font-medium text-primary">
            Scouts
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-primary">
            Precios
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-primary">
            Blog
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
            <Link href="/scouts" className="flex items-center hover:text-primary">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Volver a todos los scouts
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                SCOUT DE OPERACIONES
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Conoce a <span className="text-green-600">Simón</span>
              </h1>
              <p className="mb-6 text-lg text-gray-700">
                Simón es tu asistente de operaciones impulsado por IA. Envía comunicaciones, gestiona turnos con
                clientes, analiza datos y reporta resultados. Optimiza los procesos operativos para maximizar la
                eficiencia de tu negocio.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Comunicación automática</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Clock className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Gestión de turnos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <BarChart className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Análisis de datos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Coordinación de equipos</span>
                </div>
              </div>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Comenzar prueba gratuita
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-full bg-gradient-to-br from-green-100 to-green-200 p-4">
                <Image
                  src="/scout-simon.png"
                  alt="Simón Scout"
                  width={250}
                  height={250}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Chat Demo Section */}
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                PRUEBA A SIMÓN
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                Interactúa con Simón en tiempo real
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Prueba las capacidades de Simón directamente. Pregúntale sobre gestión de operaciones, coordinación de
                equipos o cualquier otra tarea relacionada.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-green-600 text-white p-4 flex items-center">
                <div className="h-8 w-8 rounded-full bg-white mr-3 flex items-center justify-center">
                  <span className="text-green-600 font-bold">S</span>
                </div>
                <h3 className="font-medium">Chat con Simón</h3>
              </div>
              <div className="h-[600px] w-full">
                <iframe
                  src="https://app.braviloai.com/@scout_simon"
                  className="w-full h-full border-0"
                  allow="microphone; camera"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-12 md:py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                CAPACIDADES
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                ¿Qué puede hacer Simón por tu negocio?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Descubre todas las formas en que Simón puede optimizar tus operaciones y mejorar la eficiencia
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Comunicación automática</h3>
                <p className="text-gray-700">
                  Simón envía comunicaciones personalizadas a clientes y colaboradores, manteniendo a todos informados
                  sin intervención manual.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Envío automático de recordatorios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Notificaciones de estado personalizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Comunicación multicanal (email, SMS, WhatsApp)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Gestión de turnos</h3>
                <p className="text-gray-700">
                  Optimiza la programación de turnos y citas, reduciendo tiempos muertos y maximizando la productividad.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Agendamiento inteligente basado en disponibilidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Reprogramación automática en caso de cancelaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Recordatorios y confirmaciones de asistencia</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Análisis de datos</h3>
                <p className="text-gray-700">
                  Simón analiza datos operativos para identificar tendencias, cuellos de botella y oportunidades de
                  mejora.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Generación automática de reportes operativos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Identificación de ineficiencias en procesos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Recomendaciones para optimizar recursos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Coordinación de equipos</h3>
                <p className="text-gray-700">
                  Facilita la colaboración entre equipos, asignando tareas y haciendo seguimiento de su cumplimiento.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Asignación inteligente de tareas según capacidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Seguimiento de avances y cumplimiento de plazos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Alertas automáticas para tareas retrasadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                INDUSTRIAS
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Ideal para múltiples sectores</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Simón se adapta a las necesidades específicas de diferentes industrias
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Logística</h3>
                <p className="text-gray-700">
                  Optimiza la coordinación de entregas, seguimiento de envíos y gestión de rutas.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Manufactura</h3>
                <p className="text-gray-700">
                  Mejora la planificación de producción, control de inventario y gestión de la cadena de suministro.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Servicios</h3>
                <p className="text-gray-700">
                  Optimiza la asignación de recursos, programación de servicios y seguimiento de cumplimiento.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Salud</h3>
                <p className="text-gray-700">
                  Mejora la gestión de citas, seguimiento de pacientes y coordinación de personal médico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                ¿Listo para optimizar tus operaciones con Simón?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Comienza hoy mismo con una prueba gratuita y descubre cómo Simón puede transformar la eficiencia de tu
                negocio
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-white/90">
                  Comenzar prueba gratuita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white/10"
                >
                  Agendar una demo
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
