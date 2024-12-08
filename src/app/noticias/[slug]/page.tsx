import { Container } from '@/components/Partials/Container'
import { TitleH1 } from '@/components/Texts/TitleH1'
import { TitleH4 } from '@/components/Texts/TitleH4'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notícias | Cosmopolita',
}

export default function Home() {
  const noticia = {
    id: 1,
    slug: 'noticia-teste',
    data: '10/10/2024',
    categoria: 'Categoria',
    titulo: 'Titulo da notícia',
    sutitulo: 'Subtitulo da notícia',
    imagem: '../../img/temp/news.png',
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et quam quis arcu accumsan congue sed nec justo. Maecenas porta ante purus, sed fringilla elit posuere a. Etiam faucibus dui eget dui semper eleifend. Proin ut justo fermentum, sollicitudin nunc vitae, sodales lectus. Suspendisse a pretium felis. Donec luctus, mauris et egestas ornare, nibh metus viverra nisi, at pulvinar nisi justo et nunc. In porta porta mattis. Nulla a interdum neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sollicitudin mi quam, eu ornare diam ultricies at. Phasellus et vulputate nunc, vel ultricies erat. Quisque quis vestibulum massa. Suspendisse ut nulla risus. Cras tincidunt pharetra nibh, sit amet pharetra eros congue vitae. Aenean volutpat molestie velit tempor pretium.Integer ultrices odio a ante dapibus blandit at sed est.Suspendisse euismod nisi tellus.Sed ultrices orci risus, vitae lacinia velit finibus vitae.Nunc laoreet feugiat neque nec accumsan.Nullam ut tempor nunc.Interdum et malesuada fames ac ante ipsum primis in faucibus.Vestibulum porttitor sapien nunc, eu lobortis risus eleifend at.Nulla vitae nisi et neque venenatis sodales.Vivamus varius leo ac nisl consectetur, nec vulputate lorem sollicitudin.Cras euismod eu dolor nec venenatis.In quis lacus sollicitudin mauris aliquam iaculis.',
  }

  return (
    <main className="">
      <div
        className='h-32 flex items-center'
        style={{
          background: 'url(../img/bg/bg-header-page.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <TitleH1 color='text-brand-dark'>Notícias</TitleH1>
        </Container>
      </div>
      <div className='flex min-h-screen flex-col items-center justify-between pt-12'>
        <Container>
          <div>
            <div className='bg-brand-blue800 w-28 rounded-2xl text-center py-1'>
              <span className='text-brand-white  text-sm'>{noticia.categoria}</span>
            </div>

            <div className='mt-4'>
              <TitleH1 color='text-brand-dark'>
                {noticia.titulo}
              </TitleH1>
              <TitleH4 color='text-brand-gray-700' fontWeigth='500'>
                Postado por <b>Cosmopolita</b> em {noticia.data}
              </TitleH4>
            </div>

            <div className='mt-4'>
              <img
                src={noticia.imagem}
                alt=""
                className="w-full h-72 rounded-lg object-cover mb-4"
              />
              <p>
                {noticia.conteudo}
              </p>
            </div>
          </div>

        </Container>
      </div>
    </main>
  )
}
