import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { FormDiretoriaEdit } from "@/components/Partials/Dashboard/Diretoria/FormDiretoriaEdit"
import { getDiretoresDetalhes } from "@/services/prismicData/getDiretoresDetalhes"

export async function generateMetadata({ params }: { params: { id: any } }): Promise<Metadata> {
  return {
    title: 'Diretoria | Cosmopolita',
    description: 'Confira os Diretores da Loja Cosmopolita.',
  }
}

export default async function Page({ params }: { params: { id: any } }) {
  const diretor = await getDiretoresDetalhes(params.id)

  return (
    <div>
      <HeaderPageDashboard title='Controle de Diretores' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Edição de Diretoria' />
          <FormDiretoriaEdit diretor={diretor} />
        </Container>
      </div>
    </div>
  )
}
