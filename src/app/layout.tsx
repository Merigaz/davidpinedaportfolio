import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { LinksHeader } from '@/components/LinksHeader'

const roboto = Roboto({ weight: "400", preload: false })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}><header className="flex mt-2 justify-between align-middle"><LinksHeader/><Navbar /><div></div></header>{children}</body>
    </html>
  )
}
