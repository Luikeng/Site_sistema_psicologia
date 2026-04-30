export type Plan = {
  id: 'individual' | 'clinica';
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  perProfessional?: number;
  highlight?: boolean;
  badge?: string;
  features: string[];
  ctaLabel: string;
};

// NOTA: valores espelham o que o site mostra hoje. O backend (Stripe) tem fallbacks
// distintos e configuráveis em runtime; manter sincronizado com Settings.
export const PLANS: Plan[] = [
  {
    id: 'individual',
    name: 'Individual',
    tagline: 'Para o psicólogo autônomo focado na clínica.',
    monthly: 39.9,
    annual: 39.9 * 10, // ~17% off em relação a 12 meses
    features: [
      'Agenda 2-way Google Calendar',
      'Prontuário Eletrônico LGPD (AES-256)',
      'Central de Documentos (recibo, atestado, declaração)',
      'NFS-e Nacional integrada',
      'Receita Saúde (Carnê-Leão) — exportação CSV oficial',
      'Financeiro com mensalidades automáticas',
      'Portal do Paciente',
      'Templates de mensagens (WhatsApp)',
      'Login com Google',
      'Suporte por e-mail',
    ],
    ctaLabel: 'Começar teste grátis',
  },
  {
    id: 'clinica',
    name: 'Clínica',
    tagline: 'Organize equipe, salas e repasses financeiros.',
    monthly: 59.9,
    annual: 59.9 * 10,
    perProfessional: 49,
    highlight: true,
    badge: 'Mais completo',
    features: [
      'Tudo do plano Individual',
      'Multi-profissional no mesmo workspace',
      'Usuário "Secretária(o)" com acesso restrito',
      'Gestão de Multi-Salas',
      'Repasses financeiros por profissional',
      'Permissões granulares (RBAC) por membro',
      'Trilha de auditoria',
      'Suporte prioritário',
    ],
    ctaLabel: 'Começar teste grátis',
  },
];
