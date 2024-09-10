"use client";

import { useState } from "react";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function AgregarFotos() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f5f2]">
      <nav className="bg-[#E8D9CA] p-4 shadow-md h-14">
        <div className="container mx-auto flex justify-center">
          <Link href="/" className="relative group">
            <span
              className={`${playfair.className} text-white font-semibold py-1 px-3 rounded-full transition-all duration-300 ease-in-out bg-[#8B6E4E] group-hover:bg-white group-hover:text-[#8B6E4E] text-sm`}
            >
              Volver a la invitación
            </span>
          </Link>
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl p-4 sm:p-8 bg-white rounded-lg shadow-lg">
          <h1
            className={`${dancingScript.className} text-[#C1976F] text-3xl sm:text-4xl mb-4 sm:mb-6 text-center`}
          >
            Comparte tus recuerdos
          </h1>

          <p
            className={`${playfair.className} text-[#8B6E4E] text-center mb-6 sm:mb-8 text-sm sm:text-base`}
          >
            Queridos amigos y familiares,
            <br />
            Nos encantaría que compartieran sus momentos favoritos de nuestra
            boda.
            <br />
            Cada foto y video que suban se convertirá en un tesoro para
            nosotros,
            <br />
            ayudándonos a revivir este día tan especial una y otra vez.
            <br />
            ¡Gracias por ser parte de nuestra historia de amor!
          </p>

          <form className="space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="nombre"
                className={`${playfair.className} block text-[#8B6E4E] mb-2 text-sm sm:text-base`}
              >
                Tu nombre
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-3 py-2 border border-[#C1976F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6E4E] text-sm sm:text-base"
                placeholder="Escribe tu nombre aquí"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className={`${playfair.className} block text-[#8B6E4E] mb-2 text-sm sm:text-base`}
              >
                Tu mensaje para los novios
              </label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full px-3 py-2 border border-[#C1976F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B6E4E] h-24 sm:h-32 text-sm sm:text-base"
                placeholder="Comparte tus deseos y recuerdos favoritos de la boda"
              />
            </div>

            <div>
              <label
                htmlFor="archivo"
                className={`${playfair.className} block text-[#8B6E4E] mb-2 text-sm sm:text-base`}
              >
                Sube tus fotos o videos
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="archivo"
                  className="hidden"
                  accept="image/*,video/*"
                  multiple
                />
                <label
                  htmlFor="archivo"
                  className="cursor-pointer flex items-center justify-center w-full px-4 py-4 sm:py-6 border-2 border-dashed border-[#C1976F] rounded-lg text-[#8B6E4E] hover:bg-[#f0e6d9] transition-colors duration-300 text-sm sm:text-base"
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Haz clic aquí para seleccionar tus archivos
                </label>
              </div>
            </div>

            <button
              type="submit"
              className={`${playfair.className} w-full bg-[#C1976F] text-white py-2 px-6 rounded-full hover:bg-[#8B6E4E] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base`}
            >
              Subir recuerdos
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
