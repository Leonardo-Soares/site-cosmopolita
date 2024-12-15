'use client'
import React, { useEffect, useState } from 'react'
import SwiperHistoria from '../Swipers/SwiperHistoria'
import { api } from '@/services/axios'

interface Historico {
  id: number
  data: string
  autor: string
  ativo: number
  titulo: string
  descricao: string
}


export function SectionHistoria() {
  const [dataAtiva, setDataAtiva] = useState(1)
  const [historico, setHistorico] = useState<Historico[]>([])
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  async function getHistoria() {
    try {
      const response = await api.get(`/historia/show`)
      setHistorico(response.data.data)
    } catch (error: any) {
      console.error('GET - Lista Historia', error.response)
    }
  }

  useEffect(() => {
    getHistoria()
  }, [])

  return (
    <div className='my-16 border-solid border-brand-gray-50 border-2 rounded-xl px-12 py-12'>
      <h2 className='text-5xl font-bold'>Nossa Historia</h2>
      <div className='bg-brand-blue px-2 h-24 rounded-lg mt-2 justify-center items-center hidden md:flex'>
        <div className='bg-brand-blue700 w-full h-[1px]'>
          <div className='flex gap-x-12 -mt-2 pl-6'>
            {historico.map((item: Historico) => (
              <a key={item.id} onClick={() => setDataAtiva(item.id)} className='justify-center text-white flex flex-col items-center cursor-pointer'>
                <div className={`w-4 h-4  border-solid border-brand-blue700 border-2 ${dataAtiva === item.id ? 'bg-brand-blue700' : 'bg-brand-blue'} rounded-full mb-1`}></div>
                {formatDate(item.data)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='hidden lg:flex'>
        {historico && historico.map((item: Historico) => (
          item.id === dataAtiva &&
          <div className='md:mx-4 my-8'>
            <h4 className='text-brand-gray-50'>{formatDate(item.data)}</h4>
            <h2 className='text-brand-gray-700 text-4xl font-bold'>{item.titulo}</h2>
            <p className='text-brand-gray-700'>
              {item.descricao}
            </p>
          </div>
        ))}
      </div>

      <div className='flex lg:hidden'>
        <SwiperHistoria
          historico={historico}
        />
      </div>
    </div>
  )
}
