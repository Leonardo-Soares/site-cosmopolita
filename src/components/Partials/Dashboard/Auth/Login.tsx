'use client'
import toast from "react-hot-toast"
import { Container } from "../../Container"
import { useEffect, useState } from "react"
import { useCookies } from "@/stores/useCookies"
import InputPrimary from "@/components/Forms/InputPrimary"
import { ButtonPrimary } from "@/components/Buttons/ButtonPrimary"
import { useRouter } from "next/navigation"
import { api } from "@/services/axios"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { getCookie, addCookie } = useCookies()

  // Função para verificar se o usuário já está logado
  useEffect(() => {
    const logado = getCookie('logado')
    if (logado === 'true') {
      router.push('/home')
    }
  }, [getCookie, router])

  // Função de login
  async function postLogin() {

    if (!email) {
      toast.error('Preencha o campo de e-mail')
      return
    }
    if (!password) {
      toast.error('Preencha o campo de senha')
      return
    }

    setLoading(true)

    try {
      const response = await api.post('/usuario/login', {
        login: email,
        senha: password
      })
      if (response.status === 201 && response.data.status === 'ativo') {
        toast.success('Login efetuado com sucesso')
        addCookie('logado', 'true')
        addCookie('cargo', response.data.honoravel)
        router.push('/home')
        setLoading(false)
        return
      } else if (response.status === 201 && response.data.status === 'desativo') {
        toast.error('Usuário inativo')
      } else if (response.status === 201 && response.data.status === 'aguardando') {
        toast.error('Usuário pendente de aprovação')
        router.push('/login-inativo')
      } else {
        toast.error('Error ao efetuar login')
      }
    } catch (error: any) {
      console.log(error)
      toast.error('E-mail ou senha incorretos')
    }
    setLoading(false)
  }

  return (
    <div className='max-w-[1080px] h-screen mx-auto flex justify-center items-center'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 py-16 gap-x-12'>
          <div className='order-2 mt-8 lg:mt-0 lg:order-1'>
            <img className='w-full border-solid border-brand-blue border-4 rounded-xl' src="../img/temp/foto-exemplo.jpeg" alt="Imagem de exemplo" />
          </div>
          <div className='flex flex-col justify-center order-1 lg:order-2'>
            <div>
              <h2 className='text-5xl font-bold text-brand-gray-700 mb-6'>Área Administrativa</h2>

              <InputPrimary
                name='email'
                type='email'
                placeholder='E-mail'
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <InputPrimary
                name='password'
                type='password'
                placeholder='Senha'
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>

            <div className='flex-col flex'>
              <a onClick={() => router.push('/recuperar-senha')} className='text-brand-blue font-bold cursor-pointer hover:underline text-sm'>Esqueci minha senha</a>
              <ButtonPrimary
                full={true}
                type='button'
                onClick={postLogin}
                disabled={loading}
              >
                {loading ? 'Carregando...' : 'Entrar'}
              </ButtonPrimary>
              <ButtonPrimary
                full={true}
                color='text-brand-blue'
                backgroundColor='bg-transparent'
                onClick={() => router.push('/cadastro')}
              >
                Criar conta
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}