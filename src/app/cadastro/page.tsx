'use client'
import { useRouter } from 'next/navigation'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'


export default async function Home() {
  const router = useRouter()

  return (
    <main className='flex-1 h-screen' style={{
      backgroundImage: 'url(../img/bg/bg-mapa-mudi.png)',
      backgroundSize: 'cover',
    }}>
      <div className='max-w-[1080px] h-screen mx-auto flex justify-center items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 py-16 gap-x-12'>
          <div className='order-2 mt-8 lg:mt-0 lg:order-1'>
            <img className='w-full rounded-xl' src="../img/temp/login.png" alt="" />
          </div>
          <div className='flex flex-col justify-center order-1 lg:order-2'>
            <div>
              <h2 className='text-5xl font-bold text-brand-dark'>Cadastro</h2>
              <p className='text-md text-brand-gray-700 mb-6'>Preenche todas informações com atenção, em caso de dúvida procure um Mestre Maçom ou membros da Diretoria da Loja.</p>

              <InputPrimary name='name' placeholder='Nome' />
              <InputPrimary name='date' type='date' placeholder='Data de nascimento' />
              <InputPrimary name='email' placeholder='E-mail' type='email' />
              <InputPrimary name='cim' placeholder='CIM' type='text' />
              <InputPrimary name='endereco' placeholder='Endereço' type='text' />
              <InputPrimary name='telefone' placeholder='Telefone' type='number' />
              <InputPrimary name='password' placeholder='Senha' type='password' />
            </div>

            <div className='flex-col flex'>
              <ButtonPrimary
                full={true}
                onClick={() => console.log('Clicou')}
              >
                Entrar</ButtonPrimary>
              <ButtonPrimary
                full={true}
                color='text-brand-blue'
                backgroundColor='bg-transparent'
                onClick={() => router.push('/')}
              >
                Fazer login</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
