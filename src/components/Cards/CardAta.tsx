'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  id: number
  capa: string
  data: string
  arquivo: string
}

export function CardAta({
  id,
  capa,
  data,
  arquivo,
}: Props) {

  const router = useRouter()


  return (
    <a onClick={() => { }} className='rounded-md drop-shadow-2xl relative cursor-pointer hover:scale-105 transition-all'>
      <div className='bg-gradient-to-t via-black/70 from-black rounded-b-md w-full h-24 absolute flex items-end justify-around bottom-0 pb-4'>
        <div className='flex gap-x-1'>
          <img src="../../img/icons/calendar.svg" alt="Ícone de calendário branco" />
          <h5 className='text-white'>{data}</h5>
        </div>
      </div>
      <img src={capa} alt="" />
    </a>
  )
}
