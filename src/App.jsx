import React from 'react';
import Header from './components/Header'; // Importa o componente Header
import HomePage from './pages/HomePage';   // Importa o componente HomePage

function App() {
  return (
    <div>
      <Header />   {/* Renderiza o Header no topo da página */}
      <HomePage /> {/* Renderiza a HomePage abaixo do Header */}
    </div>
  );
}

export default App;