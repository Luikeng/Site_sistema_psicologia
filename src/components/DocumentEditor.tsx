import { motion } from "motion/react";
import { FileText, Edit3, Settings2, DownloadCloud, Sparkles } from "lucide-react";

export function DocumentEditor() {
  return (
    <section id="documentos" className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-[10px] uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Diferencial Exclusivo
            </div>
            <h2 className="text-4xl lg:text-5xl font-sans font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Central de Documentos <span className="text-blue-600">Profissional</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Não perca mais tempo preenchendo o mesmo atestado várias vezes. Nossa central inteligente permite <strong className="text-gray-900 font-semibold">Revisar e Emitir</strong> com base em modelos em segundos.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Editor Estilo "Microsoft Word"</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Utilize nosso editor WYSIWYG completo. Suporte a imagens redimensionáveis, alinhamento profissional em timbrados e formatação rica.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                  <Settings2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Validação de Variáveis</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Edite rapidamente variáveis no fluxo "Revisar e Emitir". Validamos automaticamente CPF, CRP, moeda e datas (mesmo retroativas).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Modelos Prontos</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Acesso imediato a modelos de Recibos, Atestados, Declarações e Relatórios organizados e prontos para uso em um clique.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            {/* Base Layer - Editor Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-snow-white rounded-[24px] p-6 border border-gray-200 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-4">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="ml-4 text-xs text-gray-500 font-medium font-mono uppercase">Recibo_Psicologia.pdf</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 min-h-[380px] font-sans text-gray-800">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop" 
                      alt="Avatar" 
                      className="w-10 h-10 rounded-full border border-gray-100 shadow-sm object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">Dr(a). Maria Silva</h4>
                      <p className="text-sm text-gray-500">CRP: 00/00000</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-brand-blue text-xl">RECIBO</p>
                    <p className="text-xs text-gray-400">Nº 2024-089</p>
                  </div>
                </div>

                <p className="mb-4 leading-relaxed text-sm">
                  Recebi de <span className="bg-brand-indigo/10 text-brand-indigo font-medium px-1 rounded border-b border-brand-indigo/30 border-dashed">Ana Beatriz Souza</span>,
                  portador(a) do CPF nº <span className="bg-brand-indigo/10 text-brand-indigo font-medium px-1 rounded border-b border-brand-indigo/30 border-dashed">123.456.789-00</span>, a importância de{' '}
                  <span className="bg-emerald-50 text-emerald-700 font-medium px-1 rounded border-b border-emerald-300 border-dashed">R$ 250,00</span> (duzentos e cinquenta reais),
                  referente a sessão de psicoterapia realizada em <span className="bg-brand-indigo/10 text-brand-indigo font-medium px-1 rounded border-b border-brand-indigo/30 border-dashed">15/05/2026</span>.
                </p>

                <div className="mt-16 text-center">
                  <div className="w-48 h-px bg-gray-300 mx-auto mb-2"></div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Assinatura do Profissional</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -left-10 top-1/2 p-5 bg-white/85 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-2xl hidden md:block w-72"
            >
              <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-4">Revisão Rápida</p>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Valor Atualizado (R$)</label>
                  <input type="text" value="250,00" readOnly className="w-full text-sm py-2 px-3 rounded-lg border border-gray-200 bg-snow-white text-gray-800 focus:outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Data Retroativa</label>
                  <input type="date" value="2026-05-15" readOnly className="w-full text-sm py-2 px-3 rounded-lg border border-gray-200 bg-snow-white text-gray-800 focus:outline-none" />
                </div>
              </div>
              <button className="mt-5 w-full bg-brand-indigo text-white text-sm py-2.5 rounded-xl font-bold hover:bg-brand-indigo-dark transition-colors flex justify-center gap-2 items-center shadow-md">
                <FileText className="w-4 h-4"/> Emitir Documento
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
