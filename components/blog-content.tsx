"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="animate-pulse bg-gray-100 h-96 w-full rounded-md" />
  }

  return (
    <div className="prose prose-blue max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
