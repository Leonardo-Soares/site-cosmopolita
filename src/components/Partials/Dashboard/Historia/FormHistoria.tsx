'use client'
import toast from 'react-hot-toast'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { api, api_v1 } from '@/services/axios'
import InputArea from '@/components/Forms/InputArea'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import formatDate from '@/hooks/useFormateData'

export function FormHistoria() {
  const navigate = useRouter()
  const [titulo, setTitulo] = useState('')
  const [loading, setLoading] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [data, setData] = useState(new Date().toISOString().split('T')[0])

  async function validaBanner() {
    if (!titulo) {
      toast.error('O campo Título é obrigatório')
      return;
    }
    if (!data) {
      toast.error('O campo Data é obrigatório')
      return;
    }
    if (!descricao) {
      toast.error('O campo Descrição é obrigatório')
      return;
    }

    setLoading(true)

    const formData = new FormData() as any
    formData.append('titulo', titulo)
    formData.append('descricao', descricao)
    formData.append('data', data)

    try {
      const data = await api_v1.post(`/historia`, formData)
      if (data.status === 201) {
        toast.success('História cadastrado com sucesso')
        navigate.back()
        return;
      } else {
        toast.error('Erro ao cadastrar História')
        return;
      }
    } catch (error: any) {
      toast.error('Erro ao cadastrar História')
      console.error('POST - Cadastro de História:', error.response);
    }
    setLoading(false)
  }

  return (
    <div className='p-5 '>
      <InputPrimary
        name='title'
        value={titulo}
        title='Título*'
        placeholder='Digite o título da história'
        onChange={(e: any) => setTitulo(e.target.value)}
      />
      <InputPrimary
        name='data'
        value={formatDate(data)}
        title='Data*'
        placeholder='Digite a data da história'
        onChange={(e: any) => setData(e.target.value)}
      />
      <InputArea
        name='descricao'
        value={descricao}
        title='Descrição*'
        placeholder='Digite a descrição da história'
        onChange={(e: any) => setDescricao(e.target.value)}
      />
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={validaBanner}>
          Cadastrar história
        </ButtonPrimary>
      </div>
    </div>
  )
}
