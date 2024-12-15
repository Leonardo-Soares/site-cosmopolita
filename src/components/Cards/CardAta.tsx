'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  id: number
  data: string
}

export function CardAta({
  id,
  data,
}: Props) {
  const router = useRouter()

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <a onClick={() => window.open(`/atas/${id}`, '_self')} className='rounded-md drop-shadow-2xl relative cursor-pointer hover:scale-105 transition-all'>
      <div className='bg-gradient-to-t via-black/70 from-black rounded-b-md w-full h-24 absolute flex items-end justify-around bottom-0 pb-4'>
        <div className='flex gap-x-1'>
          <img src="../../img/icons/calendar.svg" alt="Ícone de calendário branco" />
          <h5 className='text-white'>{formatDate(data)}</h5>
        </div>
      </div>
      <img src={'../../img/bg/capa-de-ata-cosmopolita.png'} alt="Capa de Ata da Loja Cosmopolita" className='w-full' />
    </a>
  )
}
