'use client'
import toast from 'react-hot-toast'
import { api } from '@/services/axios'
import React, { useState } from 'react'
import AtasProp from '@/hooks/useAtasProps'
import InputArea from '@/components/Forms/InputArea'
import { TitleH1 } from '@/components/Texts/TitleH1'
import InputFile from '@/components/Forms/InputFile'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export function FormAtasEdit({ id_ata, dados_ata }: { dados_ata: AtasProp, id_ata: any }) {
  const [loading, setLoading] = useState(false)
  const [ativo, setAtivo] = useState(dados_ata.ativo)
  const [title, setTitle] = useState(dados_ata.titulo)
  const [conteudo, setConteudo] = useState(dados_ata.conteudo)
  const [datareuniao, setDataReuniao] = useState(dados_ata.data_reuniao)
  const [dataaprovada, setDataAprovada] = useState(dados_ata.data_aprovacao)
  const [observacao, setObservacao] = useState(dados_ata.observacao ?? 'sem observação')

  async function putAta() {
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

    formData.append('ativo', ativo)
    formData.append('titulo', title)
    formData.append('conteudo', conteudo)
    formData.append('data_reuniao', datareuniao)
    formData.append('data_aprovacao', dataaprovada)
    formData.append('observacao', observacao.length <= 0 ? 'sem observação' : observacao)
    const fileInput = document.querySelector('input[type="file"]') as any
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      formData.append('arquivo', fileInput.files[0])
    }

    // Para debugar o FormData
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }


    try {
      const response = await api.post(`/atas/${dados_ata.id}`, formData)
      console.log('response:', response.status);

      if (response.status === 201) {
        toast.success('Ata atualizada com sucesso')
        window.location.reload()
      } else {
        toast.error('Erro ao atualizar a ata')
      }

    } catch (error: any) {
      console.error('Cadastro de Ata:', error)
      toast.error('Erro ao cadastrar a ata', error.response.data.message)
    }
    setLoading(false)
  }

  return (
    <div className='p-5'>
      <div className='py-3'>
        <TitleH1 alignment='text-center' color='text-brand-blue'>Edição da Ata: {dados_ata.titulo}</TitleH1>
      </div>
      <div className="px-2 py-2 max-h-[400px] overflow-auto">
        <InputPrimary
          name='title'
          value={title}
          title='Título*'
          placeholder='Digite o título da ata'
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <InputPrimary
          type='date'
          placeholder=''
          name='datareuniao'
          value={datareuniao}
          title='Data da Reunião*'
          onChange={(e: any) => setDataReuniao(e.target.value)}
        />
        <InputPrimary
          type='date'
          placeholder=''
          name='dataaprovada'
          value={dataaprovada}
          title='Data da Aprovação*'
          onChange={(e: any) => setDataAprovada(e.target.value)}
        />
        <InputArea
          name='conteudo'
          value={conteudo}
          title='Conteúdo*'
          placeholder='Digite o conteúdo da ata'
          onChange={(e: any) => setConteudo(e.target.value)}
        />
        <InputArea
          name='observacao'
          value={observacao ?? 'Sem observação'}
          title='Observação'
          placeholder='Informe alguma observação relevante sobre a ata'
          onChange={(e: any) => setObservacao(e.target.value)}
        />
        <ButtonPrimary onClick={() => window.open(dados_ata.arquivo, '_blank')}>
          Ver arquivo anexado
        </ButtonPrimary>
        <InputFile
          name='file'
          title='Anexar novo arquivo*'
          placeholder='Selecione um arquivo'
        />
      </div>
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={putAta}>
          Atualizar Ata
        </ButtonPrimary>
      </div>
    </div>
  )
}
