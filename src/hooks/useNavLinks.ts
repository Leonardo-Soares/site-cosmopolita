export default function useNavLinks(params: any) {
  const navLinksSecretarioDiretor = [
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

  const navLinksObreiro = [
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
  ]

  const navLinksMestre = [
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
          label: 'Usuários',
          href: '/dashboard/usuarios',
        },
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

  if (params === 'obreiro') {
    return {
      navLinks: navLinksObreiro
    };
  } else if (params === 'mestre') {
    return {
      navLinks: navLinksMestre, // Exemplo: mantendo todos os links
    };
  } else {
    return {
      navLinks: navLinksSecretarioDiretor
    }
  }
}
