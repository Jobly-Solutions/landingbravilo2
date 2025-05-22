import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/lib/get-blog-post"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllBlogPosts } from "@/lib/get-blog-posts"
import Markdown from "react-markdown"

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | Bravilo",
      description: "El artículo que buscas no existe o ha sido movido.",
    }
  }

  return {
    title: `${post.title} | Bravilo Blog`,
    description: post.description,
    keywords: post.keywords,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (excluding current post)
  const allPosts = await getAllBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort(() => 0.5 - Math.random()) // Simple random shuffle
    .slice(0, 3) // Get 3 random posts

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Link>

            <div className="mb-4 flex items-center gap-2">
              {post.keywords.slice(0, 1).map((keyword) => (
                <Badge key={keyword} variant="secondary" className="px-3 py-1 text-sm">
                  {keyword}
                </Badge>
              ))}
            </div>

            <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="text-lg text-gray-700 md:text-xl">{post.description}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container py-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container py-8">
        <div className="mx-auto max-w-3xl">
          <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-700 prose-a:text-primary">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-r from-primary/80 to-primary p-8 md:p-12">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">¿Querés implementar IA en tu empresa?</h2>
            <p className="mb-8 text-lg text-white/90">
              Agendá una consultoría gratuita y descubrí cómo la inteligencia artificial puede transformar tu negocio.
            </p>
            <Link href="/onboarding">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Agendar consultoría gratuita
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="container py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">Artículos relacionados</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedPost.coverImage || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-primary">{relatedPost.title}</h3>
                  <p className="text-sm text-gray-700">{relatedPost.description.substring(0, 120)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
