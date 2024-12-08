import { CardNoticia } from '@/components/Cards/CardNoticia'
import { Container } from '@/components/Partials/Container'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Notícias | Cosmopolita',
}

export default function Home() {
  const noticias = [
    {
      id: 1,
      slug: 'noticia-teste',
      data: '10/10/2024',
      categoria: 'Categoria',
      imagem: '../../img/temp/news.png',
      titulo: 'Titulo da notícia',
      sutitulo: 'Subtitulo da notícia',
    },
    {
      id: 2,
      data: '10/10/2024',
      slug: 'noticia-teste',
      categoria: 'Categoria',
      imagem: '../../img/temp/news.png',
      titulo: 'Titulo da notícia',
      sutitulo: 'Subtitulo da notícia',
    },
    {
      id: 3,
      data: '10/10/2024',
      slug: 'noticia-teste',
      categoria: 'Categoria',
      imagem: '../../img/temp/news.png',
      titulo: 'Titulo da notícia',
      sutitulo: 'Subtitulo da notícia',
    },
    {
      id: 4,
      data: '10/10/2024',
      slug: 'noticia-teste',
      categoria: 'Categoria',
      imagem: '../../img/temp/news.png',
      titulo: 'Titulo da notícia',
      sutitulo: 'Subtitulo da notícia',
    },
    {
      id: 5,
      data: '10/10/2024',
      slug: 'noticia-teste',
      categoria: 'Categoria',
      imagem: '../../img/temp/news.png',
      titulo: 'Titulo da notícia',
      sutitulo: 'Subtitulo da notícia',
    },
    {
      id: 6,
      data: '10/10/2024',
      slug: 'noticia-teste',
      categoria: 'Categoria',
      imagem: '../../img/temp/news.png',
      titulo: 'Titulo da notícia',
      sutitulo: 'Subtitulo da notícia',
    },
    {
      id: 7,
      data: '10/10/2024',
      slug: 'noticia-teste',
      categoria: 'Categoria',
      imagem: '../../img/temp/news.png',
      titulo: 'Titulo da notícia',
      sutitulo: 'Subtitulo da notícia',
    },
    {
      id: 8,
      data: '10/10/2024',
      slug: 'noticia-teste',
      categoria: 'Categoria',
      imagem: '../../img/temp/news.png',
      titulo: 'Titulo da notícia',
      sutitulo: 'Subtitulo da notícia',
    },
    {
      id: 9,
      data: '10/10/2024',
      slug: 'noticia-teste',
      categoria: 'Categoria',
      imagem: '../../img/temp/news.png',
      titulo: 'Titulo da notícia',
      sutitulo: 'Subtitulo da notícia',
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
              <CardNoticia
                key={item.id}
                data={item.data}
                imagem={item.imagem}
                titulo={item.titulo}
                sutitulo={item.sutitulo}
                categoria={item.categoria}
              />
            ))}
          </div>
        </Container>
      </div>
    </main>
  )
}
