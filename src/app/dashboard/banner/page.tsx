import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { getBanners } from '@/services/prismicData/getBanners'
import TableBanner from '@/components/Partials/Dashboard/Banner/TableBanner'

export const metadata: Metadata = {
  title: 'Banner | Dashboard',
}

export default async function Home() {
  const banners = await getBanners()

  return (
    <main className="">
      <HeaderPage title='Controle de Banners' />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12 pb-12'>
        <Container>
          <TableBanner banners={banners} />
        </Container>
      </div>
    </main>
  )
}
