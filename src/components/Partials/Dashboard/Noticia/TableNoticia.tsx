'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import NoticiasProps from '@/hooks/useNoticiasProps'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export default function TableNoticia({ noticias }: { noticias: NoticiasProps[] }) {
  const navigation = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  // Filtra as notícias com base no termo de busca
  const filteredNoticias = noticias.filter(noticia =>
    noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="relative sm:rounded-lg">
        <div className='w-full lg:flex justify-between items-center mb-4'>
          <div className='relative lg:w-1/3 mb-4 lg:mb-0 ml-2'>
            <input
              type='text'
              placeholder='Procurar notícias'
              className='w-full h-12 rounded-md p-4'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)} // Atualiza o estado ao digitar
            />
            <button type='button' className='absolute right-4 top-3'>
              <img src='/img/icons/icon-search.svg' alt='Buscar' />
            </button>
          </div>
          <div className='lg:w-48 mr-2'>
            <ButtonPrimary
              onClick={() => navigation.push('/dashboard/noticias/cadastro')}
              full
              backgroundColor='bg-brand-blue'
            >
              Nova notícia
            </ButtonPrimary>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-50">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-1 py-3 text-center">
                ID
              </th>
              <th scope="col" className="px-1 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Título
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Imagem
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredNoticias.length > 0 ? (
              filteredNoticias.map((noticia: NoticiasProps) => (
                <tr key={noticia.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-1 py-3 text-center text-gray-700 whitespace-nowrap">
                    {noticia.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                    {noticia.ativo === 1 ? (
                      <span className='px-3 py-1 rounded-lg bg-brand-greenSecondary text-brand-white'>
                        Ativa
                      </span>
                    ) : (
                      <span className='px-3 py-1 rounded-lg bg-brand-red text-brand-white'>
                        Inativa
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                    {noticia.titulo.slice(0, 30) + (noticia.titulo.length > 30 ? "..." : "")}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                    <img src={'https://lojacosmopolita.com.br/img/temp/foto-exemplo.jpeg'} className='w-1/4 h-auto mx-auto rounded-lg' alt="" />
                  </td>
                  <td className="px-6 py-4 flex items-center gap-x-1 text-right">
                    <button onClick={() => navigation.push(`/dashboard/noticias/${noticia.id}`)} className="w-14 text-brand-gray-700 flex items-center cursor-pointer mx-1">
                      <img src="../img/icons/icon-edit.svg" alt="Ver" className="w-6 h-6" />
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-700">
                  Nenhuma notícia encontrada para o termo <b>{searchTerm}</b>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
