'use client'
import Link from 'next/link'
import useNavLinks from '@/hooks/useNavLinks'
import { DropdownHover } from './DropdownHover'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavLinks() {
  const segment = useSelectedLayoutSegment()
  const { navLinks } = useNavLinks()

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
      <a href="/" rel="noreferrer" target="_blank" className='text-brand-gray-700 border-solid border-2 border-brand-gray-700 px-4 py-1 rounded-lg'>
        Cadastro
      </a>
    </>
  )
}
