import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import './ProjectsSection.css';

import librasGif from '../assets/libras.gif';
import crackGif from '../assets/crack.gif';

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-glow" aria-hidden="true" />

      <div className="projects-inner">
        <header className="projects-header">
          <span className="projects-eyebrow">
            <span className="projects-eyebrow-dot" />
            PROJETOS DO LABORATÓRIO
          </span>
          <h2 className="projects-title">
            Pesquisa aplicada com <em>impacto real</em>.
          </h2>
          <p className="projects-subtitle">
            Iniciativas em andamento no CiLab que aplicam Inteligência Computacional
            para resolver problemas concretos — da inclusão social ao monitoramento
            de infraestrutura e saúde.
          </p>
        </header>

        <div className="projects-bento">
          {/* ── Card grande em destaque ── */}
          <article className="project-card project-card--featured">
            <div className="project-media">
              <img src={librasGif} alt="Demonstração de reconhecimento de Libras" />
              <div className="project-media-overlay" />
            </div>

            <div className="project-content">
              <div className="project-tags">
                <span className="project-tag">Visão Computacional</span>
                <span className="project-tag">Deep Learning</span>
                <span className="project-tag">Acessibilidade</span>
              </div>

              <h3 className="project-name">
                Língua Brasileira de Sinais <em>(Libras)</em>
              </h3>
              <p className="project-desc">
                Sistemas de reconhecimento e tradução automática de Libras
                utilizando visão computacional e aprendizado profundo, promovendo
                a inclusão da comunidade surda em ambientes educacionais e digitais.
              </p>

              <a href="#libras" className="project-cta">
                Conhecer o projeto
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </article>

          {/* ── Card menor 1 ── */}
          <article className="project-card project-card--small">
            <div className="project-media project-media--small">
              <img src={crackGif} alt="Detecção de fissuras em edificações" />
              <div className="project-media-overlay" />
            </div>

            <div className="project-content">
              <div className="project-tags">
                <span className="project-tag">Deep Learning</span>
                <span className="project-tag">Engenharia Civil</span>
              </div>

              <h3 className="project-name">
                Patologias em <em>Edificações</em>
              </h3>
              <p className="project-desc">
                Algoritmos de visão computacional para identificar fissuras,
                rachaduras e patologias estruturais a partir da análise de imagens.
              </p>

              <span className="project-cta project-cta--ghost">
                Em desenvolvimento
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </article>

          {/* ── Card menor 2 ── */}
          <article className="project-card project-card--small">
            <div className="project-media project-media--small project-media--icon">
              <div className="project-icon-bg" aria-hidden="true">
                <FontAwesomeIcon icon={faHeartPulse} />
              </div>
              <div className="project-media-overlay" />
            </div>

            <div className="project-content">
              <div className="project-tags">
                <span className="project-tag">Saúde Digital</span>
                <span className="project-tag">Machine Learning</span>
              </div>

              <h3 className="project-name">
                Saúde e Bem-estar <em>Feminino</em>
              </h3>
              <p className="project-desc">
                Soluções inteligentes para monitoramento e predição de aspectos
                relacionados à saúde da mulher, incluindo ciclos menstruais e
                condições endócrinas.
              </p>

              <span className="project-cta project-cta--ghost">
                Em desenvolvimento
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
