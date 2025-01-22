import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import SectionDashboard from '@/components/Partials/SectionDashboard'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Home() {
  return (
    <main className="">
      <HeaderPage title='Dashboard' />
      <SectionDashboard />
    </main>
  )
}
