import { motion } from "motion/react";
import { ShieldCheck, LockKeyhole } from "lucide-react";

export function Security() {
  return (
    <section id="seguranca" className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px] uppercase tracking-widest mb-6">
              <ShieldCheck className="w-3.5 h-3.5" /> Segurança Total
            </div>
            <h2 className="text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-6 tracking-tight">
              Sua clínica blindada.<br/> Sigilo profissional garantido.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Levamos a segurança e a privacidade a sério. Nossa infraestrutura atende aos mais rigorosos padrões para garantir que os dados dos seus pacientes e seu financeiro estejam sempre protegidos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-5 h-5" strokeWidth={2}/>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1 text-sm">Conformidade LGPD</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">Auditoria completa, log de acessos e consentimentos dinâmicos para prontuários.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <LockKeyhole className="w-5 h-5" strokeWidth={2}/>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1 text-sm">Criptografia AES-256</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">Dados sensíveis criptografados em repouso e backups diários criptografados.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:ml-auto w-full max-w-md relative pt-12 md:pt-0 mx-auto lg:mx-0">
             {/* Beautiful Behind Image */}
             <div className="absolute top-0 md:-top-10 right-0 w-[80%] h-[110%] rounded-[32px] overflow-hidden -rotate-3 scale-105 opacity-90 shadow-2xl z-0 hidden sm:block">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&auto=format&fit=crop" 
                  alt="Profissional de Psicologia usando o sistema de forma segura"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay"></div>
             </div>
             
             <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white/95 backdrop-blur-xl border border-white/60 p-8 rounded-[24px] text-center shadow-[0_20px_60px_rgba(0,0,0,0.12)] relative z-10 transform md:-translate-x-6 md:translate-y-4"
             >
               <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                 <ShieldCheck className="w-8 h-8 text-emerald-600"/>
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3 font-sans tracking-tight">Certificação de Segurança</h3>
               <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                 O Sistema Psicologia obedece rigorosamente às resoluções do CFP, garantindo a inviolabilidade dos prontuários eletrônicos e dos registros de cada sessão.
               </p>
               <button className="w-full text-blue-600 border border-gray-200 bg-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                 Ver Política de Privacidade
               </button>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
