export const SITE = {
  name: 'Sistema Psicologia',
  shortName: 'Sistema Psicologia',
  url: 'https://sistemapsicologia.com.br',
  appUrl: 'https://sistema.sistemapsicologia.com.br/',
  contactEmail: 'contato@sistemapsicologia.com.br',
  whatsapp: '5551999999999', // TODO: substituir pelo número real
  twitter: '@sistemapsicologia',
  description:
    'Sistema de gestão para psicólogos e clínicas: agenda integrada ao Google, prontuário eletrônico LGPD, NFS-e, Receita Saúde, financeiro e portal do paciente em uma única plataforma.',
  founded: '2024',
  authorName: 'Sistema Psicologia',
} as const;

export const NAV_LINKS = [
  { href: '/recursos', label: 'Recursos' },
  { href: '/precos', label: 'Preços' },
  { href: '/seguranca', label: 'Segurança' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
] as const;

export const RECURSOS_LINKS = [
  { href: '/recursos/agenda-google', label: 'Agenda Google' },
  { href: '/recursos/prontuario-eletronico', label: 'Prontuário Eletrônico' },
  { href: '/recursos/nfs-e-psicologia', label: 'NFS-e (Nota Fiscal)' },
  { href: '/recursos/receita-saude', label: 'Receita Saúde' },
  { href: '/recursos/portal-paciente', label: 'Portal do Paciente' },
  { href: '/recursos/multi-clinica', label: 'Gestão Multi-Clínica' },
] as const;
