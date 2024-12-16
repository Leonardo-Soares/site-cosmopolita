import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import SectionNoticiasListagem from '@/components/Partials/SectionNoticiasListagem'

export const metadata: Metadata = {
  title: 'Notícias | Cosmopolita',
}

export default function Home() {
  return (
    <main className="">
      <HeaderPage title='Notícias' />

      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
        <SectionNoticiasListagem />
      </div>
    </main>
  )
}
