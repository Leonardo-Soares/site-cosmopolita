import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import SectionPresidentesListagem from '@/components/Partials/SectionPresidentesListagem'

export const metadata: Metadata = {
  title: 'Diretoria | Cosmopolita',
}

export default function Home() {
  return (
    <main className="">
      <HeaderPage title='Diretoria' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
        <SectionPresidentesListagem />
      </div>
    </main>
  )
}
