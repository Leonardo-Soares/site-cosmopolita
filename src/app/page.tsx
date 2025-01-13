import Login from '@/components/Partials/Dashboard/Auth/Login'

export default function Home() {
  return (
    <main className='flex-1 h-screen' style={{
      backgroundImage: 'url(../img/bg/bg-mapa-mudi.png)',
      backgroundSize: 'cover',
    }}>
      <Login />
    </main>
  )
}
