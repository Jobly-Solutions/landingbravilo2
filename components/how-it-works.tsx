import { CreditCard, AlarmClock, Settings, CheckCircle, Rocket } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog"
import Link from "next/link"
import Image from "next/image"

export async function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Elegí tu plan",
      description: "Seleccioná el plan que mejor se adapte a tus necesidades y presupuesto.",
      Icon: CreditCard,
    },
    {
      number: 2,
      title: "Kickoff",
      description: "Nos reunimos para conocer tu negocio, objetivos y ayudarte a empezar.",
      Icon: AlarmClock,
    },
    {
      number: 3,
      title: "Configuración de scouts",
      description: "Adaptamos nuestros scouts a tus procesos, flujos y herramientas existentes.",
      Icon: Settings,
    },
    {
      number: 4,
      title: "Validación",
      description: "Testeamos con datos reales y ajustamos para lograr el mejor rendimiento.",
      Icon: CheckCircle,
    },
    {
      number: 5,
      title: "Lanzamiento",
      description: "Pusimos todo en marcha. Vos te enfocás en vender, nosotros en automatizar.",
      Icon: Rocket,
    },
  ]

  const posts = await getAllBlogPosts()
  const randomPosts = posts
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Nosotros nos encargamos de TODO</h2>
          <p className="text-lg text-gray-600">Ponte cómodo y dejá que nosotros hagamos lo más complicado</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#0071E3] mx-auto mb-4">
                <step.Icon className="w-6 h-6 text-[#0071E3]" />
                <span className="absolute -top-2 -right-2 bg-[#0071E3] text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Artículos recientes</h2>
            <p className="text-lg text-gray-600">Descubrí cómo la IA puede transformar tu negocio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {randomPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {post.description}
                  </p>
                  <span className="text-blue-600 text-sm font-medium">
                    Leer más
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
