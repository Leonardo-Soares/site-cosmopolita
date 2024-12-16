import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { getDiretoresDetalhes } from "@/services/prismicData/getDiretores"
import { ViewDiretoria } from "@/components/Partials/Dashboard/Diretoria/ViewDiretoria"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: 'Diretoria | Cosmopolita',
    description: 'Confira os Diretores da Loja Cosmopolita.',
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const diretoria = await getDiretoresDetalhes(params.id)

  return (
    <div>
      <HeaderPageDashboard title='Controle de Diretores' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Preview Diretoria' />
          <ViewDiretoria diretoria={diretoria} />
        </Container>
      </div>
    </div>
  )
}
