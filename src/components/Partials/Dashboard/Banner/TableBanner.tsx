'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import BannerProps from '@/hooks/useBannerProps'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { FormBannerEdit } from './FormBannerEdit'
import Link from 'next/link'

export default function TableBanner(banners: any) {
  const navigation = useRouter()
  const [bannerId, setBannerId] = useState()
  const [modalEdit, setModalEdit] = useState(false)

  return (
    <div>
      <div className="relative sm:rounded-lg">
        <div className='w-full lg:flex justify-between items-center mb-4'>
          <div className='relative lg:w-1/3 mb-4 lg:mb-0 ml-2'>
            <input type='text' placeholder='Buscar banner' className='w-full h-12 rounded-md p-4' />
            <button type='button' className=''>
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
          {/* {loading &&
          <Loading />
        } */}
          <tbody className=''>
            {banners && banners.banners.map((banner: BannerProps) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
