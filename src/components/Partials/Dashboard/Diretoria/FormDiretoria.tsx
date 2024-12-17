'use client'
import toast from 'react-hot-toast'
import React, { useState } from 'react'
import { api_v1 } from '@/services/axios'
import { useRouter } from 'next/navigation'
import InputFile from '@/components/Forms/InputFile'
import InputArea from '@/components/Forms/InputArea'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export function FormDiretoria() {
  const navigate = useRouter()
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [ano_fim, setAnoFim] = useState('')
  const [loading, setLoading] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [ano_inicio, setAnoInicio] = useState('')

  async function validaNoticia() {
    if (!nome) {
      toast.error('O campo Nome da diretoria é obrigatório')
      return;
    }
    if (!cargo) {
      toast.error('O campo Cargo da diretoria é obrigatório')
      return;
    }
    if (!ano_fim) {
      toast.error('O campo Ano de fim da diretoria é obrigatório')
      return;
    }
    if (!ano_inicio) {
      toast.error('O campo Ano de início da diretoria é obrigatório')
      return;
    }
    if (!descricao) {
      toast.error('O campo Descrição da diretoria é obrigatório')
      return;
    }


    setLoading(true)

    const formData = new FormData() as any
    formData.append('nome', nome)
    formData.append('cargo', cargo)
    formData.append('ano_fim', ano_fim)
    formData.append('descricao', descricao)
    formData.append('ano_inicio', ano_inicio)
    // const fileInput = document.querySelector('input[type="file"]') as any
    // if (fileInput && fileInput.files && fileInput.files.length > 0) {
    //   formData.append('imagem', fileInput.files[0])
    // }

    try {
      const data = await api_v1.post(`/galeria`, formData)
      if (data.status === 201) {
        toast.success('Diretor cadastrado com sucesso')
        navigate.back()
        return;
      } else {
        toast.error('Erro ao cadastrar Diretor')
        return;
      }
    } catch (error: any) {
      toast.error('Erro ao cadastrar Diretor')
      console.error('POST - Cadastro de Diretor:', error.response);
    }
    setLoading(false)
  }

  return (
    <div className='p-5 '>
      <InputPrimary
        name='title'
        title='Nome*'
        placeholder='Digite o nome do diretor'
        onChange={(e: any) => setNome(e.target.value)}
      />
      <InputPrimary
        name='cargo'
        title='Cargo*'
        placeholder='Digite o cargo do diretor'
        onChange={(e: any) => setCargo(e.target.value)}
      />
      <InputArea
        name='descricao'
        title='Descrição*'
        placeholder='Digite a descrição do diretor'
        onChange={(e: any) => setDescricao(e.target.value)}
      />
      <InputPrimary
        name='ano_inicio'
        type='date'
        title='Data início do cargo*'
        placeholder='Digite o ano de início do diretor'
        onChange={(e: any) => setAnoInicio(e.target.value)}
      />
      <InputPrimary
        name='ano_fim'
        type='date'
        title='Data fim do cargo*'
        placeholder='Digite o ano de fim do diretor'
        onChange={(e: any) => setAnoFim(e.target.value)}
      />

      <InputFile
        name='file'
        type='image/png'
        title='Anexar imagem do tipo .png*'
        placeholder='Selecione uma imagem (.png)'
      />
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={validaNoticia}>
          Cadastrar Diretor
        </ButtonPrimary>
      </div>
    </div>
  )
}
