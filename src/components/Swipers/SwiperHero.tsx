import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getBanners } from '@/services/prismicData/getBanners'

export default async function SwiperHero() {
  const listaBanner = await getBanners()

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
            <div className="bg-gradient-to-t from-black lg:from-black/80 to-transparent absolute w-full h-full" >
              <div className='absolute bottom-20 left-0 md:left-20'>
                <h2 className='text-3xl lg:text-6xl font-bold text-white text-center md:text-start mx-2 lg:mx-0'>
                  {imagem.titulo}
                </h2>
                <p className='text-white text-center md:text-start mx-2'>
                  {imagem.subtitulo.slice(0, 100)}...
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
