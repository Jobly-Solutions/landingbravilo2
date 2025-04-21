"use client"

import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Contacto</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Agenda una demo personalizada con nuestro equipo para descubrir cómo Bravilo puede ayudarte a potenciar tu negocio.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0yAWXoJcKyxe2-TY8ImK4H_7IYHf2AJBZ1sedaHBWiuO-QUAZMotmmRJ3imd0eF2TCEX0auk6f?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="700" 
                frameBorder="0"
              ></iframe>
            </div>

            {/* <div className="mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Información de Contacto</h2>
                <p className="text-gray-600">
                  Email: info@bravilo.com<br />
                  Teléfono: +1 234 567 890
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </>
  )
} 