import { Metadata } from 'next'
import { SectionAcessoNegado } from '@/components/Partials/SectionAcessoNegado'

export const metadata: Metadata = {
  title: 'Acesso Negado | Cosmopolita',
}

export default function Home() {
  return (
    <main className="">
      <SectionAcessoNegado />
    </main>
  )
}
