import { CardNoticia } from '@/components/Cards/CardNoticia'
import { Container } from '@/components/Partials/Container'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre | Cosmopolita',
}

export default function Home() {

  return (
    <main className="">
      <div
        className='h-32 flex items-center'
        style={{
          background: 'url(../img/bg/bg-header-page.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <TitleH1 color='text-brand-dark'>A∴ R∴ L∴ S∴ Cosmopolita n.° 2</TitleH1>
        </Container>
      </div>
      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4'>
            <div>
              <img src="../img/temp/sobre.png" alt="" className='rounded-xl w-full h-auto' />
            </div>
            <div>
              <TitleH1 color='text-brand-dark'>Conheça a Cosmopolita </TitleH1>
              <p className='text-brand-gray-700 mt-2'>
                Aliquam pellentesque lorem sit amet nisl ultrices, quis commodo erat fringilla. Nullam ornare felis vel augue pretium, ac bibendum lectus pellentesque. Nam semper odio et magna molestie maximus. Aliquam vel egestas dui, eget facilisis est. Aenean bibendum eget erat nec vehicula. Proin quis porta erat, nec molestie leo. Curabitur hendrerit semper viverra.Proin quis porta erat, nec molestie leo. Curabitur hendrerit semper viverra.Proin quis porta erat, nec molestie leo. Curabitur hendrerit semper viverra.
              </p>
            </div>
          </div>

          <div className='bg-[#F1F6F3] rounded-lg w-full py-10 px-9 mt-12'>
            <div className='block lg:flex'>
              <img src="../img/sobre-cosmopolita.png" alt="" className='mx-auto' />

              <div className='grid w-full justify-items-center items-center grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 mt-6 lg:mt-0'>
                <div className='flex gap-x-2 group'>
                  <div className='bg-brand-blue group-hover:scale-110 transition-all rounded-full flex items-center justify-center w-16 h-16'>
                    <img src="../img/icons/missao.svg" alt="Icon de tiro ao alvo" className='w-8 mt-1' />
                  </div>
                  <div className='max-w-[100px]'>
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
                  <div className='max-w-[100px]'>
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
                  <div className='max-w-[100px]'>
                    <h2 className='text-brand-dark text-lg font-bold'>Valores</h2>
                    <p className='text-brand-gray-700 text-xs'>
                      Cras consectetur urna non ipsum rhoncus pretium. Sed scelerisque tortor eros, eget venenatis dolor condimentum non.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
