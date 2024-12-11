'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { api } from '@/services/axios'
import { useRouter } from 'next/navigation'
import InputPrimary from '@/components/Forms/InputPrimary'
import { Container } from '@/components/Partials/Container'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'

export default function Home() {
  const router = useRouter()
  const [cim, setCim] = useState('')
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [telefone, setTelefone] = useState('')
  const [endereco, setEndereco] = useState('')
  const [senhaConfirm, setSenhaConfirm] = useState('')

  async function postCadastro() {
    const telefone_limpo = telefone.replace(/\D/g, '')

    if (!nome) {
      toast.error('Preencha o campo nome')
      return
    }
    if (!data) {
      toast.error('Preencha o campo data de nascimento')
      return
    }
    if (!email) {
      toast.error('Preencha o campo e-mail')
      return
    }
    if (!cim) {
      toast.error('Preencha o campo CIM')
      return
    }
    if (!endereco) {
      toast.error('Preencha o campo endereço')
      return
    }
    if (!telefone) {
      toast.error('Preencha o campo telefone')
      return
    }
    if (!senha) {
      toast.error('Preencha o campo senha')
      return
    }
    if (senha !== senhaConfirm) {
      toast.error('As senhas não conferem')
      return
    }

    const formData = {
      name: nome,
      date: data,
      email: email,
      cim: cim,
      number: telefone_limpo,
      street: endereco,
      password: senha
    }

    console.log(formData)

    try {
      const response = await api.post(``, formData)
    } catch (error: any) {

    }
  }

  const formatNumber = (value: any) => {
    // Remove todos os caracteres que não são números
    const cleaned = value.replace(/\D/g, '')

    // Formata o CPF no padrão XXX.XXX.XXX-XX
    const formatted = cleaned
      .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

    return formatted
  }

  const handleNumberChange = (e: any) => {
    const rawValue = e.target.value
    setTelefone(formatNumber(rawValue))
  }

  return (
    <main className='h-full' style={{
      backgroundImage: 'url(../img/bg/bg-mapa-mudi.png)',
      backgroundSize: 'cover',
    }}>
      <div className='max-w-[1080px] h-full mx-auto flex justify-center'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 py-16 gap-x-12 items-center'>
            <div className='order-2 mt-8 lg:mt-0 lg:order-1 hidden lg:flex'>
              <img className='w-full border-solid border-brand-blue border-4 rounded-xl' src="../img/temp/foto-exemplo.jpeg" alt="" />
            </div>
            <div className='flex flex-col justify-center order-1 lg:order-2'>
              <div>
                <h2 className='text-5xl font-bold text-brand-dark'>Cadastro</h2>
                <p className='text-md text-brand-gray-700 mb-6'>Preenche todas informações com atenção, em caso de dúvida procure um Mestre Maçom ou membros da Diretoria da Loja.</p>

                <InputPrimary
                  title='Nome'
                  name='name'
                  placeholder='Seu nome completo'
                  onChange={(e: any) => setNome(e.target.value)}
                />
                <InputPrimary
                  name='date'
                  type='date'
                  title='Data de nascimento'
                  placeholder='Data de nascimento'
                  onChange={(e: any) => setData(e.target.value)}
                />
                <InputPrimary
                  name='email'
                  type='email'
                  title='E-mail'
                  placeholder='E-mail'
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <InputPrimary
                  name='cim'
                  type='number'
                  maxLength={5}
                  placeholder='Seu CIM (Cédula de Identificação Maçônica)'
                  title='CIM (Cédula de Identificação Maçônica)'
                  onChange={(e: any) => setCim(e.target.value)}
                />
                <InputPrimary
                  type='text'
                  name='endereco'
                  title='Endereço'
                  placeholder='Seu endereço completo'
                  onChange={(e: any) => setEndereco(e.target.value)}
                />
                <InputPrimary
                  name='telefone'
                  maxLength={14}
                  value={telefone}
                  title='Telefone'
                  placeholder='Telefone com DD'
                  onChange={handleNumberChange}
                />
                <InputPrimary
                  title='Senha'
                  name='password'
                  type='password'
                  placeholder='Senha'
                  onChange={(e: any) => setSenha(e.target.value)}
                />
                <InputPrimary
                  name='password'
                  type='password'
                  placeholder='Confirmar senha'
                  title='Confirmar senha'
                  onChange={(e: any) => setSenhaConfirm(e.target.value)}
                />
              </div>

              <div className='flex-col flex'>
                <ButtonPrimary
                  full={true}
                  onClick={postCadastro}
                >
                  Entrar
                </ButtonPrimary>
                <ButtonPrimary
                  full={true}
                  color='text-brand-blue'
                  backgroundColor='bg-transparent'
                  onClick={() => router.push('/')}
                >
                  Fazer login
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
