// Recursos (out/2026): a grade da inicial e as páginas de cada recurso. Cada frase foi
// conferida no código do sistema em 22 e 23/10/2026 ou repete uma frase já conferida.
// Ficaram de fora, por não serem verdade ou não terem como ser conferidas: "funciona
// offline pelo Google", "confirmação pelo lembrete do Google", "AES-256 no prontuário",
// "Outlook no roadmap", "1000+ municípios", "50+ fusos", "horário de verão automático",
// "migração assistida", "modo férias", "relatório de repasse para o IR".
import { PERGUNTAS, type Pergunta } from './perguntas.ts';

export type Cartao = { icone: string; titulo: string; texto: string; link?: string };

export const GRADE: Cartao[] = [
  { icone: 'agenda-ok', titulo: 'Página pública de agendamento', texto: 'O paciente escolhe um horário livre no seu link, que também pode ficar dentro do seu site. Na primeira reserva, o cadastro dele é criado na hora.', link: '/recursos/agendamento-publico' },
  { icone: 'agenda', titulo: 'Google Agenda nos dois sentidos', texto: 'O que você marca aqui aparece no Google, e o que entra no Google aparece aqui. Cancelou uma sessão? Ela sai dos dois lugares.', link: '/recursos/agenda-google' },
  { icone: 'sino', titulo: 'Lembrete por e-mail', texto: 'Sai 24 horas antes da sessão e pode sair do seu próprio e-mail. Se o paciente marcou pelo link, o lembrete traz o link para cancelar.', link: '/recursos/agendamento-publico' },
  { icone: 'prancheta', titulo: 'Prontuário eletrônico', texto: 'Evolução por sessão, arquivos e foto na ficha. Só quem escreveu edita ou apaga, nem o dono da clínica.', link: '/recursos/prontuario-eletronico' },
  { icone: 'nota', titulo: 'Anamnese digital', texto: 'Você manda um link e o paciente preenche pelo celular, em casa. Se for paciente novo, o cadastro é criado quando ele envia.', link: '/recursos/anamnese-digital' },
  { icone: 'sorriso', titulo: 'Registro de humor', texto: 'Pelo portal, o paciente registra como está entre uma sessão e outra, e você vê os últimos 14 dias em gráfico.', link: '/recursos/portal-paciente' },
  { icone: 'recibo', titulo: 'Atestado, declaração e recibo', texto: 'Os modelos já trazem o nome, o CPF, a data e o valor. Você ajusta o texto do seu jeito e salva como modelo.', link: '/recursos/recibo-simples' },
  { icone: 'dinheiro', titulo: 'Financeiro do consultório', texto: 'Mensalidade ou sessão avulsa, crédito do paciente, política de cancelamento e o mês num olhar.' },
  { icone: 'nota', titulo: 'NFS-e nacional', texto: 'Para quem tem CNPJ: a nota sai daqui, no padrão nacional, com o seu certificado digital.', link: '/recursos/nfs-e-psicologia' },
  { icone: 'baixar', titulo: 'Receita Saúde', texto: 'Para quem atende como pessoa física: o arquivo do mês sai pronto, com prévia e aviso do que falta corrigir.', link: '/recursos/receita-saude' },
  { icone: 'recibo', titulo: 'Recibo simples', texto: 'Para a cidade que ainda não aceita a nota nacional. O recibo não substitui a nota, que segue pelo site da prefeitura.', link: '/recursos/recibo-simples' },
  { icone: 'pessoas', titulo: 'Portal do paciente', texto: 'Entrada com código, sem senha: próxima sessão, recibos e notas, anamnese e humor. Você escolhe o que fica liberado.', link: '/recursos/portal-paciente' },
  { icone: 'whats', titulo: 'Mensagens para o WhatsApp', texto: 'Escreva o modelo uma vez e mande em um clique, com a data da sessão já preenchida.' },
  { icone: 'predio', titulo: 'Clínicas', texto: 'Até 5 profissionais e 2 secretárias, agenda com salas, repasse calculado e a escolha de quem lê o quê.', link: '/recursos/multi-clinica' },
  { icone: 'dinheiro', titulo: 'Repasse por profissional', texto: 'A partir do que a clínica recebeu, o sistema desconta as taxas e aplica o acordo de cada profissional.', link: '/recursos/repasse-clinica' },
  { icone: 'globo', titulo: 'Atendimento em outro fuso', texto: 'Paciente em outro estado ou país? Cada um vê a sessão no próprio horário.', link: '/recursos/multi-fuso' },
  { icone: 'enviar', titulo: 'Traga o que você já tem', texto: 'Vem do Psicomanager? Pacientes e sessões entram pela planilha exportada, com opção de desfazer. A agenda do Google também pode ser importada.' },
  { icone: 'graf', titulo: 'De onde vêm os pacientes', texto: 'Estatísticas de origem, investimento em divulgação, quem começou e quem deixou de vir.' },
];

export type PaginaRecurso = {
  slug: string;
  titulo: string;
  seoTitulo: string;
  seoDescricao: string;
  intro: string;
  tela: string; // nome do componente da tela em src/components/novo/telas
  tela2?: string; // uma segunda tela, ao lado do "Como funciona"
  beneficios: [string, string][];
  passos: [string, string][];
  perguntas: Pergunta[];
  relacionados: string[];
};

const p = (q: string): Pergunta => {
  const achou = PERGUNTAS.find((x) => x.q === q);
  if (!achou) throw new Error('Pergunta não encontrada: ' + q);
  return achou;
};

export const PAGINAS: PaginaRecurso[] = [
  {
    slug: 'agendamento-publico',
    titulo: 'Página pública de agendamento',
    seoTitulo: 'Página de agendamento online para psicólogos',
    seoDescricao: 'O paciente marca pelo seu link, escolhe um horário livre e recebe o lembrete por e-mail. A reserva entra direto na agenda ou espera a sua aprovação.',
    intro: 'Um link seu para divulgar no Instagram, no Google ou dentro do seu site. O paciente escolhe um horário livre e a reserva cai na sua agenda.',
    tela: 'Reserva',
    tela2: 'Lembrete',
    beneficios: [
      ['Só horários livres', 'A página mostra os horários em que você está livre nos próximos 30 dias.'],
      ['Cadastro na primeira reserva', 'Paciente novo não precisa de cadastro antes: ele é criado quando a reserva chega.'],
      ['Entra direto ou espera você', 'A reserva pode entrar direto na agenda ou esperar a sua aprovação, e o sino avisa quando chega uma.'],
      ['Lembrete com link para cancelar', 'Um dia antes, o paciente recebe o lembrete por e-mail, com o link para cancelar se precisar.'],
      ['Dentro do seu site', 'A mesma página pode ficar dentro do seu site.'],
      ['Pix na confirmação', 'Se você quiser, a confirmação da reserva já mostra a sua chave Pix.'],
    ],
    passos: [
      ['Você ativa a sua página', 'E decide se as reservas entram direto ou esperam a sua aprovação.'],
      ['O paciente marca', 'Ele escolhe o dia e o horário, informa nome e e-mail e pede a reserva.'],
      ['A sessão entra na agenda', 'Com o lembrete marcado para o dia anterior e, se você usa, também no Google Agenda.'],
    ],
    perguntas: [
      p('O paciente consegue marcar sem eu cadastrar antes?'),
      { q: 'O paciente consegue remarcar pelo link?', a: 'Pelo link ele pode cancelar. Para trocar o horário, ele faz uma nova reserva ou combina com você.' },
      { q: 'Clínica com vários profissionais tem uma página só?', a: 'A clínica tem uma página com todos os profissionais, e cada um tem o próprio link. O paciente escolhe com quem quer marcar, e a reserva cai na agenda certa.' },
    ],
    relacionados: ['agenda-google', 'anamnese-digital', 'portal-paciente'],
  },
  {
    slug: 'agenda-google',
    titulo: 'Agenda integrada ao Google Agenda',
    seoTitulo: 'Agenda para psicólogos integrada ao Google Agenda',
    seoDescricao: 'A agenda do sistema e a do Google andam juntas, nos dois sentidos. Sessões que se repetem, bloqueios, feriados e a agenda que você já tem importada.',
    intro: 'A agenda do sistema e a do Google andam juntas, nos dois sentidos. Você usa a que estiver mais à mão.',
    tela: 'Agenda',
    tela2: 'Lembrete',
    beneficios: [
      ['Nos dois sentidos', 'O que você marca aqui aparece no Google, e o que entra no Google aparece aqui.'],
      ['Cancelou, sai dos dois', 'Uma sessão cancelada sai das duas agendas.'],
      ['Cada profissional com a sua conta', 'Na clínica, cada profissional liga a própria conta Google e escolhe a agenda que o sistema usa.'],
      ['Sessões que se repetem', 'Toda quarta às 10h, até você encerrar. Vale também para casal e grupo.'],
      ['Bloqueios e feriados', 'Férias, congresso ou almoço ficam bloqueados, e você escolhe, feriado por feriado, se atende.'],
      ['Traga a agenda que você já tem', 'As sessões que já estão no Google podem ser importadas.'],
    ],
    passos: [
      ['Ligue a sua conta Google', 'Em Configurações, na parte de Google Agenda e importação.'],
      ['Escolha a agenda', 'A agenda do Google que o sistema vai usar.'],
      ['Pronto', 'Daí em diante, o que muda num lado aparece no outro.'],
    ],
    perguntas: [
      p('A agenda conversa com o Google Agenda?'),
      { q: 'Preciso ter conta Google para usar a agenda?', a: 'Não. A agenda do sistema funciona sozinha; ligar o Google é opcional.' },
      { q: 'A ligação com o Google fica segura?', a: 'O acesso ao seu Google fica guardado com criptografia, e você pode desligar quando quiser.' },
    ],
    relacionados: ['agendamento-publico', 'multi-fuso', 'multi-clinica'],
  },
  {
    slug: 'prontuario-eletronico',
    titulo: 'Prontuário eletrônico',
    seoTitulo: 'Prontuário eletrônico para psicólogos',
    seoDescricao: 'Evolução por sessão, anamnese, arquivos e histórico do paciente num lugar só. Só quem escreveu edita, a secretária não lê e, na clínica, você escolhe quem lê o quê.',
    intro: 'Cada sessão com a sua evolução, a anamnese, os arquivos e o histórico do paciente num lugar só, com o sigilo que a psicologia pede.',
    tela: 'Prontuario',
    tela2: 'Humor',
    beneficios: [
      ['Evolução por sessão', 'Você escreve no prontuário da sessão, com formatação.'],
      ['Só quem escreveu edita', 'Ninguém edita ou apaga o registro de outro profissional, nem o dono da clínica.'],
      ['A secretária não lê', 'Ela cuida da agenda e, se você quiser, dos pagamentos, sem acesso ao que é clínico.'],
      ['Você escolhe quem lê', 'Na clínica: só quem escreveu, quem atende o paciente ou a equipe toda, e dá para mudar paciente por paciente.'],
      ['Arquivos e foto na ficha', 'Os anexos e a foto de cada paciente ficam guardados com ele.'],
      ['Histórico do que mudou', 'Evolução registrada, editada ou apagada fica no histórico, com data e autor.'],
    ],
    passos: [
      ['A anamnese chega antes', 'O paciente preenche pelo celular, em casa, antes da primeira sessão.'],
      ['Na sessão, a evolução', 'Você registra a sessão no prontuário, e só você edita o que escreveu.'],
      ['Entre as sessões, o humor', 'Pelo portal, o paciente registra como está, e você vê o gráfico antes da próxima sessão.'],
    ],
    perguntas: [
      p('Quem da equipe vê o prontuário?'),
      { q: 'O paciente vê o prontuário no portal?', a: 'Não. O portal mostra só o que você liberar para ele, e o prontuário não aparece lá.' },
      p('Os dados ficam no Brasil?'),
    ],
    relacionados: ['anamnese-digital', 'portal-paciente', 'multi-clinica'],
  },
  {
    slug: 'anamnese-digital',
    titulo: 'Anamnese digital',
    seoTitulo: 'Anamnese online para psicólogos',
    seoDescricao: 'Você manda um link e o paciente preenche a anamnese pelo celular, antes da primeira sessão. Paciente novo tem o cadastro criado quando envia.',
    intro: 'Você manda um link e o paciente preenche pelo celular, em casa, antes da primeira sessão.',
    tela: 'Anamnese',
    tela2: 'Prontuario',
    beneficios: [
      ['Pelo celular, em casa', 'O paciente responde no tempo dele, sem papel.'],
      ['Cadastro criado na hora', 'Se for paciente novo, o cadastro é criado quando ele envia.'],
      ['O sino avisa', 'Quando uma anamnese é preenchida, ela aparece nos seus avisos.'],
      ['Na ficha do paciente', 'As respostas ficam com o paciente, ao lado do prontuário.'],
    ],
    passos: [
      ['Você manda o link', 'Para o paciente novo ou para quem já atende.'],
      ['Ele preenche pelo celular', 'Sem senha e sem precisar instalar nada.'],
      ['Você lê antes da sessão', 'E chega à primeira conversa com a história em mãos.'],
    ],
    perguntas: [
      { q: 'O paciente precisa de senha para preencher?', a: 'Não. Ele abre pelo link que você mandou.' },
      p('O paciente consegue marcar sem eu cadastrar antes?'),
    ],
    relacionados: ['prontuario-eletronico', 'agendamento-publico', 'portal-paciente'],
  },
  {
    slug: 'nfs-e-psicologia',
    titulo: 'NFS-e para psicólogos',
    seoTitulo: 'Emissão de NFS-e para psicólogos',
    seoDescricao: 'Para quem tem CNPJ: a nota fiscal de serviço sai do sistema, no padrão nacional, com o seu certificado digital. Texto editável e PDF por e-mail para o paciente.',
    intro: 'Para quem tem CNPJ: a nota fiscal sai daqui, no padrão nacional, com o seu certificado digital, sem passar pelo site da prefeitura.',
    tela: 'Nota',
    tela2: 'Documentos',
    beneficios: [
      ['Padrão nacional', 'A nota sai no padrão nacional da NFS-e.'],
      ['Certificado guardado com criptografia', 'O certificado digital A1 e a senha dele ficam guardados criptografados.'],
      ['Código de serviço já configurado', 'O código de psicologia (04.16) já vem preenchido.'],
      ['Texto editável', 'Você revisa e ajusta o texto da nota antes de emitir.'],
      ['PDF para o paciente', 'O PDF da nota vai para o paciente por e-mail.'],
      ['Casal e grupo', 'A nota do casal ou do grupo vai para quem paga.'],
    ],
    passos: [
      ['Envie o seu certificado', 'E confira os dados da empresa em Configurações.'],
      ['Escolha as sessões do mês', 'Na tela Emitir Nota, com o total de cada paciente.'],
      ['Emita', 'A nota sai e o paciente recebe o PDF.'],
    ],
    perguntas: [p('Preciso ter CNPJ para emitir nota fiscal?'), p('E se a minha cidade não aceita a nota nacional?')],
    relacionados: ['receita-saude', 'recibo-simples', 'repasse-clinica'],
  },
  {
    slug: 'receita-saude',
    titulo: 'Receita Saúde',
    seoTitulo: 'Receita Saúde para psicólogos: o arquivo do mês pronto',
    seoDescricao: 'Para quem atende como pessoa física: o arquivo do Receita Saúde no layout oficial, com prévia, aviso do que falta corrigir e os recibos do mês num lote só.',
    intro: 'Para quem atende como pessoa física: o arquivo do mês sai pronto, no layout oficial, com prévia e aviso do que falta corrigir.',
    tela: 'Receita',
    tela2: 'Documentos',
    beneficios: [
      ['Layout oficial', 'Arquivo CSV no layout do Receita Saúde, com o código de ocupação 255 (psicólogo).'],
      ['Prévia antes de gerar', 'Você vê linha por linha, e o sistema aponta o que falta, como um CPF ausente.'],
      ['O mês num lote', 'Os recibos do mês num arquivo só, com até 1.000 linhas.'],
      ['Corrigir na hora', 'Faltou um dado? Você corrige a ficha e gera de novo.'],
    ],
    passos: [
      ['Escolha o mês', 'O sistema junta os recibos do período.'],
      ['Confira a prévia', 'Linha por linha, com os avisos do que falta.'],
      ['Baixe o arquivo', 'E envie à Receita pelo canal oficial.'],
    ],
    perguntas: [p('Preciso ter CNPJ para emitir nota fiscal?')],
    relacionados: ['recibo-simples', 'nfs-e-psicologia', 'prontuario-eletronico'],
  },
  {
    slug: 'recibo-simples',
    titulo: 'Recibo simples',
    seoTitulo: 'Recibo para psicólogos com os dados preenchidos',
    seoDescricao: 'O recibo da sessão com nome, CPF, valor e datas preenchidos, a partir do seu modelo. Para a cidade que ainda não aceita a nota nacional e para o Receita Saúde.',
    intro: 'O recibo das sessões com os dados já preenchidos. Na cidade que ainda não aceita a nota nacional, é ele que resolve o dia a dia.',
    tela: 'Documentos',
    tela2: 'Receita',
    beneficios: [
      ['Dados preenchidos', 'Nome, CPF, valor e as datas das sessões entram sozinhos.'],
      ['O seu modelo', 'Você ajusta o texto do seu jeito e salva como modelo.'],
      ['Não substitui a nota', 'O recibo não tem validade fiscal. Com CNPJ, a nota fiscal sai daqui também.'],
      ['Base do Receita Saúde', 'Como pessoa física, os recibos do mês viram o arquivo do Receita Saúde.'],
    ],
    passos: [
      ['Escolha o paciente e o período', 'As sessões entram no recibo.'],
      ['Revise o texto', 'E ajuste o que quiser antes de emitir.'],
      ['Emita', 'O recibo fica guardado com o paciente.'],
    ],
    perguntas: [p('E se a minha cidade não aceita a nota nacional?')],
    relacionados: ['receita-saude', 'nfs-e-psicologia', 'portal-paciente'],
  },
  {
    slug: 'portal-paciente',
    titulo: 'Portal do paciente',
    seoTitulo: 'Portal do paciente para psicólogos',
    seoDescricao: 'O paciente entra com um código, sem senha, e vê a próxima sessão, os recibos e as notas, preenche a anamnese e registra o humor. O prontuário não aparece no portal.',
    intro: 'Um lugar do paciente: ele entra com um código, sem senha, vê a próxima sessão, os recibos e as notas, preenche a anamnese e registra como está.',
    tela: 'Portal',
    tela2: 'Humor',
    beneficios: [
      ['Entrada com código', 'Sem senha para esquecer.'],
      ['Próxima sessão e histórico', 'Ele sabe quando é a próxima e o que já aconteceu.'],
      ['Recibos e notas', 'Os recibos e as notas fiscais dele num lugar só.'],
      ['Anamnese e humor', 'Ele preenche a anamnese e registra o humor entre as sessões.'],
      ['O que está em aberto', 'Ele vê o valor que falta pagar.'],
      ['Você libera o que quiser', 'Paciente por paciente. O prontuário não aparece no portal.'],
    ],
    passos: [
      ['Você libera o portal', 'E escolhe o que fica visível para aquele paciente.'],
      ['Ele recebe o código', 'E entra sem senha.'],
      ['Tudo dele num lugar', 'Sessões, recibos, notas, anamnese e humor.'],
    ],
    perguntas: [p('Como o paciente entra no portal?'), p('Atendo em casal e grupo. Funciona?')],
    relacionados: ['anamnese-digital', 'prontuario-eletronico', 'agendamento-publico'],
  },
  {
    slug: 'multi-clinica',
    titulo: 'Gestão de clínicas',
    seoTitulo: 'Sistema para clínicas de psicologia',
    seoDescricao: 'Agenda da equipe com salas, permissões por pessoa, quem lê o prontuário, quem vê a agenda e o repasse de cada profissional. Até 5 profissionais e 2 secretárias.',
    intro: 'A agenda da equipe com as salas, quem pode fazer o quê, quem lê o quê e o repasse de cada profissional, no plano Clínica.',
    tela: 'Equipe',
    tela2: 'Convite',
    beneficios: [
      ['Até 5 profissionais e 2 secretárias', 'Você e mais 4 profissionais, com 2 secretárias, sem pagar a mais por pessoa.'],
      ['Agenda com salas', 'O sistema não deixa marcar duas sessões na mesma sala no mesmo horário.'],
      ['Permissões por pessoa', 'No convite você escolhe a função e marca, item por item, o que a pessoa pode fazer.'],
      ['Quem lê o prontuário', 'Só quem escreveu, quem atende o paciente ou a equipe toda, e dá para mudar paciente por paciente.'],
      ['Quem vê a agenda de quem', 'Privada, anônima entre colegas ou total: você escolhe.'],
      ['Página da clínica', 'Uma página com todos os profissionais. O paciente escolhe com quem quer marcar.'],
    ],
    passos: [
      ['Convide a equipe', 'Com a função e as permissões de cada pessoa.'],
      ['Cadastre as salas', 'E cada sessão passa a ter a sua.'],
      ['Acompanhe o repasse', 'O sistema calcula o de cada profissional.'],
    ],
    perguntas: [p('Pago a mais por profissional na clínica?'), p('Quem da equipe vê o prontuário?')],
    relacionados: ['repasse-clinica', 'prontuario-eletronico', 'agendamento-publico'],
  },
  {
    slug: 'multi-fuso',
    titulo: 'Atendimento em outro fuso',
    seoTitulo: 'Atendimento online em outro fuso horário',
    seoDescricao: 'Paciente em outro estado ou país? A clínica e cada profissional têm o próprio fuso, e cada um vê a sessão no próprio horário.',
    intro: 'Paciente em outro estado ou país? Cada um vê a sessão no próprio horário, sem conta de cabeça.',
    tela: 'Portal',
    tela2: 'Agenda',
    beneficios: [
      ['Fuso da clínica e de cada profissional', 'A clínica tem o seu fuso, e cada profissional pode ter o próprio.'],
      ['Cada um no seu horário', 'O paciente vê a sessão no horário dele, e você, no seu.'],
      ['Configuração num lugar só', 'Em Configurações, na parte de Fuso horário.'],
    ],
    passos: [
      ['Confira o seu fuso', 'Em Configurações.'],
      ['Marque a sessão', 'Do jeito de sempre.'],
      ['Cada um vê no seu horário', 'Sem confusão de "meio-dia daqui ou daí".'],
    ],
    perguntas: [],
    relacionados: ['agenda-google', 'agendamento-publico', 'portal-paciente'],
  },
  {
    slug: 'repasse-clinica',
    titulo: 'Repasse por profissional',
    seoTitulo: 'Repasse da clínica para cada psicólogo',
    seoDescricao: 'O sistema calcula o repasse de cada profissional a partir do que a clínica recebeu: desconta a taxa do meio de pagamento e a taxa da clínica e aplica o acordo de cada um.',
    intro: 'Na clínica, o sistema calcula quanto vai para cada profissional a partir do que a clínica recebeu.',
    tela: 'Repasse',
    tela2: 'Equipe',
    beneficios: [
      ['Sobre o que entrou', 'O cálculo parte do valor que a clínica recebeu.'],
      ['Taxas na ordem certa', 'Primeiro a taxa do meio de pagamento, depois a taxa fixa da clínica por sessão, se houver.'],
      ['O acordo de cada um', 'Cada profissional com o seu modo de cálculo.'],
      ['O mês de cada profissional', 'O repasse do mês, profissional por profissional.'],
    ],
    passos: [
      ['Defina o acordo', 'De cada profissional da clínica.'],
      ['Registre os pagamentos', 'Do jeito de sempre.'],
      ['Veja o repasse', 'O sistema faz a conta.'],
    ],
    perguntas: [p('Pago a mais por profissional na clínica?')],
    relacionados: ['multi-clinica', 'nfs-e-psicologia', 'prontuario-eletronico'],
  },
];
