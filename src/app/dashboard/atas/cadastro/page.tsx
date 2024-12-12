import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import { FormAtas } from "@/components/Partials/Dashboard/Atas/FormAtas"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"

export const metadata: Metadata = {
  title: 'Cadastro | Atas',
}

export default function Home() {
  return (
    <div>
      <HeaderPageDashboard title='Controle de Atas' />
      <div className="py-12">
        <Container>
          <ButtonBack title='Cadastro de ata' />
          <FormAtas />
        </Container>
      </div>
    </div>
  )
}
