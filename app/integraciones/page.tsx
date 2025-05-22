import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function IntegracionesPage() {
  // Categorías de integraciones
  const categories = [
    "Todas",
    "Comunicación",
    "Productividad",
    "CRM",
    "Marketing",
    "Pagos",
    "Desarrollo",
    "Contabilidad",
    "Diseño",
    "Atención al cliente",
    "Gestión de proyectos",
  ]

  // Datos de integraciones
  const integrations = [
    {
      name: "Google Drive",
      description: "Conecta con Google Drive para gestionar y compartir archivos directamente desde Bravilo.",
      icon: "/google-drive-logo.png",
      category: "Productividad",
      featured: true,
    },
    {
      name: "Gmail",
      description: "Integra tu correo de Gmail para enviar y recibir emails sin salir de Bravilo.",
      icon: "/gmail-logo.png",
      category: "Comunicación",
      featured: true,
    },
    {
      name: "Zoom",
      description: "Programa y gestiona reuniones de Zoom directamente desde Bravilo.",
      icon: "/zoom-logo.png",
      category: "Comunicación",
      featured: true,
    },
    {
      name: "Slack",
      description: "Conecta con Slack para mantener todas tus comunicaciones en un solo lugar.",
      icon: "/slack-logo.png",
      category: "Comunicación",
      featured: true,
    },
    {
      name: "Notion",
      description: "Sincroniza tus documentos de Notion con Bravilo para un flujo de trabajo sin interrupciones.",
      icon: "/notion-logo.png",
      category: "Productividad",
      featured: true,
    },
    {
      name: "Asana",
      description: "Gestiona tus proyectos de Asana directamente desde la interfaz de Bravilo.",
      icon: "/asana-logo.png",
      category: "Gestión de proyectos",
      featured: false,
    },
    {
      name: "Trello",
      description: "Visualiza y actualiza tus tableros de Trello sin cambiar de aplicación.",
      icon: "/trello-logo.png",
      category: "Gestión de proyectos",
      featured: false,
    },
    {
      name: "Dropbox",
      description: "Accede y gestiona tus archivos de Dropbox directamente desde Bravilo.",
      icon: "/dropbox-logo.png",
      category: "Productividad",
      featured: false,
    },
    {
      name: "Salesforce",
      description: "Conecta con Salesforce para gestionar tus clientes y oportunidades de venta.",
      icon: "/salesforce-logo.png",
      category: "CRM",
      featured: false,
    },
    {
      name: "HubSpot",
      description: "Integra HubSpot para gestionar tus contactos y campañas de marketing.",
      icon: "/hubspot-logo.png",
      category: "CRM",
      featured: false,
    },
    {
      name: "Facebook",
      description: "Publica y programa contenido en Facebook directamente desde Bravilo.",
      icon: "/facebook-logo.png",
      category: "Marketing",
      featured: false,
    },
    {
      name: "Instagram",
      description: "Gestiona tu presencia en Instagram sin salir de la plataforma Bravilo.",
      icon: "/instagram-logo.png",
      category: "Marketing",
      featured: false,
    },
    {
      name: "WhatsApp",
      description: "Envía y recibe mensajes de WhatsApp directamente desde Bravilo.",
      icon: "/whatsapp-logo.png",
      category: "Comunicación",
      featured: true,
    },
    {
      name: "Telegram",
      description: "Gestiona tus conversaciones de Telegram sin cambiar de aplicación.",
      icon: "/telegram-logo.png",
      category: "Comunicación",
      featured: false,
    },
    {
      name: "Stripe",
      description: "Procesa pagos y gestiona suscripciones con Stripe desde Bravilo.",
      icon: "/stripe-logo.png",
      category: "Pagos",
      featured: false,
    },
    {
      name: "MercadoPago",
      description: "Integra MercadoPago para procesar pagos en Latinoamérica.",
      icon: "/mercadopago-logo.png",
      category: "Pagos",
      featured: false,
    },
    {
      name: "GitHub",
      description: "Gestiona tus repositorios y pull requests de GitHub desde Bravilo.",
      icon: "/github-logo.png",
      category: "Desarrollo",
      featured: false,
    },
    {
      name: "GitLab",
      description: "Accede a tus proyectos de GitLab sin salir de la plataforma.",
      icon: "/gitlab-logo.png",
      category: "Desarrollo",
      featured: false,
    },
    {
      name: "Bitbucket",
      description: "Gestiona tus repositorios de Bitbucket directamente desde Bravilo.",
      icon: "/bitbucket-logo.png",
      category: "Desarrollo",
      featured: false,
    },
    {
      name: "Jira",
      description: "Visualiza y actualiza tus tareas de Jira sin cambiar de aplicación.",
      icon: "/jira-logo.png",
      category: "Desarrollo",
      featured: false,
    },
    {
      name: "Twilio",
      description: "Envía SMS y gestiona llamadas con Twilio desde Bravilo.",
      icon: "/twilio-logo.png",
      category: "Comunicación",
      featured: false,
    },
    {
      name: "Mailchimp",
      description: "Gestiona tus campañas de email marketing con Mailchimp desde Bravilo.",
      icon: "/mailchimp-logo.png",
      category: "Marketing",
      featured: false,
    },
    {
      name: "Shopify",
      description: "Conecta tu tienda Shopify para gestionar productos y pedidos.",
      icon: "/shopify-logo.png",
      category: "Marketing",
      featured: false,
    },
    {
      name: "WooCommerce",
      description: "Integra tu tienda WooCommerce con Bravilo para gestionar tu negocio.",
      icon: "/woocommerce-logo.png",
      category: "Marketing",
      featured: false,
    },
    {
      name: "QuickBooks",
      description: "Gestiona tu contabilidad con QuickBooks directamente desde Bravilo.",
      icon: "/quickbooks-logo.png",
      category: "Contabilidad",
      featured: false,
    },
    {
      name: "Xero",
      description: "Conecta Xero para gestionar tus finanzas sin salir de la plataforma.",
      icon: "/xero-logo.png",
      category: "Contabilidad",
      featured: false,
    },
    {
      name: "Excel",
      description: "Trabaja con tus hojas de cálculo de Excel directamente desde Bravilo.",
      icon: "/excel-logo.png",
      category: "Productividad",
      featured: false,
    },
    {
      name: "Google Calendar",
      description: "Sincroniza tu calendario de Google para gestionar tus eventos y reuniones.",
      icon: "/calendar-logo.png",
      category: "Productividad",
      featured: false,
    },
    {
      name: "Zapier",
      description: "Conecta Bravilo con miles de aplicaciones a través de Zapier.",
      icon: "/zapier-logo.png",
      category: "Productividad",
      featured: false,
    },
    {
      name: "Make (Integromat)",
      description: "Crea flujos de trabajo automatizados entre Bravilo y otras aplicaciones.",
      icon: "/make-logo.png",
      category: "Productividad",
      featured: false,
    },
    {
      name: "Monday.com",
      description: "Gestiona tus proyectos y tareas de Monday.com desde Bravilo.",
      icon: "/monday-logo.png",
      category: "Gestión de proyectos",
      featured: false,
    },
    {
      name: "ClickUp",
      description: "Accede a tus espacios de trabajo de ClickUp sin cambiar de plataforma.",
      icon: "/clickup-logo.png",
      category: "Gestión de proyectos",
      featured: false,
    },
    {
      name: "Airtable",
      description: "Sincroniza tus bases de datos de Airtable con Bravilo.",
      icon: "/airtable-logo.png",
      category: "Productividad",
      featured: false,
    },
    {
      name: "Linear",
      description: "Gestiona tus proyectos de desarrollo con Linear desde Bravilo.",
      icon: "/linear-logo.png",
      category: "Desarrollo",
      featured: false,
    },
    {
      name: "Figma",
      description: "Accede a tus diseños de Figma directamente desde Bravilo.",
      icon: "/figma-logo.png",
      category: "Diseño",
      featured: false,
    },
    {
      name: "Adobe Creative Cloud",
      description: "Integra tus herramientas de Adobe con Bravilo para un flujo de trabajo optimizado.",
      icon: "/adobe-logo.png",
      category: "Diseño",
      featured: false,
    },
    {
      name: "Canva",
      description: "Crea y edita diseños de Canva sin salir de Bravilo.",
      icon: "/canva-logo.png",
      category: "Diseño",
      featured: false,
    },
    {
      name: "Intercom",
      description: "Gestiona tus conversaciones de soporte de Intercom desde Bravilo.",
      icon: "/intercom-logo.png",
      category: "Atención al cliente",
      featured: false,
    },
    {
      name: "Zendesk",
      description: "Atiende tickets de soporte de Zendesk directamente desde Bravilo.",
      icon: "/zendesk-logo.png",
      category: "Atención al cliente",
      featured: false,
    },
    {
      name: "Freshdesk",
      description: "Gestiona tus tickets de soporte de Freshdesk sin cambiar de plataforma.",
      icon: "/freshdesk-logo.png",
      category: "Atención al cliente",
      featured: false,
    },
    {
      name: "Pipedrive",
      description: "Gestiona tu pipeline de ventas de Pipedrive desde Bravilo.",
      icon: "/pipedrive-logo.png",
      category: "CRM",
      featured: false,
    },
    {
      name: "Typeform",
      description: "Crea y gestiona formularios de Typeform directamente desde Bravilo.",
      icon: "/typeform-logo.png",
      category: "Marketing",
      featured: false,
    },
    {
      name: "DocuSign",
      description: "Firma y envía documentos con DocuSign sin salir de Bravilo.",
      icon: "/docusign-logo.png",
      category: "Productividad",
      featured: false,
    },
    {
      name: "Miro",
      description: "Colabora en pizarras de Miro directamente desde Bravilo.",
      icon: "/miro-logo.png",
      category: "Productividad",
      featured: false,
    },
    {
      name: "Todoist",
      description: "Gestiona tus tareas de Todoist sin cambiar de plataforma.",
      icon: "/todoist-logo.png",
      category: "Productividad",
      featured: false,
    },
    {
      name: "Evernote",
      description: "Accede a tus notas de Evernote directamente desde Bravilo.",
      icon: "/evernote-logo.png",
      category: "Productividad",
      featured: false,
    },
  ]

  // Integraciones destacadas
  const featuredIntegrations = integrations.filter((integration) => integration.featured)

  return (
    <div className="min-h-screen bg-white">
      <header className="container z-40 flex h-20 items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <Image src="/app-logo-icon.png" alt="Bravilo Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-primary">Bravilo</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <Link href="https://braviloai.com/" className="text-sm font-medium text-gray-600 text-primary">
            Inicio
          </Link>
          <Link href="https://braviloai.com/scouts" className="text-sm font-medium text-gray-600 hover:text-primary">
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
          <Link
            href="https://braviloai.com/contacto"
            className="hidden text-sm font-medium text-gray-600 hover:text-primary md:block"
          >
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Integraciones de Bravilo</h1>
            <p className="text-xl text-gray-600 mb-8">
              Conecta Bravilo con tus herramientas favoritas para potenciar tu productividad
            </p>
            <Link href="/onboarding">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Probar Bravilo ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Integraciones Destacadas */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Integraciones destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredIntegrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 flex-shrink-0">
                  <Image
                    src={integration.icon || "/placeholder.svg"}
                    alt={`${integration.name} logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">{integration.name}</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{integration.description}</p>
              <div className="mt-auto">
                <Link href="/onboarding">
                  <Button className="w-full bg-primary hover:bg-primary/90">Conectar</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="#todas-integraciones">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Ver todas las integraciones
            </Button>
          </Link>
        </div>
      </section>

      {/* Todas las Integraciones */}
      <section id="todas-integraciones" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Todas las integraciones</h2>
            <Link href="/onboarding">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Solicitar nueva integración
              </Button>
            </Link>
          </div>

          {/* Filtros de categoría */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de integraciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 flex-shrink-0">
                    <Image
                      src={integration.icon || "/placeholder.svg"}
                      alt={`${integration.name} logo`}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{integration.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{integration.description}</p>
                <div className="mt-auto">
                  <Link href="/onboarding">
                    <Button className="w-full bg-primary hover:bg-primary/90">Conectar</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Solicitar nueva integración */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">¿No encuentras la integración que necesitas?</p>
            <Link href="/onboarding">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Solicitar nueva integración
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Potencia tu negocio con Bravilo</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Conecta todas tus herramientas favoritas y automatiza tu trabajo con la ayuda de nuestros Scouts de IA
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Probar Bravilo ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
