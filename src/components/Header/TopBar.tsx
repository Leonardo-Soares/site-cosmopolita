import Link from 'next/link'
import { Container } from '../Partials/Container'

export default function TopBar() {
  return (
    <div className="border-b py-1">
      <Container>
        <Link href={'/'} className="text-brand-gray-700 hover:underline text-xs">
          Termos de Uso
        </Link>
        <Link href={'/'} className="text-brand-gray-700 hover:underline ml-2 text-xs">
          Política de Privacidade
        </Link>
      </Container>
    </div>
  )
}
