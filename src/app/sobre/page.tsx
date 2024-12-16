import { Metadata } from 'next'
import { TitleH1 } from '@/components/Texts/TitleH1'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { SectionHistoria } from '@/components/Partials/SectionHistoria'

export const metadata: Metadata = {
  title: 'Sobre | Cosmopolita',
}

export default function Home() {
  return (
    <main className="">
      <HeaderPage />

      <div className='flex min-h-screen flex-col items-center justify-between pt-12 pb-12 lg:pb-0'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4'>
            <div>
              <img src="../img/temp/foto-exemplo.jpeg" alt="" className='rounded-xl w-full h-auto' />
            </div>
            <div className='mt-4 lg:mt-0'>
              <TitleH1 color='text-brand-dark'>Conheça a Cosmopolita </TitleH1>
              <p className='text-brand-gray-700 mt-2'>
                Aliquam pellentesque lorem sit amet nisl ultrices, quis commodo erat fringilla. Nullam ornare felis vel augue pretium, ac bibendum lectus pellentesque. Nam semper odio et magna molestie maximus. Aliquam vel egestas dui, eget facilisis est. Aenean bibendum eget erat nec vehicula. Proin quis porta erat, nec molestie leo. Curabitur hendrerit semper viverra.Proin quis porta erat, nec molestie leo. Curabitur hendrerit semper viverra.Proin quis porta erat, nec molestie leo. Curabitur hendrerit semper viverra.
              </p>
            </div>
          </div>

          <div className='bg-[#F1F6F3] rounded-lg w-full py-10 px-9 my-12'>
            <div className='block lg:flex'>
              <img src="../img/sobre-cosmopolita.png" alt="" className='mx-auto w-2/3 lg:w-auto' />

              <div className='grid w-full justify-items-center items-center grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 mt-6 lg:mt-0'>
                <div className='flex gap-x-2 group'>
                  <div className='bg-brand-blue group-hover:scale-110 transition-all rounded-full flex items-center justify-center w-16 h-16'>
                    <img src="../img/icons/missao.svg" alt="Icon de tiro ao alvo" className='w-8 mt-1' />
                  </div>
                  <div className='max-w-[80%] lg:max-w-[100px]'>
                    <h2 className='text-brand-dark text-lg font-bold'>Missão</h2>
                    <p className='text-brand-gray-700 text-xs'>
                      Cras consectetur urna non ipsum rhoncus pretium. Sed scelerisque tortor eros, eget venenatis dolor condimentum non.
                    </p>
                  </div>
                </div>

                <div className='flex gap-x-2 group'>
                  <div className='bg-brand-blue rounded-full group-hover:scale-110 transition-all  flex items-center justify-center w-16 h-16'>
                    <img src="../img/icons/visao.svg" alt="Icon de tiro ao alvo" className='w-8 mt-1' />
                  </div>
                  <div className='max-w-[80%] lg:max-w-[100px]'>
                    <h2 className='text-brand-dark text-lg font-bold'>Visão</h2>
                    <p className='text-brand-gray-700 text-xs'>
                      Cras consectetur urna non ipsum rhoncus pretium. Sed scelerisque tortor eros, eget venenatis dolor condimentum non.
                    </p>
                  </div>
                </div>

                <div className='flex gap-x-2 group'>
                  <div className='bg-brand-blue rounded-full group-hover:scale-110 transition-all  flex items-center justify-center w-16 h-16'>
                    <img src="../img/icons/valores.svg" alt="Icon de tiro ao alvo" className='w-8 mt-1' />
                  </div>
                  <div className='max-w-[80%] lg:max-w-[100px]'>
                    <h2 className='text-brand-dark text-lg font-bold'>Valores</h2>
                    <p className='text-brand-gray-700 text-xs'>
                      Cras consectetur urna non ipsum rhoncus pretium. Sed scelerisque tortor eros, eget venenatis dolor condimentum non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionHistoria />
        </Container>
      </div>
    </main>
  )
}
