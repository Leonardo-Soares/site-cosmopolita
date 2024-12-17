import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { FormBanner } from "@/components/Partials/Dashboard/Banner/FormBanner"
import { getBannersDetalhes } from "@/services/prismicData/getBannersDetalhes"
import { FormBannerEdit } from "@/components/Partials/Dashboard/Banner/FormBannerEdit"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: 'Banner | Cosmopolita',
    description: 'Confira banners ativos da Loja Cosmopolita.',
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const detalhe_banner = await getBannersDetalhes(params.id)

  return (
    <div>
      <HeaderPageDashboard title='Controle de Banner' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Edição de Banner' />
          <FormBannerEdit dados_banner={detalhe_banner} />
        </Container>
      </div>
    </div>
  )
}
