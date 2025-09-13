// src/components/TeamSection.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIdCard, 
  faGraduationCap, 
  faFileAlt,
  faUniversity 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faResearchgate 
} from '@fortawesome/free-brands-svg-icons';
import './TeamSection.css';

function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Dra. Rosana Rego",
      role: "Professora & Pesquisadora",
      expertise: "Deep Learning, Visão Computacional, Processamento de Imagens",
      image: "/rosana.jpeg",
      links: {
        lattes: "https://lattes.cnpq.br/2921962829806332",
        scholar: "https://scholar.google.com.br/citations?user=bqgZiT0AAAAJ&hl",
        researchgate: "https://www.researchgate.net/profile/R-C-B-Rego",
        linkedin: "https://www.linkedin.com/in/rosanacibely/"
      }
    },
    {
      id: 2,
      name: "Dra. Nathalee Lima",
      role: "Professora & Pesquisadora",
      expertise: "Inteligência Artificial, Aprendizado de Máquina por Reforço",
      image: "/nathalee.png",
      links: {
        lattes: "http://lattes.cnpq.br/4386227694627671",
        scholar: "#",
        researchgate: "https://www.researchgate.net/profile/Nathalee-Cavalcanti",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Dra. Huliane Medeiros",
      role: "Professora & Pesquisadora",
      expertise: "Aprendizado de Máquina não supervisionado, Clustering",
      image: "/huliane.png",
      links: {
        lattes: "http://lattes.cnpq.br/1797223363490431",
        scholar: "#",
        researchgate: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Nossa Equipe
          </h2>
          <p className="section-subtitle">
            Conheça os pesquisadores que fazem do CiLab um centro de excelência em Inteligência Computacional
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member-card">
              <div className="member-image-wrapper">
                <img 
                  src={member.image} 
                  alt={`Foto de ${member.name}`}
                  className="member-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0Q1RDlERiIvPgo8cGF0aCBkPSJNNTAgMTcwQzUwIDEzNy45IDc0LjMgMTEyIDEwMCAxMTJTMTUwIDEzNy45IDE1MCAxNzBINTBaIiBmaWxsPSIjRDVEOURGIi8+Cjwvc3ZnPgo=';
                  }}
                />
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-expertise">{member.expertise}</p>
                
                <div className="member-links">
                  <a href={member.links.lattes} title="Currículo Lattes" className="member-link">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </a>
                  <a href={member.links.scholar} title="Google Scholar" className="member-link">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </a>
                  <a href={member.links.researchgate} title="ResearchGate" className="member-link">
                    <FontAwesomeIcon icon={faResearchgate} />
                  </a>
                  <a href={member.links.linkedin} title="LinkedIn" className="member-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default TeamSection;
