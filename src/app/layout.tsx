import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import {Inter} from 'next/font/google'


const inter = Inter({subsets: ['latin']})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
    lang="en"
    className={cn(
      'bg-white text-slate-900 antialiased', inter.className
    )}
    >
      <body className='min-h-screen bg-slate-50 dark:bg-gray-900 antialiased'>
        <Providers>
        {children}
        <Navbar/>
        </Providers>

        <div className='h-40 md:hidden'/>
        {/* Allow for more heights on mobile devices */}
    </body>
    </html>
  )
}
