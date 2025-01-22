'use client'
import toast from 'react-hot-toast'
import React, { useEffect, useState } from 'react'
import { api_v1 } from '@/services/axios'
import { useRouter } from 'next/navigation'
import InputFile from '@/components/Forms/InputFile'
import { TitleH4 } from '@/components/Texts/TitleH4'
import InputArea from '@/components/Forms/InputArea'
import DiretoresProps from '@/hooks/useDiretoresProps'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { useCookies } from '@/stores/useCookies'

export function FormDiretoriaEdit({ diretor }: { diretor: DiretoresProps }) {
  const navigation = useRouter()
  const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState(diretor.nome)
  const [cargo, setCargo] = useState(diretor.cargo)
  const [ano_fim, setAnoFim] = useState(diretor.ano_fim)
  const [descricao, setDescricao] = useState(diretor.descricao)
  const [ano_inicio, setAnoInicio] = useState(diretor.ano_inicio)
  const { getCookie } = useCookies()
  const cargoAtual = getCookie('cargo')

  useEffect(() => {
    cargoAtual != 'mestre' && cargoAtual != 'secretario' ? navigation.push('/home') : null
  }, [cargoAtual, navigation])

  async function atualizaNoticia() {
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
      const response = await api_v1.post(`/galeria/${diretor.id}`, formData)

      if (response.status === 201) {
        toast.success('Diretor atualizado com sucesso')
        navigation.back()
        return;
      } else {
        toast.error('Erro ao atualizar Diretor')
      }

    } catch (error: any) {
      console.error('Atualização de Diretor:', error)
      toast.error('Erro ao atualizar Diretor', error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <div className='p-5'>
      <InputPrimary
        name='title'
        title='Nome*'
        value={nome}
        placeholder='Digite o nome do diretor'
        onChange={(e: any) => setNome(e.target.value)}
      />
      <InputPrimary
        name='cargo'
        title='Cargo*'
        value={cargo}
        placeholder='Digite o cargo do diretor'
        onChange={(e: any) => setCargo(e.target.value)}
      />
      <InputArea
        name='descricao'
        title='Descrição*'
        value={descricao}
        placeholder='Digite a descrição do diretor'
        onChange={(e: any) => setDescricao(e.target.value)}
      />
      <InputPrimary
        type='date'
        name='ano_inicio'
        value={ano_inicio}
        title='Data início do cargo*'
        placeholder='Digite o ano de início do diretor'
        onChange={(e: any) => setAnoInicio(e.target.value)}
      />
      <InputPrimary
        name='ano_fim'
        type='date'
        value={ano_fim}
        title='Data fim do cargo*'
        placeholder='Digite o ano de fim do diretor'
        onChange={(e: any) => setAnoFim(e.target.value)}
      />

      <a rel="noopener noreferrer" className='w-1/2 h-auto block my-6'>
        <TitleH4 color='text-brand-dark'>Imagem atual</TitleH4>
        <img src={'https://lojacosmopolita.com.br/img/temp/foto-exemplo.jpeg'} className='w-full h-auto mx-auto rounded-lg mt-1' alt={diretor.nome} />
      </a>
      <InputFile
        type='image/png'
        name='file'
        title='Nova imagem*'
        placeholder='Selecione uma imagem'
      />
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={atualizaNoticia}>
          Atualizar Diretor
        </ButtonPrimary>
      </div>
    </div>
  )
}
