"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, MessageSquare, Users, Headphones, LifeBuoy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function TomiScoutPage() {
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
                SCOUT DE SOPORTE
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Conoce a <span className="text-amber-600">Tomi</span>
              </h1>
              <p className="mb-6 text-lg text-gray-700">
                Tomi es tu asistente de soporte impulsado por IA. Responde consultas, resuelve problemas y deriva casos
                complejos a especialistas. Mejora la experiencia de soporte al cliente con respuestas rápidas y
                precisas.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                    <MessageSquare className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium">Atención 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                    <LifeBuoy className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium">Resolución de problemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                    <Users className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium">Escalamiento inteligente</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                    <Headphones className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium">Soporte multicanal</span>
                </div>
              </div>
              <Link href="/onboarding">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Probar Bravilo ahora
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-100 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-full bg-gradient-to-br from-amber-100 to-amber-200 p-4">
                <Image
                  src="/scout-tomi.png"
                  alt="Tomi Scout"
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
                PRUEBA A TOMI
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                Interactúa con Tomi en tiempo real
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Prueba las capacidades de Tomi directamente. Pregúntale sobre problemas comunes, solicita ayuda o
                experimenta cómo maneja diferentes consultas de soporte.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-amber-600 text-white p-4 flex items-center">
                <div className="h-8 w-8 rounded-full bg-white mr-3 flex items-center justify-center">
                  <span className="text-amber-600 font-bold">T</span>
                </div>
                <h3 className="font-medium">Chat con Tomi</h3>
              </div>
              <div className="h-[600px] w-full">
                <iframe
                  src="https://app.braviloai.com/@scout_tomi"
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
                ¿Qué puede hacer Tomi por tu negocio?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Descubre todas las formas en que Tomi puede mejorar la experiencia de soporte de tus clientes
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <MessageSquare className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Atención 24/7</h3>
                <p className="text-gray-700">
                  Tomi está disponible todo el día, todos los días, para responder consultas y resolver problemas sin
                  tiempos de espera.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Respuestas instantáneas a consultas frecuentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Soporte continuo sin interrupciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Atención en múltiples zonas horarias</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <LifeBuoy className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Resolución de problemas</h3>
                <p className="text-gray-700">
                  Soluciona problemas comunes de forma rápida y eficiente, siguiendo protocolos establecidos.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Diagnóstico inteligente de problemas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Guías paso a paso para soluciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Base de conocimiento dinámica y actualizada</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Escalamiento inteligente</h3>
                <p className="text-gray-700">
                  Identifica cuándo un caso requiere atención especializada y lo deriva al equipo adecuado.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Reconocimiento de casos complejos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Transferencia con contexto completo al especialista</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Seguimiento automático de casos escalados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Headphones className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Soporte multicanal</h3>
                <p className="text-gray-700">
                  Brinda asistencia a través de múltiples canales de comunicación para mayor comodidad del cliente.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Integración con chat web, email y WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Experiencia consistente en todos los canales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Historial unificado de conversaciones</span>
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
                Tomi se adapta a las necesidades específicas de diferentes industrias
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Tecnología</h3>
                <p className="text-gray-700">
                  Soporte técnico para productos y servicios, resolución de problemas y guías de uso.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Telecomunicaciones</h3>
                <p className="text-gray-700">
                  Atención al cliente, resolución de incidencias y consultas sobre servicios.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Servicios</h3>
                <p className="text-gray-700">
                  Asistencia al cliente, gestión de consultas y resolución de dudas sobre servicios contratados.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">E-commerce</h3>
                <p className="text-gray-700">
                  Soporte pre y post venta, seguimiento de pedidos y gestión de devoluciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                ¿Listo para mejorar tu soporte al cliente con Tomi?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Comienza hoy mismo con una prueba gratuita y descubre cómo Tomi puede transformar la experiencia de
                soporte de tus clientes
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/onboarding">
                  <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-white/90">
                    Probar Bravilo ahora
                  </Button>
                </Link>
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
