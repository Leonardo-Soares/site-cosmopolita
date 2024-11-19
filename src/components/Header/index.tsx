'use client'
import Link from 'next/link'
import TopBar from './TopBar'
import { useEffect } from 'react'
import NavLinks from './NavLinks'
import Icon from '../Adapters/Icon'
import { useWindowScroll } from 'react-use'
import { useCookies } from '@/stores/useCookies'
import { Container } from '../Partials/Container'
import { usePrismicLangs } from '@/hooks/usePrismicLangs'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'

export function Header() {
  const { y } = useWindowScroll()
  const { addCookie } = useCookies()
  const { availableLangs } = usePrismicLangs()
  const { setShowMenuHamburguer } = useMenuHamburguerStore()
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  function addLangCookie(lang: string) {
    addCookie('lang', lang)
    window.location.reload()
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full shadow-xl backdrop-blur transition-all ${y > 0 ? 'bg-white/70' : 'bg-white'
        } `}
    >
      <TopBar />
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              src="/img/logos/logo-cosmopolita.png"
              alt=""
              className="cursor-pointer py-3 transition-all"
              style={{ height: y > 0 ? '6rem' : '7rem' }}
            />
          </Link>
          <div className="hidden items-center gap-3 md:flex">
            <NavLinks />
          </div>
          <div
            className="md:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-3xl text-brand-gray-700" />
          </div>
        </div>
      </Container>
    </header>
  )
}
