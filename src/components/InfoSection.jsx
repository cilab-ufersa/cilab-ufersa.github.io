import React from 'react';
import './InfoSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function InfoSection({ id, title, description, cards, isAlternate }) {
  const sectionClassName = `info-section ${isAlternate ? 'alternate-bg' : ''}`;

  return (
    <section id={id} className={sectionClassName}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
        <div className="info-grid">
          {cards.map((card, index) => {
            const CardContent = (
              <>
                {card.icon && <FontAwesomeIcon icon={card.icon} className="card-icon" />}
                <h3>{card.title} <FontAwesomeIcon icon={faArrowRight} className="card-arrow" /></h3>
                <p>{card.description}</p>
              </>
            );

            return card.link ? (
              <a href={card.link} className="info-card clickable" key={index}>
                {CardContent}
              </a>
            ) : (
              <div className="info-card" key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;