import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container text-center">
        <h2 className="section-title">Fale Conosco</h2>
        <p className="section-description">
          Tem uma ideia ou quer saber mais sobre o CILAB? Entre em contato!
        </p>
        <a href="mailto:contato@cilab.com" className="button primary">
          Enviar E-mail
        </a>
      </div>
    </section>
  );
}

export default ContactSection;