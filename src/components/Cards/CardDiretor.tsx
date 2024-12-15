'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import formatDate from '@/hooks/useFormateData'
import formatDateAno from '@/hooks/useFormateDataAno'

type Props = {
  id: number
  nome: string
  ano_fim: string
  descricao: string
  nome_cargo: string
  ano_inicio: string
  foto_diretor: string
}

export function CardDiretor({
  nome,
  ano_fim,
  id,
  descricao,
  nome_cargo,
  ano_inicio,
  foto_diretor,
}: Props) {
  const router = useRouter()

  return (
    <a onClick={() => router.push(`/diretoria/${id}`)} className='rounded-md drop-shadow-2xl relative cursor-pointer hover:scale-105 transition-all'>
      <img src={foto_diretor} alt=""
        className='w-full h-auto'
      />
      <div className='py-4'>
        <h5 className='text-black text-center font-bold text-2xl'>{nome}</h5>
        <h5 className='text-brand-gray-400 text-sms text-center'>{nome_cargo}</h5>
        <h5 className='text-brand-gray-50 text-center text-xl'>{formatDateAno(ano_inicio)} - {formatDateAno(ano_fim)}</h5>
      </div>
    </a>
  )
}
