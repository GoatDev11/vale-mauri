"use client";

import { Playfair_Display, Dancing_Script } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function WeddingInvitation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f2]">
      <nav className="bg-[#E8D9CA] p-4 shadow-md h-14">
        <div className="container mx-auto flex flex-row sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <Link href="/" className="relative group">
            <span
              className={`${playfair.className} text-white font-semibold py-1 px-3 rounded-full transition-all duration-300 ease-in-out bg-[#8B6E4E] group-hover:bg-white group-hover:text-[#8B6E4E] text-sm`}
            >
              Principal
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out mb-0"></span>
          </Link>
          <Link href="/galeria" className="relative group">
            <span
              className={`${playfair.className} text-white font-semibold py-1 px-3 rounded-full transition-all duration-300 ease-in-out bg-[#8B6E4E] group-hover:bg-white group-hover:text-[#8B6E4E] text-sm`}
            >
              Galería
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out mb-0"></span>
          </Link>
        </div>
      </nav>

      <div className="relative h-[calc(100vh-60px)] overflow-hidden">
        <img
          src="/backgroundwedding.png"
          alt="Imagen de fondo"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-center p-4 h-full">
          <div className="max-w-2xl w-full h-full p-4 sm:p-8 relative">
            <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-[url('/placeholder.svg?height=100&width=100')] opacity-20 transform -rotate-90"></div>
            <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-[url('/placeholder.svg?height=100&width=100')] opacity-20"></div>

            <div
              className={`text-center mb-6 sm:mb-8 transition-opacity duration-1000 ease-in-out ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className={`${playfair.className} text-[#8B6E4E] text-xs sm:text-sm mb-2`}
              >
                Forever trusting who we are
                <br />
                And nothing else matters...
              </p>
              <p
                className={`${playfair.className} text-[#8B6E4E] text-xs sm:text-sm mb-4`}
              >
                Con la bendición de nuestros padres:
              </p>
              <div className="flex justify-between text-[#8B6E4E] text-xs sm:text-sm mb-6 sm:mb-8">
                <p>
                  Bernardo Calleja
                  <br />
                  Adriana Quiroga
                </p>
                <p>Hilda Terceros</p>
              </div>
            </div>

            <h1
              className={`${
                dancingScript.className
              } text-[#C1976F] text-4xl sm:text-5xl mb-4 text-center transition-all duration-1000 ease-in-out ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Valeria y Mauricio
            </h1>

            <div
              className={`text-center mb-6 sm:mb-8 transition-opacity duration-1000 ease-in-out delay-300 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className={`${playfair.className} text-[#8B6E4E] text-base sm:text-lg mb-2`}
              >
                ¡NOS CASAMOS!
              </p>
              <p
                className={`${playfair.className} text-[#8B6E4E] text-xs sm:text-sm`}
              >
                Y queremos celebrarlo contigo
              </p>
            </div>

            <div
              className={`text-center mb-6 sm:mb-8 transition-opacity duration-1000 ease-in-out delay-500 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className={`${playfair.className} text-[#C1976F] uppercase tracking-widest mb-2 text-sm sm:text-base`}
              >
                Octubre
              </p>
              <p
                className={`${playfair.className} text-[#C1976F] text-4xl sm:text-5xl font-bold mb-2`}
              >
                19
              </p>
              <p
                className={`${playfair.className} text-[#8B6E4E] mb-4 text-sm sm:text-base`}
              >
                12:00pm
              </p>
              <p
                className={`${playfair.className} text-[#8B6E4E] uppercase tracking-widest text-sm sm:text-base`}
              >
                Salar de Uyuni
              </p>
            </div>

            <div
              className={`text-center transition-opacity duration-1000 ease-in-out delay-700 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href="/memories"
                className={`${playfair.className} inline-block bg-[#C1976F] text-white py-2 px-4 sm:px-6 rounded-full hover:bg-[#8B6E4E] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base`}
              >
                Agrega tus fotos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
