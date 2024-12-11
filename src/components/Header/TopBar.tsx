import Link from 'next/link'
import { Container } from '../Partials/Container'

export default function TopBar() {
  return (
    <div className="border-b py-1">
      <Container>
        <Link href={'/politica-de-privacidade'} className="text-brand-gray-700 hover:underline ml-2 text-xs">
          Política de Privacidade
        </Link>
      </Container>
    </div>
  )
}
