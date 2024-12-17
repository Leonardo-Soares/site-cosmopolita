'use client'
import toast from 'react-hot-toast'
import React, { useState } from 'react'
import { api_v1 } from '@/services/axios'
import { useRouter } from 'next/navigation'
import InputFile from '@/components/Forms/InputFile'
import InputArea from '@/components/Forms/InputArea'
import InputPrimary from '@/components/Forms/InputPrimary'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export function FormObreiro() {
  const navigate = useRouter()
  const [cim, setCim] = useState('')
  const [nome, setNome] = useState('')
  const [grau, setGrau] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [endereco, setEndereco] = useState('')
  const [loading, setLoading] = useState(false)
  const [data_nascimento, setDataNascimento] = useState('')

  async function validaObreiro() {
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

    // try {
    //   const data = await api_v1.post(`/obreiro`, formData)
    //   if (data.status === 201) {
    //     toast.success('Diretor cadastrado com sucesso')
    //     navigate.back()
    //     return;
    //   } else {
    //     toast.error('Erro ao cadastrar Diretor')
    //     return;
    //   }
    // } catch (error: any) {
    //   toast.error('Erro ao cadastrar Diretor')
    //   console.error('POST - Cadastro de Diretor:', error.response);
    // }
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
    <div className='p-5 '>
      <InputPrimary
        name='titulo'
        title='Nome completo*'
        placeholder='Digite o nome completo do obreiro'
        onChange={(e: any) => setNome(e.target.value)}
      />
      <InputPrimary
        name='email'
        type='email'
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
        title='Endereço*'
        placeholder='Digite o endereço do obreiro'
        onChange={(e: any) => setEndereco(e.target.value)}
      />
      <InputPrimary
        type='date'
        name='data_nascimento'
        title='Data de nascimento*'
        placeholder='Digite a data de nascimento do obreiro'
        onChange={(e: any) => setDataNascimento(e.target.value)}
      />
      <InputPrimary
        name='cim'
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
          <option value="grau-1">Grau 1</option>
          <option value="grau-2">Grau 2</option>
          <option value="grau-3">Grau 3</option>
        </select>
      </div>
      <div className='w-72 mx-auto'>
        <ButtonPrimary isLoading={loading} full onClick={validaObreiro}>
          Cadastrar Obreiro
        </ButtonPrimary>
      </div>
    </div>
  )
}
