export type Plan = {
  id: 'individual' | 'clinica';
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
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
    monthly: 39,
    annual: 399, // ~15% off vs 12x mensal
    features: [
      'Agenda 2-way Google Calendar',
      'Prontuário eletrônico (LGPD + CFP 01/2009)',
      'Anamnese digital por link (paciente preenche sozinho)',
      'Central de Documentos (recibo, atestado, declaração)',
      'NFS-e Nacional integrada',
      'Receita Saúde (Carnê-Leão) — exportação CSV oficial',
      'Recibo simples para municípios sem NFS-e',
      'Financeiro com mensalidades automáticas',
      'Portal do Paciente com diário de humor',
      'Templates de mensagens (WhatsApp)',
      'Portal de pagamento próprio',
      'Suporte por e-mail',
    ],
    ctaLabel: 'Começar teste grátis',
  },
  {
    id: 'clinica',
    name: 'Clínica',
    tagline: 'Organize equipe, salas e repasses financeiros.',
    monthly: 69,
    annual: 699, // ~15% off vs 12x mensal
    highlight: true,
    badge: 'Mais completo',
    features: [
      'Tudo do plano Individual',
      'Até 5 profissionais (1 dono + 4) no mesmo workspace',
      'Até 2 secretárias com acesso restrito',
      'Gestão de Multi-Salas',
      'Repasse automatizado clínica ↔ profissional',
      'Permissões granulares (RBAC) por membro',
      'Multi-fuso horário (atendimento online entre estados/países)',
      'Trilha de auditoria',
      'Suporte prioritário',
    ],
    ctaLabel: 'Começar teste grátis',
  },
];
