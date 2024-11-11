import React from 'react'
import { Container } from './Container'

export function SectionNoticias() {
  const atas_list = [
    {
      id: 1,
      data: '10/10/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 2,
      data: '23/09/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 3,
      data: '12/08/2024',
      file: '../../img/temp/news.png'
    },
    {
      id: 4,
      data: '15/06/2024',
      file: '../../img/temp/news.png'
    }
  ]
  return (
    <div className='relative bg-brand-gray-100'>
      <div className='my-16 px-12 py-12'>
        <Container>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='text-brand-gray-50'>Últimas</h4>
              <h2 className='text-black text-5xl font-bold'>Notícias</h2>
            </div>
            <a href="http://"
              className='hidden md:flex items-center gap-x-2 text-black font-bold text-xl hover:underline group' target="_blank" rel="noopener noreferrer">
              Ver todas
              <img src="../../img/icons/arrow-right-white.svg" alt="" className='p-3 rounded-full bg-brand-greenSecondary' />
            </a>
          </div>

          <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
            {atas_list && atas_list.map((item) => (
              <a onClick={() => { }} key={item.id} className='hover:scale-105 transition-all'>
                <div className='rounded-md drop-shadow-2xl relative cursor-pointer mb-3'>
                  <div className='bg-gradient-to-t via-black/70 from-black rounded-b-md w-full h-24 absolute flex items-end bottom-0 px-4 pb-4'>
                    <h5 className='text-white'>{item.data}</h5>
                  </div>
                  <span className='bg-brand-blue text-white absolute right-2 top-2 px-4 py-1 rounded-md'>
                    Categoria
                  </span>
                  <img src={item.file} alt="" />
                </div>
                <h2 className='font-bold text-xl'>
                  Ut non justo gravida, porta nunc non, fringilla turpis. Aliquam eu est nunc. Nunc scelerisque nibh sit amet rutrum vestibulum.
                </h2>
                <span className='text-brand-gray-50 text-sm'>
                  Donec eleifend efficitur mauris, in dapibus arcu. Orci varius natoque penatibus et magnis dis parturient montes
                </span>
              </a>

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
