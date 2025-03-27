import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyScouts } from "@/components/why-scouts"
import { ScoutShowcase } from "@/components/scout-showcase"
import { Integrations } from "@/components/integrations"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Industries } from "@/components/industries"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhyScouts />
        <ScoutShowcase />
        <Industries />
        <Integrations />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

