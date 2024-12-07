'use client'
import useLang from '@/hooks/useLang'
import { Copyright } from './Copyright'
import useNavLinks from '@/hooks/useNavLinks'
import { Container } from '../Partials/Container'
import useAuthenticated from '@/stores/useAuthenticated'

export default function Footer() {
  const { stringData } = useLang()
  const { navLinks } = useNavLinks()
  const { authenticated } = useAuthenticated()


  return (
    <footer className={`border-t-2 border-brand-blue ${!authenticated && 'hidden'}`}>
      <Container>
        <div className="grid grid-cols-4 py-10 gap-x-4">
          <div className="flex items-center justify-center rounded-full p-1 mb-2">
            <img
              data-fancybox
              alt="Logo Cosmopolita"
              data-caption="Single image"
              className="w-1/2 cursor-pointer"
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
            <h2 className='font-bold text-2xl text-black mb-2'>Sobre nós</h2>
            <a href="http://" target="_blank" rel="noopener noreferrer" className='text-brand-gray-50 text-sm cursor-pointer hover:underline'>
              A Cosmopolista
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className='text-brand-gray-50 text-sm cursor-pointer hover:underline'>
              História
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer" className='text-brand-gray-50 text-sm cursor-pointer hover:underline'>
              Diretoria
            </a>
          </div>

          <div className='flex flex-col'>
            <a className='font-bold text-2xl hover:text-brand-blue hover:underline' href="http://" target="_blank" rel="noopener noreferrer">
              Controle de atas
            </a>
            <a className='font-bold text-2xl hover:text-brand-blue hover:underline' href="http://" target="_blank" rel="noopener noreferrer">
              Galeria de Gestões
            </a>
            <a className='font-bold text-2xl hover:text-brand-blue hover:underline' href="http://" target="_blank" rel="noopener noreferrer">
              Notícias
            </a>
            <a className='font-bold text-2xl hover:text-brand-blue hover:underline' href="http://" target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </div>

          <div className='flex flex-col'>
            <h2 className='font-bold text-2xl hover:text-brand-blue hover:underline'>
              Siga nos
            </h2>

            <div className='flex gap-x-2 mt-1'>
              <a href="#" target="_blank">
                <img src="/img/icons/instagram.svg" alt="" />
              </a>
              <a href="#" target="_blank">
                <img src="/img/icons/facebook.svg" alt="" />
              </a>
            </div>

          </div>
        </div>
      </Container>
      <Copyright />
    </footer>
  )
}
