import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import './TeamSection.css';

const teamMembers = [
  {
    id: 1,
    name: 'Dra. Rosana Rego',
    role: 'Professora & Pesquisadora',
    expertise: 'Deep Learning · Visão Computacional · Processamento de Imagens',
    image: '/rosana.jpeg',
    links: {
      lattes: 'https://lattes.cnpq.br/2921962829806332',
      scholar: 'https://scholar.google.com.br/citations?user=bqgZiT0AAAAJ&hl',
      researchgate: 'https://www.researchgate.net/profile/R-C-B-Rego',
      linkedin: 'https://www.linkedin.com/in/rosanacibely/',
    },
  },
  {
    id: 2,
    name: 'Dra. Nathalee Lima',
    role: 'Professora & Pesquisadora',
    expertise: 'Inteligência Artificial · Aprendizado por Reforço',
    image: '/nathalee.png',
    links: {
      lattes: 'http://lattes.cnpq.br/4386227694627671',
      scholar: '#',
      researchgate: 'https://www.researchgate.net/profile/Nathalee-Cavalcanti',
      linkedin: '#',
    },
  },
  {
    id: 3,
    name: 'Dra. Huliane Medeiros',
    role: 'Professora & Pesquisadora',
    expertise: 'Aprendizado não Supervisionado · Clustering',
    image: '/huliane.png',
    links: {
      lattes: 'http://lattes.cnpq.br/1797223363490431',
      scholar: '#',
      researchgate: '#',
      linkedin: '#',
    },
  },
];

const collaborators = [
  { id: 1,  name: 'Ana Beatriz',      image: '/AnaBeatriz.jpg',      link: '#' },
  { id: 2,  name: 'Ana Kelly',        image: '/AnaKelly.jpg',        link: '#' },
  { id: 3,  name: 'Andrey Sabino',    image: '/AndreySabino.jpg',    link: '#' },
  { id: 4,  name: 'Evelyn Cristina',  image: '/EvelynCristina.jpg',  link: '#' },
  { id: 5,  name: 'Fernanda Rocha',   image: '/FernandaRocha.jpg',   link: '#' },
  { id: 6,  name: 'Gabriel Paiva',    image: '/gabrielpaiva.png',    link: '#' },
  { id: 7,  name: 'George',           image: '/George.jpg',          link: '#' },
  { id: 8,  name: 'Hillary Diniz',    image: '/HillaryDiniz.webp',   link: '#' },
  { id: 9,  name: 'Iara Raquel',      image: '/IaraRaquel.jpg',      link: '#' },
  { id: 10, name: 'Letícia Morais',   image: '/LeticiaMorais.jpg',   link: '#' },
  { id: 11, name: 'Luiz Eduardo',     image: '/LuizEduardo.jpg',     link: '#' },
  { id: 12, name: 'Midhiã Queiroz',   image: '/MidhiaQueiroz.jpg',   link: '#' },
  { id: 13, name: 'Pedro Lucas',      image: '/PedroLucas.jpg',      link: '#' },
];

const FALLBACK_IMG =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTQxNDE0Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNNTAgMTcwQzUwIDEzNy45IDc0LjMgMTEyIDEwMCAxMTJTMTUwIDEzNy45IDE1MCAxNzBINTBaIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=';

function TeamSection() {
  return (
    <section id="team" className="team-section">
      <div className="team-glow" aria-hidden="true" />

      <div className="team-inner">
        <header className="team-header">
          <span className="team-eyebrow">
            <span className="team-eyebrow-dot" />
            NOSSA EQUIPE
          </span>
          <div className="team-header-row">
            <h2 className="team-title">
              As mentes por trás do <em>CiLab</em>.
            </h2>
            <p className="team-subtitle">
              Pesquisadoras dedicadas a expandir as fronteiras da Inteligência
              Computacional, formando alunos e colaborando em projetos de impacto.
            </p>
          </div>
        </header>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-photo-wrap">
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="team-photo"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = FALLBACK_IMG;
                  }}
                />
                <div className="team-photo-overlay" aria-hidden="true" />
                <span className="team-photo-tag">PESQUISADORA</span>
              </div>

              <div className="team-body">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-expertise">{member.expertise}</p>

                <div className="team-links">
                  <a
                    href={member.links.lattes}
                    target="_blank"
                    rel="noreferrer"
                    title="Currículo Lattes"
                    className="team-link"
                  >
                    <FontAwesomeIcon icon={faFileAlt} />
                  </a>
                  <a
                    href={member.links.scholar}
                    target="_blank"
                    rel="noreferrer"
                    title="Google Scholar"
                    className="team-link"
                  >
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </a>
                  <a
                    href={member.links.researchgate}
                    target="_blank"
                    rel="noreferrer"
                    title="ResearchGate"
                    className="team-link"
                  >
                    <FontAwesomeIcon icon={faResearchgate} />
                  </a>
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                    className="team-link"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="collab-block">
          <header className="collab-header">
            <span className="collab-eyebrow">
              <span className="collab-eyebrow-line" />
              COLABORADORES
            </span>
            <h3 className="collab-title">
              Alunos e colaboradores que constroem o <em>CiLab</em>.
            </h3>
          </header>

          <div className="collab-grid">
            {collaborators.map((c) => (
              <a
                key={c.id}
                href={c.link}
                target={c.link.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="collab-card"
              >
                <div className="collab-photo-wrap">
                  <img
                    src={c.image}
                    alt={`Foto de ${c.name}`}
                    className="collab-photo"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = FALLBACK_IMG;
                    }}
                  />
                </div>
                <div className="collab-info">
                  <h4 className="collab-name">{c.name}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
