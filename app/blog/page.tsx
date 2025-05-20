import Image from "next/image"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/get-blog-posts"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog | Bravilo",
  description: "Artículos sobre inteligencia artificial, automatización y optimización de procesos para PyMEs",
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
              BLOG
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Inteligencia Artificial para tu negocio
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
              Artículos, guías y casos de éxito sobre cómo la IA puede transformar tu empresa
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary">{post.title}</h2>
                  <p className="mb-6 flex-1 text-base text-gray-700">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
