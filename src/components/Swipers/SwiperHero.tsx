'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { api } from '@/services/axios'
import { useEffect, useState } from 'react'

export default function SwiperHero() {
  const banners = [
    {
      banner_desktop: {
        url: "../img/temp/banner.png",
      },
      banner_mobile: {
        url: "../img/temp/mobile.png",
      },
    },
    {
      banner_desktop: {
        url: "../img/temp/banner.png",
      },
      banner_mobile: {
        url: "../img/temp/mobile.png",
      },
    }
  ]
  const [listaBanner, setListaBanner] = useState([])


  async function getBanner() {
    try {
      const response = await api.get(`/banner/show`)
      setListaBanner(response.data.data);

    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    getBanner()
  }, [])

  return (
    <Swiper
      pagination={true}
      loop={true}
      modules={[Pagination]}
      className="aspect-[580/580] md:aspect-[3/1] h-auto"
    >
      {listaBanner.map((imagem: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-t from-black/80 to-transparent absolute w-full h-full" >
              <div className='absolute bottom-20 left-0 md:left-20'>
                <h2 className='text-6xl font-bold text-white text-center md:text-start'>
                  {imagem.titulo}
                </h2>
                <p className='text-white text-2 text-center md:text-start'>
                  {imagem.subtitulo}
                </p>
              </div>
            </div>
            <picture>
              <source
                srcSet={imagem.imagem as string}
                media="(max-width: 640px)"
              />
              <img
                src={imagem.imagem as string}
                alt={'banner'}
                className="h-full w-full object-cover"
              />
            </picture>
          </SwiperSlide>
        )
      })}

    </Swiper>
  )
}
