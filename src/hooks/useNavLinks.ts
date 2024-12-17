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
    {
      route: '/perfil',
      name: 'Perfil',
      submenu: [
        {
          label: 'Dashboard',
          href: '/dashboard',
        },
        {
          label: 'Notícias',
          href: '/dashboard/noticias',
        },
        {
          label: 'Atas',
          href: '/dashboard/atas',
        },
        {
          label: 'Banner',
          href: '/dashboard/banner',
        },
        {
          label: 'Diretores',
          href: '/dashboard/diretores',
        },
      ],
    },
  ]

  return {
    navLinks,
  }
}
