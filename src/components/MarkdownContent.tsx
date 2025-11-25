'use client'

import ReactMarkdown from 'react-markdown'

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      components={{
        // コードブロック
        pre: ({ children }) => (
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">
            {children}
          </pre>
        ),
        // インラインコード
        code: ({ children, className }) => {
          // コードブロック内のcodeは親のpreのスタイルを使用
          if (className) {
            return <code className={className}>{children}</code>
          }
          // インラインコード
          return (
            <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm text-gray-800">
              {children}
            </code>
          )
        },
        // 見出し
        h1: ({ children }) => (
          <h1 className="text-2xl font-bold mt-8 mb-4 text-gray-900 border-b pb-2">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">
            {children}
          </h3>
        ),
        // リスト
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-1 my-4 text-gray-700">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-1 my-4 text-gray-700">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-gray-700">{children}</li>
        ),
        // 段落
        p: ({ children }) => (
          <p className="my-3 text-gray-700 leading-relaxed">{children}</p>
        ),
        // リンク
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        // 引用
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600">
            {children}
          </blockquote>
        ),
        // テーブル
        table: ({ children }) => (
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border border-gray-200">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-gray-100">{children}</thead>
        ),
        th: ({ children }) => (
          <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-gray-200 px-4 py-2 text-gray-700">
            {children}
          </td>
        ),
        // 強調
        strong: ({ children }) => (
          <strong className="font-bold text-gray-900">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic">{children}</em>
        ),
        // 水平線
        hr: () => <hr className="my-6 border-gray-300" />
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
