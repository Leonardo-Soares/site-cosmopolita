import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import SectionTodasAtas from '@/components/Partials/SectionTodasAtas'

export const metadata: Metadata = {
  title: 'Atas | Cosmopolita',
}

export default function Home() {
  return (
    <main className="">
      <HeaderPage title='Atas de reuniões' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
        <Container>
          <SectionTodasAtas />
        </Container>
      </div>
    </main>
  )
}
