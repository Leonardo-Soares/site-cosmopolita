import React from 'react'
import { Container } from './Container'
import { CardNoticia } from '../Cards/CardNoticia'
import { getNoticias } from '@/services/prismicData/getNoticias'

export default async function SectionNoticiasListagem() {
  const noticias = await getNoticias();

  return (
    <Container>
      <div className='w-full lg:flex justify-between items-center'>
        <div className='relative lg:w-1/3 mb-4 lg:mb-0'>
          <input type='text' placeholder='Buscar notícia' className='w-full h-12 rounded-md p-4' />
          <button type='button' className=''>
            <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
          </button>
        </div>
        <div className='block lg:flex items-center'>
          <p className='font-bold text-brand-gray-700 text-center lg:text-start'>Ordenar notícias</p>
          <select className='lg:w-48 w-full h-12  rounded-md lg:ml-2'>
            <option value='recent'>Mais recentes</option>
            <option value='older'>Mais antigas</option>
          </select>
        </div>
      </div>


      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
        {noticias && noticias.map((item) => (
          <CardNoticia
            key={item.id}
            data={item.data}
            imagem={item.imagem}
            titulo={item.titulo}
            sutitulo={item.resumo}
            categoria={item.categoria}
          />
        ))}
      </div>
    </Container>
  )
}
