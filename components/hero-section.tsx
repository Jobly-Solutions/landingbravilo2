import CTAButton from "@/components/cta-button"

interface HeroSectionProps {
  title: string
  subtitle: string
  showButton?: boolean
}

export default function HeroSection({ title, subtitle, showButton = true }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6 max-w-4xl mx-auto">{title}</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">{subtitle}</p>
        {showButton && (
          <div className="flex justify-center">
            <CTAButton />
          </div>
        )}
      </div>
    </section>
  )
}
