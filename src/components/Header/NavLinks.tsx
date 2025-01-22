'use client'
import Link from 'next/link'
import useNavLinks from '@/hooks/useNavLinks'
import { DropdownHover } from './DropdownHover'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useCookies } from '@/stores/useCookies'

export default function NavLinks() {
  const { getCookie } = useCookies()
  const cargoAtual = getCookie('cargo')
  const { navLinks } = useNavLinks(cargoAtual)
  const segment = useSelectedLayoutSegment()

  return (
    <>
      {navLinks?.map((link: any) => {
        if (link.dinamic_submenu_document_type) {
          return (
            <DropdownHover
              key={link.name}
              mainRoute={link.route}
              title={link.name}
              links={link.submenu}
              dinamicSubmenuDocumentType={link.dinamic_submenu_document_type}
            />
          )
        }
        if (link.submenu) {
          return (
            <DropdownHover
              key={link.name}
              mainRoute={link.route}
              title={link.name}
              links={link.submenu}
            />
          )
        }
        return (
          <Link key={link.name} href={link.route}>
            <span
              className={`${segment === link.route.replace('/', '') ? 'font-bold' : 'font-normal'} cursor-pointer text-brand-gray-700 hover:opacity-70`}
              suppressHydrationWarning
            >
              {link.name}
            </span>
          </Link>
        )
      })}
      {cargoAtual === 'obreiro' &&
        <Link href={'/logout'}>
          <span
            className={`'font-bold' cursor-pointer text-brand-gray-700 hover:opacity-70`}
            suppressHydrationWarning
          >
            Sair
          </span>
        </Link>
      }
    </>
  )
}
