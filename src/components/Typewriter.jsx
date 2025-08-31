// src/components/Typewriter.jsx
import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, typingSpeed = 150, deletingSpeed = 75, delayBetweenTexts = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);

  // Effect for typing/deleting animation
  useEffect(() => {
    const currentText = texts[textIndex];

    const handleType = () => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
    };

    let timer;
    // Ajuste aqui para usar a variável local 'currentText'
    if (!isDeleting && charIndex < currentText.length) {
      timer = setTimeout(handleType, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(handleType, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCharIndex(0);
      timer = setTimeout(handleType, delayBetweenTexts);
    } else if (!isDeleting && charIndex === currentText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  // Effect for blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="typewriter-text">
      {displayText}
      <span className={`typewriter-cursor ${isBlinking ? 'blinking' : ''}`}>|</span>
    </span>
  );
};

export default Typewriter;
