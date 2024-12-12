'use client'
import { useRouter } from 'next/navigation'
import { TitleH1 } from '@/components/Texts/TitleH1'

export function ButtonBack({ title, link }: { title: string, link?: string }) {
  const router = useRouter()

  return (
    <div className='mb-4'>
      <a onClick={link ? () => router.push(link) : () => router.back()} className='text-brand-dark cursor-pointer flex gap-x-2 group'>
        <div className='bg-brand-blue flex justify-center items-center rounded-full w-10 h-10'>
          <img src='../../../img/icons/back-left-white.svg' alt='Voltar' className='inline-block' />
        </div>
        <TitleH1 color='group-hover:text-brand-blue text-brand-dark'>
          {title}
        </TitleH1>
      </a>
    </div>
  )
}
