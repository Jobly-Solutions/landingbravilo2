import Link from "next/link"
import type { BlogPost } from "@/lib/blog"

interface BlogSidebarProps {
  recentPosts: BlogPost[]
  categories?: string[]
}

export default function BlogSidebar({ recentPosts, categories = [] }: BlogSidebarProps) {
  return (
    <div className="space-y-8">
      {/* Búsqueda */}
      <div className="bg-white p-6 rounded-xl border">
        <h3 className="text-lg font-bold mb-4">Buscar</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar artículos..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 top-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Artículos recientes */}
      <div className="bg-white p-6 rounded-xl border">
        <h3 className="text-lg font-bold mb-4">Artículos recientes</h3>
        <ul className="space-y-4">
          {recentPosts.slice(0, 5).map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categorías */}
      {categories.length > 0 && (
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-lg font-bold mb-4">Categorías</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/blog/categoria/${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h3 className="text-lg font-bold mb-2">¿Necesitás ayuda con IA?</h3>
        <p className="text-gray-600 mb-4">
          Descubrí cómo Bravilo puede ayudarte a implementar soluciones de IA en tu negocio.
        </p>
        <Link
          href="/contacto"
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
        >
          Agendar Demo
        </Link>
      </div>
    </div>
  )
}
