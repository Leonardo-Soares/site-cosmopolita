'use client'
import { TitleH1 } from '../Texts/TitleH1'
import { Container } from '../Partials/Container'
import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useCookies } from '@/stores/useCookies'

interface HeaderPageProps {
  title?: string
}

export default function HeaderPage({ title }: HeaderPageProps) {
  const navigate = useRouter()
  const pathname = usePathname()
  const { getCookie } = useCookies()
  const cargo = getCookie('cargo')

  useEffect(() => {
    if (pathname === '/dashboard' || pathname === '/dashboard/usuarios' && cargo != 'mestre') {
      navigate.push('/home')
    }
  }, [pathname]);

  return (
    <div
      className='h-32 flex items-center'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        background: 'url(../img/bg/bg-header-page.svg)',
      }}
    >
      <Container>
        <TitleH1 color='text-brand-dark'>
          {title ?? 'A∴ R∴ L∴ S∴ Cosmopolita n.° 2'}
        </TitleH1>
      </Container>
    </div>
  )
}
