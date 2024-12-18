'use client'
import React, { useEffect, useState } from 'react'
import { Loading } from '../../Loading'
import { useRouter } from 'next/navigation'
import BannerProps from '@/hooks/useBannerProps'
import { getBanners } from '@/services/prismicData/getBanners'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import Link from 'next/link'
import { getBannersBusca } from '@/services/prismicData/getBannersBusca'

export function TableBanner() {
  const navigation = useRouter()
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [listaBanners, setListaBanners] = useState<BannerProps[]>([])

  async function buscaBanner() {
    setLoading(true)
    if (searchTerm === '' && searchTerm.length <= 0) {
      const banners = await getBanners()
      setListaBanners(banners)
      setLoading(false)
      return
    } else {
      const banners = await getBannersBusca(searchTerm) as any
      setListaBanners(banners.data)
      setLoading(false)
      return
    }
  }

  useEffect(() => {
    buscaBanner()
  }, [])

  return (
    <div>
      <div className="relative sm:rounded-lg">
        <div className='w-full lg:flex justify-between items-center mb-4'>
          <div className='relative lg:w-1/3 mb-4 lg:mb-0 ml-2'>
            <input type='text' onChange={e => setSearchTerm(e.target.value)} placeholder='Buscar banner' className='w-full h-12 rounded-md p-4' />
            <button type='button' onClick={buscaBanner} className=''>
              <img src='/img/icons/icon-search.svg' alt='Buscar' className='absolute right-4 top-3' />
            </button>
          </div>
          <div className='lg:w-48 mr-2'>
            <ButtonPrimary onClick={() => navigation.push('/dashboard/banner/cadastro')} full backgroundColor='bg-brand-blue'  >
              Nova banner
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
                Link
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Imagem
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
            {listaBanners.length > 0 ? listaBanners.map((banner: BannerProps) => (
              <tr key={banner.id} className="bg-white border-b hover:bg-gray-50 ">
                <td className="px-1 py-3 text-center text-gray-700 whitespace-nowrap">
                  {banner.id}
                </td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  <span className='px-3 py-1 rounded-lg bg-brand-greenSecondary text-brand-white'>
                    Aivo
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  {banner.titulo.slice(0, 30) + (banner.titulo.length > 30 ? "..." : "")}
                </td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  <a href={banner.link} target="_blank" rel="noopener noreferrer">
                    {banner.link}
                  </a>
                </td>
                <td className="px-6 py-4 text-gray-700 text-center whitespace-nowrap">
                  <img src={banner.imagem} className='w-1/4 h-auto mx-auto' alt="" />
                </td>

                <td className="px-6 py-4 flex items-center gap-x-1 text-right">
                  <Link className="hover:underline text-sm text-yellow-600 ml-4" href={`/dashboard/banner/${banner.id}`}>
                    Editar
                  </Link>
                </td>
              </tr>
            )) : <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-gray-700">
                Nenhum banner encontrado para o termo <b>{searchTerm}</b>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
