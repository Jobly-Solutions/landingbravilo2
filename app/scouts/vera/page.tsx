"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, BarChart, TrendingUp, PieChart, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function VeraScoutPage() {
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
          <Link href="/onboarding">
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
                SCOUT DE ANÁLISIS
              </Badge>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Conoce a <span className="text-purple-600">Vera</span>
              </h1>
              <p className="mb-6 text-lg text-gray-700">
                Vera es tu analista de datos impulsada por IA. Analiza datos, genera reportes, identifica tendencias y
                envía información valiosa. Transforma datos complejos en insights accionables para tu negocio.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <BarChart className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">Análisis predictivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">Identificación de tendencias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <PieChart className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">Reportes automáticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <LineChart className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">Monitoreo de KPIs</span>
                </div>
              </div>
              <Link href="/onboarding">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Probar Bravilo ahora
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-100 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-full bg-gradient-to-br from-purple-100 to-purple-200 p-4">
                <Image
                  src="/scout-vera.png"
                  alt="Vera Scout"
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
                PRUEBA A VERA
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
                Interactúa con Vera en tiempo real
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Prueba las capacidades de Vera directamente. Pregúntale sobre análisis de datos, tendencias o cualquier
                otra consulta analítica.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-purple-600 text-white p-4 flex items-center">
                <div className="h-8 w-8 rounded-full bg-white mr-3 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">V</span>
                </div>
                <h3 className="font-medium">Chat con Vera</h3>
              </div>
              <div className="h-[600px] w-full">
                <iframe
                  src="https://app.braviloai.com/@scout_vera"
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
                ¿Qué puede hacer Vera por tu negocio?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Descubre todas las formas en que Vera puede transformar tus datos en decisiones estratégicas
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <BarChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Análisis predictivo</h3>
                <p className="text-gray-700">
                  Vera utiliza algoritmos avanzados para analizar datos históricos y predecir tendencias futuras.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Predicción de comportamiento de clientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Pronóstico de ventas y demanda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Identificación de oportunidades de crecimiento</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Identificación de tendencias</h3>
                <p className="text-gray-700">
                  Detecta patrones y tendencias en grandes volúmenes de datos que podrían pasar desapercibidos.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Análisis de comportamiento de mercado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Detección temprana de cambios en patrones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Correlación entre diferentes variables de negocio</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <PieChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Reportes automáticos</h3>
                <p className="text-gray-700">
                  Genera informes detallados y visualizaciones claras que transforman datos complejos en información
                  accionable.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Dashboards personalizados según necesidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Informes programados enviados automáticamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Visualizaciones interactivas para mejor comprensión</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <LineChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Monitoreo de KPIs</h3>
                <p className="text-gray-700">
                  Realiza seguimiento continuo de indicadores clave de rendimiento para mantener el negocio en la
                  dirección correcta.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Alertas automáticas cuando los KPIs se desvían</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Comparativas de rendimiento histórico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Recomendaciones para mejorar métricas clave</span>
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
                Vera se adapta a las necesidades específicas de diferentes industrias
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Finanzas</h3>
                <p className="text-gray-700">
                  Análisis de tendencias de mercado, detección de fraudes y optimización de inversiones.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Marketing</h3>
                <p className="text-gray-700">
                  Análisis de campañas, segmentación de audiencias y optimización de estrategias.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">E-commerce</h3>
                <p className="text-gray-700">
                  Análisis de comportamiento de compra, optimización de inventario y personalización.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Tecnología</h3>
                <p className="text-gray-700">
                  Análisis de uso de productos, detección de problemas y optimización de rendimiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 p-8 md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                ¿Listo para transformar tus datos en decisiones con Vera?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Comienza hoy mismo con una prueba gratuita y descubre cómo Vera puede ayudarte a tomar mejores
                decisiones basadas en datos
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/onboarding">
                  <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-white/90">
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
