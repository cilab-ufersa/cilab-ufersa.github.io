import React from 'react';
import './Header.css'; // Importa os estilos específicos do Header
import LogoCILAB from '../assets/logo-cilab.png'; // <<-- DESCOMENTE E USE SE TIVER SUA LOGO SVG! -->>
// Se for PNG ou JPG, o import pode ser parecido, mas use a extensão correta.

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          {/* <<-- SE VOCÊ TEM SUA LOGO (SVG, PNG, JPG), DESCOMENTE ESTA LINHA -->> */}
          <img src={LogoCILAB} alt="Logo CILAB - Cérebro" className="logo-icon" />
          {/* <<-- E COMENTE OU REMOVA A LINHA ABAIXO -->> */}
          {/* CILAB */} {/* Texto provisório da logo se não tiver o SVG */}
        </a>
        <nav className="nav">
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#what-we-use">O que Usamos</a></li>
            <li><a href="#network-types">Tipos de Rede</a></li>
            <li><a href="#research-focus">Foco das Pesquisas</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;