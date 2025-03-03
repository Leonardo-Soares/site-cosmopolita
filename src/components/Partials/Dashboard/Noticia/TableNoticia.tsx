'use client'
import Link from 'next/link'
import { Loading } from '../../Loading'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import NoticiasProps from '@/hooks/useNoticiasProps'
import { getNoticias } from '@/services/prismicData/getNoticias'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { getNoticiasBusca } from '@/services/prismicData/getNoticiasBusca'
import { useCookies } from '@/stores/useCookies'

export default function TableNoticia() {
  const navigation = useRouter()
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredNoticias, setFilteredNoticias] = useState<NoticiasProps[]>([])
  const { getCookie } = useCookies()

  const cargoAtual = getCookie('cargo')

  useEffect(() => {
    cargoAtual != 'mestre' && cargoAtual != 'secretario' ? navigation.push('/home') : null
  }, [cargoAtual, navigation])


  async function buscaNoticia() {
    setLoading(true)
    if (searchTerm === '' && searchTerm.length <= 0) {
      const noticias = await getNoticias()
      setFilteredNoticias(noticias)
      setLoading(false)
      return;
    } else {
      const noticias = await getNoticiasBusca(searchTerm)
      setFilteredNoticias(noticias.data as any)
      setLoading(false)
    }
  }

  useEffect(() => {
    buscaNoticia()
  }, [])

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
            <button onClick={buscaNoticia} type='button' className='absolute right-4 top-3'>
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
                    <Link className="hover:underline text-sm text-blue-600" href={`/noticias/${noticia.id}`}>
                      Ver
                    </Link>
                    <Link className="hover:underline text-sm text-yellow-600 ml-4" href={`/dashboard/noticias/${noticia.id}`}>
                      Editar
                    </Link>
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
