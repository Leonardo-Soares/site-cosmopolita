'use client'
import toast from 'react-hot-toast'
import { api } from '@/services/axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import InputArea from '@/components/Forms/InputArea'
import InputFile from '@/components/Forms/InputFile'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { Loading } from '../../Loading'

export function FormAtas() {
  const navigate = useRouter()
  const [title, setTitle] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [loading, setLoading] = useState(false)
  const [observacao, setObservacao] = useState('')
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

    const formData = new FormData() as any

    formData.append('titulo', title)
    formData.append('conteudo', conteudo)
    formData.append('data_reuniao', datareuniao)
    formData.append('data_aprovacao', dataaprovada)
    formData.append('data_criacao', new Date().toISOString().split('T')[0])
    formData.append('observacao', observacao.length <= 0 ? 'sem observação' : observacao)
    const fileInput = document.querySelector('input[type="file"]') as any
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append('arquivo', fileInput.files[0])
    }

    try {
      const response = await api.post('/atas', formData)

      if (response.status === 201) {
        toast.success('Ata cadastrada com sucesso')
        navigate.back()
      } else {
        toast.error('Erro ao cadastrar a ata', response.data.message)
      }
    } catch (error: any) {
      console.error('Cadastro de Ata:', error)
      toast.error('Erro ao cadastrar a ata', error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <div className='p-5 '>
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
      <InputArea
        name='observacao'
        title='Observação'
        value={observacao ?? 'Sem observação'}
        placeholder='Informe alguma observação relevante sobre a ata'
        onChange={(e: any) => setObservacao(e.target.value)}
      />
      <InputFile
        name='file'
        title='Anexar novo arquivo*'
        placeholder='Selecione um arquivo'
      />
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={postAta}>
          Cadastrar ata
        </ButtonPrimary>
      </div>
    </div>
  )
}
