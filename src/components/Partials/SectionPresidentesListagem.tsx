import React from 'react'
import { Container } from './Container'
import { CardDiretor } from '../Cards/CardDiretor'
import { getDiretores } from '@/services/prismicData/getDiretores'

export default async function SectionPresidentesListagem() {
  const diretores_loja = await getDiretores()

  return (
    <Container>
      <div className='w-full lg:flex justify-between items-center'>
        <div className='relative lg:w-1/3 mb-4 lg:mb-0'>
          <input type='text' placeholder='Buscar Diretores' className='w-full h-12 rounded-md p-4' />
          <button type='button' className=''>
            <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
          </button>
        </div>
      </div>


      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
        {diretores_loja && diretores_loja.map((item) => (
          <CardDiretor
            id={item.id}
            key={item.id}
            nome={item.nome}
            ano_fim={item.ano_fim}
            nome_cargo={item.cargo}
            descricao={item.descricao}
            ano_inicio={item.ano_inicio}
            foto_diretor={'../img/temp/presidente.png'}
          />
        ))}
      </div>
    </Container>
  )
}
