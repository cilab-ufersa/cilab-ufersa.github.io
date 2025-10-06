import React from 'react';
import './Header.css';
import LogoCILAB from '../assets/logo-cilab.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src={LogoCILAB} alt="Logo CILAB - Cérebro" className="logo-icon" />
        </a>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#publications">Publicações</a></li>
            <li><a href="#team">Equipe</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;