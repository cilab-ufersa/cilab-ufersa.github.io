import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom,
  faEye,
  faChartBar,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import './ResearchSection.css';

const areas = [
  {
    number: '01',
    icon: faAtom,
    titleStart: 'Machine Learning &',
    titleEnd: 'Deep Learning',
    description:
      'Desenvolvemos algoritmos e modelos avançados de aprendizado de máquina, incluindo redes neurais profundas, para resolver problemas complexos de classificação, predição e geração.',
    stack: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Transformers'],
  },
  {
    number: '02',
    icon: faEye,
    titleStart: 'Visão Computacional &',
    titleEnd: 'Processamento de Imagens',
    description:
      'Trabalhamos com técnicas avançadas de processamento e análise de imagens — detecção de objetos, segmentação semântica, reconhecimento facial e análise de vídeo em tempo real.',
    stack: ['OpenCV', 'YOLO', 'CNNs', 'Vision Transformers'],
  },
  {
    number: '03',
    icon: faChartBar,
    titleStart: 'Ciência de Dados &',
    titleEnd: 'Big Data Analytics',
    description:
      'Aplicamos metodologias avançadas para extração de conhecimento a partir de grandes volumes de dados, com análise estatística rigorosa para apoiar a tomada de decisão.',
    stack: ['Pandas', 'Spark', 'SQL', 'Visualização'],
  },
];

function ResearchSection() {
  return (
    <section id="research-focus" className="research-section">
      <div className="research-glow" aria-hidden="true" />

      <div className="research-inner">
        {/* ── Coluna fixa esquerda ── */}
        <aside className="research-aside">
          <span className="research-eyebrow">
            <span className="research-eyebrow-dot" />
            ÁREAS DE PESQUISA
          </span>
          <h2 className="research-title">
            Onde aplicamos <em>inteligência</em>.
          </h2>
          <p className="research-subtitle">
            Três frentes de pesquisa que se complementam e sustentam todos os
            projetos do laboratório — da fundação teórica à implementação
            prática em problemas reais.
          </p>

          <div className="research-counter">
            <span className="research-counter-num">03</span>
            <span className="research-counter-label">
              especialidades<br />ativas
            </span>
          </div>
        </aside>

        {/* ── Lista de áreas ── */}
        <ol className="research-list">
          {areas.map((area, idx) => (
            <li className="research-item" key={area.number}>
              <div className="research-item-head">
                <span className="research-number">{area.number}</span>
                <span className="research-divider" aria-hidden="true" />
                <FontAwesomeIcon icon={area.icon} className="research-icon" />
              </div>

              <h3 className="research-item-title">
                {area.titleStart} <em>{area.titleEnd}</em>
              </h3>

              <p className="research-item-desc">{area.description}</p>

              <ul className="research-stack">
                {area.stack.map((tech) => (
                  <li className="research-stack-item" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>

              {idx < areas.length - 1 && (
                <span className="research-separator" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ResearchSection;
