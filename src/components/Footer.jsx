import React from 'react';
import './Footer.css'; // Importa os estilos específicos do Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} CILAB. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;