import React from 'react'
import { Container } from './Container'
import { useRouter } from 'next/navigation'
import { CardDiretor } from '../Cards/CardDiretor'

export function SectionPresidentes() {
  const lista_direroria = [
    {
      id: 1,
      nome: 'Nome do Diretor',
      inicio: '2025',
      fim: '2027',
      cargo: 'Cargo do Diretor',
      imagem: '../img/temp/presidente.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
    },
    {
      id: 2,
      nome: 'Nome do Diretor',
      inicio: '2025',
      fim: '2027',
      cargo: 'Cargo do Diretor',
      imagem: '../img/temp/presidente.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
    },
    {
      id: 3,
      nome: 'Nome do Diretor',
      inicio: '2025',
      fim: '2027',
      cargo: 'Cargo do Diretor',
      imagem: '../img/temp/presidente.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
    },
    {
      id: 4,
      nome: 'Nome do Diretor',
      inicio: '2025',
      fim: '2027',
      cargo: 'Cargo do Diretor',
      imagem: '../img/temp/presidente.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
    },
    {
      id: 5,
      nome: 'Nome do Diretor',
      inicio: '2025',
      fim: '2027',
      cargo: 'Cargo do Diretor',
      imagem: '../img/temp/presidente.png',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
    }
  ]

  const router = useRouter()

  return (
    <div className='relative bg-white'>
      <div className='my-16 px-6 md:px-12 py-12'>
        <Container>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='text-black/70'>Gestão 2025-2027</h4>
              <h2 className='text-black text-5xl font-bold'>Membros</h2>
            </div>
            <a onClick={() => router.push('/diretoria')}
              className='hidden md:flex items-center gap-x-2 text-black font-bold text-xl hover:underline group cursor-pointer' target="_blank" rel="noopener noreferrer">
              Ver todos
              <img src="../../img/icons/arrow-right-white.svg" alt="" className='p-3 rounded-full bg-brand-greenSecondary' />
            </a>
          </div>

          <div className='mt-8 hidden lg:grid sm:grid-cols-2 md:grid-cols-4 md:gap-x-4 md:gap-y-6'>
            {lista_direroria && lista_direroria.slice(0, 4).map((item) => (
              <CardDiretor
                id={item.id}
                key={item.id}
                ano_fim={item.fim}
                ano_inicio={item.inicio}
                nome={item.nome}
                descricao={item.descricao}
                nome_cargo={item.cargo}
                foto_diretor={item.imagem}
              />
            ))}
          </div>

          <div className='mt-8 grid grid-cols-1 lg:hidden'>
            {lista_direroria && lista_direroria.slice(0, 1).map((item) => (
              <CardDiretor
                id={item.id}
                key={item.id}
                ano_fim={item.fim}
                ano_inicio={item.inicio}
                nome={item.nome}
                descricao={item.descricao}
                nome_cargo={item.cargo}
                foto_diretor={item.imagem}
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
