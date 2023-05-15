import Navigation from '@/components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My First App',
  description: 'hola mundo desde nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">
      <Navigation/>
        {children}
        </body>
    </html>
  )
}
