'use client'
import { api_v1 } from '@/services/axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { TitleH4 } from '@/components/Texts/TitleH4'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

interface AtasProp {
  id: number
  ativo: number
  titulo: string
  arquivo: string
  conteudo: string
  observacao: string
  data_criacao: string
  data_reuniao: string
  data_aprovacao: string
}

export function TableAtas() {
  const router = useRouter()
  const [idAta, setIdAta] = useState(0)
  const [busca, setBusca] = useState('')
  const [nomeAta, setNomeAta] = useState('')
  const [modalDelete, setModalDelete] = useState(false)
  const [listaAtas, setListaAtas] = useState<AtasProp[]>([])

  function openModal(nome: string, id: number) {
    setNomeAta(nome)
    setIdAta(id)
    setModalDelete(true)
  }

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  async function getAtas() {
    try {
      const response = await api_v1.get(`/atas/show?conteudo=${busca}`)
      setListaAtas(response.data.data)
    } catch (error: any) {
      console.error('GET - Lista Atas:', error)
    }
  }

  useEffect(() => {
    getAtas()
  }, [])

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
                Deseja deletar a ata: <b>{nomeAta}</b> sendo seu código:<b>{idAta}</b> ?
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
      <div className="relative overflow-x-auto sm:rounded-lg">
        <div className='w-full lg:flex justify-between items-center mb-4'>
          <div className='relative lg:w-1/3 mb-4 lg:mb-0 ml-2'>
            <input onChange={(e: any) => setBusca(e.target.value)} type='text' placeholder='Buscar ata' className='w-full h-12 rounded-md p-4' />
            <button type='button' onClick={getAtas} className=''>
              <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
            </button>
          </div>
          <div className='lg:w-48 mr-2'>
            <ButtonPrimary full backgroundColor='bg-brand-blue' onClick={() => router.push('/dashboard/atas/cadastro')} >
              Nova ata
            </ButtonPrimary>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-50">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-1 py-3 text-center">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Título
              </th>
              <th scope="col" className="px-3 py-3 text-center">
                Data criada
              </th>
              <th scope="col" className="px-3 py-3 text-center">
                Data aprovada
              </th>
              <th scope="col" className="px-3 py-3 text-center">
                Data reunião
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {listaAtas && listaAtas.map((ata: AtasProp) => (
              <tr key={ata.id} className="bg-white border-b hover:bg-gray-50 ">
                <td className="px-1 py-3 text-center text-gray-700 whitespace-nowrap">
                  {ata.id}
                </td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  {ata.titulo.slice(0, 30 - 1) + (ata.titulo.length > 30 ? "..." : "")}
                </td>
                <td className="px-3 py-4 text-gray-700 text-center">
                  {formatDate(ata.data_criacao)}
                </td>
                <td className="px-3 py-4 text-gray-700 text-center">
                  {formatDate(ata.data_aprovacao)}
                </td>
                <td className="px-3 py-4 text-gray-700 text-center">
                  {formatDate(ata.data_reuniao)}
                </td>
                <td className="px-6 py-4 flex items-center gap-x-1 text-right">
                  <a onClick={() => router.push(`/dashboard/atas/view/${ata.id}`)} className="w-12 cursor-pointer text-brand-gray-700 flex items-center mx-1">
                    <img src="../img/icons/icon-eye.svg" alt="Ver" className="w-6 h-6" />
                    Ver
                  </a>
                  <a onClick={() => router.push(`/dashboard/atas/edit/${ata.id}`)} className="w-14 text-brand-gray-700 flex items-center cursor-pointer mx-1">
                    <img src="../img/icons/icon-edit.svg" alt="Ver" className="w-6 h-6" />
                    Editar
                  </a>
                  <a onClick={() => openModal(ata.titulo, ata.id)} className="w-14 cursor-pointer text-brand-gray-700 flex items-center mx-1">
                    <img src="../img/icons/icon-delete.svg" alt="Ver" className="w-6 h-6" />
                    Excluir
                  </a>
                </td>
              </tr>
            ))}
            {listaAtas.length <= 0 &&
              <tr>
                <td colSpan={6} className='text-center text-brand-dark py-4'>
                  Nenhuma Ata encontrada para o termo: <b>{busca}</b>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
