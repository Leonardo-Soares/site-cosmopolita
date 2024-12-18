'use client'
import { Container } from './Container'
import { CardDiretor } from '../Cards/CardDiretor'
import React, { useState, useEffect } from 'react'
import DiretoresProps from '@/hooks/useDiretoresProps'
import { getDiretores } from '@/services/prismicData/getDiretores'

export default function SectionPresidentesListagem() {
  const [diretores, setDiretores] = useState<DiretoresProps[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchDiretores = async () => {
      const data = await getDiretores()
      setDiretores(data)
    }
    fetchDiretores()
  }, [])

  const filteredDiretores = diretores.filter((diretor: any) =>
    diretor.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
      <div className="w-full lg:flex justify-between items-center">
        <div className="relative lg:w-1/3 mb-4 lg:mb-0">
          <input
            type="text"
            placeholder="Buscar Diretores"
            className="w-full h-12 rounded-md p-4"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="">
            <img
              src="/img/icons/icon-search.svg"
              alt="Buscar"
              className="absolute right-4 top-3"
            />
          </button>
        </div>
        {/* <div className="block lg:flex items-center">
          <p className="font-bold text-brand-gray-700 text-center lg:text-start">
            Ordenar por
          </p>
          <select
            className="lg:w-48 w-full h-12 rounded-md lg:ml-2"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="recent">Mais recentes</option>
            <option value="oldest">Mais antigos</option>
          </select>
        </div> */}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
        {filteredDiretores.map((item: DiretoresProps) => (
          <CardDiretor
            id={item.id}
            key={item.id}
            nome={item.nome}
            ano_fim={item.ano_fim}
            nome_cargo={item.cargo}
            descricao={item.descricao}
            ano_inicio={item.ano_inicio}
            foto_diretor={'../img/temp/presidente.png'}
          />
        ))}
      </div>
    </Container>
  )
}
