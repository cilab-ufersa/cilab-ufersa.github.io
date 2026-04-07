import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ProjectsSection from '../components/ProjectsSection';
import ResearchSection from '../components/ResearchSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import { faCode, faDatabase, faCloud, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const whatWeUseCards = [
    {
      title: "Machine Learning",
      description: "Bibliotecas como TensorFlow, PyTorch e scikit-learn para construção de modelos preditivos.",
      icon: faCode,
    },
    {
      title: "Big Data",
      description: "Processamento e análise de grandes volumes de dados com Apache Spark e Hadoop.",
      icon: faDatabase,
    },
    {
      title: "Cloud Computing",
      description: "Escalabilidade e deploy em nuvem com AWS, Google Cloud Platform e Azure.",
      icon: faCloud,
    },
    {
      title: "Linguagens de Programação",
      description: "Principalmente Python, com expertise em otimização de performance.",
      icon: faLaptopCode,
    },
  ];

  return (
    <div className="home-page-wrapper">
      <HeroSection />

      

      <ProjectsSection />

      <ResearchSection />

      <TeamSection />

      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;