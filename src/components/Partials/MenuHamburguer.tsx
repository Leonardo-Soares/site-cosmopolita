'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'
import useNavLinks from '@/hooks/useNavLinks'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { useCookies } from '@/stores/useCookies'

export function MenuHamburguer() {
  const { setShowMenuHamburguer, showMenuHamburguer } = useMenuHamburguerStore()
  const { getCookie } = useCookies()
  const cargo = getCookie('cargo')
  const { navLinks } = useNavLinks(cargo)

  const router = useRouter() // router.push('/')

  function handleRouting(routeName: string) {
    router.push(routeName)
    setShowMenuHamburguer(false)
  }

  return (
    <div
      className={`fixed top-0 z-[999999] flex h-full w-[90%] items-center justify-center bg-white/80 bg-[url(/img/background.png)] bg-cover bg-fixed bg-center shadow-2xl backdrop-blur-md md:hidden ${showMenuHamburguer ? 'right-0' : '-right-[700px]'
        } overflow-y-auto transition-all`}
    >
      <div className="relative h-full w-full py-20">
        <Icon
          icon="mdi:close"
          className="absolute right-5 top-5 cursor-pointer text-3xl"
          onClick={() => setShowMenuHamburguer(false)}
        />
        <div className="flex justify-center px-10 py-4">
          <img src="/img/logos/logo-cosmopolita.png" alt="bredi" />
        </div>

        <div className="py-20">
          {navLinks.map((link) => {
            return (
              <div
                key={link.name}
                className="border-brand-yellow cursor-pointer border-b bg-white p-5 text-2xl text-zinc-900"
                onClick={() => handleRouting(link.route)}
              >
                {link.name}
              </div>
            )
          })}
          <div
            className="border-brand-yellow cursor-pointer border-b bg-white p-5 text-2xl text-brand-red"
            onClick={() => handleRouting('/logout')}
          >
            Sair
          </div>

          <div className="bg-white py-10">
            <p className="text-center text-xl text-zinc-900">
              contato@lojacosmopolita.com.br
            </p>
            {/* <p className="flex items-center justify-center text-center text-xl text-zinc-900">
              <Icon
                icon="mdi:whatsapp"
                className="mr-2 text-xl text-blue-300"
              />{' '}
              (99) 9999-9999
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
