'use client'
import { useRouter } from 'next/navigation'
import { useCookies } from '@/stores/useCookies'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { TitleH4 } from '@/components/Texts/TitleH4'
import { Container } from '@/components/Partials/Container'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export default function Home() {
  const navigation = useRouter()
  const { addCookie } = useCookies()


  async function onLogout() {
    addCookie('logado', 'false')
    navigation.push('/')
  }

  return (
    <main className="">
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <Container>
          <div className="flex flex-col justify-center items-center">
            <TitleH1 color='text-brand-dark'>Tem certeza que deseja sair?</TitleH1>
            <div className='w-full grid'>
              <ButtonPrimary onClick={onLogout} color='text-white' backgroundColor='bg-brand-red/80'>Sim, quero sair</ButtonPrimary>
              <ButtonPrimary onClick={() => navigation.back()} type='button' backgroundColor='bg-brand-blue'>Não, voltar</ButtonPrimary>
            </div>
          </div>
          <TitleH4>Até mais!</TitleH4>
        </Container>
      </div>
    </main>
  )
}
