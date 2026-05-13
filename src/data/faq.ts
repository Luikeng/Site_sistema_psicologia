export type FAQItem = {
  q: string;
  a: string;
};

export const FAQ: FAQItem[] = [
  {
    q: 'O Sistema Psicologia atende às exigências do CFP para prontuários eletrônicos?',
    a: 'Sim. Seguimos a Resolução CFP nº 01/2009 (prontuários psicológicos) e a Resolução CFP nº 11/2018 (atendimento online). Trilha de auditoria de acessos por paciente, permissões granulares por membro da clínica e tráfego sempre em TLS 1.3.',
  },
  {
    q: 'Como funciona a emissão de NFS-e direto pelo sistema?',
    a: 'Você cadastra seu certificado digital A1 (.pfx), informa CNPJ/CPF emissor e o código de serviço (04.16 — psicologia). A partir de qualquer sessão paga, o sistema gera a DPS, assina digitalmente, transmite à Receita Federal e armazena o XML/PDF. Funciona para Simples Nacional e regime normal.',
  },
  {
    q: 'E se minha cidade ainda não emite NFS-e Nacional?',
    a: 'Tem o módulo de Recibo Simples — gera um documento PDF estruturado com os dados do atendimento, válido pra apresentação a planos de saúde e dedução de IR via Carnê-Leão. Quando sua cidade aderir ao padrão nacional, basta ativar o certificado.',
  },
  {
    q: 'O sistema gera o arquivo de Receita Saúde (Carnê-Leão) corretamente?',
    a: 'Sim. Geramos o CSV oficial conforme o Manual Receita Saúde v2.1: 16 campos, separador ponto-e-vírgula, código de ocupação 255 (psicólogo), até 1.000 linhas por arquivo. Você seleciona o período, valida os recibos do batch e baixa o CSV pronto pra importar no e-CAC.',
  },
  {
    q: 'A integração com Google Agenda é de mão dupla?',
    a: 'Sim. Sincronização bidirecional total (2-way): o que você marca no app vai pro Google e vice-versa. Inclui notificações automáticas pelo Google, resposta de confirmação do paciente e reescalonamento. Funciona offline pelo próprio app do Google e ressincroniza quando voltar a conexão.',
  },
  {
    q: 'Preciso pagar a mais por cada psicólogo da clínica?',
    a: 'Não. O Plano Clínica é flat: até 5 profissionais (1 dono + 4 colaboradores) e até 2 secretárias, tudo incluído no valor mensal. O Plano Individual é para 1 psicólogo só. Veja a página de Preços para os limites exatos de cada plano.',
  },
  {
    q: 'Como funciona o teste grátis?',
    a: 'Você cria a conta sem cartão e tem acesso completo ao plano por um período de avaliação. Sem renovação automática surpresa: passamos a cobrar somente após você assinar conscientemente.',
  },
  {
    q: 'Os dados ficam no Brasil?',
    a: 'Operamos infraestrutura com servidores em São Paulo (banco PostgreSQL na região southamerica-east1, backups em Cloud Storage). Para serviços de borda (CDN, e-mail transacional) podemos usar provedores internacionais que atendem aos requisitos da LGPD (Art. 33), com contrato e medidas técnicas adequadas.',
  },
  {
    q: 'Posso exportar meus dados se eu quiser sair?',
    a: 'Sim. Você é o Controlador dos dados pela LGPD; nós somos o Operador. A qualquer momento você pode exportar pacientes, prontuários, recibos e arquivos. Sem refém.',
  },
  {
    q: 'Como o paciente acessa o portal?',
    a: 'Ele entra com um link/código exclusivo (sem senha do prontuário). Vê próximas sessões, registra humor diário (mood log), preenche anamnese, atualiza foto e pode confirmar presença. Você reduz mensagens repetitivas no WhatsApp e ganha registros clínicos entre sessões.',
  },
  {
    q: 'Vocês ajudam na migração se eu já tiver pacientes em outro sistema?',
    a: 'Sim. Suportamos importação por planilha (CSV/Excel) e ajudamos manualmente nas primeiras migrações. Entre em contato pelo /contato e te orientamos.',
  },
];
