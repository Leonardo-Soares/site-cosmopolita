import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { getDiretores } from '@/services/prismicData/getDiretores'
import TableDiretoria from '@/components/Partials/Dashboard/Diretoria/TableDiretoria'
import TableObreiro from '@/components/Partials/Dashboard/Obreiro/TableObreiro'

export const metadata: Metadata = {
  title: 'Obreiro | Dashboard',
}

export default async function Home() {
  const diretores = await getDiretores()

  return (
    <main className="">
      <HeaderPage title='Controle de Obreiros' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12 pb-12'>
        <Container>
          <TableObreiro diretores={diretores} />
        </Container>
      </div>
    </main>
  )
}
