'use client'
import toast from 'react-hot-toast'
import { api } from '@/services/axios'
import React, { useEffect, useState } from 'react'
import BannerProps from '@/hooks/useBannerProps'
import { TitleH1 } from '@/components/Texts/TitleH1'
import InputFile from '@/components/Forms/InputFile'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { TitleH4 } from '@/components/Texts/TitleH4'
import { useRouter } from 'next/navigation'
import HistoriaProps from '@/hooks/useHistoriaProps'
import InputArea from '@/components/Forms/InputArea'
import formatDate from '@/hooks/useFormateData'
import SelectPrimary from '@/components/Forms/SelectPrimary'
import { useCookies } from '@/stores/useCookies'

export function FormHistoriaEdit({ dados_historia }: { dados_historia: HistoriaProps }) {
  const [loading, setLoading] = useState(false)
  const navigation = useRouter()
  const [data, setData] = useState(dados_historia.data)
  const [titulo, setTitulo] = useState(dados_historia.titulo)
  const [status, setStatus] = useState(dados_historia.status)
  const [descricao, setDescricao] = useState(dados_historia.descricao)
  const { getCookie } = useCookies()
  const cargoAtual = getCookie('cargo')

  useEffect(() => {
    cargoAtual != 'mestre' && cargoAtual != 'secretario' ? navigation.push('/home') : null
  }, [cargoAtual, navigation])

  async function atualizaBanner() {
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
    formData.append('status', status)

    // Para debugar o FormData
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }

    try {
      const response = await api.post(`/historia/${dados_historia.id}`, formData)

      if (response.status === 201) {
        toast.success('História atualizada com sucesso')
        navigation.back()
        return;
      } else {
        toast.error('Erro ao atualizar história')
      }

    } catch (error: any) {
      console.error('Cadastro de História:', error)
      toast.error('Erro ao cadastrar História', error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <div className='p-5'>
      <InputPrimary
        name='title'
        value={titulo}
        title='Título*'
        placeholder='Digite o título da história'
        onChange={(e: any) => setTitulo(e.target.value)}
      />
      <InputPrimary
        name='data'
        value={data}
        title='Data*'
        type='date'
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

      <div className='mb-3'>
        <p className='font-bold text-brand-dark text-center lg:text-start'>
          Selecione o status
        </p>
        <select
          className=' w-full h-12 rounded-xl'
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value={dados_historia.ativo}>{dados_historia.ativo === 1 ? 'Ativo' : 'Inativo'}</option>
          {dados_historia.ativo != 1 &&
            <option value='ativo'>Ativo</option>
          }
          {dados_historia.ativo != 0 &&
            <option value='inativo'>Inativo</option>
          }
        </select>
      </div>

      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={atualizaBanner}>
          Atualizar História
        </ButtonPrimary>
      </div>
    </div>
  )
}
