'use client'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary';
import { TitleH1 } from '@/components/Texts/TitleH1'
import { TitleH4 } from '@/components/Texts/TitleH4';
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const atas = [
  {
    id: 1,
    titulo: 'Ata Grau 1',
    data_criada: '12/02/2024',
    data_aprovada: '20/03/2024',
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    observacoes: 'Revisada pelo secretário e aprovada por unanimidade na sessão ordinária.',
  },
  {
    id: 2,
    titulo: 'Ata Grau 2',
    data_criada: '05/04/2024',
    data_aprovada: '15/05/2024',
    conteudo: 'Suspendisse potenti. Integer nec nisi a velit viverra aliquet ut non lectus.',
    observacoes: 'Incluídas sugestões da comissão de eventos antes da aprovação final.',
  },
  {
    id: 3,
    titulo: 'Ata Grau 3',
    data_criada: '10/06/2024',
    data_aprovada: '25/06/2024',
    conteudo: 'Curabitur convallis turpis sit amet sapien tempor, ac pulvinar arcu facilisis.',
    observacoes: 'Pendência de correção ortográfica solucionada antes da aprovação.',
  },
  {
    id: 4,
    titulo: 'Ata Grau 4',
    data_criada: '15/08/2024',
    data_aprovada: '30/08/2024',
    conteudo: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
    observacoes: 'Aprovação unânime registrada em sessão extraordinária.',
  },
];

export function TableAtas() {
  const router = useRouter()
  const [idAta, setIdAta] = useState(0)
  const [nomeAta, setNomeAta] = useState('')
  const [modalDelete, setModalDelete] = useState(false)

  function openModal(nome: string, id: number) {
    setNomeAta(nome)
    setIdAta(id)
    setModalDelete(true)
  }

  return (
    <div>
      {modalDelete &&
        <div className='fixed top-0 left-0 flex-1 w-full h-full flex items-center justify-center bg-black/80 z-50'>
          <div className='relative bg-white rounded-xl px-12 py-8'>
            <a onClick={() => setModalDelete(false)} className='absolute rounded-full text-white w-6 h-6 bg-red-800 items-center justify-center flex top-2 right-2 cursor-pointer'>
              x
            </a>

            <TitleH1 color='text-red-700' alignment='text-center' fontWeigth='400'>
              Exclusão de ata
            </TitleH1>

            <div className='mt-4'>
              <TitleH4 fontWeigth='400' color='text-brand-dark'>
                Deseja deletar a ata: <b>{nomeAta}</b> sendo seu identificador:<b>{idAta}</b>?
              </TitleH4>
              <div className='mt-4'>
                <ButtonPrimary full backgroundColor='bg-red-800' onClick={() => setModalDelete(false)} >
                  Confirmar
                </ButtonPrimary>
                <ButtonPrimary full backgroundColor='transparent' color='text-brand-blue' onClick={() => setModalDelete(false)} >
                  Cancelar
                </ButtonPrimary>
              </div>
            </div>

          </div>
        </div>
      }
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Título
              </th>
              <th scope="col" className="px-6 py-3">
                Data criada
              </th>
              <th scope="col" className="px-6 py-3">
                Data aprovada
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {atas && atas.map((ata) => (
              <tr key={ata.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap dark:text-white">
                  {ata.titulo}
                </td>
                <td className="px-6 py-4">
                  {ata.data_criada}
                </td>
                <td className="px-6 py-4">
                  {ata.data_aprovada}
                </td>
                <td className="px-6 py-4 flex items-center gap-x-1 text-right">
                  <a href="#" className=" text-brand-gray-700 flex items-center mx-1 dark:text-blue-500 hover:underline">
                    <img src="../img/icons/icon-eye.svg" alt="Ver" className="w-6 h-6" />
                    Ver
                  </a>
                  <a href="#" className=" text-brand-gray-700 flex items-center mx-1 dark:text-blue-500 hover:underline">
                    <img src="../img/icons/icon-edit.svg" alt="Ver" className="w-6 h-6" />
                    Editar
                  </a>
                  <a onClick={() => openModal(ata.titulo, ata.id)} className="cursor-pointer text-brand-gray-700 flex items-center mx-1 dark:text-blue-500 hover:underline">
                    <img src="../img/icons/icon-delete.svg" alt="Ver" className="w-6 h-6" />
                    Excluir
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
