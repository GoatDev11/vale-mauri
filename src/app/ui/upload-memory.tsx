import React from 'react'
import { Playfair_Display, Dancing_Script } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] })

interface uploadMemoryProps {
  isVisible: boolean
}

export default function UploadMemory({ isVisible }: uploadMemoryProps) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#f9f5f2] rounded-lg p-8 max-w-md w-full text-center">
        <h2 className={`${dancingScript.className} text-[#C1976F] text-3xl mb-4`}>
          Subiendo tus recuerdos
        </h2>
        <p className={`${playfair.className} text-[#8B6E4E] mb-6`}>
          Estamos guardando tus preciosos momentos. Esto puede tomar unos segundos...
        </p>
        <div className="w-16 h-16 mx-auto">
          {/* Loader de Uiverse */}
          <div className="loader"></div>
        </div>
      </div>

      {/* Estilos del loader */}
      <style jsx>{`
        .loader {
          width: 35px;
          height: 80px;
          position: relative;
        }

        .loader:after {
          content: "";
          position: absolute;
          inset: 0;
          padding: 3px 5px;
          border-top: 1px solid #bbb6aa;
          border-bottom: 4px solid #bbb6aa;
          background: linear-gradient(#612329 0 0) bottom no-repeat content-box, 
            #e4e0d7;
          mix-blend-mode: darken;
          animation: l1 1.5s infinite linear;
        }

        .loader:before {
          content: "";
          position: absolute;
          inset: -18px calc(50% - 2px) 8px;
          background: #eb6b3e;
          transform-origin: bottom;
          transform: rotate(8deg);
        }

        @keyframes l1 {
          0% {
            background-size: 100% 100%;
          }

          100% {
            background-size: 100% 5%;
          }
        }
      `}</style>
    </div>
  )
}