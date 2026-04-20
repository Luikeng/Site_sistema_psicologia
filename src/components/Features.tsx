import React from "react";
import { motion } from "motion/react";
import { CalendarSync, HeartPulse, Building2, WalletCards, ShieldCheck, Pocket, CalendarClock, Users2 } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  badge?: string;
}

function FeatureCard({ title, description, icon: Icon, className = "", badge }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white p-6 sm:p-8 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all flex flex-col h-full relative overflow-hidden group ${className}`}
    >
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
        {badge && (
          <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-emerald-100/50">
            {badge}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight relative z-10">{title}</h3>
      <p className="text-[15px] text-gray-500 leading-relaxed flex-1 relative z-10">{description}</p>
      
      {/* Decorative gradient corner */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl group-hover:bg-blue-100/50 transition-colors z-0"></div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="recursos" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-6 tracking-tight">
            Para o consultório individual <br className="hidden sm:block"/> 
            <span className="text-blue-600">ou para a sua clínica completa.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nós mapeamos cada detalhe da rotina psicológica para criar módulos perfeitos. Do agendamento que funciona até sem internet à secretária organizando suas salas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* L1 - Span 2 */}
          <FeatureCard
            className="md:col-span-2 lg:col-span-2"
            title="A Agenda Perfeita (Sincronização 2-way)"
            description="Integração bidirecional severa com o Google Agenda. Notificações automáticas via Google, gerenciamento 100% offline (usando o App do próprio Google que atualizará o sistema quando conectar) e configuração total de sessões recorrentes com apenas 1 clique."
            icon={CalendarSync}
            badge="Super Automação"
          />
          {/* L1 - Span 1 */}
          <FeatureCard
            title="Acompanhamento Financeiro"
            description="Diga adeus às planilhas. Dashboard visual do seu faturamento mensal, histórico de recebimentos, previsão de caixa e controle de pagamentos atrasados de forma elegante."
            icon={WalletCards}
          />
          
          {/* L2 - Span 1 */}
          <FeatureCard
             title="Painel do Paciente"
             description="Deixe que o paciente visualize os próprios agendamentos, baixe recibos e acesse lembretes. Reduza as mensagens do WhatsApp criando um portal exclusivo para ele."
             icon={HeartPulse}
          />
          {/* L2 - Span 1 */}
          <FeatureCard
             title="Prontuário Eletrônico"
             description="Registro de sessões, dados sensíveis e anamnese em formato criptografado e blindado. Adequação 100% à LGPD para a sua tranquilidade e do CRP."
             icon={ShieldCheck}
          />
          {/* L2 - Span 1 */}
          <FeatureCard
             title="Personalização por Paciente"
             description="Valores de consulta que variam? Sem problemas. Personalize o valor da sessão, formas de pagamento e recorrência individualmente para cada paciente na sua base."
             icon={Pocket}
          />

          {/* L3 - Span 1 */}
          <FeatureCard
             title="Gestão de Múltiplas Salas"
             description="Sua clínica física tem 3 consultórios? Cruze a agenda dos seus profissionais com a disponibilidade das salas físicas evitando choques e dupla reserva."
             icon={Building2}
          />
          {/* L3 - Span 2 */}
          <FeatureCard
             className="md:col-span-2 lg:col-span-2"
             title='Gestão de Equipes & Nível "Secretária"'
             description="Escale sua operação com Workspaces separados (permissões de acesso). Crie usuários limitados para recepcionistas (acessam apenas a agenda e confirmações) e gerencie o repasse financeiro de cada psicólogo parceiro da clínica."
             icon={Users2}
             badge="Plano Clínica"
          />
        </div>
      </div>
    </section>
  );
}
