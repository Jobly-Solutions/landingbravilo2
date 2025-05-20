"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight, ChevronRight, Star, Zap, Shield, BarChart, UserPlus, Link2, Rocket } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IntegrationOrbit } from "@/components/integration-orbit"

export default function Home() {
  const [isAnnual, setIsAnnual] = React.useState(true)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="container z-40 flex h-20 items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <Image src="/app-logo-icon.png" alt="Bravilo Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-primary">Bravilo</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-primary">
            Inicio
          </Link>
          <Link href="/scouts" className="text-sm font-medium text-gray-600 hover:text-primary">
            Scouts
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary">
            Precios
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-primary">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contacto" className="hidden text-sm font-medium text-gray-600 hover:text-primary md:block">
            Contacto
          </Link>
          <Button variant="outline" className="hidden md:inline-flex">
            Iniciar sesión
          </Button>
          <Button>Registrarse</Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section - Estilo más moderno como productos de IA */}
        <section className="container py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                ✨ POTENCIADO POR IA
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Inteligencia Artificial <br />
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  que impulsa tu negocio
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700 md:text-xl">
                Potenciá tu negocio con scouts de IA que automatizan tareas, analizan datos y optimizan procesos para
                maximizar resultados.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="h-12 px-8">
                  Comenzar prueba gratuita
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                  Ver demo <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative mx-auto mt-12 max-w-4xl">
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                <Image
                  src="/hero-scouts.png"
                  alt="Bravilo Scouts"
                  width={1000}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section - Como productos de IA famosos */}
        <section className="container py-12">
          <div className="mx-auto max-w-5xl">
            <p className="mb-8 text-center text-sm font-medium text-gray-500">EMPRESAS QUE YA CONFÍAN EN NOSOTROS</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              <div className="h-12 flex items-center">
                <Image
                  src="/logo-presis.png"
                  alt="Presis Consultores"
                  width={140}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="h-12 flex items-center">
                <Image
                  src="/logo-diego-lopez.png"
                  alt="Diego Lopez Inmobiliaria"
                  width={140}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="h-12 flex items-center">
                <Image src="/logo-lente.png" alt="Lente" width={160} height={48} className="object-contain" />
              </div>
              <div className="h-12 flex items-center">
                <Image src="/logo-carton.png" alt="Carton.com" width={140} height={48} className="object-contain" />
              </div>
              <div className="h-12 flex items-center ml-4">
                <span className="text-primary font-medium text-lg">+120 empresas más...</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Estilo Notnini */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">¿Qué es Bravilo?</h2>
            <p className="mb-12 text-lg text-gray-700">
              Una plataforma de inteligencia artificial que crea scouts virtuales diseñados específicamente para
              automatizar y optimizar los procesos de tu negocio.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Scouts de IA personalizados</h3>
              <p className="text-base text-gray-700">
                Asistentes virtuales impulsados por IA que se adaptan a las necesidades específicas de tu industria.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Inteligencia predictiva</h3>
              <p className="text-base text-gray-700">
                Algoritmos avanzados que aprenden de tus datos y mejoran continuamente su rendimiento.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">Automatización inteligente</h3>
              <p className="text-base text-gray-700">
                Procesos que se optimizan automáticamente gracias a la IA para maximizar eficiencia y resultados.
              </p>
            </div>
          </div>
        </section>

        {/* Why Automate Section - Estilo más moderno */}
        <section className="container py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                BENEFICIOS
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                ¿Por qué elegir scouts de IA para tu negocio?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Descubre cómo nuestros scouts impulsados por IA pueden transformar tu negocio y darle una ventaja
                competitiva.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                <h3 className="mb-6 text-xl font-bold text-primary">Con nuestros scouts</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">IA que ahorra 40+ horas mensuales</p>
                      <p className="text-base text-gray-700">
                        Scouts de IA que automatizan tareas repetitivas y aprenden continuamente para optimizar
                        procesos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Automatización inteligente sin errores</p>
                      <p className="text-base text-gray-700">
                        Algoritmos de IA que ejecutan flujos de trabajo con precisión, eliminando errores humanos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Decisiones basadas en IA</p>
                      <p className="text-base text-gray-700">
                        Analítica predictiva que mejora la toma de decisiones y aumenta la conversión de ventas.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Sin nuestros scouts</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500">
                      <span className="text-white">✕</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Tiempo de espera prolongado</p>
                      <p className="text-sm text-gray-500">
                        Procesos manuales que generan demoras y frustración en clientes y colaboradores.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500">
                      <span className="text-white">✕</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Trabajo manual repetitivo</p>
                      <p className="text-sm text-gray-500">
                        Horas perdidas en tareas administrativas que podrían dedicarse a actividades estratégicas.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500">
                      <span className="text-white">✕</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Oportunidades perdidas</p>
                      <p className="text-sm text-gray-500">
                        Clientes que se pierden por falta de seguimiento oportuno y atención personalizada.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scouts Section - Estilo Notnini */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                NUESTROS SCOUTS
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Conocé nuestros Scouts de IA
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-500">
                Los encargados de hacer crecer tu negocio de forma automática. Son rápidos, son ágiles, y nunca se
                cansan para trabajar mejor y más rápido.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 transition-all hover:shadow-lg flex flex-col h-full min-h-[360px]">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200 opacity-50 blur-3xl transition-all group-hover:opacity-70"></div>
                <div className="relative flex flex-col h-full">
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
                  <p className="mb-6 text-base text-gray-700 flex-grow">
                    Responde consultas, gestiona horarios y consolida el cierre comercial en tu empresa.
                  </p>
                  <div className="mt-auto">
                    <Link href="/scouts/lia">
                      <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white">
                        Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 transition-all hover:shadow-lg flex flex-col h-full min-h-[360px]">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-200 opacity-50 blur-3xl transition-all group-hover:opacity-70"></div>
                <div className="relative flex flex-col h-full">
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
                  <p className="mb-6 text-base text-gray-700 flex-grow">
                    Envía comunicaciones, gestiona turnos con clientes, analiza datos y reporta resultados.
                  </p>
                  <div className="mt-auto">
                    <Link href="/scouts/simon">
                      <Button variant="outline" size="sm" className="group-hover:bg-green-600 group-hover:text-white">
                        Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 transition-all hover:shadow-lg flex flex-col h-full min-h-[360px]">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-200 opacity-50 blur-3xl transition-all group-hover:opacity-70"></div>
                <div className="relative flex flex-col h-full">
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
                  <p className="mb-6 text-base text-gray-700 flex-grow">
                    Analiza datos, genera reportes, identifica tendencias y envía información valiosa.
                  </p>
                  <div className="mt-auto">
                    <Link href="/scouts/vera">
                      <Button variant="outline" size="sm" className="group-hover:bg-purple-600 group-hover:text-white">
                        Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-6 transition-all hover:shadow-lg flex flex-col h-full min-h-[360px]">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-200 opacity-50 blur-3xl transition-all group-hover:opacity-70"></div>
                <div className="relative flex flex-col h-full">
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
                  <p className="mb-6 text-base text-gray-700 flex-grow">
                    Responde consultas, resuelve problemas y deriva casos complejos a especialistas.
                  </p>
                  <div className="mt-auto">
                    <Link href="/scouts/tomi">
                      <Button variant="outline" size="sm" className="group-hover:bg-amber-600 group-hover:text-white">
                        Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/scouts">
                <Button size="lg" className="px-8">
                  Ver todos los scouts <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Section - Estilo más moderno */}
        <section className="container py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                SOLUCIONES
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Soluciones para tu industria
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Scouts especializados para las necesidades específicas de tu sector
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="group rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary/20">
                  <Image src="/icon-real-estate.svg" alt="Inmobiliaria" width={28} height={28} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Inmobiliaria</h3>
                <p className="mb-6 text-base text-gray-700">
                  Mejora la captación de clientes, seguimiento de ventas y administración de propiedades.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Captación automática de leads
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Agendamiento inteligente de visitas
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Seguimiento personalizado de clientes
                  </li>
                </ul>
                <Link href="/sectores/inmobiliaria">
                  <Button variant="link" size="sm" className="p-0">
                    Ver más detalles <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="group rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary/20">
                  <Image src="/icon-legal.svg" alt="Estudios Jurídicos" width={28} height={28} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Estudios Jurídicos</h3>
                <p className="mb-6 text-base text-gray-700">
                  Automatiza la gestión de consultas, coordinación de audiencias y seguimiento de expedientes.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Organización de turnos y agendamiento
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Producción y seguimiento de documentos
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Comunicación con clientes
                  </li>
                </ul>
                <Link href="/sectores/estudios-juridicos">
                  <Button variant="link" size="sm" className="p-0">
                    Ver más detalles <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="group rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary/20">
                  <Image src="/icon-logistics.svg" alt="Logística" width={28} height={28} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Logística</h3>
                <p className="mb-6 text-base text-gray-700">
                  Automatiza la coordinación de entregas, seguimiento y optimización de rutas.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Coordinación automática de envíos
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Notificaciones automáticas de estado
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Seguimiento personalizado de pedidos
                  </li>
                </ul>
                <Link href="/sectores/logistica">
                  <Button variant="link" size="sm" className="p-0">
                    Ver más detalles <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="group rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0070f3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20" />
                    <path d="M8 20c1-3 1.5-5 4-7" />
                    <path d="M16 20c-1-3-1.5-5-4-7" />
                    <path d="M8 15c1-3 1.5-5 4-7" />
                    <path d="M16 15c-1-3-1.5-5-4-7" />
                    <path d="M8 10c1-3 1.5-5 4-7" />
                    <path d="M16 10c-1-3-1.5-5-4-7" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Agro</h3>
                <p className="mb-6 text-base text-gray-700">
                  Optimiza la gestión de cultivos, monitoreo de campos y administración de recursos agrícolas con
                  inteligencia artificial.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Análisis predictivo de cosechas
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Monitoreo automático de condiciones
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary" />
                    Gestión inteligente de insumos
                  </li>
                </ul>
                <Link href="/sectores/agro">
                  <Button variant="link" size="sm" className="p-0">
                    Ver más detalles <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/sectores">
                <Button size="lg" className="px-8">
                  Ver todos los sectores <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Integration Section - Estilo Notnini */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <Badge className="mb-4 w-fit px-3 py-1 text-sm" variant="outline">
                  INTEGRACIONES
                </Badge>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Nuestros scouts se integran con tus herramientas del día a día
                </h2>
                <p className="mb-6 text-lg text-gray-700">
                  Me adapto a las herramientas que ya formás parte de tu día a día. Google Workspace, Outlook, CRMs, y
                  todas las demás. No necesitás cambiar nada, yo me adapto a vos.
                </p>
                <p className="mb-8 text-lg text-gray-500">
                  Ya sea para enviar, atender al cliente, agendar o reportar, estoy diseñado para integrarme rápido y
                  sin fricción.
                </p>
                <Button className="w-fit">
                  Ver todas las integraciones <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <IntegrationOrbit />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Estilo moderno y atractivo */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                ONBOARDING SIMPLE
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Comienza a usar Bravilo en minutos
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Nuestro proceso de configuración es rápido e intuitivo, diseñado para que puedas empezar a disfrutar de
                los beneficios de la IA sin complicaciones
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: 1,
                  title: "Regístrate",
                  desc: "Crea tu cuenta en menos de 60 segundos y accede a tu panel personalizado",
                  icon: "UserPlus",
                  color: "bg-blue-500",
                },
                {
                  step: 2,
                  title: "Conecta tus herramientas",
                  desc: "Integra fácilmente tus aplicaciones favoritas con nuestros scouts de IA",
                  icon: "Link",
                  color: "bg-green-500",
                },
                {
                  step: 3,
                  title: "¡Comienza a automatizar!",
                  desc: "Observa cómo los scouts de IA optimizan tus procesos y ahorran tiempo",
                  icon: "Rocket",
                  color: "bg-purple-500",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 opacity-20 transition-all group-hover:opacity-30"></div>

                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${item.color} text-white`}
                  >
                    {item.icon === "UserPlus" && <UserPlus className="h-6 w-6" />}
                    {item.icon === "Link" && <Link2 className="h-6 w-6" />}
                    {item.icon === "Rocket" && <Rocket className="h-6 w-6" />}
                  </div>

                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary">
                      <span className="text-sm font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>

                  <p className="text-base text-gray-700">{item.desc}</p>

                  {index < 2 && (
                    <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 transform md:block">
                      <ChevronRight className="h-8 w-8 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="px-8">
                Comenzar ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section - Estilo Notnini */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                PREGUNTAS FRECUENTES
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Todo lo que necesitás saber
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Respondemos tus dudas más comunes sobre Bravilo y nuestros scouts de IA
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "¿Qué es Bravilo?",
                  a: "Bravilo es una plataforma de automatización inteligente que utiliza IA para ayudarte a optimizar procesos y mejorar la eficiencia de tu equipo sin necesidad de contratar más personal.",
                },
                {
                  q: "¿Cómo funcionan los scouts?",
                  a: "Los scouts son asistentes virtuales impulsados por IA que automatizan tareas específicas según su especialidad. Se integran con tus herramientas existentes y trabajan 24/7 para mejorar la productividad de tu equipo.",
                },
                {
                  q: "¿Necesito conocimientos técnicos para usar Bravilo?",
                  a: "No, Bravilo es una plataforma completamente no-code. No necesitas conocimientos técnicos para configurarla y utilizarla. Ofrecemos tutoriales detallados y soporte para ayudarte a integrar la plataforma con tus herramientas existentes de manera sencilla.",
                },
                {
                  q: "¿Cuánto tiempo lleva implementar Bravilo?",
                  a: "La implementación básica puede realizarse en tan solo 48 horas. Para integraciones más complejas, el proceso puede tomar entre 1 y 2 semanas, dependiendo de tus necesidades específicas.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{item.q}</h3>
                    <p className="mt-2 text-base text-gray-700">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section - Estilo de tarjetas */}
        <section className="container py-16 md:py-24 bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                PLANES
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Planes de Bravilo Scouts
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700 mb-8">
                Soluciones adaptadas a las necesidades de tu negocio
              </p>

              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center bg-gray-100 p-1 rounded-full">
                  <button
                    className={`px-4 py-2 rounded-full ${isAnnual ? "bg-primary text-white" : "text-gray-700"} font-medium transition-colors`}
                    onClick={() => setIsAnnual(true)}
                  >
                    Anual
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full ${!isAnnual ? "bg-primary text-white" : "text-gray-700"} font-medium transition-colors`}
                    onClick={() => setIsAnnual(false)}
                  >
                    Mensual
                  </button>
                </div>
                <span className="text-xs font-medium text-green-500 bg-green-100 px-2 py-1 rounded">AHORRA 40%</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {/* Plan Free */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <span className="text-xl font-bold text-gray-900">⬜ Free</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">Iniciar con Agentes de IA</p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold">Free</div>
                  </div>

                  <Button variant="outline" className="w-full mb-8">
                    Comenzar gratis
                  </Button>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-700">Uso y Plataforma</p>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 1 Scout</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 100 conversaciones</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 1 usuario</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 100 contactos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Start */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <span className="text-xl font-bold text-gray-900">🟦 Start</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">Profesionales independientes</p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold">${isAnnual ? "29" : "49"}</div>
                    <div className="text-sm text-gray-500">
                      por mes, facturado {isAnnual ? "anualmente" : "mensualmente"}
                    </div>
                  </div>

                  <Button className="w-full mb-8 bg-blue-600 hover:bg-blue-700">
                    {isAnnual ? "Suscribirse" : "Comenzar prueba"}
                  </Button>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-700">Uso y Plataforma</p>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 2 Scouts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 3.000 conversaciones</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 3 usuarios</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 300 contactos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Pro */}
              <div className="rounded-xl border-2 border-primary bg-blue-50 overflow-hidden">
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <span className="text-xl font-bold text-gray-900">🟧 Pro</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">Negocios en crecimiento</p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold">${isAnnual ? "59" : "99"}</div>
                    <div className="text-sm text-gray-500">
                      por mes, facturado {isAnnual ? "anualmente" : "mensualmente"}
                    </div>
                  </div>

                  <Button className="w-full mb-8">{isAnnual ? "Suscribirse" : "Comenzar prueba"}</Button>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-700">Uso y Plataforma</p>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 5 Scouts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 10.000 conversaciones</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 10 usuarios</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 1000 contactos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Escale */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <span className="text-xl font-bold text-gray-900">🟥 Escale</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">Empresas con múltiples departamentos</p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold">${isAnnual ? "299" : "499"}</div>
                    <div className="text-sm text-gray-500">
                      por mes, facturado {isAnnual ? "anualmente" : "mensualmente"}
                    </div>
                  </div>

                  <Button className="w-full mb-8 bg-pink-600 hover:bg-pink-700">
                    {isAnnual ? "Suscribirse" : "Comenzar prueba"}
                  </Button>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-gray-700">Uso y Plataforma</p>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 100 Scouts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 100.000 conversaciones</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Hasta 50 usuarios</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-gray-700">Contactos ilimitados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Estilo Notnini */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                TESTIMONIOS
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Lo que dicen nuestros clientes
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-700">
                Descubre cómo Bravilo ha transformado negocios como el tuyo
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "María González",
                  role: "Gerente de Operaciones, Inmobiliaria XYZ",
                  quote:
                    "Bravilo ha transformado completamente nuestra forma de trabajar. Ahorramos más de 30 horas semanales en tareas administrativas y nuestros clientes están encantados con la rapidez de respuesta.",
                },
                {
                  name: "Carlos Rodríguez",
                  role: "Director, Estudio Jurídico CR",
                  quote:
                    "La implementación fue sorprendentemente rápida y el impacto inmediato. Nuestros scouts gestionan automáticamente las consultas iniciales y la programación de citas, permitiéndonos enfocarnos en lo que realmente importa.",
                },
                {
                  name: "Laura Martínez",
                  role: "CEO, Logística Express",
                  quote:
                    "Desde que implementamos Bravilo, hemos reducido los errores en un 85% y mejorado la satisfacción del cliente en un 40%. La inversión se recuperó en menos de 3 meses.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-gray-50 p-8">
                  <div className="mb-6 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 text-base text-gray-700">"{item.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Estilo más moderno */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-primary/80 to-primary p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Transforma tu empresa con scouts de IA diseñados para potenciar tu industria
                </h2>
                <p className="mb-8 text-lg text-white/90">
                  Integra inteligencia artificial en tu negocio, automatiza procesos complejos y aprovecha el poder
                  predictivo de los datos con nuestros scouts inteligentes.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Comenzar prueba gratuita
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-transparent hover:bg-white/10"
                  >
                    Ver demo <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-white/20 blur-3xl"></div>
                  <Image
                    src="/app-logo-icon.png"
                    alt="Bravilo Scouts"
                    width={200}
                    height={200}
                    className="relative h-auto w-auto rounded-lg"
                  />
                </div>
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
