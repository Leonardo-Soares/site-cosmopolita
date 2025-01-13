import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { getBannersDetalhes } from "@/services/prismicData/getBannersDetalhes"
import { FormBannerEdit } from "@/components/Partials/Dashboard/Banner/FormBannerEdit"
import { FormHistoria } from "@/components/Partials/Dashboard/Historia/FormHistoria"
import { FormHistoriaEdit } from "@/components/Partials/Dashboard/Historia/FormHistoriaEdit"
import { getHistoriaDetalhes } from "@/services/prismicData/getHistoriaDetalhes"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: 'História | Cosmopolita',
    description: 'Confira os detalhes e a história da Loja Cosmopolita.',
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const detalhes_historia = await getHistoriaDetalhes(params.id)
  console.log(detalhes_historia);

  return (
    <div>
      <HeaderPageDashboard title='Controle de História' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Edição de História' />
          <FormHistoriaEdit dados_historia={detalhes_historia} />
        </Container>
      </div>
    </div>
  )
}
