import Navbar from '@/app/componets/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'

const dance =Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'First class in react',
  description: 'React using Next framework',
  keywords: 'react, next, js, javascript, html, css, tailwind'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dance.className}>
        <main className= 'flex justify-start space-x-2 py'>
        <Navbar/>
        <div className='w-full'>
          {/* <Top Nav/> */}
          {children}
        </div>
      </main>
      </body>
    </html>
  )
}