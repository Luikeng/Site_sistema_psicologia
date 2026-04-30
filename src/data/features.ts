export type FeatureItem = {
  slug?: string;
  title: string;
  short: string;
  long: string;
  icon:
    | 'CalendarSync'
    | 'HeartPulse'
    | 'Building2'
    | 'WalletCards'
    | 'ShieldCheck'
    | 'Pocket'
    | 'CalendarClock'
    | 'Users2'
    | 'FileBadge'
    | 'Receipt'
    | 'MessageCircle'
    | 'Image'
    | 'KeyRound'
    | 'BookText'
    | 'Lock'
    | 'Repeat'
    | 'Briefcase'
    | 'FileText';
  badge?: string;
  plan?: 'individual' | 'clinica' | 'both';
};

export const FEATURES: FeatureItem[] = [
  {
    slug: 'agenda-google',
    title: 'Agenda integrada ao Google Calendar (2-way)',
    short: 'Sincronização bidirecional total com seu Google Agenda.',
    long:
      'Integração bidirecional com Google Calendar: você marca no app, aparece no Google. O paciente confirma pelo lembrete do Google e o sistema atualiza. Funciona offline pelo próprio Google Calendar do celular e ressincroniza ao voltar a internet. Sessões recorrentes em 1 clique.',
    icon: 'CalendarSync',
    badge: 'Sincronização 2-way',
    plan: 'both',
  },
  {
    slug: 'prontuario-eletronico',
    title: 'Prontuário Eletrônico LGPD (AES-256)',
    short: 'Registro de sessões criptografado e adequado à LGPD.',
    long:
      'Prontuário eletrônico com criptografia AES-256 em repouso, log de acessos auditável, anamnese estruturada e evolução por sessão. Operamos como Operador (LGPD); você é o Controlador. Em conformidade com a Resolução CFP nº 01/2009 sobre prontuários psicológicos.',
    icon: 'ShieldCheck',
    plan: 'both',
  },
  {
    slug: 'nfs-e-psicologia',
    title: 'NFS-e Nacional integrada',
    short: 'Emita Nota Fiscal de Serviço direto do sistema, em segundos.',
    long:
      'Módulo completo de NFS-e Nacional com certificado digital A1 (PKCS#12), código de serviço 04.16 (psicologia), assinatura XML, transmissão à Receita Federal, controle de DPS sequencial e armazenamento dos XMLs. Suporta Simples Nacional e regime normal.',
    icon: 'FileBadge',
    badge: 'Novo',
    plan: 'both',
  },
  {
    slug: 'receita-saude',
    title: 'Receita Saúde (Carnê-Leão)',
    short: 'Lote CSV oficial pronto pra importar no e-CAC.',
    long:
      'Geração do arquivo CSV oficial do Manual Receita Saúde v2.1: 16 campos, separador `;`, código de ocupação 255 (psicólogo), até 1.000 linhas por arquivo. Selecione período e pacientes; o sistema monta o batch (draft → gerado → enviado → confirmado) e exporta o CSV pronto.',
    icon: 'Receipt',
    badge: 'Novo',
    plan: 'both',
  },
  {
    slug: 'financeiro',
    title: 'Financeiro e mensalidades automáticas',
    short: 'Faturamento, recebimentos e mensalidades em um painel.',
    long:
      'Dashboard financeiro com faturamento mensal, contas a receber, atrasos e previsão. Suporte a pacotes mensais (mensalidades automáticas geradas todo mês) ou cobrança por sessão. Personalize valor, moeda e dia de vencimento por paciente.',
    icon: 'WalletCards',
    plan: 'both',
  },
  {
    slug: 'portal-paciente',
    title: 'Portal do Paciente',
    short: 'Acesso exclusivo do paciente sem o ruído do WhatsApp.',
    long:
      'Cada paciente recebe um link/código exclusivo pra ver suas próximas sessões, baixar recibos, acessar os agendamentos e confirmar presença. Você reduz mensagens repetitivas e o paciente tem autonomia.',
    icon: 'HeartPulse',
    plan: 'both',
  },
  {
    slug: 'documentos',
    title: 'Central de Documentos (WYSIWYG)',
    short: 'Modelos de recibo, atestado, declaração e relatório.',
    long:
      'Editor estilo Word com variáveis dinâmicas (nome, CPF, valor, data, CRP) que validam CPF, moeda e datas. Templates personalizáveis, exportação em PDF profissional com timbrado e logo.',
    icon: 'FileText',
    plan: 'both',
  },
  {
    slug: 'whatsapp-templates',
    title: 'Templates de mensagens (WhatsApp)',
    short: 'Lembretes, confirmações e cobranças prontos pra enviar.',
    long:
      'Modelos contextualizados (confirmação de sessão, lembrete de pagamento, código do portal) com variáveis renderizadas automaticamente: primeiro nome, data da sessão, profissional. Copia e cola no WhatsApp.',
    icon: 'MessageCircle',
    badge: 'Novo',
    plan: 'both',
  },
  {
    slug: 'foto-paciente',
    title: 'Foto e arquivos do paciente',
    short: 'Anexos seguros: foto, exames, autorizações.',
    long:
      'Upload de foto do paciente e arquivos de prontuário em storage seguro (Cloudflare R2). URLs assinadas, download autenticado e categorização (perfil, anexo clínico).',
    icon: 'Image',
    plan: 'both',
  },
  {
    slug: 'multi-salas',
    title: 'Gestão de salas',
    short: 'Cruze agenda dos profissionais com salas físicas.',
    long:
      'Sua clínica tem 3 consultórios? O sistema valida disponibilidade da sala junto com a do profissional, evitando conflito e dupla reserva. Filtro por sala no calendário.',
    icon: 'Building2',
    plan: 'clinica',
  },
  {
    slug: 'multi-clinica',
    title: 'Multi-profissional & Workspace',
    short: 'Vários psicólogos, secretárias e repasses no mesmo lugar.',
    long:
      'Workspace único da clínica com vários profissionais, secretárias com acesso restrito (só agenda e confirmações), repasses configuráveis por profissional e isolamento total de dados sensíveis entre membros.',
    icon: 'Users2',
    badge: 'Plano Clínica',
    plan: 'clinica',
  },
  {
    slug: 'rbac',
    title: 'Permissões granulares (RBAC)',
    short: 'Controle exatamente o que cada membro vê.',
    long:
      'Sistema de papéis e permissões customizáveis: ver pacientes, editar sessões, gerenciar pagamentos, configurar emissão fiscal, acessar Google Calendar etc. Cada secretária ou psicólogo parceiro com o acesso certo.',
    icon: 'KeyRound',
    plan: 'clinica',
  },
  {
    slug: 'login-google',
    title: 'Login com Google',
    short: 'Entre em 1 clique, sem mais uma senha pra lembrar.',
    long:
      'Autenticação via Google OAuth, com fallback de e-mail/senha. Tokens JWT, rate limit no /login, sem armazenar senha em texto.',
    icon: 'Lock',
    plan: 'both',
  },
  {
    slug: 'audit-log',
    title: 'Trilha de auditoria',
    short: 'Quem fez o quê, e quando — registrado.',
    long:
      'Registro de ações sensíveis com timestamp, usuário e tipo de ação. Útil pra LGPD, conformidade do CRP e investigação de incidentes.',
    icon: 'BookText',
    plan: 'both',
  },
];
