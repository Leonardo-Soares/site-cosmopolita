'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import DiretoresProps from '@/hooks/useDiretoresProps'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { dir } from 'console'

export default function TableObreiro({ diretores }: { diretores: DiretoresProps[] }) {
  const navigation = useRouter()
  const [bannerId, setBannerId] = useState()
  const [modalEdit, setModalEdit] = useState(false)

  return (
    <div>
      <div className="relative sm:rounded-lg">
        <div className='w-full lg:flex justify-between items-center mb-4'>
          <div className='relative lg:w-1/3 mb-4 lg:mb-0 ml-2'>
            <input type='text' placeholder='Procurar obreiros' className='w-full h-12 rounded-md p-4' />
            <button type='button' className=''>
              <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
            </button>
          </div>
          <div className='lg:w-48 mr-2'>
            <ButtonPrimary onClick={() => navigation.push('/dashboard/obreiro/cadastro')} full backgroundColor='bg-brand-blue'  >
              Novo obreiro
            </ButtonPrimary>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-50">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-1 py-3 text-center">
                ID
              </th>
              <th scope="col" className="px-1 py-3 text-center">
                Status
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Nome
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Grau
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Imagem
              </th>

              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          {/* {loading &&
          <Loading />
        } */}
          <tbody className=''>
            {diretores && diretores.map((diretor: DiretoresProps) => (
              <tr key={diretor.id} className="bg-white border-b hover:bg-gray-50 ">
                <td className="px-1 py-3 text-center text-gray-700 whitespace-nowrap">
                  {diretor.id}
                </td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  {diretor.ativo === 1 ?
                    <span className='px-3 py-1 rounded-lg bg-brand-greenSecondary text-brand-white'>
                      Ativa
                    </span>
                    :
                    <span className='px-3 py-1 rounded-lg bg-brand-red text-brand-white'>
                      Inativa
                    </span>
                  }
                </td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  {diretor.nome.slice(0, 30) + (diretor.nome.length > 30 ? "..." : "")}
                </td>

                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  {diretor.nome}
                </td>

                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  <img src={'https://lojacosmopolita.com.br/img/temp/presidente.png'} className='w-1/4 h-auto mx-auto rounded-lg' alt="" />
                </td>

                <td className="px-6 py-4 flex items-center gap-x-1 text-right">
                  <button onClick={() => navigation.push(`/dashboard/obreiro/${diretor.id}`)} className="w-14 text-brand-gray-700 flex items-center cursor-pointer mx-1">
                    <img src="../img/icons/icon-eye.svg" alt="Ver" className="w-6 h-6" />
                    Ver
                  </button>
                  <button onClick={() => navigation.push(`/dashboard/obreiro/edit/${diretor.id}`)} className="w-14 text-brand-gray-700 flex items-center cursor-pointer mx-1">
                    <img src="../img/icons/icon-edit.svg" alt="Ver" className="w-6 h-6" />
                    Editar
                  </button>
                  {/* <a onClick={() => openModal(ata.titulo, ata.id)} className="w-14 cursor-pointer text-brand-gray-700 flex items-center mx-1">
                        <img src="../img/icons/icon-delete.svg" alt="Ver" className="w-6 h-6" />
                        Excluir
                      </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
