import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#262626] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Image
            src="logo.png"
            alt="Bravilo"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold">Bravilo</span>
        </div>

        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bravilo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

