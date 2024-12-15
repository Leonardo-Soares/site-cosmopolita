import React from 'react'
import { Metadata } from 'next'
import formatDate from '@/hooks/useFormateData'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { getAtasDetalhes } from '@/services/prismicData/getAtasDetalhes'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: 'Ata | Cosmopolita',
    description: 'Confira as atas das reuniões da Loja Cosmopolita.',
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const detalhe_ata = await getAtasDetalhes(params.slug)

  return (
    <main className="">
      <HeaderPage title={`Ata: ${detalhe_ata.titulo}`} />
      <div className='flex min-h-screen flex-col items-center justify-between pt-12 pb-12'>
        <Container>
          <div>
            <div className='bg-brand-blue800 w-52 rounded-2xl text-center py-1'>
              <span className='text-brand-white'>Data: {formatDate(detalhe_ata.data_reuniao)}</span>
            </div>
            <div className="cursor-pointer font-bold rounded-2xl bg-brand-blue hover:bg-brand-green w-52 h-8 mt-2">
              <a href={detalhe_ata.arquivo} target="_blank" className='text-white h-full w-full px-4 text-center flex items-center justify-center'>
                Baixar Ata
              </a>
            </div>
            <div className='mt-4'>
              <p>
                {detalhe_ata.conteudo}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}