import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenDoc: (docId: string) => void;
}

export function Footer({ onOpenDoc }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center text-white font-outfit font-bold text-xs">
                S
              </div>
              <span className="font-outfit font-bold text-lg text-brand-blue">
                Sistema Psicologia
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Simplificando a rotina do psicólogo clínico para que ele possa focar no que realmente importa: a saúde mental.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 font-outfit">Produto</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><button onClick={() => onOpenDoc('prontuario-digital')} className="hover:text-brand-blue transition-colors text-left">Prontuário Digital</button></li>
              <li><button onClick={() => onOpenDoc('gestao-financeira')} className="hover:text-brand-blue transition-colors text-left">Gestão Financeira e NFS-e</button></li>
              <li><button onClick={() => onOpenDoc('editor-documentos')} className="hover:text-brand-blue transition-colors text-left">Editor de Documentos</button></li>
              <li><button onClick={() => onOpenDoc('portal-paciente')} className="hover:text-brand-blue transition-colors text-left">Portal do Paciente</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 font-outfit">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><button onClick={() => onOpenDoc('sobre-nos')} className="hover:text-brand-blue transition-colors text-left">Sobre Nós</button></li>
              <li><button onClick={() => onOpenDoc('contato')} className="hover:text-brand-blue transition-colors text-left">Contato</button></li>
              <li><button onClick={() => onOpenDoc('central-de-ajuda')} className="hover:text-brand-blue transition-colors text-left">Central de Ajuda</button></li>
              <li><button onClick={() => onOpenDoc('blog')} className="hover:text-brand-blue transition-colors text-left">Blog</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 font-outfit">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/termos" className="hover:text-brand-blue transition-colors text-left block">Termos de Serviço</Link></li>
              <li><Link to="/privacidade" className="hover:text-brand-blue transition-colors text-left block">Política de Privacidade</Link></li>
              <li><button onClick={() => onOpenDoc('lgpd')} className="hover:text-brand-blue transition-colors text-left">Conformidade LGPD</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sistema Psicologia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Brasil</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Português (BR)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
