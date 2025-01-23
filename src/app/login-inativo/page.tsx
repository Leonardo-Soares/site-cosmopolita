'use client'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/Partials/Container'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export default function Home(props: any) {
  const router = useRouter()

  return (
    <main className='h-full' style={{
      backgroundImage: 'url(../img/bg/bg-mapa-mudi.png)',
      backgroundSize: 'cover',
    }}>
      <div className='max-w-[1080px] min-h-screen h-full mx-auto flex justify-center items-center'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 py-16 gap-x-12'>
            <div className=' order-2 mt-8 lg:mt-0 lg:order-1 hidden lg:flex'>
              <img
                src="../img/acesso-negado.svg"
                className='w-full sticky top-44 h-[400px]'
              />
            </div>
            <div className='flex flex-col justify-center order-1 lg:order-2'>
              <div>
                <h2 className='text-5xl font-bold text-red-900'>
                  Usuário pendente de aprovação
                </h2>
                <p className='text-md text-brand-gray-700 mb-2 mt-4'>
                  Seu cadastro foi realizado com sucesso, porém, ainda não foi aprovado. Entre em contato com o Venerável Mestre e solicite aprovação.
                </p>
                <ButtonPrimary onClick={() => router.push('/')} >
                  Voltar para o login
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
