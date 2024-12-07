'use client'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import InputPrimary from '@/components/Forms/InputPrimary'
import { Container } from '@/components/Partials/Container'

export default async function Home() {
  return (
    <main className='' style={{
      backgroundImage: 'url(../img/bg/bg-mapa-mudi.png)',
      backgroundSize: 'cover',
    }}>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 py-16 gap-x-12'>
          <div>
            <img className='w-full rounded-xl' src="../img/temp/login.png" alt="" />
          </div>
          <div className='flex flex-col justify-center '>
            <div>
              <h2 className='text-5xl font-bold text-brand-gray-700 mb-6'>Área Administrativa</h2>

              <InputPrimary name='email' placeholder='E-mail' />
              <InputPrimary name='password' placeholder='Senha' type='password' />
            </div>

            <div className='flex-col flex'>
              {/* <a className='text-brand-blue font-bold cursor-pointer hover:underline text-sm'>Esqueci minha senha</a> */}

              <ButtonPrimary
                full={true}
                onClick={() => console.log('Clicou')}
              >
                Entrar</ButtonPrimary>
            </div>
          </div>
        </div>
      </Container>

    </main>
  )
}
