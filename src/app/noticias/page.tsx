import { Container } from '@/components/Partials/Container'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notícias | Cosmopolita',
}

export default function Home() {
  const noticias = [
    {
      id: 1,
      data: '10/10/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 2,
      data: '23/09/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 3,
      data: '12/08/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 4,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 5,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 6,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 7,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 8,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 9,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 10,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 11,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 12,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 13,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 14,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 15,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 16,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 17,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 18,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 19,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 20,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    }
  ]

  return (
    <main className="">
      <div
        className='h-32 flex items-center'
        style={{
          background: 'url(../img/bg/bg-header-page.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <TitleH1 color='text-brand-white'>Notícias</TitleH1>
        </Container>
      </div>
      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
        <Container>
          <div className='w-full lg:flex justify-between items-center'>
            <div className='relative lg:w-1/3 mb-4 lg:mb-0'>
              <input type='text' placeholder='Buscar notícia' className='w-full h-12 rounded-md p-4' />
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


          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
            {noticias && noticias.map((item) => (
              <a key={item.id} className='hover:scale-105 transition-all'>
                <div className='rounded-md drop-shadow-2xl relative cursor-pointer mb-3'>
                  <div className='bg-gradient-to-t via-black/70 from-black rounded-b-md w-full h-24 absolute flex items-end bottom-0 px-4 pb-4'>
                    <h5 className='text-white'>{item.data}</h5>
                  </div>
                  <span className='bg-brand-blue text-white absolute right-2 top-2 px-4 py-1 rounded-md'>
                    Categoria
                  </span>
                  <img src={item.file} alt="" className='w-full' />
                </div>
                <h2 className='font-bold text-xl'>
                  Ut non justo gravida, porta nunc non, fringilla turpis. Aliquam eu est nunc. Nunc scelerisque nibh sit amet rutrum vestibulum.
                </h2>
                <span className='text-brand-gray-50 text-sm'>
                  Donec eleifend efficitur mauris, in dapibus arcu. Orci varius natoque penatibus et magnis dis parturient montes
                </span>
              </a>
            ))}
          </div>
        </Container>
      </div>
    </main>
  )
}
