import { ExampleForm } from '@/components/Forms/ExampleForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A∴ R∴ L∴ S∴ Cosmopolita n.° 2 | Contatos',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ExampleForm />
    </main>
  )
}
