import React from 'react'
import { Container } from './Container'
import { useRouter } from 'next/navigation'
import { CardNoticia } from '../Cards/CardNoticia'
import { getNoticias } from '@/services/prismicData/getNoticias'
import NoticiasProps from '@/hooks/useNoticiasProps'

export default async function SectionNoticias() {
  const router = useRouter()
  const noticias = await getNoticias();

  return (
    <div className='relative bg-brand-gray-100'>
      <div className='my-16 px-12 py-12'>
        <Container>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='text-brand-gray-50'>Últimas</h4>
              <h2 className='text-black text-5xl font-bold'>Notícias</h2>
            </div>
            <a onClick={() => router.push('/noticias')}
              className='hidden md:flex items-center gap-x-2 text-black font-bold text-xl hover:underline group cursor-pointer' target="_blank" rel="noopener noreferrer">
              Ver todas
              <img src="../../img/icons/arrow-right-white.svg" alt="" className='p-3 rounded-full bg-brand-greenSecondary' />
            </a>
          </div>

          <div className='mt-8 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
            {noticias && noticias.slice(0, 4).map((item: NoticiasProps) => (
              <CardNoticia
                id={item.id}
                key={item.id}
                data={item.data}
                titulo={item.titulo}
                imagem={item.imagem}
                sutitulo={item.resumo}
                categoria={item.categoria}
              />
            ))}
          </div>

          <div className='mt-8 grid grid-cols-1 sm:hidden gap-x-4 gap-y-6'>
            {noticias && noticias.slice(0, 1).map((item: NoticiasProps) => (
              <CardNoticia
                id={item.id}
                key={item.id}
                data={item.data}
                titulo={item.titulo}
                imagem={item.imagem}
                sutitulo={item.resumo}
                categoria={item.categoria}
              />
            ))}
          </div>

          <button onClick={() => router.push('/noticias')} type='button' className='md:hidden border-solid border-2 border-brand-blue text-brand-blue text-xl rounded-xl mt-6 w-full h-14 hover:bg-brand-blue hover:text-white transition-all'>
            Ver todas
          </button>
        </Container>
      </div>
    </div>
  )
}
