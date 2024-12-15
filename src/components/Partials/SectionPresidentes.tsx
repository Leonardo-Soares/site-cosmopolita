import React from 'react'
import { Container } from './Container'
import { useRouter } from 'next/navigation'
import { CardDiretor } from '../Cards/CardDiretor'
import { getDiretores } from '@/services/prismicData/getDiretores'

export default async function SectionPresidentes() {
  const router = useRouter()
  const diretores_loja = await getDiretores()

  return (
    <div className='relative bg-white'>
      <div className='my-16 px-6 md:px-12 py-12'>
        <Container>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='text-black/70'>Membros da atual gestão</h4>
              <h2 className='text-black text-5xl font-bold'>Membros</h2>
            </div>
            <a onClick={() => router.push('/diretoria')}
              className='hidden md:flex items-center gap-x-2 text-black font-bold text-xl hover:underline group cursor-pointer' target="_blank" rel="noopener noreferrer">
              Ver todos
              <img src="../../img/icons/arrow-right-white.svg" alt="" className='p-3 rounded-full bg-brand-greenSecondary' />
            </a>
          </div>

          <div className='mt-8 hidden lg:grid sm:grid-cols-2 md:grid-cols-4 md:gap-x-4 md:gap-y-6'>
            {diretores_loja && diretores_loja.slice(0, 4).map((item) => (
              <CardDiretor
                id={item.id}
                key={item.id}
                ano_fim={item.ano_fim}
                ano_inicio={item.ano_inicio}
                nome={item.nome}
                descricao={item.descricao}
                nome_cargo={item.cargo}
                foto_diretor={'../img/temp/presidente.png'}
              />
            ))}
          </div>

          <div className='mt-8 grid grid-cols-1 lg:hidden'>
            {diretores_loja && diretores_loja.slice(0, 1).map((item) => (
              <CardDiretor
                id={item.id}
                key={item.id}
                ano_fim={item.ano_fim}
                ano_inicio={item.ano_inicio}
                nome={item.nome}
                descricao={item.descricao}
                nome_cargo={item.cargo}
                foto_diretor={'../img/temp/presidente.png'}
              />
            ))}
          </div>

          <button onClick={() => router.push('/diretoria')} type='button' className='md:hidden border-solid border-2 border-brand-blue text-brand-blue text-xl rounded-xl mt-6 w-full h-14 hover:bg-brand-blue hover:text-white transition-all'>
            Ver todos
          </button>

        </Container>
      </div>
    </div>
  )
}
