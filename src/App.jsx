import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PublicationsPage from './pages/PublicationsPage';
import LibrasProjectPage from './pages/LibrasProjectPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
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

    handleHashChange();
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