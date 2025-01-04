import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { FormBanner } from "@/components/Partials/Dashboard/Banner/FormBanner"
import { FormHistoria } from "@/components/Partials/Dashboard/Historia/FormHistoria"

export const metadata: Metadata = {
  title: 'História | Dashboard',
}

export default function Home() {
  return (
    <div>
      <HeaderPageDashboard title='Controle de História' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Cadastro de História' />
          <FormHistoria />
        </Container>
      </div>
    </div>
  )
}
