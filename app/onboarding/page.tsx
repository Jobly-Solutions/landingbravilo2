"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { CheckCircle, Loader2, Mail, Globe, Building, Users, BarChart3, AlertCircle, Phone } from "lucide-react"
import { z } from "zod"

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  sitioWeb: z.string().url({ message: "URL inválida" }).optional().or(z.literal("")),
  empresa: z.string().min(2, { message: "El nombre de la empresa es requerido" }),
  pais: z.string().min(1, { message: "El país es requerido" }),
  telefono: z.string().min(5, { message: "El teléfono es requerido" }),
  industria: z.enum(["inmobiliaria", "legal", "logistica", "agro", "otro"], {
    message: "Por favor selecciona una industria",
  }),
  tamanoEmpresa: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"], {
    message: "Por favor selecciona el tamaño de tu empresa",
  }),
})

type FormData = z.infer<typeof formSchema>

export default function OnboardingPage() {
  const [step, setStep] = useState<"paso1" | "paso2" | "loading" | "booking" | "landing">("paso1")
  const [formData, setFormData] = useState<FormData>({
    email: "",
    sitioWeb: "",
    empresa: "",
    pais: "Argentina",
    telefono: "",
    industria: "inmobiliaria",
    tamanoEmpresa: "1-10",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [calendarUrl, setCalendarUrl] = useState("")
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Guardar datos en localStorage cuando cambiamos al paso de booking
  useEffect(() => {
    if (step === "loading" || step === "booking" || step === "landing") {
      try {
        localStorage.setItem("braviloFormData", JSON.stringify(formData))
        console.log("Datos guardados en localStorage:", formData)
      } catch (error) {
        console.error("Error al guardar datos en localStorage:", error)
      }
    }
  }, [step, formData])

  // Recuperar datos de localStorage al cargar la página
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("braviloFormData")
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        console.log("Datos recuperados de localStorage:", parsedData)

        // Solo actualizar si estamos en el paso inicial
        if (step === "paso1") {
          setFormData((prevData) => ({
            ...prevData,
            ...parsedData,
          }))
        }
      }
    } catch (error) {
      console.error("Error al recuperar datos de localStorage:", error)
    }
  }, [step])

  // Construir la URL del calendario con los datos del usuario
  useEffect(() => {
    if (step === "landing" || step === "booking") {
      try {
        // Formatear el teléfono con el código de país
        const formattedPhone = formData.pais === "Argentina" ? `+54 ${formData.telefono}` : formData.telefono

        // Crear un objeto con todos los parámetros que queremos pasar
        const urlParams = {
          // Parámetros estándar
          email: formData.email,
          name: formData.empresa,
          company: formData.empresa,
          phone: formattedPhone,

          // Parámetros adicionales para aumentar compatibilidad
          companyName: formData.empresa,
          empresa: formData.empresa,
          organization: formData.empresa,
          business: formData.empresa,

          // Parámetros específicos para Angular Material (basado en el HTML proporcionado)
          answer: formData.empresa,

          // Información adicional
          industry: formData.industria,
          companySize: formData.tamanoEmpresa,
          country: formData.pais,
          website: formData.sitioWeb || "",

          // Parámetros específicos de Brevo (basados en documentación)
          COMPANY: formData.empresa,
          FNAME: formData.empresa.split(" ")[0] || "Cliente",
          LNAME: formData.empresa.split(" ").slice(1).join(" ") || formData.empresa,
        }

        // Convertir el objeto a una cadena de consulta URL
        const params = new URLSearchParams(urlParams).toString()

        // Construir la URL completa
        const url = `https://meet.brevo.com/bravilo/borderless?l=demo-bravilo&${params}`

        console.log("URL del calendario generada:", url)
        setCalendarUrl(url)
      } catch (error) {
        console.error("Error al generar la URL del calendario:", error)
      }
    }
  }, [step, formData])

  // Función para inyectar script en la página
  useEffect(() => {
    if (step === "booking" && iframeRef.current) {
      // Crear un script que se ejecutará cuando el iframe esté cargado
      const script = document.createElement("script")
      script.innerHTML = `
        // Función para intentar llenar el formulario periódicamente
        function attemptToFillForm() {
          try {
            // Verificar si el iframe está cargado
            const iframe = document.querySelector('iframe');
            if (!iframe || !iframe.contentWindow) return;
            
            // Intentar enviar un mensaje al iframe
            iframe.contentWindow.postMessage({
              type: 'FILL_FORM_DATA',
              data: ${JSON.stringify(formData)}
            }, '*');
            
            console.log('Mensaje enviado al iframe');
          } catch (e) {
            console.error('Error al intentar comunicarse con el iframe:', e);
          }
        }
        
        // Intentar cada 2 segundos
        setInterval(attemptToFillForm, 2000);
        
        // También intentar inmediatamente
        attemptToFillForm();
      `

      // Añadir el script al documento
      document.body.appendChild(script)

      // Limpiar al desmontar
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [step, formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateStep1 = () => {
    try {
      z.object({
        email: formSchema.shape.email,
        sitioWeb: formSchema.shape.sitioWeb,
      }).parse(formData)
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const validateStep2 = () => {
    try {
      z.object({
        empresa: formSchema.shape.empresa,
        pais: formSchema.shape.pais,
        telefono: formSchema.shape.telefono,
        industria: formSchema.shape.industria,
        tamanoEmpresa: formSchema.shape.tamanoEmpresa,
      }).parse(formData)
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep("paso2")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep2() || isSubmitting) return

    setIsSubmitting(true)
    setErrors({})

    try {
      console.log("Enviando datos:", formData)

      const response = await fetch("/api/brevo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        console.error("Error en la respuesta:", result)
        throw new Error(result.error || "Error al enviar los datos")
      }

      console.log("Respuesta exitosa:", result)

      // Simulate loading with progress
      setStep("loading")

      // Simulate progress
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            // Primero vamos a la página intermedia
            setStep("landing")
            return 100
          }
          return prev + 5
        })
      }, 150)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setErrors({ submit: `Error al enviar el formulario: ${error.message}` })
      setIsSubmitting(false)
    }
  }

  // Función para continuar a la página de Brevo
  const handleContinueToBrevo = () => {
    setStep("booking")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden ${
          step === "booking" ? "h-[90vh] flex flex-col" : ""
        }`}
      >
        <div className={`flex flex-col md:flex-row ${step === "booking" ? "h-full flex-1" : ""}`}>
          {/* Imagen de Scouts - Solo mostrar en pasos 1, 2, loading y landing */}
          {step !== "booking" && (
            <div className="w-full md:w-5/12 bg-gradient-to-br from-blue-500 to-blue-400 p-8 flex items-center justify-center">
              <div className="relative h-64 w-64 rounded-full bg-white p-6 shadow-lg flex items-center justify-center">
                <Image
                  src="/bravilo-logo.png"
                  alt="Bravilo"
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          )}

          {/* Formulario o Calendario */}
          <div
            className={`w-full ${step !== "booking" ? "md:w-7/12 p-8" : "p-0 flex-1 flex flex-col"} ${step === "booking" ? "h-full overflow-hidden" : ""}`}
          >
            {step !== "booking" && (
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 relative">
                  <Image src="/bravilo-logo.png" alt="Bravilo" width={32} height={32} />
                </div>
                <h2 className="text-lg font-medium">Bravilo</h2>
              </div>
            )}

            {step === "paso1" && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Comencemos con Bravilo</h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleNextStep()
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Dirección de correo electrónico
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="tu@ejemplo.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="sitioWeb" className="block text-sm font-medium text-gray-700">
                      Sitio web (opcional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        id="sitioWeb"
                        name="sitioWeb"
                        value={formData.sitioWeb}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${errors.sitioWeb ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="https://tuempresa.com"
                      />
                    </div>
                    {errors.sitioWeb && <p className="text-red-500 text-sm">{errors.sitioWeb}</p>}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Continuar
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === "paso2" && (
              <div>
                <h1 className="text-2xl font-bold mb-6">Sobre tu empresa</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700">
                      Nombre de la empresa *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${errors.empresa ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    {errors.empresa && <p className="text-red-500 text-sm">{errors.empresa}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="pais" className="block text-sm font-medium text-gray-700">
                        País *
                      </label>
                      <select
                        id="pais"
                        name="pais"
                        value={formData.pais}
                        onChange={handleChange}
                        className={`block w-full px-3 py-2 border ${errors.pais ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                      >
                        <option value="Argentina">Argentina (+54)</option>
                        <option value="Chile">Chile (+56)</option>
                        <option value="Uruguay">Uruguay (+598)</option>
                        <option value="Paraguay">Paraguay (+595)</option>
                        <option value="Brasil">Brasil (+55)</option>
                        <option value="Colombia">Colombia (+57)</option>
                        <option value="México">México (+52)</option>
                        <option value="España">España (+34)</option>
                        <option value="Otro">Otro</option>
                      </select>
                      {errors.pais && <p className="text-red-500 text-sm">{errors.pais}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                        Teléfono *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          className={`block w-full pl-10 pr-3 py-2 border ${errors.telefono ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                          placeholder="Número de teléfono"
                        />
                      </div>
                      {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="industria" className="block text-sm font-medium text-gray-700">
                      Industria *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BarChart3 className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="industria"
                        name="industria"
                        value={formData.industria}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${errors.industria ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                      >
                        <option value="inmobiliaria">Inmobiliaria</option>
                        <option value="legal">Estudios Jurídicos</option>
                        <option value="logistica">Logística</option>
                        <option value="agro">Agro</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    {errors.industria && <p className="text-red-500 text-sm">{errors.industria}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="tamanoEmpresa" className="block text-sm font-medium text-gray-700">
                      Tamaño de la empresa *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="tamanoEmpresa"
                        name="tamanoEmpresa"
                        value={formData.tamanoEmpresa}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${errors.tamanoEmpresa ? "border-red-300" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                      >
                        <option value="1-10">1-10 empleados</option>
                        <option value="11-50">11-50 empleados</option>
                        <option value="51-200">51-200 empleados</option>
                        <option value="201-500">201-500 empleados</option>
                        <option value="500+">Más de 500 empleados</option>
                      </select>
                    </div>
                    {errors.tamanoEmpresa && <p className="text-red-500 text-sm">{errors.tamanoEmpresa}</p>}
                  </div>

                  {errors.submit && (
                    <div className="bg-red-50 border border-red-400 rounded-md p-3 flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-red-500 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  <div className="pt-4 flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep("paso1")}
                      className="w-1/3 flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <Loader2 className="animate-spin h-4 w-4 mr-2" />
                          <span>Enviando...</span>
                        </div>
                      ) : (
                        "Comenzar con Bravilo"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === "loading" && (
              <div className="text-center py-8">
                <div className="mb-4">
                  <div className="w-24 h-24 mx-auto relative">
                    <Image
                      src="/robot-avatar-blue.png"
                      alt="Scout de Bravilo"
                      width={96}
                      height={96}
                      className="animate-pulse"
                    />
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-4">Estamos creando tu scout</h2>
                <p className="text-gray-600 mb-6">
                  Esto tomará solo unos momentos. Estamos personalizando tu scout según tus necesidades.
                </p>

                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${loadingProgress}%` }}
                  ></div>
                </div>

                <div className="text-gray-600 animate-pulse">
                  {loadingProgress < 30 && "Analizando tu industria..."}
                  {loadingProgress >= 30 && loadingProgress < 60 && "Configurando integraciones..."}
                  {loadingProgress >= 60 && loadingProgress < 90 && "Preparando tu scout..."}
                  {loadingProgress >= 90 && "¡Casi listo!"}
                </div>
              </div>
            )}

            {step === "landing" && (
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto relative">
                    <Image src="/robot-avatar-blue.png" alt="Scout de Bravilo" width={96} height={96} />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">¡Tu scout está listo!</h2>
                <p className="text-gray-600 mb-8">
                  Hemos creado tu scout personalizado. Ahora puedes agendar una demostración con nuestro equipo.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-lg mb-4">Información de tu empresa</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-sm text-gray-500">Empresa</p>
                      <p className="font-medium">{formData.empresa}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <p className="font-medium">{formData.telefono}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">País</p>
                      <p className="font-medium">{formData.pais}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Industria</p>
                      <p className="font-medium">{formData.industria}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tamaño de empresa</p>
                      <p className="font-medium">{formData.tamanoEmpresa}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleContinueToBrevo}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Agendar demostración
                </button>
              </div>
            )}

            {step === "booking" && (
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 relative">
                      <Image src="/bravilo-logo.png" alt="Bravilo" width={32} height={32} />
                    </div>
                    <h2 className="text-lg font-medium">Bravilo</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-green-600">Scout creado con éxito</span>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  {calendarUrl && (
                    <iframe
                      ref={iframeRef}
                      src={calendarUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Calendario de Brevo"
                      className="w-full h-full"
                      style={{ minHeight: "650px" }}
                    ></iframe>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
