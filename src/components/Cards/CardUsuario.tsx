'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ButtonPrimary } from '../Buttons/ButtonPrimary'
import { api_v1 } from '@/services/axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type Props = {
  nome: string
  cim: string
  idUser: string
  grau: string
  telefone: string
  ativaButton: boolean
  icon: 'user' | 'banner' | 'news' | 'users' | 'atas' | string
}

export function CardUsuario({ icon, nome, cim, grau, telefone, idUser, ativaButton }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useRouter()

  async function postAtualizaUsuario(status: string, idUser: any) {
    setIsLoading(true)
    try {
      const response = await api_v1.post(`/usuario/${idUser}`, {
        status: status
      })
      navigate.back()
      toast.success('Usuário atualizado com sucesso!')
    } catch (error: any) {
      console.error(error)
      toast.error('Erro ao atualizar usuário!')
      setIsLoading(true)
    }
    setIsLoading(false)
  }

  return (
    <div className="relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-brand-blue transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-brand-blue transition-all duration-300 group-hover:bg-sky-400">
          {icon === 'atas' &&
            <img src="/img/icons/atas.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
          {icon === 'user' &&
            <img src="/img/icons/user.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
          {icon === 'banner' &&
            <img src="/img/icons/banner.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
          {icon === 'news' &&
            <img src="/img/icons/news.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
          {icon === 'users' &&
            <img src="/img/icons/users.svg" alt="Icone de Ata" className="h-12 w-12" />
          }
        </span>
        <div className="pt-5 text-base font-semibold leading-7">
          <p className="text-brand-bg-brand-blue uppercase transition-all text-xl duration-300 ">
            {nome}
          </p>
        </div>
        <div className="pt-2 text-md leading-7 text-gray-600 transition-all duration-300">
          <p>
            CIM: <b>{cim}</b>
          </p>
          <p>
            Grau: <b> {grau === 'grau-1' ? 'Aprendiz' : grau === 'grau-2' ? 'Companheiro' : 'Mestre'}</b>
          </p>
          <a
            target='__blank'
            rel='noreferrer'
            className="hover:text-brand-blue"
            href={`https://api.whatsapp.com/send/?phone=55${telefone}`}>
            Telefone:{' '}
            <b className="underline">{
              telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
            }</b>
          </a>

          {ativaButton &&
            <div className='flex flex-col w-full justify-between pt-4'>
              <ButtonPrimary isLoading={isLoading} onClick={() => postAtualizaUsuario('ativo', idUser)} backgroundColor='bg-green-600' color='text-white' borderColor='border-green-600' full>
                Aprovar
              </ButtonPrimary>
              <ButtonPrimary isLoading={isLoading} onClick={() => postAtualizaUsuario('aguardando', idUser)} backgroundColor='bg-red-600' color='text-white' borderColor='border-red-600' full>
                Reprovar
              </ButtonPrimary>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
