import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="logobravilo.png"
            alt="Bravilo"
            width={120}
            height={120}
          />
          {/* <span className="text-xl font-bold bg-gradient-to-r from-[#0071E3] to-[#0071E3] bg-clip-text text-transparent">
            Bravilo
          </span> */}
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-sm hover:text-[#0071E3]">
            ¿Por qué?
          </a>
          <a href="#scouts" className="text-sm hover:text-[#0071E3]">
            Scouts
          </a>
          <a href="#process" className="text-sm hover:text-[#0071E3]">
            Proceso
          </a>
          <a href="#pricing" className="text-sm hover:text-[#0071E3]">
            Planes
          </a>
        </nav>
        <a
    href="https://calendar.app.google/FXgPt1w8ZTGpU8Fa9"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
        <Button className="bg-[#0071E3] hover:bg-[#0071E3]/90">Agendar Demo</Button>
        </a>
      </div>
    </header>
  )
}

