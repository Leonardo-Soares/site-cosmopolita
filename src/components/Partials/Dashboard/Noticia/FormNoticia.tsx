'use client'
import toast from 'react-hot-toast'
import React, { useState } from 'react'
import { api_v1 } from '@/services/axios'
import { useRouter } from 'next/navigation'
import InputFile from '@/components/Forms/InputFile'
import InputArea from '@/components/Forms/InputArea'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export function FormNoticia() {
  const navigate = useRouter()
  const [data, setData] = useState('')
  const [titulo, setTitle] = useState('')
  const [resumo, setResumo] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [loading, setLoading] = useState(false)
  const [categoria, setCategoria] = useState('')

  async function validaNoticia() {
    if (!titulo) {
      toast.error('O campo Título da notícia é obrigatório')
      return;
    }
    if (!resumo) {
      toast.error('O campo Resumo da notícia é obrigatório')
      return;
    }
    if (!conteudo) {
      toast.error('O campo Conteúdo da notícia é obrigatório')
      return;
    }
    if (!data) {
      toast.error('O campo Data da notícia é obrigatório')
      return;
    }
    if (!categoria) {
      toast.error('O campo Categoria da notícia é obrigatório')
      return;
    }

    setLoading(true)

    const formData = new FormData() as any
    formData.append('data', data)
    formData.append('titulo', titulo)
    formData.append('resumo', resumo)
    formData.append('conteudo', conteudo)
    formData.append('categoria', categoria)
    formData.append('autor', 'A∴ R∴ L∴ S∴ Cosmopolita n.° 2')
    const fileInput = document.querySelector('input[type="file"]') as any
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append('imagem', fileInput.files[0])
    }

    try {
      const data = await api_v1.post(`/noticias`, formData)
      if (data.status === 201) {
        toast.success('Notícia cadastrada com sucesso')
        navigate.back()
        return;
      } else {
        toast.error('Erro ao cadastrar notícia')
        return;
      }
    } catch (error: any) {
      toast.error('Erro ao cadastrar notícia')
      console.error('POST - Cadastro de notícia:', error.response);
    }
    setLoading(false)
  }

  return (
    <div className='p-5 '>
      <InputPrimary
        name='title'
        title='Título*'
        placeholder='Digite o título da notícia'
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <InputPrimary
        name='resumo'
        title='Resumo*'
        placeholder='Digite o resumo da notícia'
        onChange={(e: any) => setResumo(e.target.value)}
      />
      <InputArea
        name='conteudo'
        title='Conteúdo*'
        placeholder='Digite o conteúdo da notícia'
        onChange={(e: any) => setConteudo(e.target.value)}
      />
      <InputPrimary
        name='data'
        type='date'
        title='Data*'
        placeholder='Digite a data da notícia'
        onChange={(e: any) => setData(e.target.value)}
      />
      <InputPrimary
        name='categoria'
        title='Categoria*'
        placeholder='Digite a categoria da notícia'
        onChange={(e: any) => setCategoria(e.target.value)}
      />
      <InputFile
        name='file'
        type='image/png'
        title='Anexar imagem do tipo .png*'
        placeholder='Selecione uma imagem (.png)'
      />
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={validaNoticia}>
          Cadastrar notícia
        </ButtonPrimary>
      </div>
    </div>
  )
}
