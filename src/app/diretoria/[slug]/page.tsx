import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { TitleH4 } from '@/components/Texts/TitleH4'
import formatDateAno from '@/hooks/useFormateDataAno'
import { getDiretoresDetalhes } from '@/services/prismicData/getDiretoresDetalhes'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: 'Diretoria | Cosmopolita',
    description: 'Confira nossa atual Diretoria da Loja Cosmopolita.',
  }
}

export default async function Home({ params }: { params: { slug: string } }) {
  const diretor_api = await getDiretoresDetalhes(params.slug)
  const diretor = {
    id: 1,
    nome: 'Nome do Diretor',
    inicio: '2025',
    fim: '2027',
    cargo: 'Cargo do Diretor',
    imagem: '../img/temp/presidente.png',
    link_facebook: 'https://www.facebook.com/',
    link_instagram: 'https://www.instagram.com/',
    link_linkedin: 'https://www.linkedin.com/',
    historico: [
      {
        id: 1,
        data: '05/01/2020',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
      },
      {
        id: 2,
        data: '05/01/2020',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
      },
      {
        id: 3,
        data: '05/01/2020',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
      },
      {
        id: 4,
        data: '05/01/2020',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
      },
      {
        id: 5,
        data: '05/01/2020',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
      },
    ],
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nunc nec tristique.',
  }

  return (
    <main className="">
      <HeaderPage title='Diretoria' />

      <div className='flex min-h-screen flex-col items-center justify-between pt-12 pb-12 lg:pb-0'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4'>
            <div className='flex flex-col  pb-4 mb-4'>
              <TitleH1 color='text-brand-dark'>{diretor_api.nome}</TitleH1>
              <TitleH4 fontWeigth='400' color='text-brand-gray-50'>{formatDateAno(diretor_api.ano_inicio)} - {formatDateAno(diretor_api.ano_fim)}</TitleH4>
              <p className='text-md text-brand-gray-700 border-solid border-b-2 border-brand-gray-300 mt-4 pb-6'>
                {diretor_api.descricao}
              </p>
              <div className='mt-6'>
                <TitleH4 color='text-brand-dark'>Histórico</TitleH4>
                <div className='max-h-[520px] overflow-auto'>
                  {diretor.historico.map((item) => (
                    <div key={item.id} className='border border-brand-gray-400 rounded-xl p-3 mt-2 mr-2'>
                      <TitleH4 color='text-brand-dark'>
                        {item.data}
                      </TitleH4>
                      <p className='text-brand-gray-700'>
                        {item.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <div className='flex flex-col justify-start'>
              <img src={diretor.imagem} alt={diretor.nome} className='w-full max-w-md mx-auto' />
              <div className='mt-4 grid gap-y-2 justify-center'>
                {diretor.link_linkedin &&
                  <a href={diretor.link_linkedin} target='_blank' className='flex items-center text-xl hover:text-brand-blue hover:underline'>
                    <img src={'../img/icons/linkedin-blue.svg'} alt={diretor.nome} className='w-10 max-w-md mr-2' />
                    LinkedIn
                  </a>
                }
                {diretor.link_instagram &&
                  <a href={diretor.link_instagram} target='_blank' className='flex items-center text-xl hover:text-brand-blue hover:underline'>
                    <img src={'../img/icons/instagram-blue.svg'} alt={diretor.nome} className='w-10 max-w-md mr-2' />
                    Instagram
                  </a>
                }
                {diretor.link_facebook &&
                  <a href={diretor.link_facebook} target='_blank' className='flex items-center text-xl hover:text-brand-blue hover:underline'>
                    <img src={'../img/icons/facebook-blue.svg'} alt={diretor.nome} className='w-10 max-w-md mr-2' />
                    Facebook
                  </a>
                }
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
