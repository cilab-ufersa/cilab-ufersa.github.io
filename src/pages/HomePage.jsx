import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Importações dos ícones para usar nos dados dos cards
import { faCode, faDatabase, faCloud, faLaptopCode, faShareNodes, faAtom, faLightbulb, faEye, faChartBar } from '@fortawesome/free-solid-svg-icons';

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

  const networkTypesCards = [
    {
      title: "Redes Convolucionais (CNNs)",
      description: "Processamento de imagens e reconhecimento visual, da classificação à segmentação.",
      icon: faShareNodes,
    },
    {
      title: "Redes Recorrentes (RNNs) / LSTMs",
      description: "Análise de sequências temporais, processamento de linguagem natural e séries financeiras.",
      icon: faAtom,
    },
    {
      title: "Transformers",
      description: "Modelos avançados para PLN, tradução e geração de texto, base para LLMs.",
      icon: faLightbulb,
    },
    {
      title: "GANs e Autoencoders",
      description: "Geração de conteúdo (imagens, áudio) e compressão/redução de dimensionalidade.",
      icon: faCode,
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
        id="what-we-use"
        title="Tecnologias e Ferramentas CILAB"
        description="Nossa abordagem em IA é sustentada por uma infraestrutura robusta e o uso das mais modernas tecnologias e frameworks."
        cards={whatWeUseCards}
        isAlternate={true}
      />

      <InfoSection
        id="network-types"
        title="Tipos de Redes e Arquiteturas"
        description="Especializamo-nos em diversas arquiteturas de redes neurais para atender a uma vasta gama de aplicações de IA."
        cards={networkTypesCards}
        isAlternate={false}
      />

      <InfoSection
        id="research-focus"
        title="Nossas Áreas de Pesquisa"
        description="Desenvolvemos pesquisas avançadas em Inteligência Computacional, oferecendo soluções inovadoras para desafios complexos em diversas áreas. Nossa equipe qualificada atua nas seguintes especialidades:"
        cards={researchFocusCards}
        isAlternate={true}
      />

      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;