import React from 'react'

export function SectionHistoria() {
  return (
    <div className='my-16 border-solid border-brand-gray-50 border-2 rounded-xl px-12 py-12'>
      <h2 className='text-5xl font-bold'>Nossa Historia</h2>
      <div className='bg-brand-blue px-2 h-24 rounded-lg mt-2 justify-center items-center hidden md:flex'>
        <div className='bg-brand-blue700 w-full h-[1px]'>
          <div className='flex gap-x-12 -mt-2 pl-6'>
            <a onClick={() => { }} className='justify-center text-white flex flex-col items-center cursor-pointer'>
              <div className='w-4 h-4 bg-brand-blue700 rounded-full mb-1'></div>
              10/fev
            </a>
            <a onClick={() => { }} className='justify-center text-white flex flex-col items-center cursor-pointer'>
              <div className='w-4 h-4 bg-brand-blue700 rounded-full mb-1'></div>
              10/fev
            </a>
            <a onClick={() => { }} className='justify-center text-white flex flex-col items-center cursor-pointer'>
              <div className='w-4 h-4 bg-brand-blue700 rounded-full mb-1'></div>
              10/fev
            </a>
            <a onClick={() => { }} className='justify-center text-white flex flex-col items-center cursor-pointer'>
              <div className='w-4 h-4 bg-brand-blue700 rounded-full mb-1'></div>
              10/fev
            </a>
            <a onClick={() => { }} className='justify-center text-white flex flex-col items-center cursor-pointer'>
              <div className='w-4 h-4 bg-brand-blue700 rounded-full mb-1'></div>
              10/fev
            </a>
            <a onClick={() => { }} className='justify-center text-white flex flex-col items-center cursor-pointer'>
              <div className='w-4 h-4 bg-brand-blue700 rounded-full mb-1'></div>
              10/fev
            </a>
          </div>
        </div>
      </div>

      {/* DATA ATIVA */}
      <div className='md:mx-4 my-8'>
        <h4 className='text-brand-gray-50'>12/02/2020</h4>
        <h2 className='text-brand-gray-700 text-4xl font-bold'>Primeira Reunião</h2>
        <p className='text-brand-gray-700'>
          Proin purus ipsum, porta vel neque eu, suscipit ultricies arcu. Fusce auctor ultricies sapien, sit amet malesuada neque imperdiet vel. Aliquam fringilla fermentum egestas. Integer finibus ipsum in nisi congue, at laoreet tortor imperdiet. In hac habitasse platea dictumst. Donec eu quam ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas commodo metus ut semper blandit. Sed ac quam et libero pellentesque vulputate vel cursus odio. Aenean commodo, metus id pretium tincidunt, arcu urna placerat massa, iaculis egestas elit libero in massa.
        </p>
      </div>
    </div>
  )
}
