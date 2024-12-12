import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { TableAtas } from '@/components/Partials/Dashboard/Atas/TableAtas'

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
