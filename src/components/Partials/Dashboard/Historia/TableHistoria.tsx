'use client'
import React, { useEffect, useState } from 'react'
import { Loading } from '../../Loading'
import { useRouter } from 'next/navigation'
import BannerProps from '@/hooks/useBannerProps'
import { getBanners } from '@/services/prismicData/getBanners'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import Link from 'next/link'
import { getBannersBusca } from '@/services/prismicData/getBannersBusca'
import HistoriaProps from '@/hooks/useHistoriaProps'
import { getHistorias } from '@/services/prismicData/getHistorias'
import formatDate from '@/hooks/useFormateData'
import { getHistoriaBusca } from '@/services/prismicData/getHistoriaBusca'

export function TableHistoria() {
  const navigation = useRouter()
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [listaHistoria, setListaHistoria] = useState<HistoriaProps[]>([])

  async function buscaHistoria() {
    setLoading(true)
    if (searchTerm === '' && searchTerm.length <= 0) {
      const historias = await getHistorias()
      setListaHistoria(historias)
      setLoading(false)
      return
    } else {
      const banners = await getHistoriaBusca(searchTerm) as any
      setListaHistoria(banners.data)
      setLoading(false)
      return
    }
  }

  useEffect(() => {
    buscaHistoria()
  }, [])

  return (
    <div>
      <div className="relative sm:rounded-lg">
        <div className='w-full lg:flex justify-between items-center mb-4'>
          <div className='relative lg:w-1/3 mb-4 lg:mb-0 ml-2'>
            <input type='text' onChange={e => setSearchTerm(e.target.value)} placeholder='Buscar história' className='w-full h-12 rounded-md p-4' />
            <button type='button' onClick={buscaHistoria} className=''>
              <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
            </button>
          </div>
          <div className='lg:w-48 mr-2'>
            <ButtonPrimary onClick={() => navigation.push('/dashboard/historia/cadastro')} full backgroundColor='bg-brand-blue'  >
              Criar história
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
                Data
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {loading &&
              <Loading />
            }
            {listaHistoria && listaHistoria.length > 0 ? listaHistoria.map((historia: HistoriaProps) => (
              <tr key={historia.id} className="bg-white border-b hover:bg-gray-50 ">
                <td className="px-1 py-3 text-center text-gray-700 whitespace-nowrap">
                  {historia.id}
                </td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  <span className='px-3 py-1 rounded-lg bg-brand-greenSecondary text-brand-white'>
                    Aivo
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  {historia.titulo.slice(0, 30) + (historia.titulo.length > 30 ? "..." : "")}
                </td>
                <td className="px-1 py-3 text-center text-gray-700 whitespace-nowrap">
                  {formatDate(historia.data)}
                </td>
                <td className="px-6 py-4 flex items-center gap-x-1 text-right">
                  <Link className="hover:underline text-sm text-yellow-600 ml-4" href={`/dashboard/historia/${historia.id}`}>
                    Editar
                  </Link>
                </td>
              </tr>
            )) : <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-gray-700">
                Nenhuma história foi encontrada para o termo <b>{searchTerm}</b>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
