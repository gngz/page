import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import '@/styles/global.scss'

const font = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DiogoPassos.pt',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
