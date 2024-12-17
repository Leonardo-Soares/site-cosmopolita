import React from 'react'
import InputArea from '@/components/Forms/InputArea'
import formatDateAno from '@/hooks/useFormateDataAno'
import DiretoresProps from '@/hooks/useDiretoresProps'
import InputPrimary from '@/components/Forms/InputPrimary'

export function ViewObreiro({ obreiro }: { obreiro: DiretoresProps }) {
  return (
    <div className='p-5'>
      <InputPrimary
        type='text'
        name='nome'
        disabled={true}
        title={'Nome'}
        value={obreiro.nome}
        placeholder='Nome do diretor atual'
      />
      <InputPrimary
        type='text'
        name='nome'
        disabled={true}
        title={'Cargo'}
        value={obreiro.cargo}
        placeholder='Nome do diretor atual'
      />
      <InputPrimary
        type='text'
        name='nome'
        disabled={true}
        title={'Ano de início'}
        value={formatDateAno(obreiro.ano_inicio)}
        placeholder='Nome do diretor atual'
      />
      <InputPrimary
        type='text'
        name='nome'
        disabled={true}
        title={'Ano de fim'}
        value={formatDateAno(obreiro.ano_fim)}
        placeholder='Nome do diretor atual'
      />
      <div className="w-full">
        <InputArea
          name='conteudo'
          title='Biografia'
          disabled={true}
          value={obreiro.descricao}
          placeholder='Digite sua descrição'
        />
      </div>
      <h1 className='text-xl font-semibold'>Imagem do diretor</h1>
      <img src={'https://lojacosmopolita.com.br/img/temp/presidente.png'} alt='Imagem do diretor' className='w-72 h-72' />
    </div>
  )
}
