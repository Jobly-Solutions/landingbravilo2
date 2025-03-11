import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Scouts } from "@/components/scouts"
import { Integrations } from "@/components/integrations"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Scouts />
        <Integrations />
        <Process />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

