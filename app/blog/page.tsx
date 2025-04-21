import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog"
import BlogCard from "@/components/blog-card"
import HeroSection from "@/components/hero-section" 
import { Header } from "@/components/header" 
export const metadata: Metadata = {
  title: "Blog de Bravilo | Inteligencia Artificial para tu negocio",
  description:
    "Descubrí cómo la inteligencia artificial puede transformar tu negocio con consejos prácticos, casos de éxito y tendencias del mercado.",
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <>
    <Header /><br /><br /><br />
      {/* <HeroSection
        title="Blog de Bravilo"
        subtitle="Descubrí cómo la inteligencia artificial puede transformar tu negocio con consejos prácticos, casos de éxito y tendencias del mercado."
      /> */}

      <section className="py-12 md:py-16">
        <div className="container px-4 mx-auto">
          {/* Featured Post */}
          {posts.length > 0 && (
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-blue-50 rounded-xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                    Destacado
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <Link href={`/blog/${posts[0].slug}`} className="hover:text-blue-600 transition-colors">
                      {posts[0].title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">{posts[0].description}</p>
                  <Link
                    href={`/blog/${posts[0].slug}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Leer artículo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="relative h-64 md:h-full w-full">
                  <Image
                    src={posts[0].coverImage || "/placeholder.svg?height=400&width=600"}
                    alt={posts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* All Posts */}
          <h2 className="text-2xl font-bold mb-8">Artículos recientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Querés saber más sobre cómo la IA puede ayudar a tu negocio?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Agendá una demo personalizada con nuestro equipo y descubrí cómo Bravilo puede transformar tu empresa.
          </p>
          <Link
            href="/contacto"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
          >
            Agendar Demo
          </Link>
        </div>
      </section>
    </>
  )
}
