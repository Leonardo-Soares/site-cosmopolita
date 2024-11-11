import React from 'react'
import { Container } from './Container'

export function SectionPresidentes() {
  const atas_list = [
    {
      id: 1,
      nome: 'Matos Silva',
      cargo: 'Venerável Mestre',
      file: '../../img/temp/presidente.png'
    },
    {
      id: 2,
      nome: 'João Carlos',
      cargo: 'Venerável Mestre',
      file: '../../img/temp/presidente.png'
    },
    {
      id: 3,
      nome: 'Matos Silva',
      cargo: 'Venerável Mestre',
      file: '../../img/temp/presidente.png'
    },
    {
      id: 4,
      nome: 'João Carlos',
      cargo: 'Venerável Mestre',
      file: '../../img/temp/presidente.png'
    }
  ]

  return (
    <div className='relative bg-white'>
      <div className='my-16 px-6 md:px-12 py-12'>
        <Container>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='text-black/70'>Gestão 2025-2027</h4>
              <h2 className='text-black text-5xl font-bold'>Membros</h2>
            </div>
            <a href="http://"
              className='hidden md:flex items-center gap-x-2 text-black font-bold text-xl hover:underline group' target="_blank" rel="noopener noreferrer">
              Ver todos
              <img src="../../img/icons/arrow-right-white.svg" alt="" className='p-3 rounded-full bg-brand-greenSecondary' />
            </a>
          </div>

          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-4 md:gap-y-6'>
            {atas_list && atas_list.map((item) => (
              <a onClick={() => { }} key={item.id} className='rounded-md drop-shadow-2xl relative cursor-pointer hover:scale-105 transition-all'>
                <img src={item.file} alt=""
                  className='w-full h-auto'
                />
                <div className='py-4'>
                  <h5 className='text-black text-center font-bold text-2xl'>{item.nome}</h5>
                  <h5 className='text-brand-gray-50 text-center text-xl'>{item.cargo}</h5>
                </div>
              </a>
            ))}
          </div>

          <button type='button' className='md:hidden border-solid border-2 border-brand-blue text-brand-blue text-xl rounded-xl mt-6 w-full h-14 hover:bg-brand-blue hover:text-white transition-all'>
            Ver todos
          </button>

        </Container>

      </div>
    </div>
  )
}
