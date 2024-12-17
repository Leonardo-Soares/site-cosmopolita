import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { FormBanner } from "@/components/Partials/Dashboard/Banner/FormBanner"

export const metadata: Metadata = {
  title: 'Banner | Dashboard',
}

export default function Home() {
  return (
    <div>
      <HeaderPageDashboard title='Controle de Banner' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Cadastro de Banner' />
          <FormBanner />
        </Container>
      </div>
    </div>
  )
}
