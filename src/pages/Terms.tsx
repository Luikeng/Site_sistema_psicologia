export function Terms() {
  return (
    <div className="pt-32 pb-20 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 font-sans tracking-tight">Termos de Serviço</h1>
        
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-700 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao criar uma conta e utilizar o <strong>Sistema Psicologia</strong>, você (aqui referido como "Usuário" ou "Profissional") concorda em se vincular a estes Termos de Serviço. Solicitamos a leitura criteriosa deste documento. A discordância de qualquer cláusula implica na impossibilidade de uso da plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso Responsável da Plataforma</h2>
            <p>
              A nossa plataforma foi projetada como Software as a Service (SaaS) voltado a otimizar a gestão de clínicas e consultórios de psicologia. O Usuário concorda em:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Fornecer informações cadastrais corretas e atualizadas.</li>
              <li>Proteger suas credenciais de uso (login, senha e tokens).</li>
              <li>Utilizar a plataforma apenas para fins vinculados à sua atividade profissional, condizentes com a ética da psicologia e as leis vigentes.</li>
              <li>Não subverter, aplicar engenharia reversa ou explorar eventuais falhas de segurança do software.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Integrações de Terceiros e Uso de APIs (Google Agenda)</h2>
            <p className="mb-3">
              Para maior conveniência na sincronização e gestão de horários e atendimento de pacientes, o Sistema Psicologia permite a integração com serviços de terceiros através de APIs de Parceiros, especificamente a <strong>Google Calendar API (Google Agenda)</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Finalidade e Acesso Estrito:</strong> Ao integrar a sua Google Agenda com nossa plataforma, o nosso sistema solicitará permissão de leitura e/ou gravação. Garantimos que o uso de informações recebidas das APIs do Google está estritamente limitado à sincronização entre as consultas do nosso software e o seu calendário pessoal ou profissional (eventos de agenda).</li>
              <li><strong>Vínculo às Políticas de Terceiros:</strong> O uso do Google Agenda ou demais integrações está também sujeito à Política de Privacidade e aos Termos de Serviço dos provedores (ex: Google LLC). Não nos responsabilizamos por falhas, indisponibilidades momentâneas ou perda de garantias derivadas exclusivamente da API de terceiros.</li>
              <li><strong>Uso Responsável das APIs:</strong> O Profissional compromete-se a revogar os tokens de acesso via página da sua conta Google ou do próprio painel do nosso sistema, caso não deseje mais a sincronização mútua de sua agenda. O sistema retém, contudo, as informações transferidas para processamento histórico necessário, obedecendo às limitações da LGPD.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disponibilidade do Serviço</h2>
            <p>
              O Sistema Psicologia é oferecido "as is" (reconhecido no estado em que se encontra). Realizamos os nossos melhores esforços comerciais para manter a plataforma sempre acessível durante no mínimo 99% do ano. Contudo, janelas de manutenção, atualizações do sistema ou motivos de força maior não garantem uptime ininterrupto garantido com SLAs impositivos em todos os planos não-Enterprise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Planos e Inadimplência</h2>
            <p>
              Os valores dos nossos planos de assinatura, mensais ou anuais, bem como os recursos contidos em cada um, podem ser reajustados, e os avisos sobre essas mudanças serão comunicados com pelo menos 30 (trinta) dias de antecedência. Em caso de falta de pagamento, após as devidas contatactações, o acesso ao serviço ficará restrito (modo somente leitura) até a devida regularização.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propriedade Intelectual</h2>
            <p>
              Todos os direitos intelectuais e industriais sobre o software, marca, códigos, design de interfaces e logotipos pertencem integralmente ao Sistema Psicologia. O licenciamento de uso da plataforma como SaaS não constitui transferência de tecnologia ou a compra de direito de propriedade do software pelo usuário.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Fórum Aplicável</h2>
            <p>
              Fica eleito o foro da Comarca na qual nossa empresa (ou pessoa responsável designada para operação local) está registrada no Brasil para dirimir quaisquer dúvidas oriundas deste Termo de Serviço.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
