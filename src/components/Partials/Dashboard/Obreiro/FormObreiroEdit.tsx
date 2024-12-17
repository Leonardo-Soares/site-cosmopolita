'use client'
import toast from 'react-hot-toast'
import React, { useState } from 'react'
import { api_v1 } from '@/services/axios'
import { useRouter } from 'next/navigation'
import DiretoresProps from '@/hooks/useDiretoresProps'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export function FormObreiroEdit({ diretor }: { diretor: DiretoresProps }) {
  const navigation = useRouter()
  const [cim, setCim] = useState('')
  const [nome, setNome] = useState('')
  const [grau, setGrau] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [endereco, setEndereco] = useState('')
  const [loading, setLoading] = useState(false)
  const [data_nascimento, setDataNascimento] = useState('')

  async function atualizaNoticia() {
    if (!nome) {
      toast.error('O campo Nome é obrigatório')
      return;
    }
    if (!email) {
      toast.error('O campo E-mail é obrigatório')
      return;
    }
    if (!telefone) {
      toast.error('O campo Telefone é obrigatório')
      return;
    }
    if (!endereco) {
      toast.error('O campo Endereço é obrigatório')
      return;
    }
    if (!data_nascimento) {
      toast.error('O campo Data de nascimento é obrigatório')
      return;
    }
    if (!cim) {
      toast.error('O campo CIM é obrigatório')
      return;
    }
    if (grau.length <= 0) {
      toast.error('O campo Grau é obrigatório')
      return;
    }

    setLoading(true)

    const formData = new FormData() as any
    formData.append('nome', nome)
    formData.append('email', email)
    formData.append('telefone', telefone)
    formData.append('endereco', endereco)
    formData.append('data_nascimento', data_nascimento)
    formData.append('cim', cim)
    formData.append('grau', grau)
    formData.append('status', '0')


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

  const formatNumber = (value: any) => {
    // Remove todos os caracteres que não são números
    const cleaned = value.replace(/\D/g, '')

    // Formata o CPF no padrão XXX.XXX.XXX-XX
    const formatted = cleaned
      .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

    return formatted
  }

  return (
    <div className='p-5'>
      <InputPrimary
        name='titulo'
        value={nome}
        title='Nome completo*'
        placeholder='Digite o nome completo do obreiro'
        onChange={(e: any) => setNome(e.target.value)}
      />
      <InputPrimary
        name='email'
        type='email'
        value={email}
        title='E-mail*'
        placeholder='Digite o e-mail do obreiro'
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <InputPrimary
        name='telefone'
        title='Telefone*'
        maxLength={15}
        value={formatNumber(telefone)}
        placeholder='Digite o telefone do obreiro'
        onChange={(e: any) => setTelefone(e.target.value)}
      />
      <InputPrimary
        name='endereco'
        value={endereco}
        title='Endereço*'
        placeholder='Digite o endereço do obreiro'
        onChange={(e: any) => setEndereco(e.target.value)}
      />
      <InputPrimary
        type='date'
        name='data_nascimento'
        value={data_nascimento}
        title='Data de nascimento*'
        placeholder='Digite a data de nascimento do obreiro'
        onChange={(e: any) => setDataNascimento(e.target.value)}
      />
      <InputPrimary
        name='cim'
        value={cim}
        type='number'
        placeholder='Digite o CIM do obreiro'
        title='CIM (Cédula de Identificação Maçônica)*'
        onChange={(e: any) => setCim(e.target.value)}
      />
      <div>
        <label className="block text-md font-semibold text-dark mb-2">
          Selecione seu Grau*
        </label>
        <select
          className="w-full font-semibold h-12 mb-2 pl-4 pr-10 border border-brand-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
          onChange={(e) => setGrau(e.target.value)}
        >
          <option value="">Selecione o grau</option>
          <option selected={grau === 'grau-1' && true} value="grau-1">Grau 1</option>
          <option selected={grau === 'grau-2' && true} value="grau-2">Grau 2</option>
          <option selected={grau === 'grau-3' && true} value="grau-3">Grau 3</option>
        </select>
      </div>
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={atualizaNoticia}>
          Atualizar Diretor
        </ButtonPrimary>
      </div>
    </div>
  )
}
