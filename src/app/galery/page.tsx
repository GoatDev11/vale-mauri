"use client";

import { useEffect, useState } from "react";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import Link from "next/link";
import { X } from "lucide-react";
import { supabase } from "../utils/supabase";
import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const playfair = Playfair_Display({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });

interface Memory {
  id: number;
  name: string;
  message: string;
  image_url: string;
  // ... otras propiedades
}

export default function Galery() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const fetchMemories = async () => {
    try {
      const { data, error } = await supabase.from("memories").select("*");
      if (error) {
        console.error("Error al obtener los recuerdos:", error);
      } else {
        setMemories(data);
      }
    } catch (error) {
      console.error("Error al obtener los recuerdos:", error);
    }
  };
  useEffect(() => {
    fetchMemories();
  }, []);

  const closeModal = () => {
    setSelectedMemory(null);
  };

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

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1
          className={`${dancingScript.className} text-[#C1976F] text-4xl sm:text-5xl mb-8 text-center`}
        >
          Galería de Recuerdos
        </h1>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* {memories.map((memory: Memory) => (
            <div
              key={memory.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 border-2 border-[#C1976F]"
            >
              <div
                onClick={() => setSelectedMemory(memory)}
                className="w-full h-48 relative overflow-hidden"
              >
                <img
                  src={memory.image_url}
                  alt={`Foto de ${memory.name}`}
                  className="w-full h-full object-contain transition-all duration-300 hover:opacity-80 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-[#e6d7c3]">
                <p
                  className={`${playfair.className} text-[#8B6E4E] text-center font-semibold truncate`}
                >
                  {memory.name}
                </p>
              </div>
            </div>
          ))}
 */}
          {memories.map((memory: Memory) => (
            <Card
              key={memory.id}
              isFooterBlurred
              radius="lg"
              className="cursor-pointer border-2 border-[#C1976F] relative h-[300px] w-[300px] overflow-hidden"
            >
              <div className="relative h-full w-full" onClick={() => setSelectedMemory(memory)}>
                <Image
                  alt={`Foto de ${memory.name}`}
                  className="h-full w-full object-cover; transition-all duration-300 hover:opacity-80 group-hover:scale-110"
                  src={memory.image_url}
                  width={300}
                  height={300}
                  priority={true}
                />
              </div>
              <CardFooter className="before:bg-white/10 border-white/20 border-1 border-[#C1976F] overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p
                  className={`${playfair.className} text-white text-center font-semibold truncate`}
                >
                  {memory.name}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="block sm:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Pagination]}
          >
            {memories.map((memory: Memory) => (
              <SwiperSlide key={memory.id} onClick={() => setSelectedMemory(memory)}>
                <Card
                  isFooterBlurred
                  className="relative w-full h-80 isFooterBlurred border-2 border-[#C1976F]"
                  radius="lg"
                >
                  <Image
                    src={memory.image_url}
                    alt={`Foto de ${memory.name}`}
                    className="object-cover w-full h-full"
                    width={300}
                    height={300}
                  />
                  <CardFooter className="before:bg-white/10 border-white/20 border-1 border-[#C1976F] overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p
                      className={`${playfair.className} text-white text-center font-semibold truncate`}
                    >
                      {memory.name}
                    </p>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>

      {selectedMemory && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl relative border-4 border-[#C1976F]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#f9f5f2] bg-[#C1976F] rounded-full p-2 hover:bg-[#8B6E4E] transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-110 z-10"
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>
            <div className="relative h-80 sm:h-96 bg-[#f9f5f2]">
              <img
                src={selectedMemory.image_url}
                alt={`Foto de ${selectedMemory.name}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-[#e6d7c3]">
              <h2
                className={`${dancingScript.className} text-[#C1976F] text-2xl sm:text-3xl mb-4 font-bold`}
              >
                {selectedMemory.name}
              </h2>
              <p
                className={`${playfair.className} text-[#8B6E4E] text-sm sm:text-base italic bg-[#f0e6d9] p-4 rounded-lg shadow-inner`}
              >
                {selectedMemory.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
