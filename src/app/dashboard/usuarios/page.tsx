import { Metadata } from 'next'
import HeaderPage from '@/components/Header/HeaderPage'
import { Container } from '@/components/Partials/Container'
import { CardDashboard } from '@/components/Cards/CardDashboard'
import { getUsuarios } from '@/services/prismicData/getUsuarios'
import { CardUsuario } from '@/components/Cards/CardUsuario'

export const metadata: Metadata = {
  title: 'Usuários | Dashboard',
}

export default async function Home() {
  const listaUsuarios = await getUsuarios()

  return (
    <main className="">
      <HeaderPage title='Aprovar usuário' />
      <div className='flex flex-col items-center justify-center py-8'>
        <Container>
          <h2 className='text-2xl font-semibold text-center text-brand-blue'>
            Usuários aguardando aprovação
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
            {listaUsuarios && listaUsuarios.filter(usuario => usuario.status === 'aguardando').map(usuario =>
              <CardUsuario
                icon={'user'}
                nome={usuario.nome}
                idUser={usuario.id}
                cim={usuario.cim}
                grau={usuario.grau}
                key={usuario.id}
                buttonAtivarUSuario
                buttonDesativarUsuario
                telefone={usuario.telefone}
              />
            )}
          </div>
          {listaUsuarios && listaUsuarios.filter(usuario => usuario.status === 'aguardando').length <= 0 &&
            <p className='text-gray-500 text-center my-4'>
              Nenhum usuário aguardando aprovação
            </p>
          }
          <h2 className='text-2xl font-semibold text-center text-red-800 mt-12 mb-4'>
            Usuários reprovados
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
            {listaUsuarios && listaUsuarios.filter(usuario => usuario.status === 'desativo').map(usuario =>
              <CardUsuario
                icon={'user'}
                nome={usuario.nome}
                idUser={usuario.id}
                cim={usuario.cim}
                grau={usuario.grau}
                key={usuario.id}
                buttonAtivarUSuario
                buttonDesativarUsuario={false}
                telefone={usuario.telefone}
              />
            )}
          </div>
          {listaUsuarios && listaUsuarios.filter(usuario => usuario.status === 'desativo').length <= 0 &&
            <p className='text-gray-500 text-center my-4'>
              Nenhum usuário reprovado
            </p>
          }

          <h2 className='text-2xl font-semibold text-center text-brand-blue mt-12 mb-4'>
            Usuários Ativos
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
            {listaUsuarios && listaUsuarios.filter(usuario => usuario.status === 'ativo').map(usuario =>
              <CardUsuario
                icon={'user'}
                nome={usuario.nome}
                idUser={usuario.id}
                cim={usuario.cim}
                grau={usuario.grau}
                key={usuario.id}
                buttonAtivarUSuario={false}
                buttonDesativarUsuario={true}
                telefone={usuario.telefone}
              />
            )}
            {listaUsuarios && listaUsuarios.filter(usuario => usuario.status === 'ativo').length <= 0 &&
              <p className='text-gray-500 text-center my-4'>
                Nenhum usuário ativo
              </p>
            }
          </div>
        </Container>
      </div>
    </main>
  )
}
