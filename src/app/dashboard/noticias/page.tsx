import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { getBanners } from '@/services/prismicData/getBanners'
import TableBanner from '@/components/Partials/Dashboard/Banner/TableBanner'
import TableNoticia from '@/components/Partials/Dashboard/Noticia/TableNoticia'
import { getNoticias } from '@/services/prismicData/getNoticias'

export const metadata: Metadata = {
  title: 'Notícia | Dashboard',
}

export default async function Home() {
  const noticias = await getNoticias()

  return (
    <main className="">
      <HeaderPage title='Controle de Notícias' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12 pb-12'>
        <Container>
          <TableNoticia noticias={noticias} />
        </Container>
      </div>
    </main>
  )
}
