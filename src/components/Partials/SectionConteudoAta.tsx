import React from 'react'
import { Container } from './Container'

export function SectionConteudoAta({ ata }: { ata: any }) {
  return (
    <Container>
      <div>
        <div className='bg-brand-blue800 w-52 rounded-2xl text-center py-1'>
          <span className='text-brand-white  text-sm'>Data: {ata.data}</span>
        </div>
        <div className='mt-4'>
          <p>
            {ata.conteudo}
          </p>
        </div>
      </div>
    </Container>
  )
}
