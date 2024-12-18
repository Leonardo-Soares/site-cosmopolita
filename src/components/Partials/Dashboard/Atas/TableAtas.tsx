'use client'
import { api_v1 } from '@/services/axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { TitleH4 } from '@/components/Texts/TitleH4'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { FormAtasEdit } from './FormAtasEdit'
import AtasProp from '@/hooks/useAtasProps'
import { Loading } from '../../Loading'
import { getAtasDetalhes } from '@/services/prismicData/getAtasDetalhes'
import { getAtasBusca } from '@/services/prismicData/getAtasBusca'
import { getAtas } from '@/services/prismicData/getAtas'
import Link from 'next/link'

export function TableAtas() {
  const router = useRouter() as any
  const [busca, setBusca] = useState('')
  const [idAta, setIdAta] = useState('')
  const [nomeAta, setNomeAta] = useState('')
  const [loading, setLoading] = useState(true)
  const [modalView, setModalView] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [listaAtas, setListaAtas] = useState<AtasProp[]>([])

  function openModal(nome: string, id: any) {
    setNomeAta(nome)
    setIdAta(id.toString())
    setModalDelete(true)
  }

  async function openModalViewAta(id: any) {
    setIdAta(id.toString())
    setModalView(true)
  }

  async function openModalEdit(id: any) {
    setIdAta(id.toString())
    setModalEdit(true)
  }

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0') // Mês começa em 0
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  async function buscaAtas() {
    setLoading(true)
    try {
      if (busca.length > 0) {
        const response = await getAtasBusca(busca)
        setListaAtas(response as any)
      } else if (idAta.length > 0) {
        const response = await getAtasDetalhes(idAta)
        setListaAtas(response as any)
      } else {
        const response = await getAtas()
        console.log('response:', response);

        setListaAtas(response as any)
      }
    } catch (error: any) {
      console.error('GET(dashboard) - Lista Atas:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    buscaAtas()
  }, [])

  return (
    <div>
      {modalDelete && (
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
                <ButtonPrimary full backgroundColor='bg-red-800' onClick={() => setModalDelete(false)}>
                  Confirmar
                </ButtonPrimary>
                <ButtonPrimary full backgroundColor='transparent' color='text-brand-blue' onClick={() => setModalDelete(false)}>
                  Cancelar
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalView && (
        <div className='fixed top-0 left-0 flex-1 w-full h-full flex items-center justify-center bg-black/80 z-50'>
          <div className='relative w-[90%] bg-white border-2 border-brand-blue rounded-xl px-12 py-8'>
            <a onClick={() => setModalView(false)} className='absolute rounded-full text-white w-6 h-6 bg-red-800 items-center justify-center flex top-2 right-2 cursor-pointer'>
              x
            </a>
            <div className='mt-4'>
              {listaAtas && listaAtas.map((ata: AtasProp) => (
                ata.id.toString() === idAta && (
                  <div key={ata.id}>
                    <TitleH1 fontWeigth='400' alignment='text-center' color='text-brand-dark'>
                      <b>{ata.titulo}</b>
                    </TitleH1>
                    <div className='lg:flex gap-x-2 justify-center'>
                      <div className='bg-brand-gray-700 rounded-2xl text-center w-60 mx-auto lg:mx-0 py-1 mt-2'>
                        <span className='text-brand-white text-sm'>Data da Reunião: {formatDate(ata.data_reuniao)}</span>
                      </div>
                      <div className='bg-brand-gray-700 rounded-2xl text-center w-60 mx-auto lg:mx-0 py-1 mt-2'>
                        <span className='text-brand-white text-sm'>Data da Aprovação: {formatDate(ata.data_aprovacao)}</span>
                      </div>
                      <div className='bg-brand-gray-700 rounded-2xl text-center w-60 mx-auto lg:mx-0 py-1 mt-2'>
                        <span className='text-brand-white text-sm'>Data da Criação: {formatDate(ata.data_criacao)}</span>
                      </div>
                    </div>
                    <div>
                      <div className='w-72 mx-auto mt-4'>
                        <ButtonPrimary full backgroundColor='bg-brand-blue' onClick={() => window.open(ata.arquivo, '_blank')}>
                          Ata em arquivo PDF
                        </ButtonPrimary>
                      </div>
                    </div>
                    <TitleH4 color='text-brand-dark'>
                      Conteúdo da Ata
                    </TitleH4>
                    <div className='border-t border-brand-dark pt-4'>
                      <p>{ata.conteudo}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      )}
      {modalEdit && (
        <div className='fixed top-0 left-0 flex-1 w-full h-full flex items-center justify-center bg-black/80 z-50'>
          <div className='relative w-[90%] bg-white border-2 border-brand-blue rounded-xl px-12 py-8'>
            <a onClick={() => setModalEdit(false)} className='absolute rounded-full text-white w-6 h-6 bg-red-800 items-center justify-center flex top-2 right-2 cursor-pointer'>
              x
            </a>
            <div className='mt-4'>
              {listaAtas && listaAtas.map((ata: AtasProp) => (
                ata.id.toString() === idAta && (
                  <FormAtasEdit dados_ata={ata} id_ata={idAta} />
                )
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="relative sm:rounded-lg">
        <div className='w-full lg:flex justify-between items-center mb-4'>
          <div className='relative lg:w-1/3 mb-4 lg:mb-0 ml-2'>
            <input onChange={(e: any) => setBusca(e.target.value)} type='text' placeholder='Buscar ata' className='w-full h-12 rounded-md p-4' />
            <button type='button' onClick={buscaAtas} className=''>
              <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
            </button>
          </div>
          <div className='lg:w-48 mr-2'>
            <ButtonPrimary full backgroundColor='bg-brand-blue' onClick={() => router.push('/dashboard/atas/cadastro')}>
              Nova ata
            </ButtonPrimary>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-50">
          {loading &&
            <div>
              <Loading />
            </div>
          }
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
          {loading ? (
            <tbody>
              <tr>
                <td colSpan={6} className="text-center py-4">
                  Carregando...
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {listaAtas && listaAtas?.length > 0 ? (
                listaAtas.map((ata) => (
                  <tr key={ata.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-1 py-3 text-center text-gray-700 whitespace-nowrap">
                      {ata.id}
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                      {ata.titulo.slice(0, 30) + (ata.titulo.length > 30 ? '...' : '')}
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
                    <td className="px-6 py-4 text-gray-700">
                      <button onClick={() => openModalViewAta(ata.id)} className="hover:underline text-sm text-blue-600">Ver</button>
                      <button onClick={() => openModalEdit(ata.id)} className="hover:underline text-sm text-yellow-600 ml-4">Editar</button>
                      {/* <button onClick={() => openModal(ata.titulo, ata.id)} className="text-sm text-red-600 ml-4">Excluir</button> */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center text-gray-500 py-4">
                    Nenhuma ata encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}
