import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="container text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">404</h1>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">Artículo no encontrado</h2>
        <p className="mx-auto mb-8 max-w-md text-lg text-gray-700">
          El artículo que estás buscando no existe o ha sido movido a otra ubicación.
        </p>
        <Link href="/blog">
          <Button size="lg">Volver al blog</Button>
        </Link>
      </div>
    </div>
  )
}
