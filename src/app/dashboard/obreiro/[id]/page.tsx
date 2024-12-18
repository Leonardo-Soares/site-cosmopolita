import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { ViewObreiro } from "@/components/Partials/Dashboard/Obreiro/ViewObreiro"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: 'Obreiro | Cosmopolita',
    description: 'Confira os Diretores da Loja Cosmopolita.',
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const obreiro = [
    {}
  ]

  return (
    <div>
      <HeaderPageDashboard title='Controle de Diretores' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Preview Obreiro' />
          <ViewObreiro obreiro={obreiro as any} />
        </Container>
      </div>
    </div>
  )
}
