'use client'
import useLang from '@/hooks/useLang'
import { Copyright } from './Copyright'
import useNavLinks from '@/hooks/useNavLinks'
import { useCookies } from '@/stores/useCookies'
import { Container } from '../Partials/Container'

export default function Footer() {
  const { stringData } = useLang()
  const { navLinks } = useNavLinks()
  const { getCookie } = useCookies()
  const authenticated = getCookie('logado')


  return (
    <footer className={`border-t-2 border-brand-blue`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 py-10 gap-x-4">
          <div className="flex items-center justify-center rounded-full p-1 mb-2">
            <img
              data-fancybox
              alt="Logo Cosmopolita"
              data-caption="Single image"
              className="w-1/3 cursor-pointer"
              src="/img/logos/logo-cosmopolita.png"
            />
          </div>

          {/* <div className="gap-4">
            <h2 className='font-bold text-2xl mb-2'>Área Administrativa</h2>
            <button className='w-full bg-brand-blue border-brand-blue border-solid border-2 text-xl rounded-3xl text-white hover:scale-105 transition-all'>
              Login
            </button>
            <button className='w-full border-brand-blue border-solid border-2 text-xl rounded-3xl text-brand-blue hover:scale-105 transition-all mt-2'>
              Cadastro
            </button>
          </div> */}

          <div className='hidden md:flex flex-col'>
            <h2 className='font-bold text-2xl text-brand-blue mb-2'>Sobre nós</h2>
            <a href="/home#historia" className='text-brand-gray-50 text-sm cursor-pointer hover:underline'>
              História
            </a>
            <a href="/diretoria" className='text-brand-gray-50 text-sm cursor-pointer hover:underline'>
              Diretoria
            </a>
            <a href="/politica-de-privacidade" className='text-brand-gray-50 text-sm cursor-pointer hover:underline'>
              Política de Privacidade
            </a>
          </div>

          <div className='flex flex-col justify-center items-center lg:items-start'>
            <a className='font-bold text-2xl hover:text-brand-blue hover:underline' href="/atas">
              Atas
            </a>
            <a className='font-bold text-2xl hover:text-brand-blue hover:underline' href="/diretoria">
              Diretoria
            </a>
            <a className='font-bold text-2xl hover:text-brand-blue hover:underline' href="/noticias">
              Notícias
            </a>
            <a className='font-bold text-2xl hover:text-brand-blue hover:underline' href="/contato">
              Fale Conosco
            </a>
          </div>

          <div className='flex flex-col justify-center lg:justify-start items-center lg:items-start mt-4'>
            <h2 className='font-bold text-2xl text-brand-blue'>
              Siga nos
            </h2>

            <div className='flex gap-x-2 mt-1'>
              <a href="https://www.instagram.com/cosmopolita_n2/" target="_blank">
                <img src="/img/icons/instagram.svg" alt="" />
              </a>
            </div>

          </div>
        </div>
      </Container>
      <Copyright />
    </footer>
  )
}
