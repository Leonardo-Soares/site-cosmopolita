import { CardDiretor } from '@/components/Cards/CardDiretor'
import { CardNoticia } from '@/components/Cards/CardNoticia'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diretoria | Cosmopolita',
}

export default function Home() {
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

  return (
    <main className="">
      <HeaderPage title='Diretoria' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
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
            {lista_direroria && lista_direroria.map((item) => (
              <CardDiretor
                id={item.id}
                key={item.id}
                nome={item.nome}
                ano_inicio={item.inicio}
                ano_fim={item.fim}
                nome_cargo={item.cargo}
                foto_diretor={item.imagem}
                descricao={item.descricao}
              />
            ))}
          </div>
        </Container>
      </div>
    </main>
  )
}
