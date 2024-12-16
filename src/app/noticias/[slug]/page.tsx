import { Metadata } from 'next'
import formatDate from '@/hooks/useFormateData'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { TitleH4 } from '@/components/Texts/TitleH4'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { getNoticiasDetalhes } from '@/services/prismicData/getNoticiasDetalhes'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: 'Noítica | Cosmopolita',
    description: 'Confira as atas das reuniões da Loja Cosmopolita.',
  }
}

export default async function Home({ params }: { params: { slug: string } }) {
  const noticia = await getNoticiasDetalhes(params.slug)

  return (
    <main className="">
      <HeaderPage title='Detalhes de notícias' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
        <Container>
          <div>
            <div className='bg-brand-blue800 w-28 rounded-2xl text-center py-1'>
              <span className='text-brand-white  text-sm'>{noticia.categoria}</span>
            </div>

            <div className='mt-4'>
              <TitleH1 color='text-brand-dark'>
                {noticia.titulo}
              </TitleH1>
              <TitleH4 color='text-brand-gray-700' fontWeigth='500'>
                Postado por <b>Cosmopolita</b> em {formatDate(noticia.data)}
              </TitleH4>
            </div>

            <div className='mt-4'>
              <img
                alt={noticia.titulo}
                // src={noticia.imagem}
                src="https://lojacosmopolita.com.br/img/temp/foto-exemplo.jpeg"
                className="w-full h-72 rounded-lg object-cover mb-4"
              />
              <p>
                {noticia.conteudo}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
