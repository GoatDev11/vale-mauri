"use-client"

import { Playfair_Display, Dancing_Script } from 'next/font/google'
import Link from 'next/link'
import { Heart } from 'lucide-react'

const playfair = Playfair_Display({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] })

export default function MemorieSuccess() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f2]">
      <nav className="bg-[#C1976F] p-4 shadow-md">
        <div className="container mx-auto flex justify-center">
          <Link href="/" className="relative group">
            <span className="text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out bg-[#8B6E4E] group-hover:bg-white group-hover:text-[#8B6E4E] text-sm sm:text-base">
              Volver a la invitación
            </span>
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <Heart className="w-16 h-16 text-[#C1976F] mx-auto mb-6" />
          
          <h1 className={`${dancingScript.className} text-[#C1976F] text-4xl sm:text-5xl mb-6`}>
            ¡Gracias por compartir!
          </h1>
          
          <p className={`${playfair.className} text-[#8B6E4E] text-lg sm:text-xl mb-8`}>
            Tu recuerdo hace nuestra boda aún más memorable. Apreciamos que hayas tomado el tiempo para compartir este momento especial con nosotros.
          </p>
          
          <p className={`${playfair.className} text-[#8B6E4E] text-base sm:text-lg mb-8`}>
            Cada foto y mensaje que recibimos llena nuestros corazones de alegría y nos ayuda a revivir este día tan especial.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/galery" 
              className={`${playfair.className} inline-block bg-[#C1976F] text-white py-2 px-6 rounded-full hover:bg-[#8B6E4E] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1`}
            >
              Ver galería
            </Link>
            <Link 
              href="/memories" 
              className={`${playfair.className} inline-block bg-[#8B6E4E] text-white py-2 px-6 rounded-full hover:bg-[#C1976F] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1`}
            >
              Subir otro recuerdo
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}