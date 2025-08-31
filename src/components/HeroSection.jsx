// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import Typewriter from './Typewriter';
// <<-- CONFIRME O NOME DO ARQUIVO E A EXTENSÃO AQUI! -->>
import HeroIllustration from '../assets/hero-illustration.png'; // Exemplo: ajuste se for .svg ou .jpg

function HeroSection() {
  const heroTexts = [
    "Laboratory Inteligency Computacional",
    "Pioneering AI Solutions",
    "Shaping Tomorrow's Intelligence"
  ];

  return (
    <section className="hero-section">
      {/* Container principal para o layout lado a lado */}
      <div className="container hero-content-wrapper">
        {/* Wrapper para o texto (título, subtítulo, botões) */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            <Typewriter texts={heroTexts} />
          </h1>
          <p className="hero-subtitle">
            Desenvolvemos soluções de IA de ponta para desafios do mundo real, focando em pesquisa, ética e impacto.
          </p>
          <div className="hero-actions">
            <a href="#what-we-use" className="button primary">
              Descubra Nossos Métodos
            </a>
            <a href="#projects" className="button secondary">
              Veja Nossos Projetos
            </a>
          </div>
        </div>
        {/* Wrapper para a imagem */}
        <div className="hero-illustration-wrapper">
          <img src={HeroIllustration} alt="Ilustração de IA e Dado Mágico do CILAB" className="hero-illustration" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;