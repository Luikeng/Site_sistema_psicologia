import { useState } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { DocumentEditor } from '../components/DocumentEditor';
import { Security } from '../components/Security';
import { Pricing } from '../components/Pricing';
import { DocsModal } from '../components/DocsModal';

export function Home() {
  const [activeDocId, setActiveDocId] = useState<string | null>(null);

  // Note: we can pass down activeDocId differently or keep it here if DocsModal is just for the other docs.
  // Wait, DocsModal was handling terms and privacy before. Now they are isolated pages.
  // Let's assume other docs might still use DocsModal if they click "Sobre Nós" or "Prontuário Digital".

  return (
    <>
      <Hero />
      <Features />
      <DocumentEditor />
      <Security />
      <Pricing />
      
      <DocsModal docId={activeDocId} onClose={() => setActiveDocId(null)} />
    </>
  );
}
