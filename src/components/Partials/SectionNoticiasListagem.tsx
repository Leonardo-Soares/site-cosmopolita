'use client'
import React, { useState, useEffect } from 'react'
import { Container } from './Container'
import { CardNoticia } from '../Cards/CardNoticia'
import { getNoticias } from '@/services/prismicData/getNoticias'

export default function SectionNoticiasListagem() {
  const [noticias, setNoticias] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('recent')

  // Função para buscar e filtrar as notícias
  useEffect(() => {
    async function fetchNoticias() {
      const fetchedNoticias = await getNoticias()
      setNoticias(fetchedNoticias)
    }
    fetchNoticias()
  }, [])

  // Função para filtrar as notícias com base no termo de busca
  const filteredNoticias = noticias.filter((item) =>
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.resumo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Função para ordenar as notícias com base na opção selecionada
  const sortedNoticias = filteredNoticias.sort((a, b) => {
    if (sortOption === 'recent') {
      return new Date(b.data) - new Date(a.data) // Mais recentes primeiro
    } else {
      return new Date(a.data) - new Date(b.data) // Mais antigas primeiro
    }
  })

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
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label='Buscar notícias'
          />
          <button type='button' className='absolute right-4 top-3'>
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

      {/* Lista de notícias */}
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6'>
        {sortedNoticias.map((item) => (
          <CardNoticia
            id={item.id}
            key={item.id}
            data={item.data}
            imagem={item.imagem}
            titulo={item.titulo}
            sutitulo={item.resumo}
            categoria={item.categoria}
          />
        ))}
      </div>
    </Container>
  )
}
