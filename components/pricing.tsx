import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Planes de Bravilo Scouts</h2>
          <p className="text-lg text-gray-600">Soluciones adaptadas a las necesidades de tu negocio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Básico */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="text-sm font-semibold text-[#0071E3] uppercase mb-2">Básico</div>
              <h3 className="text-xl font-bold mb-3">Para pequeños negocios</h3>
              <p className="text-gray-600 text-sm">Ideal para quienes inician su transformación digital</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">1 Scout a elegir (Ventas o Soporte)</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Integración con WhatsApp o web</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Personalización básica del Scout</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Panel de control simplificado</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Soporte por email</p>
              </div>
            </div>

            <a
  href="https://calendar.app.google/FXgPt1w8ZTGpU8Fa9"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full"
>
  <button className="w-full py-3 bg-white border border-[#0071E3] text-[#0071E3] rounded-full font-medium hover:bg-blue-50 transition-colors">
    Quiero saber Más!
  </button>
</a>
          </div>

          {/* Plan Profesional */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#0071E3] relative hover:shadow-xl transition-shadow">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0071E3] text-white text-xs font-bold px-4 py-1 rounded-full">
              MÁS POPULAR
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold text-[#0071E3] uppercase mb-2">Profesional</div>
              <h3 className="text-xl font-bold mb-3">Para empresas en crecimiento</h3>
              <p className="text-gray-600 text-sm">Nos encargamos de todo para que te enfoques en tu negocio</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Acceso a 3 Scouts (Ventas, Soporte y Administración)</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Integraciones con CRM y sistemas de inventario</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Optimización continua con revisiones periódicas</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Funcionalidades avanzadas para ventas y soporte</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Capacitación especializada para tu equipo</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Soporte técnico dedicado</p>
              </div>
            </div>

            <a
  href="https://calendar.app.google/FXgPt1w8ZTGpU8Fa9"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full"
>
  <button className="w-full py-3 bg-white border border-[#0071E3] text-[#0071E3] rounded-full font-medium hover:bg-blue-50 transition-colors">
    Quiero saber Más!
  </button>
</a>
          </div>

          {/* Plan Empresarial */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="text-sm font-semibold text-[#0071E3] uppercase mb-2">Empresarial</div>
              <h3 className="text-xl font-bold mb-3">Para medianas y grandes empresas</h3>
              <p className="text-gray-600 text-sm">Solución completa para múltiples departamentos</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Acceso a todos los Scouts</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Integraciones ilimitadas con tus sistemas</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Personalización avanzada para tu industria</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Análisis de datos y reportes avanzados</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#0071E3] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Soporte 24/7 con respuesta garantizada</p>
              </div>
            </div>

            <a
  href="https://calendar.app.google/FXgPt1w8ZTGpU8Fa9"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full"
>
  <button className="w-full py-3 bg-white border border-[#0071E3] text-[#0071E3] rounded-full font-medium hover:bg-blue-50 transition-colors">
    Quiero saber Más!
  </button>
</a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Garantía de calidad 90 días</h3>
          <p className="text-gray-700">
            Si a los 90 días de implementar los scouts los resultados no son los esperados, te devolvemos todo tu
            dinero.
          </p>
        </div>
      </div>
    </section>
  )
}

