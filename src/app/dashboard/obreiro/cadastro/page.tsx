import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { FormObreiro } from "@/components/Partials/Dashboard/Obreiro/FormObreiro"

export const metadata: Metadata = {
  title: 'Obreiro | Dashboard',
}

export default function Home() {
  return (
    <div>
      <HeaderPageDashboard title='Controle de Obreiro' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Cadastro de Obreiro' />
          <FormObreiro />
        </Container>
      </div>
    </div>
  )
}
