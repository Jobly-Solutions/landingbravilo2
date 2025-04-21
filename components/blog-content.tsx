"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import type { Components } from "react-markdown"

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

  const components = {
    h1: ({ node, ...props }: any) => (
      <h1 className="text-4xl font-bold mb-8" {...props} />
    ),
    h2: ({ node, ...props }: any) => (
      <h2 className="text-3xl font-bold mt-12 mb-6" {...props} />
    ),
    h3: ({ node, ...props }: any) => (
      <h3 className="text-2xl font-bold mt-8 mb-4" {...props} />
    ),
    p: ({ node, ...props }: any) => (
      <p className="text-gray-700 mb-6 leading-relaxed" {...props} />
    ),
    ul: ({ node, ...props }: any) => (
      <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
    ),
    ol: ({ node, ...props }: any) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
    ),
    li: ({ node, ...props }: any) => (
      <li className="text-gray-700" {...props} />
    ),
    blockquote: ({ node, ...props }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-600" {...props} />
    ),
    strong: ({ node, ...props }: any) => (
      <strong className="font-bold" {...props} />
    ),
    a: ({ node, ...props }: any) => (
      <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
    ),
  }

  return (
    <article className="prose prose-lg prose-blue max-w-none">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  )
}
