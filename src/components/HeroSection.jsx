import React from 'react';
import './HeroSection.css';
import Typewriter from './Typewriter';
import HeroIllustration from '../assets/cilab.png';

function HeroSection() {
  const heroTexts = [
    "Computational Intelligence Laboratory",
    "Advancing Deep Learning Frontiers",
    "Building Tomorrow's Intelligent World"
  ];

  return (
    <section className="hero-section">
      <div className="container hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-title">
            <Typewriter texts={heroTexts} />
          </h1>
          <p className="hero-subtitle">
            Desenvolvemos soluções de IA de para desafios do mundo real, focando em pesquisa, ética e impacto.
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
        <div className="hero-illustration-wrapper">
          <img src={HeroIllustration} alt="Ilustração de IA e Dado Mágico do CILAB" className="hero-illustration" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;