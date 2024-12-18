'use client'
import React, { useState, useEffect } from 'react'
import { Container } from './Container'
import { CardNoticia } from '../Cards/CardNoticia'
import { getNoticias } from '@/services/prismicData/getNoticias'
import { getNoticiasBusca } from '@/services/prismicData/getNoticiasBusca'
import { Loading } from './Loading'

export default function SectionNoticiasListagem() {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [noticias, setNoticias] = useState<any[]>([])
  const [sortOption, setSortOption] = useState('recent')
  const [filteredNoticias, setFilteredNoticias] = useState<any[]>([])

  // Função para filtrar as notícias com base no termo de 
  async function filtraNoticias() {
    setLoading(true)
    if (searchTerm.length <= 0 || searchTerm === '') {
      const fetchedNoticias = await getNoticias()
      setFilteredNoticias(fetchedNoticias)
      setLoading(false)
      return;
    } else {
      const noticias = await getNoticiasBusca(searchTerm)
      setFilteredNoticias(noticias as any)
      setLoading(false)
      return;
    }
  }

  useEffect(() => {
    filtraNoticias()
  }, [])

  return (
    <Container>
      <div className='w-full lg:flex justify-between items-center'>
        {/* Filtro de busca */}
        <div className='relative lg:w-1/3 mb-4 lg:mb-0'>
          <input
            type='text'
            placeholder='Buscar notícia'
            className='w-full h-12 rounded-md p-4'
            value={searchTerm}
            aria-label='Buscar notícias'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='button' onClick={filtraNoticias} className='absolute right-4 top-3'>
            <img
              src='/img/icons/icon-search.svg'
              alt='Buscar'
              className='cursor-pointer'
            />
          </button>
        </div>

        {/* Filtro de ordenação */}
        <div className='block lg:flex items-center'>
          <p className='font-bold text-brand-gray-700 text-center lg:text-start'>
            Ordenar notícias
          </p>
          <select
            className='lg:w-48 w-full h-12 rounded-md lg:ml-2'
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            aria-label='Ordenar notícias'
          >
            <option value='recent'>Mais recentes</option>
            <option value='older'>Mais antigas</option>
          </select>
        </div>
      </div>

      {loading &&
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
          <div className='relative w-full h-52'>
            <Loading />
          </div>
          <div className='relative w-full h-52'>
            <Loading />
          </div>
          <div className='relative w-full h-52'>
            <Loading />
          </div>
        </div>
      }
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
        {!loading &&
          filteredNoticias.length > 0 ? filteredNoticias.map((item) => (
            <CardNoticia
              id={item.id}
              key={item.id}
              data={item.data}
              imagem={item.imagem}
              titulo={item.titulo}
              sutitulo={item.resumo}
              categoria={item.categoria}
            />
          ))
          : <div>
            {!loading &&
              searchTerm.length <= 0 || searchTerm === ''
              ?
              <p>Pesquise novamente clicando no ícone da lupa.</p>
              :
              <p>Nenhuma notícia encontrada para a pesquisa <b>{searchTerm}</b></p>

            }
          </div>
        }
      </div>
    </Container>
  )
}
