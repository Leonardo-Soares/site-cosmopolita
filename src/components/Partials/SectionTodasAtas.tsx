'use client'
import { CardAta } from '../Cards/CardAta'
import AtasProp from '@/hooks/useAtasProps'
import React, { useEffect, useState } from 'react'
import { getAtas } from '@/services/prismicData/getAtas'

export default function SectionTodasAtas() {
  const [atas, setAtas] = useState<AtasProp[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('recent')

  useEffect(() => {
    const fetchAtas = async () => {
      const data = await getAtas()
      setAtas(data)
    }
    fetchAtas()
  }, [])

  const filteredAtas = atas.filter(ata =>
    ata.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedAtas = filteredAtas.sort((a, b) => {
    if (sortOrder === 'recent') {
      return new Date(b.data_reuniao).getTime() - new Date(a.data_reuniao).getTime()
    }
    return new Date(a.data_reuniao).getTime() - new Date(b.data_reuniao).getTime()
  })

  return (
    <>
      <div className='w-full lg:flex justify-between items-center'>
        <div className='relative lg:w-1/3 mb-4 lg:mb-0'>
          <input
            type='text'
            placeholder='Buscar ata'
            className='w-full h-12 rounded-md p-4'
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button type='button' className=''>
            <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
          </button>
        </div>
        <div className='block lg:flex items-center'>
          <p className='font-bold text-brand-gray-700 text-center lg:text-start'>Ordenar atas</p>
          <select
            className='lg:w-48 w-full h-12 rounded-md lg:ml-2'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='recent'>Mais recentes</option>
            <option value='older'>Mais antigas</option>
          </select>
        </div>
      </div>

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 pb-12'>
        {sortedAtas.map((item: AtasProp) => (
          <CardAta
            key={item.id}
            id={item.id}
            data={item.data_reuniao}
          />
        ))}
      </div>
    </>
  )
}
