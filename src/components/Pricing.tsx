import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="planos" className="py-16 lg:py-24 bg-snow-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-4 tracking-tight">
            Planos sob medida para o seu momento
          </h2>
          <p className="text-lg text-gray-600">
            Comece grátis. Expanda para sua clínica quando precisar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Individual */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col hover:border-gray-200 transition-colors"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 font-sans mb-2 tracking-tight">Individual</h3>
              <p className="text-gray-500 text-sm">Para o psicólogo autônomo focado na evolução clínica.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">R$ 39,90</span>
              <span className="text-gray-500 font-medium">/mês</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-gray-900 font-medium">
                <Check className="w-5 h-5 text-emerald-500" /> Agenda Bidirecional + Prontuário LGPD
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-900 font-medium">
                <Check className="w-5 h-5 text-emerald-500" /> Central de Documentos WYSIWYG
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-900 font-medium">
                <Check className="w-5 h-5 text-emerald-500" /> Painel do Paciente Simplificado
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-900 font-medium">
                <Check className="w-5 h-5 text-emerald-500" /> Financeiro e Emissão de Recibos
              </li>
            </ul>

            <a href="https://sistema.sistemapsicologia.com.br/" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl border border-gray-200 text-blue-600 font-bold hover:bg-gray-50 transition-colors shadow-sm block text-center">
              Começar Teste Grátis
            </a>
          </motion.div>

          {/* Clínica */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-blue-600 rounded-[24px] p-8 border border-blue-600 shadow-[0_20px_40px_rgba(37,99,235,0.2)] relative flex flex-col"
          >
            <div className="absolute top-0 right-4 sm:right-8 transform -translate-y-1/2">
              <span className="bg-blue-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-blue-900/50 whitespace-nowrap">
                O mais completo
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white font-sans mb-2 tracking-tight">Clínica</h3>
              <p className="text-blue-100 text-sm">Organize secretárias, salas e parceiros financeiros.</p>
            </div>
            <div className="mb-8 border-b border-white/10 pb-6">
              <span className="text-4xl font-bold text-white">R$ 59,90</span>
              <span className="text-blue-100 font-medium font-sans">/mês + R$ 49/prof.</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-white font-medium">
                <Check className="w-5 h-5 text-blue-300 flex-shrink-0" /> Tudo do plano Individual
              </li>
              <li className="flex items-start gap-3 text-sm text-white font-medium">
                <Check className="w-5 h-5 text-blue-300 flex-shrink-0" /> Gestão de Multissalas de Atendimento
              </li>
              <li className="flex items-start gap-3 text-sm text-white font-medium">
                <Check className="w-5 h-5 text-blue-300 flex-shrink-0" /> Usuário "Secretária(o)" (Gestão de Recepção)
              </li>
              <li className="flex items-start gap-3 text-sm text-white font-medium">
                <Check className="w-5 h-5 text-blue-300 flex-shrink-0" /> Repasses Financeiros Multi-moeda Integrados
              </li>
            </ul>

            <a href="https://sistema.sistemapsicologia.com.br/" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-white text-blue-600 font-bold shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-colors block text-center">
              Começar Teste Grátis
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
