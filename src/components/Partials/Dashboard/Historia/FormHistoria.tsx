'use client'
import toast from 'react-hot-toast'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { api, api_v1 } from '@/services/axios'
import InputArea from '@/components/Forms/InputArea'
import InputFile from '@/components/Forms/InputFile'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export function FormHistoria() {
  const navigate = useRouter()
  const [link, setLink] = useState('')
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [loading, setLoading] = useState(false)

  async function validaBanner() {
    if (!title) {
      toast.error('O campo Título do banner é obrigatório')
      return;
    }
    if (!subTitle) {
      toast.error('O campo Subtítulo do banner é obrigatório')
      return;
    }

    setLoading(true)

    const formData = new FormData() as any
    formData.append('titulo', title)
    formData.append('subtitulo', subTitle)
    formData.append('link', link)
    const fileInput = document.querySelector('input[type="file"]') as any
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append('imagem', fileInput.files[0])
    }

    // console.log('formData:', formData.get('titulo'), formData.get('subtitulo'), formData.get('link'), formData.get('imagem'))


    try {
      const data = await api_v1.post(`/banner`, formData)
      if (data.status === 201) {
        toast.success('Banner cadastrado com sucesso')
        navigate.back()
        return;
      } else {
        toast.error('Erro ao cadastrar banner')
        return;
      }
    } catch (error: any) {
      toast.error('Erro ao cadastrar banner')
      console.error('POST - Cadastro de banner:', error.response);
    }
    setLoading(false)
  }

  return (
    <div className='p-5 '>
      <InputPrimary
        name='title'
        title='Título*'
        placeholder='Digite o título do história'
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <InputPrimary
        name='subtitle'
        title='Subtítulo*'
        placeholder='Digite o subtítulo do história'
        onChange={(e: any) => setSubTitle(e.target.value)}
      />
      <InputPrimary
        name='link'
        title='Link*'
        placeholder='Digite o Link do história'
        onChange={(e: any) => setLink(e.target.value)}
      />
      <InputFile
        name='file'
        type='image/png'
        title='Anexar imagem do tipo .png*'
        placeholder='Selecione uma imagem (.png)'
      />
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={validaBanner}>
          Cadastrar banner
        </ButtonPrimary>
      </div>
    </div>
  )
}
