'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg flex items-center gap-2 shadow-md transition-all"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium">コピーしました！</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span className="text-sm font-medium">コピー</span>
        </>
      )}
    </button>
  )
}
