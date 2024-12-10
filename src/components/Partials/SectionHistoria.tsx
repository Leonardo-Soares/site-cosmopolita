'use client'
import React, { useState } from 'react'
import SwiperHistoria from '../Swipers/SwiperHistoria'

export function SectionHistoria() {
  const [dataAtiva, setDataAtiva] = useState(1)
  const historico = [
    {
      id: 1,
      data: '12/02/2020',
      titulo: 'Primeira Reunião',
      descricao: 'Proin purus ipsum, porta vel neque eu, suscipit ultricies arcu. Fusce auctor ultricies sapien, sit amet malesuada neque imperdiet vel. Aliquam fringilla fermentum egestas. Integer finibus ipsum in nisi congue, at laoreet tortor imperdiet. In hac habitasse platea dictumst. Donec eu quam ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas commodo ',
    },
    {
      id: 2,
      data: '16/12/2024',
      titulo: 'Segunda Reunião',
      descricao: 'Proin purus ipsum, porta vel neque eu, suscipit ultricies arcu. Fusce auctor ultricies sapien, sit amet malesuada neque imperdiet vel. Aliquam fringilla fermentum egestas. Integer finibus ipsum in nisi congue, at laoreet tortor imperdiet. In hac habitasse platea dictumst. Donec eu quam ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas commodo ',
    },
    {
      id: 3,
      data: '12/02/2020',
      titulo: 'Terceira Reunião',
      descricao: 'Proin purus ipsum, porta vel neque eu, suscipit ultricies arcu. Fusce auctor ultricies sapien, sit amet malesuada neque imperdiet vel. Aliquam fringilla fermentum egestas. Integer finibus ipsum in nisi congue, at laoreet tortor imperdiet. In hac habitasse platea dictumst. Donec eu quam ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas commodo ',
    },
    {
      id: 4,
      data: '12/02/2020',
      titulo: 'Quarta Reunião',
      descricao: 'Proin purus ipsum, porta vel neque eu, suscipit ultricies arcu. Fusce auctor ultricies sapien, sit amet malesuada neque imperdiet vel. Aliquam fringilla fermentum egestas. Integer finibus ipsum in nisi congue, at laoreet tortor imperdiet. In hac habitasse platea dictumst. Donec eu quam ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas commodo ',
    },
    {
      id: 5,
      data: '12/02/2020',
      titulo: 'Quinta Reunião',
      descricao: 'Proin purus ipsum, porta vel ne que eu, suscipit ultricies arcu. Fusce auctor ultricies sapien, sit amet malesuada neque imperdiet vel. Aliquam fringilla fermentum egestas. Integer finibus ipsum in nisi congue, at laoreet tortor imperdiet. In hac habitasse platea dictumst. Donec eu quam ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas commodo ',
    }
  ]

  return (
    <div className='my-16 border-solid border-brand-gray-50 border-2 rounded-xl px-12 py-12'>
      <h2 className='text-5xl font-bold'>Nossa Historia</h2>
      <div className='bg-brand-blue px-2 h-24 rounded-lg mt-2 justify-center items-center hidden md:flex'>
        <div className='bg-brand-blue700 w-full h-[1px]'>
          <div className='flex gap-x-12 -mt-2 pl-6'>
            {historico.map((item) => (
              <a key={item.id} onClick={() => setDataAtiva(item.id)} className='justify-center text-white flex flex-col items-center cursor-pointer'>
                <div className={`w-4 h-4  border-solid border-brand-blue700 border-2 ${dataAtiva === item.id ? 'bg-brand-blue700' : 'bg-brand-blue'} rounded-full mb-1`}></div>
                {item.data}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='hidden lg:flex'>
        {historico.map((item) => (
          item.id === dataAtiva &&
          <div className='md:mx-4 my-8'>
            <h4 className='text-brand-gray-50'>{item.data}</h4>
            <h2 className='text-brand-gray-700 text-4xl font-bold'>{item.titulo}</h2>
            <p className='text-brand-gray-700'>
              {item.descricao}
            </p>
          </div>
        ))}
      </div>

      <div className='flex lg:hidden'>
        <SwiperHistoria
          historico={historico}
        />
      </div>
    </div>
  )
}
