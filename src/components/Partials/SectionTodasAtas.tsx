'use client'
import { api_v1 } from '@/services/axios'
import { CardAta } from '../Cards/CardAta'
import AtasProp from '@/hooks/useAtasProps'
import React, { useEffect, useState } from 'react'

export function SectionTodasAtas() {
  const [atas, setAtas] = useState<AtasProp[]>([])

  async function getAtas() {
    setAtas([])
    try {
      const response = await api_v1.get(`/atas/show`)
      setAtas(response.data.data)
    } catch (error: any) {
      console.error('GET - Lista de Atas na Home:', error)
    }
  }

  useEffect(() => {
    getAtas()
  }, [])

  return (
    <>
      <div className='w-full lg:flex justify-between items-center'>
        <div className='relative lg:w-1/3 mb-4 lg:mb-0'>
          <input type='text' placeholder='Buscar ata' className='w-full h-12 rounded-md p-4' />
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

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 pb-12'>
        {atas && atas.map((item: AtasProp) => (
          <CardAta
            id={item.id}
            data={item.data_reuniao}
          />
        ))}
      </div>
    </>
  )
}
