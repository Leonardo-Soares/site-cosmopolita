import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { FormObreiroEdit } from "@/components/Partials/Dashboard/Obreiro/FormObreiroEdit"
import { getDiretoresDetalhes } from "@/services/prismicData/getDiretoresDetalhes"

export async function generateMetadata({ params }: { params: { id: any } }): Promise<Metadata> {
  return {
    title: 'Obreiro | Cosmopolita',
    description: 'Confira todos os membros da Loja Cosmopolita.',
  }
}

export default async function Page({ params }: { params: { id: any } }) {
  const diretor = await getDiretoresDetalhes(params.id)

  return (
    <div>
      <HeaderPageDashboard title='Controle de Obreiros' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Edição de Obreiro' />
          <FormObreiroEdit diretor={diretor} />
        </Container>
      </div>
    </div>
  )
}
