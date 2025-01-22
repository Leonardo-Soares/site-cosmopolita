import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { CardDashboard } from '@/components/Cards/CardDashboard'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Home() {
  const teste = [
    {
      id: 1,
      icon: "atas",
      title: "Atas",
      route: "/dashboard/atas",
      description: "Espaço para criar, editar e visualizar atas de reuniões."
    },
    {
      id: 2,
      icon: "banner",
      title: "Banner",
      route: "/dashboard/banner",
      description: "Espaço para criar, editar e visualizar banners de destaque."
    },
    {
      id: 3,
      icon: "news",
      route: "/dashboard/noticias",
      title: "Notícias",
      description: "Espaço para criar, editar e visualizar notícias."
    },
    {
      id: 4,
      icon: "users",
      route: "/dashboard/diretores",
      title: "Diretores",
      description: "Espaço para criar, editar e visualizar diretores."
    },
    {
      id: 5,
      icon: "atas",
      route: "/dashboard/historia",
      title: "Cadastro de História",
      description: "Cadastro de conteúdos do histórico da Loja."
    },
    {
      id: 6,
      icon: "users",
      route: "/dashboard/usuarios",
      title: "Aprovar usuários",
      description: "Dedicado ao Venerável para aprovar novos usuários."
    }
  ]

  return (
    <main className="">
      <HeaderPage title='Dashboard' />
      <div className='flex flex-col items-center justify-center py-8'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
            {teste.map((item, index) => (
              <CardDashboard
                icon={item.icon}
                key={index}
                item={item}
              />
            ))}
          </div>
        </Container>
      </div>
    </main>
  )
}
