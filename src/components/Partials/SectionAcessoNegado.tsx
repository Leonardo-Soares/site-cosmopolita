'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useCookies } from '@/stores/useCookies'
import Link from 'next/link'

export function SectionAcessoNegado() {
  const router = useRouter()
  const { getCookie } = useCookies()
  const authenticated = getCookie('logado')


  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm text-red-500 dark:text-red-400">401 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Acesso negado</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Você não tem permissão para acessar esta página. Por favor, entre em contato com o administrador do sistema ou faça login novamente.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <span>Voltar</span>
            </button>

            {authenticated && authenticated === 'true' &&
              <Link href={'/home'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-brand-blue rounded-lg shrink-0 sm:w-auto hover:bg-brand-blue dark:hover:bg-brand-blue dark:bg-brand-blue">
                Voltar para home
              </Link>
            }
            {!authenticated || authenticated != 'true' &&
              <Link href={'/'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-brand-blue rounded-lg shrink-0 sm:w-auto hover:bg-brand-blue dark:hover:bg-brand-blue dark:bg-brand-blue">
                Fazer login
              </Link>
            }
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover " src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
      </div>
    </section>
  )
}
