import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript
export interface OnboardingSubmission {
  id?: string
  nombre: string // Nuevo campo agregado
  email: string
  sitio_web?: string
  empresa: string
  pais: string
  telefono: string
  industria: string
  tamano_empresa: string
  created_at?: string
  updated_at?: string
}
