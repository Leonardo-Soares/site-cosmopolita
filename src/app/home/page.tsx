'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCookies } from '@/stores/useCookies'
import SwiperHero from '@/components/Swipers/SwiperHero'
import { Container } from '@/components/Partials/Container'
import { SectionAtas } from '@/components/Partials/SectionAtas'
import SectionNoticias from '@/components/Partials/SectionNoticias'
import { SectionHistoria } from '@/components/Partials/SectionHistoria'
import SectionPresidentes from '@/components/Partials/SectionPresidentes'

export default async function Home() {
  const navigate = useRouter()
  const { getCookie } = useCookies()
  const logado = getCookie('logado')

  useEffect(() => {
    if (logado != 'true') {
      navigate.push('/')
    }
  }, [logado, navigate])

  return (
    <main>
      <SwiperHero />
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 my-16'>
          <div>
            <span>Conheça a Cosmopolita</span>
            <h2 className='text-5xl font-bold'>Sobre Nós</h2>
            <p>
              Aliquam pellentesque lorem sit amet nisl ultrices, quis commodo erat fringilla. Nullam ornare felis vel augue pretium, ac bibendum lectus pellentesque. Nam semper odio et magna molestie maximus. Aliquam vel egestas dui, eget facilisis est. Aenean bibendum eget erat nec vehicula. Proin quis porta erat, nec molestie leo. Curabitur hendrerit semper viverra.
            </p>
          </div>
          <div className='mt-4'>
            <img className=' rounded-xl' src="../img/temp/sobre.png" alt="" />
          </div>
        </div>
        <div id='historia' ></div>
        <SectionHistoria />
      </Container>
      <SectionAtas />
      <SectionPresidentes />
      <SectionNoticias />
    </main>
  )
}
