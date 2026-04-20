import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans antialiased text-gray-900 bg-[#FAFAFA] selection:bg-brand-indigo/30 selection:text-brand-indigo-dark overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/termos" element={<Terms />} />
          </Routes>
        </main>
        {/* We can pass empty function to onOpenDoc since docs modal will be implemented differently or inside Home */}
        <Footer onOpenDoc={(doc) => console.log(doc)} />
      </div>
    </Router>
  );
}
