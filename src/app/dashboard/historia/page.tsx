import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { TableHistoria } from '@/components/Partials/Dashboard/Historia/TableHistoria'

export const metadata: Metadata = {
  title: 'História | Dashboard',
}

export default async function Home() {

  return (
    <main className="">
      <HeaderPage title='Controle de História' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12 pb-12'>
        <Container>
          <TableHistoria />
        </Container>
      </div>
    </main>
  )
}
