'use client'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/Partials/Container'

export default function Home(props: any) {
  const router = useRouter()

  return (
    <main className='h-full' style={{
      backgroundImage: 'url(../img/bg/bg-mapa-mudi.png)',
      backgroundSize: 'cover',
    }}>
      <div className='max-w-[1080px] h-full mx-auto flex justify-center'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 py-16 gap-x-12'>
            <div className=' order-2 mt-8 lg:mt-0 lg:order-1 hidden lg:flex'>
              <img
                src="../img/sucesso.svg"
                className='w-full sticky top-44 h-[400px]'
              />
            </div>
            <div className='flex flex-col justify-center order-1 lg:order-2'>
              <div>
                <h2 className='text-5xl font-bold text-brand-blue'>Cadastro realizado com sucesso !</h2>
                <p className='text-md text-brand-gray-700 mb-6 mt-4'><b>Seja bem vindo amado Irmão,</b>
                  <br />
                  <br />
                  Parabéns pela iniciativa em cadastrar-se em nosso sistema de gestão e comunicação interna da Loja Cosmopolita. Por meio dele você poderá acompanhar as atividades da Loja, receber notícias e comunicados, além de interagir com os demais irmãos.
                  <br />
                  <br />
                  Sua solicitação de cadastro foi encaminhada à Diretoria, que em breve validárá seus dados e consequentemente aprovar seu cadastro.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
