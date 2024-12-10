import { CardAta } from '@/components/Cards/CardAta'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atas | Cosmopolita',
}

export default function Home() {
  const atas_list = [
    {
      id: 1,
      data: '10/10/2024',
      capa: '../../img/temp/ata1.png',
      file: '../../img/temp/ata1.png'
    },
    {
      id: 2,
      data: '23/09/2024',
      capa: '../../img/temp/ata1.png',
      file: '../../img/temp/ata1.png'
    },
    {
      id: 3,
      data: '12/08/2024',
      file: '../../img/temp/ata1.png',
      capa: '../../img/temp/ata1.png',
    },
    {
      id: 4,
      data: '15/06/2024',
      file: '../../img/temp/ata1.png',
      capa: '../../img/temp/ata1.png',
    },
    {
      id: 5,
      data: '15/06/2024',
      file: '../../img/temp/ata1.png',
      capa: '../../img/temp/ata1.png',
    },
  ]

  return (
    <main className="">
      <HeaderPage title='Atas de reuniões' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
        <Container>
          <div className='w-full lg:flex justify-between items-center'>
            <div className='relative lg:w-1/3 mb-4 lg:mb-0'>
              <input type='text' placeholder='Buscar ata' className='w-full h-12 rounded-md p-4' />
              <button type='button' className=''>
                <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
              </button>
            </div>
            <div className='block lg:flex items-center'>
              <p className='font-bold text-brand-gray-700 text-center lg:text-start'>Ordenar notícias</p>
              <select className='lg:w-48 w-full h-12  rounded-md lg:ml-2'>
                <option value='recent'>Mais recentes</option>
                <option value='older'>Mais antigas</option>
              </select>
            </div>
          </div>


          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 pb-12'>
            {atas_list && atas_list.map((item) => (
              <CardAta
                id={item.id}
                data={item.data}
                capa={item.file}
                arquivo={item.file}
              />
            ))}
          </div>
        </Container>
      </div>
    </main>
  )
}
