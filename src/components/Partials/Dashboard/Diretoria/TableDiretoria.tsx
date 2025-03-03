'use client'
import Link from 'next/link'
import { Loading } from '../../Loading'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import DiretoresProps from '@/hooks/useDiretoresProps'
import { getDiretores } from '@/services/prismicData/getDiretores'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { getDiretoresDetalhes } from '@/services/prismicData/getDiretoresDetalhes'
import { useCookies } from '@/stores/useCookies'

export default function TableDiretoria() {
  const navigation = useRouter()
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [listaDiretores, setListaDiretores] = useState<DiretoresProps[]>([])
  const { getCookie } = useCookies()
  const cargoAtual = getCookie('cargo')

  useEffect(() => {
    cargoAtual != 'mestre' && cargoAtual != 'secretario' ? navigation.push('/home') : null
  }, [cargoAtual, navigation])

  async function buscaDiretores() {
    setLoading(true)
    try {
      if (search.length < 0 || search === '') {
        const response = await getDiretores()
        setListaDiretores(response)
        setLoading(false)
      } else {
        const response = await getDiretoresDetalhes(search)
        setListaDiretores(response as any)
        setLoading(false)
      }
    } catch (error) {
      console.error('GET(dashboard) - Lista Diretores', error)
    }
  }

  useEffect(() => {
    buscaDiretores()
  }, [])

  return (
    <div>
      <div className="relative sm:rounded-lg">
        <div className='w-full lg:flex justify-between items-center mb-4'>
          <div className='relative lg:w-1/3 mb-4 lg:mb-0 ml-2'>
            <input onChange={(e: any) => setSearch(e.target.value)} type='text' placeholder='Procurar diretores' className='w-full h-12 rounded-md p-4' />
            <button type='button' onClick={buscaDiretores} className=''>
              <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
            </button>
          </div>
          <div className='lg:w-48 mr-2'>
            <ButtonPrimary onClick={() => navigation.push('/dashboard/diretores/cadastro')} full backgroundColor='bg-brand-blue'  >
              Novo diretor
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
          {loading &&
            <Loading />
          }
          <tbody className=''>
            {listaDiretores.length > 0 ? listaDiretores.map((diretor: DiretoresProps) => (
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
                  <img src={'https://lojacosmopolita.com.br/img/temp/presidente.png'} className='w-1/4 h-auto mx-auto rounded-lg' alt="" />
                </td>

                <td className="px-6 py-4 flex items-center gap-x-1 text-right">
                  <Link className="hover:underline text-sm text-blue-600" href={`/dashboard/diretores/${diretor.id}`}>
                    Ver
                  </Link>
                  <Link className="hover:underline text-sm text-yellow-600 ml-4" href={`/dashboard/diretores/edit/${diretor.id}`}>
                    Editar
                  </Link>
                </td>
              </tr>
            ))
              : (<tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-700">
                  Nenhum membro encontrado para o nome: <b>{search}</b>
                </td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
