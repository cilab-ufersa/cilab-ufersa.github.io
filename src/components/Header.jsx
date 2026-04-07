import React, { useState, useEffect } from 'react';
import './Header.css';
import LogoCILAB from '../assets/logo-cilab.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // trava o scroll do body quando menu mobile aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo" onClick={close}>
          <img src={LogoCILAB} alt="Logo CILAB" className="logo-icon" />
        </a>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            <li><a href="/" onClick={close}>Home</a></li>
            <li><a href="/#projects" onClick={close}>Projetos</a></li>
            <li><a href="#publications" onClick={close}>Publicações</a></li>
            <li><a href="/#team" onClick={close}>Equipe</a></li>
            <li><a href="/#contact" onClick={close}>Contato</a></li>
          </ul>
        </nav>

        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
