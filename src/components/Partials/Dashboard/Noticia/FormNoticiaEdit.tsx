'use client'
import toast from 'react-hot-toast'
import { api, api_v1 } from '@/services/axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import BannerProps from '@/hooks/useBannerProps'
import InputFile from '@/components/Forms/InputFile'
import { TitleH4 } from '@/components/Texts/TitleH4'
import NoticiasProps from '@/hooks/useNoticiasProps'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import InputArea from '@/components/Forms/InputArea'

export function FormNoticiaEdit({ noticia }: { noticia: NoticiasProps }) {
  const navigation = useRouter()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(noticia.data)
  const [titulo, setTitulo] = useState(noticia.titulo)
  const [resumo, setResumo] = useState(noticia.resumo)
  const [conteudo, setConteudo] = useState(noticia.conteudo)
  const [categoria, setCategoria] = useState(noticia.categoria)

  async function atualizaNoticia() {
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

    formData.append('titulo', titulo)
    formData.append('data', data)
    formData.append('titulo', titulo)
    formData.append('resumo', resumo)
    formData.append('conteudo', conteudo)
    formData.append('categoria', categoria)
    formData.append('autor', 'A∴ R∴ L∴ S∴ Cosmopolita n.° 2')
    formData.append('imagem', 'https://lojacosmopolita.com.br/img/temp/foto-exemplo.jpeg')
    // const fileInput = document.querySelector('input[type="file"]') as any
    // if (fileInput && fileInput.files && fileInput.files.length > 0) {
    //   formData.append('imagem', fileInput.files[0])
    // }

    // Para debugar o FormData
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }


    try {
      const response = await api_v1.post(`/noticias/${noticia.id}`, formData)

      if (response.status === 201) {
        toast.success('Notícia atualizada com sucesso')
        navigation.back()
        return;
      } else {
        toast.error('Erro ao atualizar Notícia')
      }

    } catch (error: any) {
      console.error('Atualização de notícia:', error)
      toast.error('Erro ao atualizar notícia', error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <div className='p-5'>
      <InputPrimary
        name='title'
        value={titulo}
        title='Título*'
        placeholder='Digite o título da notícia'
        onChange={(e: any) => setTitulo(e.target.value)}
      />
      <InputPrimary
        name='resumo'
        value={resumo}
        title='Resumo*'
        placeholder='Digite o resumo da notícia'
        onChange={(e: any) => setResumo(e.target.value)}
      />
      <InputArea
        name='conteudo'
        value={conteudo}
        title='Conteúdo*'
        placeholder='Digite o conteúdo da notícia'
        onChange={(e: any) => setConteudo(e.target.value)}
      />
      <InputPrimary
        name='data'
        value={data}
        type='date'
        title='Data*'
        placeholder='Digite a data da notícia'
        onChange={(e: any) => setData(e.target.value)}
      />
      <InputPrimary
        name='categoria'
        value={categoria}
        title='Categoria*'
        placeholder='Digite a categoria da notícia'
        onChange={(e: any) => setCategoria(e.target.value)}
      />

      <a href={noticia.imagem} target="_blank" rel="noopener noreferrer" className='w-1/2 h-auto block my-6'>
        <TitleH4 color='text-brand-dark'>Imagem atual</TitleH4>
        <img src={'https://lojacosmopolita.com.br/img/temp/foto-exemplo.jpeg'} className='w-full h-auto mx-auto rounded-lg mt-1' alt={noticia.titulo} />
      </a>
      <InputFile
        type='image/png'
        name='file'
        title='Nova imagem*'
        placeholder='Selecione uma imagem'
      />
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={atualizaNoticia}>
          Atualizar Notícia
        </ButtonPrimary>
      </div>
    </div>
  )
}
