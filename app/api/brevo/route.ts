import { NextResponse } from "next/server"

// Brevo API key
const BREVO_API_KEY = "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"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { empresa, email, sitioWeb, pais, telefono, industria, tamanoEmpresa } = body

    // Validar datos mínimos
    if (!empresa || !email) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    console.log("Enviando datos a Brevo:", { email, empresa, sitioWeb, pais, telefono, industria, tamanoEmpresa })

    try {
      // Crear contacto en Brevo
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          email,
          attributes: {
            EMPRESA: empresa,
            SITIO_WEB: sitioWeb || "",
            PAIS: pais,
            TELEFONO: telefono,
            INDUSTRIA: industria,
            TAMANO_EMPRESA: tamanoEmpresa,
          },
          updateEnabled: true, // Actualizar si el contacto ya existe
        }),
      })

      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        const errorText = await response.text()
        console.error("Error de Brevo (status):", response.status, errorText)

        let errorData
        try {
          errorData = JSON.parse(errorText)
        } catch (e) {
          errorData = { message: errorText || "Error desconocido" }
        }

        return NextResponse.json(
          { error: "Error al crear contacto en Brevo", details: errorData },
          { status: response.status },
        )
      }

      // Intentar parsear la respuesta como JSON
      let responseData
      try {
        const responseText = await response.text()
        responseData = responseText ? JSON.parse(responseText) : {}
      } catch (e) {
        console.log("La respuesta no es JSON válido, pero la operación fue exitosa")
        responseData = { success: true }
      }

      return NextResponse.json({ success: true, data: responseData })
    } catch (apiError) {
      console.error("Error en la llamada a la API de Brevo:", apiError)
      return NextResponse.json(
        { error: "Error al conectar con la API de Brevo", details: apiError.message },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error al procesar la solicitud:", error)
    return NextResponse.json({ error: "Error interno del servidor", details: error.message }, { status: 500 })
  }
}
