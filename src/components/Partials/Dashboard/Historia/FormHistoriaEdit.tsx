'use client'
import toast from 'react-hot-toast'
import { api } from '@/services/axios'
import React, { useState } from 'react'
import BannerProps from '@/hooks/useBannerProps'
import { TitleH1 } from '@/components/Texts/TitleH1'
import InputFile from '@/components/Forms/InputFile'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { TitleH4 } from '@/components/Texts/TitleH4'
import { useRouter } from 'next/navigation'

export function FormHistoriaEdit({ dados_banner }: { dados_banner: BannerProps }) {
  const [loading, setLoading] = useState(false)
  const navigation = useRouter()
  const [link, setLink] = useState(dados_banner.link)
  const [titulo, setTitulo] = useState(dados_banner.titulo)
  const [subtitulo, setSubtitulo] = useState(dados_banner.subtitulo)

  async function atualizaBanner() {
    if (!titulo) {
      toast.error('O campo Título da ata é obrigatório')
      return;
    }
    if (!subtitulo) {
      toast.error('O campo Subtítulo da ata é obrigatório')
      return;
    }
    if (!link) {
      toast.error('O campo Link da ata é obrigatório')
      return;
    }

    setLoading(true)

    const formData = new FormData() as any

    formData.append('titulo', titulo)
    formData.append('subitulo', subtitulo)
    formData.append('link', link)
    const fileInput = document.querySelector('input[type="file"]') as any
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append('imagem', fileInput.files[0])
    }

    // Para debugar o FormData
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }


    try {
      const response = await api.post(`/banner/${dados_banner.id}`, formData)

      if (response.status === 201) {
        toast.success('Banner atualizada com sucesso')
        navigation.back()
        return;
      } else {
        toast.error('Erro ao atualizar banner')
      }

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
        value={titulo}
        title='Título*'
        placeholder='Digite o título do banner'
        onChange={(e: any) => setTitulo(e.target.value)}
      />
      <InputPrimary
        name='title'
        value={subtitulo}
        title='Subtítulo*'
        placeholder='Digite o subtítulo do banner'
        onChange={(e: any) => setSubtitulo(e.target.value)}
      />
      <InputPrimary
        name='link'
        title='Link*'
        value={link}
        placeholder='Digite o link do banner'
        onChange={(e: any) => setLink(e.target.value)}
      />

      <a href={dados_banner.imagem} target="_blank" rel="noopener noreferrer" className='w-1/2 h-auto block my-6'>
        <TitleH4 color='text-brand-dark'>Imagem atual</TitleH4>
        <img src={dados_banner.imagem} className='w-full h-auto mx-auto rounded-lg mt-1' alt={dados_banner.titulo} />
      </a>
      <InputFile
        type='image/png'
        name='file'
        title='Nova imagem*'
        placeholder='Selecione uma imagem'
      />
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={atualizaBanner}>
          Atualizar História
        </ButtonPrimary>
      </div>
    </div>
  )
}
