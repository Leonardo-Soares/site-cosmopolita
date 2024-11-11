export default function useNavLinks() {
  const navLinks = [
    {
      route: '/',
      name: 'Home',
    },
    {
      route: '/sobre-nos',
      name: 'Sobre nós',
    },
    {
      route: '/blog',
      name: 'Controle de Atas',
    },
    {
      route: '/contatos',
      name: 'Galeria de Gestões',
    },
    {
      route: '/servicos',
      name: 'Notícias',
    },
    {
      route: '/servicos',
      name: 'Fale Conosco',
    },
    // {
    //   route: '/submenu',
    //   name: 'Fale Conosco',
    //   submenu: [
    //     {
    //       label: 'Submenu 1',
    //       href: '/submenu/submenu1',
    //     },
    //     {
    //       label: 'Submenu 2',
    //       href: '/submenu/submenu2',
    //     },
    //   ],
    // },
  ]

  return {
    navLinks,
  }
}
