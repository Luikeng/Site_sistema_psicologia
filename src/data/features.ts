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
    | 'FileText'
    | 'Ticket'
    | 'ClipboardEdit'
    | 'Globe2'
    | 'HandCoins'
    | 'Bell'
    | 'Smile';
  badge?: string;
  plan?: 'individual' | 'clinica' | 'both';
};

export const FEATURES: FeatureItem[] = [
  {
    slug: 'agenda-google',
    title: 'Agenda integrada ao Google Calendar (2-way)',
    short: 'Sincronização bidirecional total com seu Google Agenda.',
    long:
      'Integração bidirecional com Google Calendar: você marca no app, aparece no Google. O paciente confirma pelo lembrete nativo do Google e o sistema atualiza. Funciona offline pelo próprio Google Calendar do celular e ressincroniza ao voltar a internet. Sessões recorrentes configuráveis (semanal, quinzenal, customizado) e suporte a multi-fuso horário pra atendimento online entre estados.',
    icon: 'CalendarSync',
    badge: 'Sincronização 2-way',
    plan: 'both',
  },
  {
    slug: 'prontuario-eletronico',
    title: 'Prontuário Eletrônico LGPD',
    short: 'Registro de sessões em conformidade com a Resolução CFP 01/2009.',
    long:
      'Prontuário eletrônico com trilha de auditoria por acesso, anamnese estruturada e evolução por sessão. Tráfego sempre em TLS 1.3, banco em infraestrutura cloud com criptografia em disco e backups diários. Operamos como Operador (LGPD); você é o Controlador. Em conformidade com a Resolução CFP nº 01/2009 sobre prontuários psicológicos e Resolução CFP nº 11/2018 sobre atendimento online.',
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
      'Cada paciente recebe link/código exclusivo pra ver próximas sessões, registrar humor diário (mood log), confirmar presença, preencher anamnese e baixar a foto do perfil. Você reduz mensagens repetitivas, ganha registros clínicos entre sessões e o paciente tem autonomia.',
    icon: 'HeartPulse',
    plan: 'both',
  },
  {
    slug: 'documentos',
    title: 'Central de Documentos (WYSIWYG)',
    short: 'Modelos de recibo, atestado, declaração e relatório.',
    long:
      'Editor estilo Word com variáveis dinâmicas (nome, CPF, valor, data, CRP) que validam CPF, moeda e datas. Templates personalizáveis por workspace, exportação em PDF e geração instantânea por sessão.',
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
    slug: 'anamnese-digital',
    title: 'Anamnese digital por link',
    short: 'Paciente preenche antes da 1ª sessão. Você chega com a história já lida.',
    long:
      'Gere um link único pra cada paciente preencher a anamnese pelo celular, antes da primeira sessão. Modo "auto-cadastro" cria o paciente novo automaticamente quando ele submete. Você economiza 20-30 min de cada primeiro atendimento e chega à consulta já com a história clínica em mãos. Funciona com pacientes existentes (atualiza cadastro) ou novos (cria paciente).',
    icon: 'ClipboardEdit',
    badge: 'Novo',
    plan: 'both',
  },
  {
    slug: 'recibo-simples',
    title: 'Recibo simples (cidades sem NFS-e)',
    short: 'Pra municípios que ainda não aderiram à NFS-e Nacional.',
    long:
      'Gera um documento PDF estruturado com todos os dados do atendimento — válido pra apresentação a planos de saúde, dedução de IR via Carnê-Leão e arquivo do paciente. Quando sua cidade aderir ao padrão nacional NFS-e, basta ativar o certificado digital A1 e migrar sem perder histórico.',
    icon: 'FileText',
    plan: 'both',
  },
  {
    slug: 'multi-fuso',
    title: 'Multi-fuso horário',
    short: 'Atendimento online entre estados/países sem confusão de horário.',
    long:
      'Cada workspace tem seu fuso padrão; cada profissional pode ter o próprio. As sessões são armazenadas em UTC e exibidas no fuso correto pra cada parte. Paciente em Lisboa recebe lembrete no horário dele; você vê na sua agenda local. Nada de "será que é 14h pra ele ou pra mim?".',
    icon: 'Globe2',
    badge: 'Novo',
    plan: 'both',
  },
  {
    slug: 'repasse-clinica',
    title: 'Repasse clínica ↔ profissional',
    short: 'Split automático do que cada psi recebe da clínica.',
    long:
      'Configure percentual de repasse por profissional (ou valor fixo por sessão). O sistema calcula automaticamente quanto a clínica retém e quanto repassa, com painel separado pra cada parte. Suporte a mensalidade do psi pra clínica, reversão visível em caso de cancelamento e relatório consolidado mensal.',
    icon: 'HandCoins',
    badge: 'Plano Clínica',
    plan: 'clinica',
  },
  {
    title: 'Central de notificações',
    short: 'Anamneses pendentes, registros novos, mood logs — tudo num sino.',
    long:
      'Sino no canto da tela mostra o que precisa da sua atenção: nova anamnese preenchida, paciente registrou humor, registro pendente de assinatura. Você atende o que importa sem perder tempo conferindo cada paciente manualmente.',
    icon: 'Bell',
    plan: 'both',
  },
  {
    title: 'Diário de humor do paciente',
    short: 'Acompanhamento clínico entre sessões pelo portal.',
    long:
      'Pelo portal exclusivo, o paciente registra humor diário (escala + observação). Você vê a evolução em gráfico antes da próxima sessão — útil pra acompanhar transtornos de humor, ansiedade e resposta a intervenção. Nada de planilha paralela; o dado já chega no perfil do paciente.',
    icon: 'Smile',
    badge: 'Novo',
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
