'use client';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SwiperHistoria({ historico }: { historico: any }) {
  useEffect(() => {
    // Certifica-se de que o Swiper associe os botões corretamente
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');
    if (nextBtn && prevBtn) {
      nextBtn.classList.add('custom-next-btn');
      prevBtn.classList.add('custom-prev-btn');
    }
  }, []);

  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      loop={true}
      modules={[Pagination, Navigation]}
      className="h-80 md:h-60"
    >
      {historico.map((item: any, index: number) => (
        <SwiperSlide key={index} >
          <div className="w-full h-auto mt-4">
            <div className="bottom-20 left-0 md:left-20">
              <h4 className="text-brand-gray-50">{item.data}</h4>
              <h2 className="text-brand-gray-700 text-4xl font-bold">
                {item.titulo}
              </h2>
              <p className="text-brand-dark text-2 md:text-start">
                {item.descricao}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* Botões Personalizados */}
      <div className="swiper-button-prev custom-prev-btn"></div>
      <div className="swiper-button-next custom-next-btn"></div>
    </Swiper>
  );
}
