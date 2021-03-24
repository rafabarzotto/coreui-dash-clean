import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Cadastros'
  },
  {
    name: 'Clientes',
    url: '/clientes',
    icon: 'icon-people'
  },
  {
    name: 'Veículos',
    url: '/veiculos',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Documentos'
  },
  {
    name: 'Ordem de Serviço',
    url: '/os',
    icon: 'icon-puzzle'
  },
  {
    name: 'Orçamento',
    url: '/orcamento',
    icon: 'icon-speedometer'
  },
  {
    name: 'Orçamento Manual',
    url: '/orcamento_manual',
    icon: 'icon-puzzle'
  },
  {
    name: 'Parcelamentos',
    url: '/parcelamentos',
    icon: 'icon-puzzle'
  },
  {
    name: 'Otros',
    url: '/parcelamentos',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    title: true,
    name: 'Relatórios'
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  }
];
