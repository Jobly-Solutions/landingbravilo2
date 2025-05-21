"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, MessageSquare, Calendar, Users, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function LiaScoutPage() {
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
          <Link href="https://braviloai.com/scouts" className="text-sm font-medium text-primary">
            Scouts
          </Link>
          <Link href="https://braviloai.com/sectores" className="text-sm font-medium hover:text-primary">
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
          <Link href="https://braviloai.com/onboarding">
            <Button>Probar Bravilo ahora</Button>
          </Link>
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
                SCOUT DE VENTAS Y IA
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Conoce a <span className="text-blue-600">Lia</span>
              </h1>
              <p className="mb-6 text-lg text-gray-700">
                Lia es tu asistente de ventas impulsada por IA. Responde consultas, gestiona horarios y consolida el
                cierre comercial en tu empresa. Es experta en automatizar el proceso de ventas y seguimiento de
                clientes.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">Respuesta automática</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">Agendamiento inteligente</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">Seguimiento de leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">Análisis de conversiones</span>
                </div>
              </div>
              <Link href="/onboarding">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Probar Bravilo ahora
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-blue-200 p-4">
                <Image
                  src="/scout-lia.png"
                  alt="Lia Scout"
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
                PRUEBA A LIA
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                Interactúa con Lia en tiempo real
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Prueba las capacidades de Lia directamente. Pregúntale sobre ventas, agendamiento o cualquier otra
                consulta relacionada con el proceso comercial.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-blue-600 text-white p-4 flex items-center">
                <div className="h-8 w-8 rounded-full bg-white mr-3 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">L</span>
                </div>
                <h3 className="font-medium">Chat con Lia</h3>
              </div>
              <div className="h-[600px] w-full">
                <iframe
                  src="https://app.braviloai.com/@scout_lia"
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
                ¿Qué puede hacer Lia por tu negocio?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Descubre todas las formas en que Lia puede potenciar tu proceso de ventas y mejorar la conversión
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Respuesta automática</h3>
                <p className="text-gray-700">
                  Lia responde consultas de clientes potenciales de forma inmediata, proporcionando información
                  relevante y personalizada.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Respuestas personalizadas según el perfil del cliente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Información detallada sobre productos y servicios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Resolución de dudas frecuentes en tiempo real</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Agendamiento inteligente</h3>
                <p className="text-gray-700">
                  Coordina reuniones y demostraciones de forma eficiente, optimizando la agenda de tu equipo de ventas.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Programación automática según disponibilidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Recordatorios y confirmaciones de asistencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Reprogramación inteligente en caso de cancelaciones</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Seguimiento de leads</h3>
                <p className="text-gray-700">
                  Mantiene contacto constante con leads y oportunidades, evitando que se enfríen y aumentando la
                  probabilidad de cierre.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Seguimiento personalizado según etapa del embudo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Comunicaciones automáticas en momentos clave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Calificación de leads según interacción y respuesta</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Análisis de conversiones</h3>
                <p className="text-gray-700">
                  Analiza el rendimiento del proceso de ventas, identificando puntos de mejora y oportunidades de
                  optimización.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Reportes detallados de conversión por etapa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Identificación de cuellos de botella en el proceso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Recomendaciones para mejorar tasas de cierre</span>
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
                Lia se adapta a las necesidades específicas de diferentes industrias
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Inmobiliaria</h3>
                <p className="text-gray-700">
                  Gestión de consultas sobre propiedades, agendamiento de visitas y seguimiento de clientes potenciales.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Retail</h3>
                <p className="text-gray-700">
                  Atención al cliente, información de productos y seguimiento de oportunidades de venta.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">SaaS</h3>
                <p className="text-gray-700">
                  Gestión de demos, onboarding de clientes y seguimiento de renovaciones de suscripciones.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Consultoría</h3>
                <p className="text-gray-700">
                  Calificación de leads, agendamiento de reuniones y seguimiento de propuestas comerciales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                ¿Listo para potenciar tus ventas con Lia?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Comienza hoy mismo con una prueba gratuita y descubre cómo Lia puede transformar tu proceso de ventas
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/onboarding">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                    Probar Bravilo ahora
                  </Button>
                </Link>
                
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
