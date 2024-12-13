'use client'
import { Container } from './Container'
import { api_v1 } from '@/services/axios'
import { CardAta } from '../Cards/CardAta'
import { useRouter } from 'next/navigation'
import AtasProp from '@/hooks/useAtasProps'
import React, { useEffect, useState } from 'react'

export function SectionAtas() {
  const router = useRouter()
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
    <div className='relative'>
      <div className='bg-brand-blue h-[320px] w-full absolute top-0 -z-10 '></div>
      <div className='my-16 px-12 py-12'>
        <Container>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='text-white/70'>Lista de Atas disponíveis</h4>
              <h2 className='text-white text-5xl font-bold'>Controle de Atas</h2>
            </div>
            <a onClick={() => router.push('/atas')}
              className='hidden md:flex items-center gap-x-2 text-white font-bold text-xl hover:underline group cursor-pointer' target="_blank" rel="noopener noreferrer">
              Ver todas
              <img src="../../img/icons/arrow-right.svg" alt="" className='p-3 rounded-full bg-white' />
            </a>
          </div>

          <div className='mt-8 hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
            {atas && atas.slice(0, 4).map((item: AtasProp) => (
              <CardAta
                id={item.id}
                data={item.data_reuniao}
              />
            ))}
          </div>

          <div className='mt-8 grid sm:hidden grid-cols-1 gap-x-4 gap-y-6'>
            {atas && atas.slice(0, 1).map((item: AtasProp) => (
              <CardAta
                id={item.id}
                data={item.data_reuniao}
              />
            ))}
          </div>

          <button onClick={() => router.push('/atas')} type='button' className='md:hidden border-solid border-2 border-brand-blue text-brand-blue text-xl rounded-xl mt-6 w-full h-14 hover:bg-brand-blue hover:text-white transition-all'>
            Ver todas
          </button>

        </Container>

      </div>
    </div>
  )
}
