import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { getNoticiasDetalhes } from "@/services/prismicData/getNoticiasDetalhes"
import { FormNoticiaEdit } from "@/components/Partials/Dashboard/Noticia/FormNoticiaEdit"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: 'Notícia | Cosmopolita',
    description: 'Confira as notícias da Loja Cosmopolita.',
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const detalhe_noticia = await getNoticiasDetalhes(params.id)

  return (
    <div>
      <HeaderPageDashboard title='Controle de Notícia' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Edição de Notícia' />
          <FormNoticiaEdit noticia={detalhe_noticia} />
        </Container>
      </div>
    </div>
  )
}
