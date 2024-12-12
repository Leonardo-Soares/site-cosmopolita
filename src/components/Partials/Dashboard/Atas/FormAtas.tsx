'use client'
import toast from 'react-hot-toast'
import { api } from '@/services/axios'
import React, { useState } from 'react'
import InputArea from '@/components/Forms/InputArea'
import { TitleH1 } from '@/components/Texts/TitleH1'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { ButtonBack } from '../ButtonBack'

export function FormAtas() {
  const [title, setTitle] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [loading, setLoading] = useState(false)
  const [datareuniao, setDataReuniao] = useState('')
  const [dataaprovada, setDataAprovada] = useState('')

  async function postAta() {
    if (!title) {
      toast.error('O campo Título da ata é obrigatório')
      return;
    }
    if (!dataaprovada) {
      toast.error('O campo Data da aprovação é obrigatório')
      return;
    }
    if (!datareuniao) {
      toast.error('O campo Data da reunião é obrigatório')
      return;
    }
    if (!conteudo) {
      toast.error('O campo Conteúdo da ata é obrigatório')
      return;
    }

    setLoading(true)
    const formData = {
      title: title,
      conteudo: conteudo,
      datareuniao: datareuniao,
      dataaprovada: dataaprovada,
    }

    try {
      const response = await api.post('/atas', formData)
    } catch (error: any) {
      console.error('Cadastro de Ata:', error)
      toast.error('Erro ao cadastrar a ata', error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <div className='p-5'>
      <InputPrimary
        name='title'
        title='Título*'
        placeholder='Digite o título da ata'
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <InputPrimary
        type='date'
        placeholder=''
        name='datareuniao'
        title='Data da Reunião*'
        onChange={(e: any) => setDataReuniao(e.target.value)}
      />
      <InputPrimary
        type='date'
        placeholder=''
        name='dataaprovada'
        title='Data da Aprovação*'
        onChange={(e: any) => setDataAprovada(e.target.value)}
      />
      <InputArea
        name='conteudo'
        title='Conteúdo*'
        placeholder='Digite o conteúdo da ata'
        onChange={(e: any) => setConteudo(e.target.value)}
      />
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={postAta}>
          Cadastrar ata
        </ButtonPrimary>
      </div>
    </div>
  )
}
