import { Metadata } from 'next'
import { TitleH4 } from '@/components/Texts/TitleH4'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'

export const metadata: Metadata = {
  title: 'Contato | Cosmopolita',
}

export default function Home() {

  return (
    <main className="">
      <HeaderPage title='Formas de contato' />

      <div className='flex flex-col items-center justify-between py-12'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4'>
            <div className='order-2'>
              <TitleH4 color='text-brand-dark'>
                Confira nosso endereço
              </TitleH4>
              <iframe
                width="100%"
                height="450"
                loading="lazy"
                className='rounded-lg border-solid border-2 border-brand-blue shadow-xl mt-2'
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17366.831391995584!2d-48.4651623!3d-1.4421213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48fb27ea76caf%3A0x4d3a7064d4ec44fa!2sLoja%20Ma%C3%A7%C3%B4nica%20Cosmopolita%20N%202!5e1!3m2!1spt-BR!2sbr!4v1733878357776!5m2!1spt-BR!2sbr"
              >
              </iframe>
            </div>
            <div className='rounded-xl order-1 mb-8 lg:mb-0 lg:px-4'>
              <TitleH4 color='text-brand-dark'>
                Nossos canais de comunicação
              </TitleH4>
              <a href='mailto:contato@cosmopolita.com.br' className='flex justify-start items-center cursor-pointer text-white bg-brand-blue h-16 rounded-xl hover:scale-105 transition-all pl-4 mt-4'>
                <img src='../img/icons/email-white.svg' alt='Email' className='w-8 h-8 mr-2 inline-block' />
                contato@cosmopolita.com.br
              </a>
              <a href='https://www.instagram.com/cosmopolita_n2/' target='_blank' className='flex justify-start items-center cursor-pointer text-white bg-brand-blue h-16 rounded-xl hover:scale-105 transition-all pl-4 mt-4'>
                <img src='../img/icons/instagram-white.svg' alt='Email' className='w-8 h-8 mr-2 inline-block' />
                @cosmopolita_n2
              </a>
              <a href='tel:+5591998260317' className='flex justify-start items-center cursor-pointer text-white bg-brand-blue h-16 rounded-xl hover:scale-105 transition-all pl-4 mt-4'>
                <img src='../img/icons/phone-white.svg' alt='Email' className='w-8 h-8 mr-2 inline-block' />
                (91) 99999-9999
              </a>
              <a href='https://maps.app.goo.gl/SNykniKPHRZWC7Yw8' target='_blank' className='flex justify-start items-center cursor-pointer text-white bg-brand-blue h-16 rounded-xl hover:scale-105 transition-all pl-4 mt-4'>
                <img src='../img/icons/endereco-white.svg' alt='Email' className='w-8 h-8 mr-2 inline-block' />
                Travessa do Chaco, n. 2086 - Marco, Belém - PA <br />
                Horário de reuniões: toda Terça-Feira às 20:00h
              </a>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
