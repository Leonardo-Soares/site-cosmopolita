import { Metadata } from 'next';
import HeaderPage from '@/components/Header/HeaderPage';
import { Container } from '@/components/Partials/Container';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Cosmopolita',
};

export default function Home() {
  return (
    <main className="">
      <HeaderPage title='Política de Privacidade' />

      <div className='flex flex-col items-center justify-between py-12'>
        <Container>
          <div>
            <p className='text-brand-gray-700 mt-2'>
              Bem-vindo à Política de Privacidade da loja Cosmopolita. Sua privacidade é importante para nós. Ao acessar nosso site (<a href="https://lojacosmopolita.com.br" className='text-brand-blue underline'>https://lojacosmopolita.com.br</a>), você concorda com os termos descritos abaixo.
            </p>
            <h2 className='text-xl font-bold mt-4'>Coleta de Informações</h2>
            <p className='text-brand-gray-700 mt-2'>
              Podemos coletar informações pessoais, como nome, endereço de e-mail e número de telefone, quando você se registra ou realiza uma compra em nosso site. Também utilizamos cookies para melhorar sua experiência de navegação.
            </p>
            <h2 className='text-xl font-bold mt-4'>Uso de Cookies</h2>
            <p className='text-brand-gray-700 mt-2'>
              Utilizamos cookies para personalizar o conteúdo exibido, lembrar preferências e analisar o tráfego em nosso site. Você pode ajustar as configurações de cookies diretamente no seu navegador.
            </p>
            <h2 className='text-xl font-bold mt-4'>Segurança de Dados</h2>
            <p className='text-brand-gray-700 mt-2'>
              Adotamos medidas de segurança adequadas para proteger suas informações contra acessos não autorizados, alterações ou exclusões.
            </p>
            <h2 className='text-xl font-bold mt-4'>Seus Direitos</h2>
            <p className='text-brand-gray-700 mt-2'>
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para isso, entre em contato conosco através do e-mail <a className=' underline text-brand-blue' href="mailto:contato@lojacosmopolita.com.br">contato@lojacosmopolita.com.br.</a>
            </p>
            <h2 className='text-xl font-bold mt-4'>Alterações na Política</h2>
            <p className='text-brand-gray-700 mt-2'>
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você a revise regularmente para se manter informado.
            </p>
          </div>
        </Container>
      </div>
    </main>
  );
}