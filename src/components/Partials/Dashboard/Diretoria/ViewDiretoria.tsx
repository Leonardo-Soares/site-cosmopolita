'use client'
import React, { useEffect } from 'react'
import InputArea from '@/components/Forms/InputArea'
import formatDateAno from '@/hooks/useFormateDataAno'
import DiretoresProps from '@/hooks/useDiretoresProps'
import InputPrimary from '@/components/Forms/InputPrimary'
import { useCookies } from '@/stores/useCookies'
import { useRouter } from 'next/navigation'

export function ViewDiretoria({ diretoria }: { diretoria: DiretoresProps }) {
  const { getCookie } = useCookies()
  const navigation = useRouter()
  const cargoAtual = getCookie('cargo')

  useEffect(() => {
    cargoAtual != 'mestre' && cargoAtual != 'secretario' ? navigation.push('/home') : null
  }, [cargoAtual, navigation])
  return (
    <div className='p-5'>
      <InputPrimary
        type='text'
        name='nome'
        disabled={true}
        title={'Nome'}
        value={diretoria.nome}
        placeholder='Nome do diretor atual'
      />
      <InputPrimary
        type='text'
        name='nome'
        disabled={true}
        title={'Cargo'}
        value={diretoria.cargo}
        placeholder='Nome do diretor atual'
      />
      <InputPrimary
        type='text'
        name='nome'
        disabled={true}
        title={'Ano de início'}
        value={formatDateAno(diretoria.ano_inicio)}
        placeholder='Nome do diretor atual'
      />
      <InputPrimary
        type='text'
        name='nome'
        disabled={true}
        title={'Ano de fim'}
        value={formatDateAno(diretoria.ano_fim)}
        placeholder='Nome do diretor atual'
      />
      <div className="w-full">
        <InputArea
          name='conteudo'
          title='Biografia'
          disabled={true}
          value={diretoria.descricao}
          placeholder='Digite sua descrição'
        />
      </div>
      <h1 className='text-xl font-semibold'>Imagem do diretor</h1>
      <img src={'https://lojacosmopolita.com.br/img/temp/presidente.png'} alt='Imagem do diretor' className='w-72 h-72' />
    </div>
  )
}
