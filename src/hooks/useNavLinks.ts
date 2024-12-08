export default function useNavLinks() {
  const navLinks = [
    {
      route: '/home',
      name: 'Home',
    },
    {
      route: '/sobre',
      name: 'Sobre',
    },
    {
      route: '/atas',
      name: 'Atas',
    },
    {
      route: '/diretoria',
      name: 'Diretoria',
    },
    {
      route: '/noticias',
      name: 'Notícias',
    },
    {
      route: '/contato',
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
