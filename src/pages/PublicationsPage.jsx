import React, { useState, useMemo, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBookOpen,
  faCalendarDays,
  faTags,
  faUsers,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PublicationsPage.css';

const publications = [
  {
    year: 2025,
    title: 'Machine learning approaches for efficient recognition of Brazilian Sign Language',
    authors: 'MORAIS, L. M. G.; ALMEIDA, W. M.; REGO, ROSANA C. B.',
    venue: 'Simpósio Brasileiro de Sistemas de Informação (SBSI), 2025, Recife.',
    tags: ['Machine Learning', 'Visão Computacional', 'Acessibilidade'],
  },
  {
    year: 2025,
    title: 'Detecção de diabetes em pacientes adultos usando inteligência artificial explicável',
    authors: 'SILVA, B. V. P.; REGO, ROSANA C. B.',
    venue: 'Encontro de Computação do Oeste Potiguar, 2025.',
    tags: ['Saúde', 'IA Explicável', 'Machine Learning'],
  },
  {
    year: 2025,
    title: 'Modelo de Deep Learning para detecção de fissuras em imagens térmicas',
    authors: 'GONCALVES, L. V.; REGO, ROSANA C. B.; BEZERRA, PAULO H. A.',
    venue: 'Encontro de Computação do Oeste Potiguar, 2025.',
    tags: ['Deep Learning', 'Visão Computacional', 'Engenharia'],
  },
  {
    year: 2024,
    title: 'Thyroid Syndrome Detection using Machine Learning Algorithms: A Comparative Analysis',
    authors: 'CAVALCANTE, CAIO; ALMEIDA, VINICIUS; BARROS, MARCOS; LIMA, NATHALEE; Rego, Rosana',
    venue: 'XVI Congresso Brasileiro de Inteligência Computacional, 2024.',
    tags: ['Saúde', 'Machine Learning', 'Análise Comparativa'],
  },
  {
    year: 2024,
    title: 'A Deep Learning Artificial Intelligence Algorithm to Detect Cracks on Civil Engineering Building Elements',
    authors: 'BEZERRA, P. H. A.; DANTAS, H. C.; MORAIS, L. M. G.; REGO, R. C. B.',
    venue: 'XX International Conference on Building Pathology and Constructions Repair, 2024, Fortaleza · Springer.',
    tags: ['Deep Learning', 'Engenharia Civil', 'Visão Computacional'],
  },
  {
    year: 2024,
    title: 'Early prediction of hypothyroidism based on feature selection and explainable artificial intelligence',
    authors: 'CAVALCANTE, C. M. V.; REGO, ROSANA C. B.',
    venue: 'XXIV Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS), 2024, Goiânia.',
    tags: ['Saúde', 'IA Explicável', 'Predição'],
  },
  {
    year: 2024,
    title: 'BRAZILIAN SIGN LANGUAGE TRANSLATION: AI for the inclusion of deaf people',
    authors: 'ANDRADE JUNIOR, N. F.; PINTO, A. A. B. F.; ALMEIDA, W. M.; REGO, ROSANA C. B.',
    venue: 'V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.',
    tags: ['Acessibilidade', 'NLP', 'Visão Computacional'],
  },
  {
    year: 2024,
    title: 'DETECÇÃO DE FISSURAS EM CONCRETO USANDO REDES NEURAIS CONVOLUCIONAIS',
    authors: 'MORAIS, L. M. G.; DANTAS, H. C.; BEZERRA, P. H. A.; REGO, ROSANA C. B.',
    venue: 'V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.',
    tags: ['Deep Learning', 'Visão Computacional', 'Engenharia'],
  },
  {
    year: 2024,
    title: 'IA NA AGRICULTURA: AVALIANDO A QUALIDADE DO MAMÃO ATRAVÉS DO NÍVEL DE MATURIDADE',
    authors: 'PAULO, C.; MORAIS, E. B. D.; SILVA, L. M. A.; DIAS, N. S.; MORAIS, P. L. D.; REGO, ROSANA C. B.',
    venue: 'V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.',
    tags: ['Agricultura', 'Visão Computacional', 'Machine Learning'],
  },
  {
    year: 2024,
    title: 'RECONHECIMENTO E CONTAGEM DE MOEDAS BRASILEIRAS UTILIZANDO REDES NEURAIS CONVOLUCIONAIS COM OPENCV',
    authors: 'LIMA, B. W. S.; BEZERRA, E. S.; FERNANDES, C. D. F.; PAIVA, A. W. Q.; REGO, ROSANA C. B.',
    venue: 'V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.',
    tags: ['Deep Learning', 'Visão Computacional', 'OpenCV'],
  },
  {
    year: 2024,
    title: 'RECONHECIMENTO DE EXPRESSÕES FACIAIS UTILIZANDO REDES NEURAIS CONVOLUCIONAIS',
    authors: 'COSTA, N. E. A.; SOARES, A. M.; SOUSA, T. L. M.; REGO, ROSANA C. B.',
    venue: 'V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.',
    tags: ['Deep Learning', 'Visão Computacional', 'Reconhecimento Facial'],
  },
  {
    year: 2024,
    title: 'Concrete Crack Detection Using Embedded Machine Learning',
    authors: 'DANTAS, HEITOR C.; MORAIS, LETÍCIA M. G.; BEZERRA, PAULO H. A.; REGO, ROSANA C. B.',
    venue: '8th International Symposium on Instrumentation Systems, Circuits and Transducers (INSCIT), 2024, João Pessoa.',
    tags: ['Machine Learning', 'Sistemas Embarcados', 'Engenharia'],
  },
  {
    year: 2024,
    title: 'Estimando calorias em alimentos usando aprendizado de máquina',
    authors: 'PAIVA, C. T. Q.; SANTOS, S. M.; REGO, R. C. B.',
    venue: 'XXI Congresso Latino-Americano de Software Livre e Tecnologias Abertas (LATINOWARE), 2024.',
    tags: ['Machine Learning', 'Saúde', 'Visão Computacional'],
  },
  {
    year: 2024,
    title: 'Civil infrastructure crack detection using deep learning and image segmentation-based techniques',
    authors: 'REGO, ROSANA C. B.; DANTAS, H. C.; MORAIS, L. M. G.; BEZERRA, P. H. A.',
    venue: 'XXV Congresso Brasileiro de Automática, 2024, Rio de Janeiro.',
    tags: ['Deep Learning', 'Visão Computacional', 'Segmentação'],
  },
  {
    year: 2023,
    title: 'Diagnostic Support System for Euthyroid Sick Syndrome based on Machine Learning Algorithms Approaches',
    authors: 'REGO, R. C. B.; ALMEIDA, V. A.; CAVALCANTE, C. M. V.; LIMA, N. C. A.',
    venue: 'International Conference on Intelligent Systems and New Applications, 2023, Liverpool.',
    tags: ['Saúde', 'Machine Learning', 'Diagnóstico'],
  },
  {
    year: 2023,
    title: 'Predição de Ciclos Menstruais com o Apoio de Técnicas de Machine Learning',
    authors: 'OLIVEIRA, P. J. C.; REGO, R. C. B.',
    venue: 'IV Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2023.',
    tags: ['Saúde', 'Machine Learning', 'Predição'],
  },
  {
    year: 2023,
    title: 'CLASSIFICAÇÃO DA SÍNDROME DO DOENTE EUTIREOIDEO COM ALGORITMOS DE MACHINE LEARNING',
    authors: 'ALMEIDA, V. A.; CAVALCANTE, C. M. V.; LIMA, N. C. A.; REGO, R. C. B.',
    venue: 'IV Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2023.',
    tags: ['Saúde', 'Machine Learning', 'Classificação'],
  },
  {
    year: 2023,
    title: 'Time Series Forecasting Approach for Predictive Modeling of Next Menstrual Cycle Length',
    authors: 'OLIVEIRA, PAULINA JULIA; CAVALCANTE, CAIO; Rego, Rosana',
    venue: 'XVI Congresso Brasileiro de Inteligência Computacional, 2023.',
    tags: ['Séries Temporais', 'Saúde', 'Predição'],
  },
  {
    year: 2023,
    title: 'Síndrome do doente eutireoidiano: análise de indicadores importantes com machine learning',
    authors: 'ALMEIDA, V. A.; REGO, R. C. B.',
    venue: 'VI Encontro de Computação do Oeste Potiguar (ECOP), 2023, Pau dos Ferros.',
    tags: ['Saúde', 'Machine Learning', 'Análise de Dados'],
  },
];

function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [search, setSearch] = useState('');

  // garante que o tema (dark/light salvo no localStorage) seja aplicado também aqui
  useEffect(() => {
    const theme = localStorage.getItem('cilab-theme');
    if (theme === 'light') {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    }
  }, []);

  const years = useMemo(() => {
    const set = new Set(publications.map((p) => p.year));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return publications.filter((p) => {
      const yearOk = selectedYear === 'all' || p.year.toString() === selectedYear;
      if (!yearOk) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.venue.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [selectedYear, search]);

  const grouped = useMemo(() => {
    return filtered.reduce((acc, pub) => {
      (acc[pub.year] = acc[pub.year] || []).push(pub);
      return acc;
    }, {});
  }, [filtered]);

  const groupedYears = Object.keys(grouped).sort((a, b) => b - a);

  // estatísticas
  const totalPubs = publications.length;
  const totalYears = years.length;
  const totalTags = new Set(publications.flatMap((p) => p.tags)).size;
  const totalAuthors = new Set(
    publications.flatMap((p) =>
      p.authors.split(/[;,]/).map((a) => a.trim()).filter(Boolean)
    )
  ).size;

  return (
    <div className="publications-page">
      <Header />

      <main className="pubs-wrap">
        <div className="pubs-glow" aria-hidden="true" />

        <div className="pubs-inner">
          {/* ── HEADER ── */}
          <header className="pubs-header">
            <span className="pubs-eyebrow">
              <span className="pubs-eyebrow-dot" />
              PRODUÇÃO CIENTÍFICA
            </span>
            <h1 className="pubs-title">
              Nossas <em>Publicações</em>.
            </h1>
            <p className="pubs-subtitle">
              Um registro vivo da pesquisa do CiLab — artigos, anais e
              contribuições científicas que sustentam nossas frentes de
              investigação em Inteligência Computacional.
            </p>
          </header>

          {/* ── STATS ── */}
          <div className="pubs-stats">
            <div className="pubs-stat">
              <div className="pubs-stat-icon">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <div className="pubs-stat-body">
                <span className="pubs-stat-num">{totalPubs}</span>
                <span className="pubs-stat-label">Publicações</span>
              </div>
            </div>
            <div className="pubs-stat">
              <div className="pubs-stat-icon">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <div className="pubs-stat-body">
                <span className="pubs-stat-num">{totalYears}</span>
                <span className="pubs-stat-label">Anos de produção</span>
              </div>
            </div>
            <div className="pubs-stat">
              <div className="pubs-stat-icon">
                <FontAwesomeIcon icon={faTags} />
              </div>
              <div className="pubs-stat-body">
                <span className="pubs-stat-num">{totalTags}</span>
                <span className="pubs-stat-label">Áreas de pesquisa</span>
              </div>
            </div>
            <div className="pubs-stat">
              <div className="pubs-stat-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="pubs-stat-body">
                <span className="pubs-stat-num">{totalAuthors}+</span>
                <span className="pubs-stat-label">Colaboradores</span>
              </div>
            </div>
          </div>

          {/* ── CONTROLES ── */}
          <div className="pubs-controls">
            <div className="pubs-search">
              <FontAwesomeIcon icon={faSearch} className="pubs-search-icon" />
              <input
                type="text"
                placeholder="Buscar por título, autor, evento ou tag…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  className="pubs-search-clear"
                  onClick={() => setSearch('')}
                  aria-label="Limpar busca"
                >
                  ×
                </button>
              )}
            </div>

            <div className="pubs-filters" role="tablist" aria-label="Filtrar por ano">
              <button
                className={`pubs-filter ${selectedYear === 'all' ? 'is-active' : ''}`}
                onClick={() => setSelectedYear('all')}
              >
                Todos
                <span className="pubs-filter-count">{publications.length}</span>
              </button>
              {years.map((y) => (
                <button
                  key={y}
                  className={`pubs-filter ${selectedYear === y.toString() ? 'is-active' : ''}`}
                  onClick={() => setSelectedYear(y.toString())}
                >
                  {y}
                  <span className="pubs-filter-count">
                    {publications.filter((p) => p.year === y).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── LISTA ── */}
          <div className="pubs-list">
            {groupedYears.length === 0 && (
              <div className="pubs-empty">
                Nenhuma publicação encontrada para os filtros atuais.
              </div>
            )}

            {groupedYears.map((year) => (
              <section className="pubs-year-block" key={year}>
                <div className="pubs-year-head">
                  <span className="pubs-year-num">{year}</span>
                  <span className="pubs-year-line" aria-hidden="true" />
                  <span className="pubs-year-count">
                    {grouped[year].length}{' '}
                    {grouped[year].length === 1 ? 'publicação' : 'publicações'}
                  </span>
                </div>

                <ol className="pubs-year-items">
                  {grouped[year].map((pub, idx) => (
                    <li className="pubs-item" key={`${year}-${idx}`}>
                      <span className="pubs-item-index">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div className="pubs-item-body">
                        <h3 className="pubs-item-title">
                          {pub.title}
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="pubs-item-arrow"
                          />
                        </h3>
                        <p className="pubs-item-authors">{pub.authors}</p>
                        <p className="pubs-item-venue">{pub.venue}</p>
                        <div className="pubs-item-tags">
                          {pub.tags.map((tag) => (
                            <span className="pubs-tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PublicationsPage;
