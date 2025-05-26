import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import type { OnboardingSubmission } from "@/lib/supabase"

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

    console.log("Guardando datos:", { email, empresa, sitioWeb, pais, telefono, industria, tamanoEmpresa })

    // 1. Guardar en Supabase
    const submissionData: Omit<OnboardingSubmission, "id" | "created_at" | "updated_at"> = {
      email,
      sitio_web: sitioWeb || null,
      empresa,
      pais,
      telefono,
      industria,
      tamano_empresa: tamanoEmpresa,
    }

    const { data: supabaseData, error: supabaseError } = await supabase
      .from("onboarding_submissions")
      .insert([submissionData])
      .select()

    if (supabaseError) {
      console.error("Error al guardar en Supabase:", supabaseError)
      return NextResponse.json(
        { error: "Error al guardar en la base de datos", details: supabaseError.message },
        { status: 500 },
      )
    }

    console.log("Datos guardados en Supabase:", supabaseData)

    // 2. Enviar a Brevo (mantener funcionalidad existente)
    try {
      const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
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
          updateEnabled: true,
        }),
      })

      if (!brevoResponse.ok) {
        console.warn("Error en Brevo, pero datos guardados en Supabase:", brevoResponse.status)
      } else {
        console.log("Datos también enviados a Brevo exitosamente")
      }
    } catch (brevoError) {
      console.warn("Error al enviar a Brevo, pero datos guardados en Supabase:", brevoError)
    }

    return NextResponse.json({
      success: true,
      data: supabaseData[0],
      message: "Datos guardados exitosamente",
    })
  } catch (error) {
    console.error("Error al procesar la solicitud:", error)
    return NextResponse.json(
      {
        error: "Error interno del servidor",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
