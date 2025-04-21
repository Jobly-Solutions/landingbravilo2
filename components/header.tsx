import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="https://braviloai.com/" className="relative w-48 h-12">
          <Image
            src="/logobravilo.png"
            alt="Bravilo Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="https://braviloai.com/#benefits" className="text-sm hover:text-[#0071E3]">
            ¿Por qué?
          </Link>
          <Link href="https://braviloai.com/scouts" className="text-sm hover:text-[#0071E3]">
            Scouts
          </Link>
          <Link href="https://braviloai.com/#process" className="text-sm hover:text-[#0071E3]">
            Proceso
          </Link>
          <Link href="https://braviloai.com/#pricing" className="text-sm hover:text-[#0071E3]">
            Planes
          </Link>
          <Link href="https://braviloai.com/blog" className="text-sm hover:text-[#0071E3]">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="https://braviloai.com/contacto">
            <Button variant="outline" className="hidden md:flex">
              Contactar
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="https://braviloai.com/#benefits" className="text-sm hover:text-[#0071E3]">
                  ¿Por qué?
                </Link>
                <Link href="https://braviloai.com/scouts" className="text-sm hover:text-[#0071E3]">
                  Scouts
                </Link>
                <Link href="https://braviloai.com/#process" className="text-sm hover:text-[#0071E3]">
                  Proceso
                </Link>
                <Link href="https://braviloai.com/#pricing" className="text-sm hover:text-[#0071E3]">
                  Planes
                </Link>
                <Link href="https://braviloai.com/blog" className="text-sm hover:text-[#0071E3]">
                  Blog
                </Link>
                <Link href="https://braviloai.com/contacto">
                  <Button variant="outline" className="w-full">
                    Contactar
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

