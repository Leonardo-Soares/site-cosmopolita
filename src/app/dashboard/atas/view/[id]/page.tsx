import { Metadata } from "next"
import { Container } from "@/components/Partials/Container"
import { ButtonBack } from "@/components/Partials/Dashboard/ButtonBack"
import HeaderPageDashboard from "@/components/Header/HeaderPageDashboard"

export const metadata: Metadata = {
  title: 'View | Atas',
}

export default function Home() {

  return (
    <div>
      <HeaderPageDashboard title='Controle de Atas' />
      <div className='flex flex-col items-center justify-between py-12 pb-12'>
        <Container>
          <div>
            <ButtonBack title="Ata: " />
            <div className='bg-brand-blue800 w-52 rounded-2xl text-center py-1 mt-5'>
              <span className='text-brand-white  text-sm'>Data: 11/12/2024</span>
            </div>
            <div className='mt-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
