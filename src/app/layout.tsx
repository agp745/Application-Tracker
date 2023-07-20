import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/context/authProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AppTrack',
  description: 'Keep track of your apps!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  )
}
