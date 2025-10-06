import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PublicationsPage.css';

function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState('all');

  const publications = [
    {
      year: 2025,
      title: "Machine learning approaches for efficient recognition of Brazilian Sign Language",
      authors: "MORAIS, L. M. G.; ALMEIDA, W. M.; REGO, ROSANA C. B.",
      venue: "Simpósio Brasileiro de Sistemas de Informação (SBSI), 2025, Recife. Anais do Simpósio Brasileiro de Sistemas de Informação (SBSI), 2025.",
      tags: ["Machine Learning", "Visão Computacional", "Acessibilidade"]
    },
    {
      year: 2025,
      title: "Detecção de diabetes em pacientes adultos usando inteligência artificial explicável",
      authors: "SILVA, B. V. P.; REGO, ROSANA C. B.",
      venue: "Encontro de Computação do Oeste Potiguar, 2025. Anais do Encontro de Computação do Oeste Potiguar, 2025. v. 1.",
      tags: ["Saúde", "IA Explicável", "Machine Learning"]
    },
    {
      year: 2025,
      title: "Modelo de Deep Learning para detecção de fissuras em imagens térmicas",
      authors: "GONCALVES, L. V.; REGO, ROSANA C. B.; BEZERRA, PAULO H. A.",
      venue: "Encontro de Computação do Oeste Potiguar, 2025. Anais do Encontro de Computação do Oeste Potiguar, 2025. v. 1.",
      tags: ["Deep Learning", "Visão Computacional", "Engenharia"]
    },

    
    {
      year: 2024,
      title: "Thyroid Syndrome Detection using Machine Learning Algorithms: A Comparative Analysis",
      authors: "CAVALCANTE, CAIO; ALMEIDA, VINICIUS; BARROS, MARCOS; LIMA, NATHALEE; Rego, Rosana",
      venue: "Congresso Brasileiro de Inteligência Computacional, 2024. Anais do XVI Congresso Brasileiro de Inteligência Computacional. p. 1.",
      tags: ["Saúde", "Machine Learning", "Análise Comparativa"]
    },
    {
      year: 2024,
      title: "A Deep Learning Artificial Intelligence Algorithm to Detect Cracks on Civil Engineering Building Elements",
      authors: "BEZERRA, P. H. A.; DANTAS, H. C.; MORAIS, L. M. G.; REGO, R. C. B.",
      venue: "XX International Conference on Building Pathology and Constructions Repair, 2024, Fortaleza. XX International Conference on Building Pathology and Constructions Repair. Fortaleza/CE: Springer, 2024. v. 1. p. 527-537.",
      tags: ["Deep Learning", "Engenharia Civil", "Visão Computacional"]
    },
    {
      year: 2024,
      title: "Early prediction of hypothyroidism based on feature selection and explainable artificial intelligence",
      authors: "CAVALCANTE, C. M. V.; REGO, ROSANA C. B.",
      venue: "Simpósio Brasileiro de Computação Aplicada à Saúde (SBCAS), 2024, Goiânia. Anais do XXIV Simpósio Brasileiro de Computação Aplicada à Saúde, 2024. p. 49-60.",
      tags: ["Saúde", "IA Explicável", "Predição"]
    },
    {
      year: 2024,
      title: "BRAZILIAN SIGN LANGUAGE TRANSLATION: AI for the inclusion of deaf people",
      authors: "ANDRADE JUNIOR, N. F.; PINTO, A. A. B. F.; ALMEIDA, W. M.; REGO, ROSANA C. B.",
      venue: "V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024. Anais do V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.",
      tags: ["Acessibilidade", "NLP", "Visão Computacional"]
    },
    {
      year: 2024,
      title: "DETECÇÃO DE FISSURAS EM CONCRETO USANDO REDES NEURAIS CONVOLUCIONAIS",
      authors: "MORAIS, L. M. G.; DANTAS, H. C.; BEZERRA, P. H. A.; REGO, ROSANA C. B.",
      venue: "V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024. Anais do V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.",
      tags: ["Deep Learning", "Visão Computacional", "Engenharia"]
    },
    {
      year: 2024,
      title: "IA NA AGRICULTURA: AVALIANDO A QUALIDADE DO MAMÃO ATRAVÉS DO NÍVEL DE MATURIDADE",
      authors: "PAULO, C.; MORAIS, E. B. D.; SILVA, L. M. A.; DIAS, N. S.; MORAIS, P. L. D.; REGO, ROSANA C. B.",
      venue: "V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024. Anais do V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.",
      tags: ["Agricultura", "Visão Computacional", "Machine Learning"]
    },
    {
      year: 2024,
      title: "RECONHECIMENTO E CONTAGEM DE MOEDAS BRASILEIRAS UTILIZANDO REDES NEURAIS CONVOLUCIONAIS COM OPENCV",
      authors: "LIMA, B. W. S.; BEZERRA, E. S.; FERNANDES, C. D. F.; PAIVA, A. W. Q.; REGO, ROSANA C. B.",
      venue: "V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024. Anais do V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.",
      tags: ["Deep Learning", "Visão Computacional", "OpenCV"]
    },
    {
      year: 2024,
      title: "RECONHECIMENTO DE EXPRESSÕES FACIAIS UTILIZANDO REDES NEURAIS CONVOLUCIONAIS",
      authors: "COSTA, N. E. A.; SOARES, A. M.; SOUSA, T. L. M.; REGO, ROSANA C. B.",
      venue: "V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024. Anais do V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.",
      tags: ["Deep Learning", "Visão Computacional", "Reconhecimento Facial"]
    },
    {
      year: 2024,
      title: "Concrete Crack Detection Using Embedded Machine Learning",
      authors: "DANTAS, HEITOR C.; MORAIS, LETÍCIA M. G.; BEZERRA, PAULO H. A.; REGO, ROSANA C. B.",
      venue: "2024 8th International Symposium on Instrumentation Systems, Circuits and Transducers (INSCIT), 2024, Joao Pessoa. 2024 8th International Symposium on Instrumentation Systems, Circuits and Transducers (INSCIT), 2024. p. 1-6.",
      tags: ["Machine Learning", "Sistemas Embarcados", "Engenharia"]
    },
    {
      year: 2024,
      title: "Estimando calorias em alimentos usando aprendizado de máquina",
      authors: "PAIVA, C. T. Q.; SANTOS, S. M.; REGO, R. C. B.",
      venue: "LATINO-AMERICANO DE SOFTWARE LIVRE E TECNOLOGIAS ABERTAS (LATINOWARE), 2024, Foz do Iguaçu. ANAIS DO XXI CONGRESSO LATINO-AMERICANO DE SOFTWARE LIVRE E TECNOLOGIAS ABERTAS. Foz do Iguaçu: SOL, 2024. p. 158-164.",
      tags: ["Machine Learning", "Saúde", "Visão Computacional"]
    },
    {
      year: 2024,
      title: "Civil infrastructure crack detection using deep learning and image segmentation-based techniques",
      authors: "REGO, ROSANA C. B.; DANTAS, H. C.; MORAIS, L. M. G.; BEZERRA, P. H. A.",
      venue: "XXV Congresso Brasileiro de Automática, 2024, Rio de Janeiro. XXV Congresso Brasileiro de Automática, 2024. p. 1-6.",
      tags: ["Deep Learning", "Visão Computacional", "Segmentação"]
    },

    
    {
      year: 2023,
      title: "Diagnostic Support System for Euthyroid Sick Syndrome based on Machine Learning Algorithms Approaches",
      authors: "REGO, R. C. B.; ALMEIDA, V. A.; CAVALCANTE, C. M. V.; LIMA, N. C. A.",
      venue: "International Conference on Intelligent Systems and New Applications, 2023, Liverpool. ICISNA 23 Proceedings Book. Liverpool, 2023. v. 1. p. 259-264.",
      tags: ["Saúde", "Machine Learning", "Diagnóstico"]
    },
    {
      year: 2023,
      title: "Predição de Ciclos Menstruais com o Apoio de Técnicas de Machine Learning: Uma aplicação com dados sintéticos",
      authors: "OLIVEIRA, P. J. C.; REGO, R. C. B.",
      venue: "IV Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2023. Anais do Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2023.",
      tags: ["Saúde", "Machine Learning", "Predição"]
    },
    {
      year: 2023,
      title: "CLASSIFICAÇÃO DA SÍNDROME DO DOENTE EUTIREOIDEO COM ALGORITMOS DE MACHINE LEARNING: UMA APLICAÇÃO DE SUPORTE AO DIAGNÓSTICO",
      authors: "ALMEIDA, V. A.; CAVALCANTE, C. M. V.; LIMA, N. C. A.; REGO, R. C. B.",
      venue: "IV Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2023. Anais do Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2023.",
      tags: ["Saúde", "Machine Learning", "Classificação"]
    },
    {
      year: 2023,
      title: "Time Series Forecasting Approach for Predictive Modeling of Next Menstrual Cycle Length",
      authors: "OLIVEIRA, PAULINA JULIA; CAVALCANTE, CAIO; Rego, Rosana",
      venue: "Congresso Brasileiro de Inteligência Computacional, 2023. Anais do XVI Congresso Brasileiro de Inteligência Computacional. p. 1.",
      tags: ["Séries Temporais", "Saúde", "Predição"]
    },
    {
      year: 2023,
      title: "Síndrome do doente eutireoidiano: análise de indicadores importantes com machine learning",
      authors: "ALMEIDA, V. A.; REGO, R. C. B.",
      venue: "VI Encontro De Computação Do Oeste Potiguar (ECOP), 2023, Pau dos Ferros. Anais Do Encontro De Computação Do Oeste Potiguar, 2023. v. 1.",
      tags: ["Saúde", "Machine Learning", "Análise de Dados"]
    }
  ];

  const filteredPublications = selectedYear === 'all' 
    ? publications 
    : publications.filter(pub => pub.year.toString() === selectedYear);

  const getTagClass = (tag) => {
    const tagMap = {
      'Machine Learning': 'tag-ml',
      'Deep Learning': 'tag-dl',
      'Visão Computacional': 'tag-vision',
      'Saúde': 'tag-health',
      'IA Explicável': 'tag-xai',
      'Engenharia': 'tag-engineering',
      'Acessibilidade': 'tag-accessibility',
      'NLP': 'tag-nlp',
      'Agricultura': 'tag-agriculture',
      'OpenCV': 'tag-opencv',
      'Reconhecimento Facial': 'tag-facial',
      'Sistemas Embarcados': 'tag-embedded',
      'Segmentação': 'tag-segmentation',
      'Diagnóstico': 'tag-diagnostic',
      'Predição': 'tag-prediction',
      'Classificação': 'tag-classification',
      'Séries Temporais': 'tag-timeseries',
      'Análise de Dados': 'tag-analysis',
      'Análise Comparativa': 'tag-comparative'
    };
    return tagMap[tag] || 'tag-default';
  };

  const highlightAuthor = (authorString) => authorString;

  const groupedPublications = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(groupedPublications).sort((a, b) => b - a);

  return (
    <div className="publications-page">
      <Header />
      
      <section className="publications-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Nossas <span className="highlight">Publicações</span></h1>
            <p>Confira nossa produção científica e contribuições para o avanço da Inteligência Computacional</p>
          </div>
        </div>
      </section>

      <section className="publications-section">
        <div className="container">
          
          
          <div className="filter-container">
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${selectedYear === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedYear('all')}
              >
                Todos
              </button>
              <button 
                className={`filter-btn ${selectedYear === '2025' ? 'active' : ''}`}
                onClick={() => setSelectedYear('2025')}
              >
                2025
              </button>
              <button 
                className={`filter-btn ${selectedYear === '2024' ? 'active' : ''}`}
                onClick={() => setSelectedYear('2024')}
              >
                2024
              </button>
              <button 
                className={`filter-btn ${selectedYear === '2023' ? 'active' : ''}`}
                onClick={() => setSelectedYear('2023')}
              >
                2023
              </button>
            </div>
          </div>

          
          <div className="publications-container">
            {years.map(year => (
              <div key={year} className="year-section">
                <h3 className="year-title">{year}</h3>
                
                {groupedPublications[year].map((publication, index) => (
                  <div key={`${year}-${index}`} className="publication-item">
                    <div className="publication-content">
                      <h5 className="publication-title">{publication.title}</h5>
                      <p className="authors">
                        {publication.authors}
                      </p>
                      <p className="venue">{publication.venue}</p>
                      <div className="publication-tags">
                        {publication.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={`tag ${getTagClass(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          
          <div className="statistics-section">
            <div className="stats-grid">
              <div className="stat-box">
                <h3>19</h3>
                <p>Total de Publicações</p>
              </div>
              <div className="stat-box">
                <h3>3</h3>
                <p>Anos de Produção</p>
              </div>
              <div className="stat-box">
                <h3>8</h3>
                <p>Áreas de Pesquisa</p>
              </div>
              <div className="stat-box">
                <h3>25+</h3>
                <p>Colaboradores</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PublicationsPage;
