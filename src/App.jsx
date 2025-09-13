import React, { useState, useEffect } from 'react';
import Header from './components/Header'; // Importa o componente Header
import HomePage from './pages/HomePage';   // Importa o componente HomePage
import PublicationsPage from './pages/PublicationsPage'; // Importa a página de publicações
import LibrasProjectPage from './pages/LibrasProjectPage'; // Importa a página do projeto Libras

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simple routing based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'publications') {
        setCurrentPage('publications');
      } else if (hash === 'libras') {
        setCurrentPage('libras');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange(); // Check initial hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'publications':
        return <PublicationsPage />;
      case 'libras':
        return <LibrasProjectPage />;
      default:
        return (
          <div>
            <Header />
            <HomePage />
          </div>
        );
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;