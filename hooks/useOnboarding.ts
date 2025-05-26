"use client"

import { useState } from "react"
import { supabase, type OnboardingSubmission } from "@/lib/supabase"

export function useOnboarding() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const saveSubmission = async (data: Omit<OnboardingSubmission, "id" | "created_at" | "updated_at">) => {
    setLoading(true)
    setError(null)

    try {
      const { data: result, error: supabaseError } = await supabase
        .from("onboarding_submissions")
        .insert([data])
        .select()

      if (supabaseError) {
        throw new Error(supabaseError.message)
      }

      return result[0]
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error desconocido"
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const getSubmissions = async () => {
    setLoading(true)
    setError(null)

    try {
      const { data, error: supabaseError } = await supabase
        .from("onboarding_submissions")
        .select("*")
        .order("created_at", { ascending: false })

      if (supabaseError) {
        throw new Error(supabaseError.message)
      }

      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error desconocido"
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const getSubmissionByEmail = async (email: string) => {
    setLoading(true)
    setError(null)

    try {
      const { data, error: supabaseError } = await supabase
        .from("onboarding_submissions")
        .select("*")
        .eq("email", email)
        .single()

      if (supabaseError) {
        throw new Error(supabaseError.message)
      }

      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error desconocido"
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    saveSubmission,
    getSubmissions,
    getSubmissionByEmail,
  }
}
