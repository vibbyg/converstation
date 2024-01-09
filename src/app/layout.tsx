import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CONVERSTATION',
  description: 'catalyze your conversations with thought-provoking prompts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>{children}</body>
    </html>
  )
}
