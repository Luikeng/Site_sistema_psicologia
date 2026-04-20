import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Helper handling anchor links if we are not in Home
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHome) {
      e.preventDefault();
      window.location.href = `/${hash}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px]">
          <div className="flex items-center gap-2">
            <Link to="/" className="font-sans font-extrabold text-gray-900 text-xl tracking-tight">
              SISTEMA <span className="text-blue-600">PSICOLOGIA</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#recursos" onClick={(e) => handleAnchorClick(e, '#recursos')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Funcionalidades</a>
            <a href="#documentos" onClick={(e) => handleAnchorClick(e, '#documentos')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Central de Documentos</a>
            <a href="#seguranca" onClick={(e) => handleAnchorClick(e, '#seguranca')} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Segurança</a>
            <Link to="/privacidade" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Privacidade</Link>
            <Link to="/termos" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Termos</Link>
          </div>

          <div className="hidden md:flex items-center">
            <a href="https://sistema.sistemapsicologia.com.br/" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-blue-600 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-sm text-sm">
              Login
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <a 
                href="#recursos" 
                onClick={(e) => { handleAnchorClick(e, '#recursos'); setIsMobileMenuOpen(false); }}
                className="block py-3 text-base font-medium text-gray-900 border-b border-gray-50"
              >
                Funcionalidades
              </a>
              <a 
                href="#documentos" 
                onClick={(e) => { handleAnchorClick(e, '#documentos'); setIsMobileMenuOpen(false); }}
                className="block py-3 text-base font-medium text-gray-900 border-b border-gray-50"
              >
                Central de Documentos
              </a>
              <a 
                href="#seguranca" 
                onClick={(e) => { handleAnchorClick(e, '#seguranca'); setIsMobileMenuOpen(false); }}
                className="block py-3 text-base font-medium text-gray-900 border-b border-gray-50"
              >
                Segurança
              </a>
              <a 
                href="#planos" 
                onClick={(e) => { handleAnchorClick(e, '#planos'); setIsMobileMenuOpen(false); }}
                className="block py-3 text-base font-medium text-gray-900 border-b border-gray-50"
              >
                Preços
              </a>
              <Link 
                to="/privacidade" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-base font-medium text-gray-900 border-b border-gray-50"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/termos" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-base font-medium text-gray-900 border-b border-gray-50"
              >
                Termos de Serviço
              </Link>
              <a 
                href="https://sistema.sistemapsicologia.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 block w-full text-center bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-sm"
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
