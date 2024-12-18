import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import TableNoticia from '@/components/Partials/Dashboard/Noticia/TableNoticia'

export const metadata: Metadata = {
  title: 'Notícia | Dashboard',
}

export default async function Home() {

  return (
    <main className="">
      <HeaderPage title='Controle de Notícias' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12 pb-12'>
        <Container>
          <TableNoticia />
        </Container>
      </div>
    </main>
  )
}
