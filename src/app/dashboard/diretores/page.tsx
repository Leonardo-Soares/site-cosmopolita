import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { getDiretores } from '@/services/prismicData/getDiretores'
import TableDiretoria from '@/components/Partials/Dashboard/Diretoria/TableDiretoria'

export const metadata: Metadata = {
  title: 'Diretores | Dashboard',
}

export default async function Home() {
  const diretores = await getDiretores()

  return (
    <main className="">
      <HeaderPage title='Controle de Diretores' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12 pb-12'>
        <Container>
          <TableDiretoria diretores={diretores} />
        </Container>
      </div>
    </main>
  )
}
