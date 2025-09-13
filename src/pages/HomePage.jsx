import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Importações dos ícones para usar nos dados dos cards
import { faCode, faDatabase, faCloud, faLaptopCode, faShareNodes, faAtom, faLightbulb, faEye, faChartBar, faHandsHelping, faBuilding, faHeart } from '@fortawesome/free-solid-svg-icons';

// Se HomePage.css estiver vazio, você pode comentar ou remover a linha abaixo.
// import './HomePage.css';

function HomePage() {
  // Dados para as seções InfoSection (passados como props)
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

  const projectsCards = [
    {
      title: "Língua de Sinais Brasileira (Libras)",
      description: "Desenvolvimento de sistemas de reconhecimento e tradução de Libras usando técnicas de visão computacional e aprendizado de máquina para promover a inclusão de pessoas surdas.",
      icon: faHandsHelping,
      link: "#libras",
    },
    {
      title: "Detecção de Patologias em Edificações com IA",
      description: "Aplicação de algoritmos de deep learning para identificar fissuras, rachaduras e outras patologias estruturais em edificações através de análise de imagens.",
      icon: faBuilding,
      link: null,
    },
    {
      title: "Saúde e Bem-estar Feminino",
      description: "Desenvolvimento de soluções inteligentes para monitoramento e predição de aspectos relacionados à saúde feminina, incluindo ciclos menstruais e condições endócrinas.",
      icon: faHeart,
      link: null,
    },
  ];

  // <<-- AQUI ESTÁ O NOVO CONTEÚDO -->>
  const researchFocusCards = [
    {
      title: "Machine Learning & Deep Learning",
      description: "Desenvolvemos algoritmos e modelos avançados de aprendizado de máquina, incluindo redes neurais profundas, para resolver problemas complexos.",
      icon: faAtom,
    },
    {
      title: "Visão Computacional & Processamento de Imagens",
      description: "Trabalhamos com técnicas avançadas de processamento e análise de imagens, como detecção de objetos, reconhecimento facial e análise de vídeo.",
      icon: faEye,
    },
    {
      title: "Ciência de Dados & Big Data Analytics",
      description: "Aplicamos metodologias avançadas para extração de conhecimento a partir de grandes volumes de dados e análise estatística para apoiar a tomada de decisão.",
      icon: faChartBar,
    },
  ];

  return (
    <div className="home-page-wrapper">
      <HeroSection />

      

      <InfoSection
        id="projects"
        title="Projetos do Laboratório"
        description="Conheça os principais projetos desenvolvidos pelo CiLab, aplicando Inteligência Computacional para resolver problemas reais da sociedade."
        cards={projectsCards}
        isAlternate={false}
      />

      <InfoSection
        id="research-focus"
        title="Nossas Áreas de Pesquisa"
        description="Desenvolvemos pesquisas avançadas em Inteligência Computacional, oferecendo soluções inovadoras para desafios complexos em diversas áreas. Nossa equipe qualificada atua nas seguintes especialidades:"
        cards={researchFocusCards}
        isAlternate={true}
      />

      <TeamSection />

      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;