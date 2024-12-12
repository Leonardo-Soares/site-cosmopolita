import { TitleH1 } from '../Texts/TitleH1'
import { Container } from '../Partials/Container'

interface HeaderPageProps {
  title?: string
}

export default function HeaderPageDashboard({ title }: HeaderPageProps) {
  return (
    <div
      className='h-32 flex items-center'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        background: 'url(../../../img/bg/bg-header-page.svg)',
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
