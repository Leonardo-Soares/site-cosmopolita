import React from 'react'
import { Container } from './Container'
import { useRouter } from 'next/navigation'
import { CardNoticia } from '../Cards/CardNoticia'

export function SectionNoticias() {
  const router = useRouter()

  const noticias = [
    {
      id: 1,
      titulo: 'Assembleia Geral Extraordinária realizada com sucesso',
      sutitulo: 'Membros da Loja Maçônica Cosmopolita se reuniram para debater planos e estratégias para os próximos meses.',
      data: '17/10/2024',
      categoria: 'Loja',
      file: '../../img/temp/news.png',
    },
    {
      id: 2,
      titulo: 'Novos membros são iniciados na Loja Maçônica Cosmopolita',
      sutitulo: 'A cerimônia de iniciação contou com a presença de autoridades maçônicas e familiares.',
      data: '15/10/2024',
      categoria: 'Eventos',
      file: '../../img/temp/news.png',
    },
    {
      id: 3,
      titulo: 'Loja promove ação beneficente em prol da comunidade',
      sutitulo: 'Campanha arrecadou alimentos e roupas para famílias em situação de vulnerabilidade.',
      data: '10/10/2024',
      categoria: 'Filantropia',
      file: '../../img/temp/news.png',
    },
    {
      id: 4,
      titulo: 'Sessão comemorativa marca aniversário da Loja Cosmopolita',
      sutitulo: 'Membros celebraram a trajetória de sucesso e conquistas da Loja Maçônica Cosmopolita.',
      data: '05/10/2024',
      categoria: 'Comemoração',
      file: '../../img/temp/news.png',
    },
  ];

  return (
    <div className='relative bg-brand-gray-100'>
      <div className='my-16 px-12 py-12'>
        <Container>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='text-brand-gray-50'>Últimas</h4>
              <h2 className='text-black text-5xl font-bold'>Notícias</h2>
            </div>
            <a onClick={() => router.push('/noticias')}
              className='hidden md:flex items-center gap-x-2 text-black font-bold text-xl hover:underline group cursor-pointer' target="_blank" rel="noopener noreferrer">
              Ver todas
              <img src="../../img/icons/arrow-right-white.svg" alt="" className='p-3 rounded-full bg-brand-greenSecondary' />
            </a>
          </div>

          <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
            {noticias && noticias.slice(0, 4).map((item) => (
              <CardNoticia
                key={item.id}
                data={item.data}
                categoria={item.categoria}
                titulo={item.titulo}
                sutitulo={item.sutitulo}
                imagem={item.file}
              />
            ))}
          </div>

          <button type='button' className='md:hidden border-solid border-2 border-brand-blue text-brand-blue text-xl rounded-xl mt-6 w-full h-14 hover:bg-brand-blue hover:text-white transition-all'>
            Ver todas
          </button>
        </Container>
      </div>
    </div>
  )
}
