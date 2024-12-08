'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import useAuthenticated from '@/stores/useAuthenticated'
import { Container } from '@/components/Partials/Container'

export default async function Home() {
  const router = useRouter()
  const { setAuthenticated, authenticated } = useAuthenticated()

  function handleLogin() {
    setAuthenticated(true)
    router.push('/home')
  }

  useEffect(() => {
    if (authenticated) {
      router.push('/home')
    }
  }, [])

  return (
    <main className='flex-1 h-screen' style={{
      backgroundImage: 'url(../img/bg/bg-mapa-mudi.png)',
      backgroundSize: 'cover',
    }}>
      <div className='max-w-[1080px] h-screen mx-auto flex justify-center items-center'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 py-16 gap-x-12'>
            <div className='order-2 mt-8 lg:mt-0 lg:order-1'>
              <img className='w-full border-solid border-brand-blue border-4 rounded-xl' src="../img/temp/foto-exemplo.jpeg" alt="" />
            </div>
            <div className='flex flex-col justify-center order-1 lg:order-2'>
              <div>
                <h2 className='text-5xl font-bold text-brand-gray-700 mb-6'>Área Administrativa</h2>

                <InputPrimary name='email' placeholder='E-mail' />
                <InputPrimary name='password' placeholder='Senha' type='password' />
              </div>

              <div className='flex-col flex'>
                <a onClick={() => router.push('/recuperar-senha')} className='text-brand-blue font-bold cursor-pointer hover:underline text-sm'>Esqueci minha senha</a>
                <ButtonPrimary
                  full={true}
                  onClick={() => handleLogin()}
                >
                  Entrar</ButtonPrimary>
                <ButtonPrimary
                  full={true}
                  color='text-brand-blue'
                  backgroundColor='bg-transparent'
                  onClick={() => router.push('/cadastro')}
                >
                  Criar conta</ButtonPrimary>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
