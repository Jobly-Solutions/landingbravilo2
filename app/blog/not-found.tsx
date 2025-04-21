import Link from "next/link"
import { Header } from "@/components/header"
export default function NotFound() {
  return (
    <>
      <Header />
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
    </>
  )
}
