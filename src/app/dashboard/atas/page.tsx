import { Metadata } from 'next'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { Container } from '@/components/Partials/Container'
import HeaderPage from '@/components/Header/HeaderPage'
import { TableAtas } from '@/components/Partials/Dashboard/TableAtas'

export const metadata: Metadata = {
  title: 'Dashaboard | Atas',
}

export default function Home() {


  return (
    <main className="">
      <HeaderPage title='Controle de Atas' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
        <Container>
          <TableAtas />
        </Container>
      </div>
    </main>
  )
}
