import type { Metadata } from "next"
import { getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/blog"
import BlogContent from "@/components/blog-content"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Artículo no encontrado",
      description: "Lo sentimos, el artículo que estás buscando no existe o ha sido movido."
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  const relatedPosts = await getRelatedBlogPosts(params.slug)

  if (!post) {
    return (
      
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-6">Artículo no encontrado</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, el artículo que estás buscando no existe o ha sido movido.
        </p>
        <Link
          href="/blog"
          className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
        >
          Volver al blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <Header /><br /><br />
      <div className="bg-blue-50 py-8">
        <div className="container px-4 mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
          </Link>
        </div>
      </div>

      <article className="py-8 md:py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.keywords.map((keyword) => (
                <span key={keyword} className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                  {keyword}
                </span>
              ))}
            </div>

            {post.coverImage && (
              <div className="relative h-64 md:h-96 w-full mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <BlogContent content={post.content} />

            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <h2 className="text-xl font-bold mb-4">¿Querés saber más sobre este tema?</h2>
              <p className="text-gray-700 mb-6">
                En Bravilo podemos ayudarte a implementar soluciones de IA adaptadas a tu negocio. Agendá una demo
                personalizada con nuestro equipo.
              </p>
              <Link
                href="/contacto"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
              >
                Agendar Demo
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Artículos relacionados</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.slug} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-40 w-full">
                  <Image
                    src={relatedPost.coverImage}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {relatedPost.description}
                  </p>
                  <Link 
                    href={`/blog/${relatedPost.slug}`}
                    className="text-blue-600 text-sm font-medium hover:text-blue-800"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
