import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-gray-100/50 bg-white">
      {/* Animated Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0"
      >
        <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
      </video>

      {/* White gradient overlay to ensure text remains readable over the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90 pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-medium text-xs tracking-wide mb-8 border border-emerald-100/50"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            CONFORMIDADE LGPD ATIVA
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.15] mx-auto max-w-4xl"
            style={{ textWrap: "balance" }}
          >
            A plataforma All-in-One que <span className="text-blue-600">desburocratiza</span> a sua clínica.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ textWrap: "balance" }}
          >
            Foque no que realmente importa: os seus pacientes. O Sistema Psicologia absorve a papelada e unifica agenda, prontuários e finanças, <strong className="text-gray-900 font-semibold">desburocratizando totalmente a sua rotina</strong>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://sistema.sistemapsicologia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 sm:py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-[0_4px_14px_rgba(37,99,235,0.4)] text-base hover:-translate-y-0.5 text-center flex items-center justify-center"
            >
              Começar Teste Grátis
            </a>
            <a 
              href="https://sistema.sistemapsicologia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 sm:py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-all border border-gray-200 text-base shadow-sm text-center flex items-center justify-center"
            >
              Acessar Sistema
            </a>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-text-gray font-medium"
          >
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Plano Individual</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Plano Clínicas (Multiusuário)</span>
          </motion.div>
        </div>

        {/* Minimal Mockup Visualization */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl lg:max-w-6xl"
        >
          {/* Subtle glow behind the mockup */}
          <div className="absolute inset-0 bg-blue-500/5 rounded-[32px] blur-2xl transform translate-y-6"></div>

          <div className="relative rounded-[24px] bg-gray-100/60 p-2 sm:p-3 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden backdrop-blur-sm">
             
             <div className="bg-white rounded-[16px] overflow-hidden flex h-[500px] lg:h-[600px] shadow-sm relative border border-gray-200/60 ring-1 ring-black/5">
                {/* Dynamic React Component Replica of the Software Dashboard */}
                <div className="absolute inset-0 w-full h-full">
                  <DashboardMockup />
                </div>
                
                {/* Overlay to ensure floating cards stand out, adjusting gradient since background is now white */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none hidden sm:block"></div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
