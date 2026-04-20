import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { docsContent } from '../data/docsContent';

interface DocsModalProps {
  docId: string | null;
  onClose: () => void;
}

export function DocsModal({ docId, onClose }: DocsModalProps) {
  useEffect(() => {
    if (docId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [docId]);

  if (!docId) return null;

  const content = docsContent[docId as keyof typeof docsContent];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-snow-white">
            <h2 className="text-xl font-bold text-brand-blue">{content?.title || 'Documentação'}</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 sm:p-8 overflow-y-auto">
             {content ? (
                <div className="prose prose-sm sm:prose-base prose-blue max-w-none text-text-gray leading-relaxed" dangerouslySetInnerHTML={{ __html: content.body }} />
             ) : (
                <p>Conteúdo não encontrado.</p>
             )}
          </div>
          <div className="p-6 border-t border-gray-100 bg-snow-white flex justify-end">
            <button onClick={onClose} className="px-6 py-2 bg-brand-blue text-white rounded-xl font-medium hover:bg-blue-900 transition-colors">
                Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
