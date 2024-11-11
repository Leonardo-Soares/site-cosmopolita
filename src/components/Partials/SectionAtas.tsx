import React from 'react'
import { Container } from './Container'

export function SectionAtas() {
  const atas_list = [
    {
      id: 1,
      data: '10/10/2024',
      file: '../../img/temp/ata1.png'
    },
    {
      id: 2,
      data: '23/09/2024',
      file: '../../img/temp/ata1.png'
    },
    {
      id: 3,
      data: '12/08/2024',
      file: '../../img/temp/ata1.png'
    },
    {
      id: 4,
      data: '15/06/2024',
      file: '../../img/temp/ata1.png'
    }
  ]
  return (
    <div className='relative'>
      <div className='bg-brand-blue h-[320px] w-full absolute top-0 -z-10 '></div>
      <div className='my-16 px-12 py-12'>
        <Container>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='text-white/70'>Lista de Atas disponíveis</h4>
              <h2 className='text-white text-5xl font-bold'>Controle de Atas</h2>
            </div>
            <a href="http://"
              className='hidden md:flex items-center gap-x-2 text-white font-bold text-xl hover:underline group' target="_blank" rel="noopener noreferrer">
              Ver todas
              <img src="../../img/icons/arrow-right.svg" alt="" className='p-3 rounded-full bg-white' />
            </a>
          </div>

          <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
            {atas_list && atas_list.map((item) => (
              <a onClick={() => { }} key={item.id} className='rounded-md drop-shadow-2xl relative cursor-pointer hover:scale-105 transition-all'>
                <div className='bg-gradient-to-t via-black/70 from-black rounded-b-md w-full h-24 absolute flex items-end justify-around bottom-0 pb-4'>
                  <div className='flex gap-x-1'>
                    <img src="../../img/icons/calendar.svg" alt="" />
                    <h5 className='text-white'>{item.data}</h5>
                  </div>
                </div>
                <img src={item.file} alt="" />
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
