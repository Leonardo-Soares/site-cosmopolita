import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { FormBanner } from "@/components/Partials/Dashboard/Banner/FormBanner"
import { FormNoticia } from "@/components/Partials/Dashboard/Noticia/FormNoticia"

export const metadata: Metadata = {
  title: 'Notícia | Dashboard',
}

export default function Home() {
  return (
    <div>
      <HeaderPageDashboard title='Controle de Notícia' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Cadastro de Notícia' />
          <FormNoticia />
        </Container>
      </div>
    </div>
  )
}
