'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { BannersDocumentData } from '../../../prismicio-types'

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

  return (
    <Swiper
      pagination={true}
      loop={true}
      modules={[Pagination]}
      className="aspect-[580/580] md:aspect-[3/1] h-auto"
    >
      {banners.map((imagem, index: number) => (
        <SwiperSlide key={index}>
          <div className="bg-gradient-to-t from-black to-transparent absolute w-full h-full" >
            <div className='absolute bottom-20 left-0 md:left-20'>
              <h2 className='text-6xl font-bold text-white text-center md:text-start'>Congresso Cosmopolita</h2>
              <p className='text-white text-2 text-center md:text-start'>Veja tudo sobre o evento e as atrações</p>
            </div>
          </div>
          <picture>
            <source
              srcSet={imagem.banner_mobile.url as string}
              media="(max-width: 640px)"
            />
            <source
              srcSet={imagem.banner_desktop.url as string}
              media="(min-width: 640px)"
            />
            <img
              src={imagem.banner_desktop.url as string}
              alt={'banner'}
              className="h-full w-full object-cover"
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
