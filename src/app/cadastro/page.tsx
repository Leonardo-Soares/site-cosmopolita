'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { api } from '@/services/axios'
import { useRouter } from 'next/navigation'
import InputPrimary from '@/components/Forms/InputPrimary'
import { Container } from '@/components/Partials/Container'
import { ButtonPrimary } from '@/components/Buttons/ButtonPrimary'
import { log } from 'console'

export default function Home() {
  const router = useRouter()
  const [cim, setCim] = useState('')
  const [cpf, setCpf] = useState('')
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [grau, setGrau] = useState('')
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
    if (!email.includes('@')) {
      toast.error('Informe um e-mail existente')
      return
    }
    if (!email.includes('.')) {
      toast.error('Informe um e-mail existente')
      return
    }
    if (!cim) {
      toast.error('Preencha o campo CIM')
      return
    }
    if (!grau) {
      toast.error('Selecione seu grau atual')
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
    if (!cpf) {
      toast.error('Preencha o campo CPF')
      return
    }
    if (cpf.length < 14) {
      toast.error('CPF inválido')
      return
    }
    if (!senha) {
      toast.error('Preencha o campo senha')
      return
    }
    if (senha.length < 8) {
      toast.error('A senha deve ter no mínimo 8 caracteres')
      return
    }
    if (senha !== senhaConfirm) {
      toast.error('As senhas não conferem')
      return
    }

    const formData = {
      cim: cim,
      grau: grau,
      nome: nome,
      data: data,
      email: email,
      password: senha,
      street: endereco,
      status: 'aguardando',
      honoravel: 'obreiro',
      telefone: telefone_limpo,
      cpf: cpf.replace(/\D/g, ''),
    }

    try {
      const response = await api.post(`/usuario`, formData)
      if (response.status) {

        toast.success('Cadastro realizado com sucesso')
        setNome('')
        setData('')
        setEmail('')
        setCim('')
        setGrau('')
        setEndereco('')
        setTelefone('')
        setCpf('')
        setSenha('')
        setSenhaConfirm('')
        setTimeout(() => {
          router.push('/cadastro-sucesso')
        }, 2000)
      }

    } catch (error: any) {
      toast.error('Erro ao realizar cadastro, tente novamente mais tarde')
      console.log(error.response)
    }
  }

  const formatNumber = (value: any) => {
    const cleaned = value.replace(/\D/g, '')

    const formatted = cleaned
      .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

    return formatted
  }

  const formatCPF = (value: any) => {
    // Remove qualquer caractere que não seja número
    const cleaned = value.replace(/\D/g, '');

    // Aplica a máscara de CPF
    const formatted = cleaned
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{2})$/, '$1-$2');

    return formatted;
  };

  const handleNumberChange = (e: any) => {
    const rawValue = e.target.value
    setTelefone(formatNumber(rawValue))
  }

  const handleCPFChange = (e: any) => {
    const rawValue = e.target.value
    setCpf(formatCPF(rawValue))
  }

  return (
    <main className='h-full' style={{
      backgroundImage: 'url(../img/bg/bg-mapa-mudi.png)',
      backgroundSize: 'cover',
    }}>
      <div className='max-w-[1080px] h-full mx-auto flex justify-center'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 py-16 gap-x-12'>
            <div className=' order-2 mt-8 lg:mt-0 lg:order-1 hidden lg:flex'>
              <img
                src="../img/temp/foto-exemplo.jpeg"
                alt="Foto de obreiros da Loja Cosmopolita"
                className='w-full sticky top-44 h-[400px] border-solid border-brand-blue border-4 rounded-xl'
              />
            </div>
            <div className='flex flex-col justify-center order-1 lg:order-2'>
              <div>
                <h2 className='text-5xl font-bold text-brand-dark'>Cadastro</h2>
                <p className='text-md text-brand-gray-700 mb-6'>
                  Preencha todas as informações com atenção. Em caso de dúvidas, procure um irmão Mestre Maçom ou a Diretoria da Loja Cosmopolita.
                </p>

                <InputPrimary
                  title='Nome'
                  name='name'
                  value={nome}
                  placeholder='Seu nome completo'
                  onChange={(e: any) => setNome(e.target.value)}
                />
                <InputPrimary
                  name='date'
                  type='date'
                  value={data}
                  title='Data de nascimento'
                  placeholder='Data de nascimento'
                  onChange={(e: any) => setData(e.target.value)}
                />
                <InputPrimary
                  name='email'
                  type='email'
                  value={email}
                  title='E-mail'
                  placeholder='E-mail'
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <InputPrimary
                  name='cim'
                  value={cim}
                  type='number'
                  maxLength={5}
                  onChange={(e: any) => setCim(e.target.value)}
                  title='CIM (Cédula de Identificação Maçônica)'
                  placeholder='Seu CIM (Cédula de Identificação Maçônica)'
                />
                <div className='mb-3'>
                  <p className='font-bold text-brand-dark text-center lg:text-start'>
                    Selecione seu grau
                  </p>
                  <select
                    className=' w-full h-12 rounded-xl'
                    value={grau}
                    onChange={(e) => setGrau(e.target.value)}
                    aria-label='Selecione seu grau'
                  >
                    <option value=''>Selecione seu grau</option>
                    <option value='grau-1'>Grau 1 - Aprendiz</option>
                    <option value='grau-2'>Grau 2 - Companheiro</option>
                    <option value='grau-3'>Grau 3 - Mestre</option>
                  </select>
                </div>
                <InputPrimary
                  type='text'
                  name='endereco'
                  title='Endereço'
                  value={endereco}
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
                  name='cpf'
                  value={cpf}
                  title='CPF'
                  maxLength={14}
                  onChange={handleCPFChange}
                  placeholder='Informe seu CPF'
                />
                <InputPrimary
                  title='Senha'
                  value={senha}
                  name='password'
                  type='password'
                  placeholder='Senha'
                  onChange={(e: any) => setSenha(e.target.value)}
                />
                <InputPrimary
                  name='password'
                  type='password'
                  value={senhaConfirm}
                  title='Confirmar senha'
                  placeholder='Confirmar senha'
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
