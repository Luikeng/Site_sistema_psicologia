export function Privacy() {
  return (
    <div className="pt-32 pb-20 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 font-sans tracking-tight">Política de Privacidade</h1>
        
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-700 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introdução</h2>
            <p>
              O <strong>Sistema Psicologia</strong> está comprometido com a privacidade e a segurança dos dados de seus usuários (profissionais de psicologia) e, por extensão, dos pacientes cujos dados são inseridos na plataforma. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações de acordo com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)</strong> e demais legislações aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Coleta e Uso de Dados</h2>
            <p className="mb-3">Coletamos informações estritamente necessárias para a prestação de nossos serviços, o que inclui, mas não se limita a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados Cadastrais do Profissional:</strong> Nome completo, CPF/CNPJ, CRP, endereço de e-mail e dados de contato para emissão de notas e gestão da conta.</li>
              <li><strong>Dados Sensíveis (Pacientes):</strong> Prontuários, evoluções clínicas, diagnósticos e apontamentos de sessões inseridos pelos profissionais (Atuamos apenas como <em>Operadores</em> destes dados, sendo o Psicólogo o <em>Controlador</em> perante a LGPD).</li>
              <li><strong>Dados de Integração:</strong> Informações de calendário caso o profissional opte por conceder permissão de integração (ex: Google Calendar).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Armazenamento e Transferência Internacional de Dados</h2>
            <p>
              Adotamos os mais rigorosos padrões de segurança da informação, utilizando infraestrutura em nuvem de ponta com criptografia de ponta a ponta e em repouso. 
            </p>
            <p className="mt-3">
              Ressaltamos que, para garantir a alta disponibilidade, redundância e segurança contínua de nossos serviços, as informações coletadas podem ser transferidas ou armazenadas em servidores localizados <strong>fora do Brasil</strong>. 
              Declaramos que toda armazenagem ou transferência internacional de dados é realizada <strong>exclusivamente para países ou infraestruturas que proporcionem grau de proteção de dados adequado</strong> ou mediante obrigações contratuais rigorosas, em total consonância com as exigências da LGPD (Art. 33).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              O Sistema Psicologia não comercializa, aluga ou compartilha seus dados cadastrais ou os dados sigilosos de seus pacientes com terceiros para fins publicitários. O compartilhamento ocorre apenas quando necessário para o funcionamento do sistema (por exemplo, provedores de hospedagem em nuvem submetidos também às regras da LGPD) ou por determinação legal e/ou judicial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Direitos dos Titulares (LGPD)</h2>
            <p className="mb-3">Garantimos aos nossos usuários os direitos previstos no Art. 18 da LGPD, que incluem:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso aos dados de maneira clara e facilitada;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço (exportação de prontuários, por exemplo).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Alterações na Política de Privacidade</h2>
            <p>
              Reservamo-nos o direito de modificar esta Política a qualquer momento. Alterações significativas serão sempre comunicadas aos nossos usuários com antecedência através da própria plataforma ou por e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contato e DPO (Encarregado de Dados)</h2>
            <p>
              Se houver dúvidas sobre o manuseio dos seus dados ou de seus pacientes, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através dos nossos canais de suporte ou no painel de administração da sua conta.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
