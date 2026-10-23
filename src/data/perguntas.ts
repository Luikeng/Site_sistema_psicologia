// Perguntas da página inicial nova (out/2026). Cada resposta foi conferida no
// código do sistema ou nos termos de uso; nada aqui promete o que o sistema não faz.
export type Pergunta = { q: string; a: string };

export const PERGUNTAS: Pergunta[] = [
  {
    q: 'Preciso de cartão para testar?',
    a: 'Não. Você cria a conta com nome, e-mail e senha e usa o sistema por 30 dias, sem cartão. Se fizer sentido para a sua rotina, escolhe um plano.',
  },
  {
    q: 'Preciso ter CNPJ para emitir nota fiscal?',
    a: 'Para a nota fiscal, sim: o sistema emite a NFS-e no padrão nacional para quem tem CNPJ, com o seu certificado digital. Se você atende como pessoa física, o caminho é o Receita Saúde, e o sistema prepara o arquivo para você.',
  },
  {
    q: 'E se a minha cidade não aceita a nota nacional?',
    a: 'Enquanto ela não aceita, a nota continua sendo feita pelo site da prefeitura. O resto funciona igual: agenda, prontuário, financeiro e o recibo simples.',
  },
  {
    q: 'O paciente consegue marcar sem eu cadastrar antes?',
    a: 'Consegue. Na primeira reserva pela sua página, o cadastro dele é criado na hora. Você decide se a reserva entra direto ou espera a sua aprovação.',
  },
  {
    q: 'A agenda conversa com o Google Agenda?',
    a: 'Sim, nos dois sentidos. O que você marca no sistema aparece no Google e o que entra no Google aparece no sistema. Se você cancela uma sessão, ela sai dos dois.',
  },
  {
    q: 'Já uso outro sistema. Consigo trazer meus dados?',
    a: 'Se você vem do Psicomanager, pacientes e sessões entram pela planilha exportada, com opção de desfazer. A agenda do Google também pode ser importada. Para outros casos, fale com a gente.',
  },
  {
    q: 'Pago a mais por profissional na clínica?',
    a: 'Não. O plano Clínica inclui até 5 profissionais e 2 secretárias. Para uma equipe maior, a gente monta um plano personalizado.',
  },
  {
    q: 'Quem da equipe vê o prontuário?',
    a: 'Na clínica, você escolhe: cada profissional lê só o que escreveu, o dos pacientes que atende ou tudo, e dá para mudar paciente por paciente. A secretária não lê prontuário, e só quem escreveu uma evolução pode editá-la ou apagá-la, nem o dono da clínica.',
  },
  {
    q: 'Os dados ficam no Brasil?',
    a: 'O banco de dados fica em São Paulo. Alguns serviços de apoio são de empresas de fora, como o armazenamento dos arquivos anexados, o envio de e-mails e o pagamento da assinatura, nos termos da LGPD.',
  },
  {
    q: 'Como o paciente entra no portal?',
    a: 'Com um código, sem precisar de senha. Lá ele vê a próxima sessão, recibos e notas, preenche a anamnese e registra o humor. Você escolhe o que fica liberado para cada um.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Pode, sem multa e sem fidelidade. O acesso segue até o fim do período já pago, e se o cancelamento for em até 7 dias depois da primeira cobrança, o reembolso é integral.',
  },
  {
    q: 'Atendo em casal e grupo. Funciona?',
    a: 'Funciona. A sessão de casal, família ou grupo tem prontuário e financeiro próprios, a nota vai para quem paga e cada participante vê a sessão no próprio portal.',
  },
];
