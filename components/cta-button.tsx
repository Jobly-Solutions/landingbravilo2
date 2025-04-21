import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAButtonProps {
  text?: string
  className?: string
}

export default function CTAButton({ text = "Agendar Demo", className = "" }: CTAButtonProps) {
  return (
    <Link href="https://braviloai.com/contacto">
      <Button className={`bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md ${className}`}>
        {text}
      </Button>
    </Link>
  )
}
