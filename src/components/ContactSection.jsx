import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" aria-hidden="true" />

      <div className="contact-inner">
        <div className="contact-card">
          <div className="contact-left">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              FALE CONOSCO
            </span>

            <h2 className="contact-title">
              Vamos <em>colaborar</em>?
            </h2>

            <p className="contact-subtitle">
              Tem uma ideia, projeto ou interesse em pesquisa? Estamos abertos a
              parcerias acadêmicas, orientações e colaborações com a indústria.
            </p>
          </div>

          <div className="contact-right">
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-item-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <div className="contact-item-body">
                  <span className="contact-item-label">Localização</span>
                  <span className="contact-item-value">
                    UFERSA · Campus Pau dos Ferros<br />
                    Rio Grande do Norte, Brasil
                  </span>
                </div>
              </li>

              <li className="contact-item">
                <span className="contact-item-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                <div className="contact-item-body">
                  <span className="contact-item-label">GitHub</span>
                  <a
                    href="https://github.com/cilab-ufersa"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item-value"
                  >
                    github.com/cilab-ufersa
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <span className="contact-item-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
                <div className="contact-item-body">
                  <span className="contact-item-label">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/company/85629117/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item-value"
                  >
                    linkedin.com/company/cilab
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
