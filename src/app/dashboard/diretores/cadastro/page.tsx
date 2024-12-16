import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { FormDiretoria } from "@/components/Partials/Dashboard/Diretoria/FormDiretoria"

export const metadata: Metadata = {
  title: 'Diretoria | Dashboard',
}

export default function Home() {
  return (
    <div>
      <HeaderPageDashboard title='Controle de Diretoria' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Cadastro de Diretoria' />
          <FormDiretoria />
        </Container>
      </div>
    </div>
  )
}
