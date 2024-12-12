import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"
import { FormAtasEdit } from "@/components/Partials/Dashboard/Atas/FormAtasEdit"

export const metadata: Metadata = {
  title: 'Edição | Atas',
}

export default function Home() {
  return (
    <div>
      <HeaderPageDashboard title='Controle de Atas' />
      <div className="py-12">
        <Container>
          <ButtonBack title="Edição de ata: " />
          <FormAtasEdit id_ata={1} />
        </Container>
      </div>
    </div>
  )
}
