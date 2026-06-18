import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import LogoCILab from '../assets/logo-cilab.png';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={LogoCILab} alt="Logo CiLab" />
              <span className="footer-logo-text">
                Ci<em>Lab</em>
              </span>
            </div>
            <p className="footer-tagline">
              Laboratório de Inteligência Computacional da UFERSA. Pesquisa,
              ensino e extensão em IA com impacto social.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/cilab-ufersa"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/company/85629117/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="footer-social" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Columns */}
          <nav className="footer-cols" aria-label="Rodapé">
            <div className="footer-col">
              <h4 className="footer-col-title">Navegação</h4>
              <ul>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#research-focus">Áreas de pesquisa</a></li>
                <li><a href="#team">Equipe</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Recursos</h4>
              <ul>
                <li><a href="#publications">Publicações</a></li>
                <li><a href="#libras">Projeto Libras</a></li>
                <li>
                  <a href="https://github.com/cilab-ufersa" target="_blank" rel="noreferrer">
                    Repositórios
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Instituição</h4>
              <ul>
                <li>
                  <a href="https://ufersa.edu.br" target="_blank" rel="noreferrer">
                    UFERSA
                  </a>
                </li>
                <li>Campus Pau dos Ferros · RN</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <strong>CiLab UFERSA</strong>. Todos os direitos reservados.
          </p>
          <p className="footer-built">
            <span aria-hidden="true">✦</span> by Andrey Sabino
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
