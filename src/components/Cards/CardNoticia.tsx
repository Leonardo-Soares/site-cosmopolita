'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  data: string
  imagem: string
  titulo: string
  sutitulo: string
  categoria: string
}

export function CardNoticia({
  data,
  imagem,
  titulo,
  sutitulo,
  categoria,
}: Props) {

  const router = useRouter()


  return (
    <a onClick={() => router.push('/noticias/teste-item')} className='hover:scale-105 transition-all'>
      <div className='rounded-md drop-shadow-2xl relative cursor-pointer mb-3'>
        <div className='bg-gradient-to-t via-black/70 from-black rounded-b-md w-full h-24 absolute flex items-end bottom-0 px-4 pb-4'>
          <h5 className='text-white'>{data}</h5>
        </div>
        <span className='bg-brand-blue text-white absolute right-2 top-2 px-4 py-1 rounded-md'>
          Categoria
        </span>
        <img src={imagem} alt="" className='w-full' />
      </div>
      <h2 className='font-bold text-xl'>
        {titulo}
      </h2>
      <span className='text-brand-gray-50 text-sm'>
        {sutitulo}
      </span>
    </a>
  )
}
