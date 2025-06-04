import { planetas } from "../data/planetas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import 'swiper/swiper-bundle.css';

export default function Planetas() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-10 px-4 md:px-10">
        <h1 className="text-5xl text-yellow-400 font-extrabold text-center mb-16 tracking-widest uppercase animate-pulse drop-shadow-[0_0_8px_rgba(255,255,0,0.7)]">
          Planetas
        </h1>
  
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 120,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          className="w-full max-w-6xl relative z-20"
        >
          {planetas.map((planeta, index) => (
            <SwiperSlide key={index} className="w-80 sm:w-96 py-10">
              <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,255,0,0.2)] hover:scale-105 transform transition duration-300 ease-in-out z-10 relative">
                <img
                  src={planeta.imagem}
                  alt={planeta.nome}
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-5 text-white space-y-2">
                  <h2 className="text-2xl font-bold text-yellow-400 tracking-wide">{planeta.nome}</h2>
                  <p className="text-sm text-gray-300">{planeta.descricao}</p>
                  <p><span className="text-yellow-300 font-medium">Clima:</span> {planeta.clima}</p>
                  <p><span className="text-yellow-300 font-medium">Terreno:</span> {planeta.terreno}</p>
                  <p><span className="text-yellow-300 font-medium">Habitantes:</span> {planeta.habitantes.join(", ")}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }