export type FAQItem = {
  q: string;
  a: string;
};

export const FAQ: FAQItem[] = [
  {
    q: 'O Sistema Psicologia atende às exigências do CFP para prontuários eletrônicos?',
    a: 'Sim. Seguimos a Resolução CFP nº 01/2009 (prontuários psicológicos) e a Resolução CFP nº 11/2018 (atendimento online). Os prontuários ficam criptografados com AES-256, com trilha de auditoria de acessos e controle granular de quem pode visualizar cada paciente.',
  },
  {
    q: 'Como funciona a emissão de NFS-e direto pelo sistema?',
    a: 'Você cadastra seu certificado digital A1 (.pfx), informa CNPJ/CPF emissor e o código de serviço (04.16 — psicologia). A partir de qualquer sessão paga, em 1 clique o sistema gera a DPS, assina, transmite à Receita Federal e armazena o XML/PDF no R2. Funciona para Simples Nacional e regime normal.',
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
    a: 'O Plano Individual é por profissional. O Plano Clínica vem com o profissional principal incluído e cada profissional adicional tem custo fixo informado na página de Preços. Secretárias com acesso limitado entram sem custo extra dentro do limite do plano.',
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
    a: 'Ele entra com um link/código exclusivo (sem senha do prontuário). Vê próximas sessões, baixa recibos e pode confirmar presença. Você reduz mensagens repetitivas no WhatsApp e dá autonomia ao paciente.',
  },
  {
    q: 'Vocês ajudam na migração se eu já tiver pacientes em outro sistema?',
    a: 'Sim. Suportamos importação por planilha (CSV/Excel) e ajudamos manualmente nas primeiras migrações. Entre em contato pelo /contato e te orientamos.',
  },
];
