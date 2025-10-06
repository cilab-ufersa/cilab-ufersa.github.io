import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LibrasProjectPage.css';

function LibrasProjectPage() {
  return (
    <div className="libras-project-page">
      <Header />
      <section className="libras-hero">
        <div className="container">
          <h1 className="libras-title">Projeto: Língua de Sinais Brasileira (Libras)</h1>
          <p className="libras-subtitle">
            Soluções de Inteligência Computacional para reconhecimento e tradução de Libras, promovendo inclusão e acessibilidade para pessoas surdas.
          </p>
        </div>
      </section>
      <section className="libras-content">
        <div className="container">
          <h2>Sobre o Projeto</h2>
          <p>
            O projeto Libras do CiLab tem como objetivo desenvolver sistemas inteligentes capazes de reconhecer e traduzir sinais da Língua Brasileira de Sinais (Libras) utilizando técnicas de visão computacional e aprendizado de máquina. 
          </p>

          <div className="project-demo">
            <h3>Sistema Desenvolvido</h3>
            <div className="demo-container">
              <img src="/libras.gif" alt="Demonstração do sistema de reconhecimento de Libras" className="demo-gif" />
              <p className="demo-description">
                Demonstração do sistema de reconhecimento de sinais de Libras em tempo real utilizando visão computacional.
              </p>
            </div>
          </div>

          <h3>Objetivos</h3>
          <ul>
            <li>Desenvolver algoritmos para reconhecimento automático de gestos e sinais de Libras.</li>
            <li>Implementar sistemas de tradução em tempo real entre Libras e Português.</li>
            <li>Promover a inclusão digital e social de pessoas surdas.</li>
            <li>Contribuir para pesquisas em acessibilidade e inteligência artificial.</li>
          </ul>

          <h3>Pesquisa em Andamento</h3>
          <div className="research-status">
            <p>
              Atualmente, a pesquisa está em desenvolvimento com foco especial no aprimoramento de algoritmos para o tratamento de sinais não estáticos. Esta linha de investigação visa superar um dos principais desafios na área de reconhecimento de Libras: a interpretação precisa de gestos dinâmicos e movimentos contínuos que caracterizam grande parte da comunicação em língua de sinais.
            </p>
            <p>
              Os sinais não estáticos representam uma complexidade adicional, pois envolvem sequências temporais de movimentos das mãos, braços e expressões faciais, exigindo algoritmos mais sofisticados capazes de capturar e processar essas variações temporais de forma eficiente e precisa.
            </p>
          </div>

          <h3>Impacto</h3>
          <p>
            O projeto Libras contribui diretamente para a inclusão de pessoas surdas, permitindo maior autonomia e integração social. Além disso, fomenta pesquisas acadêmicas e tecnológicas na área de acessibilidade, servindo como referência para outros projetos de IA voltados para minorias.
          </p>

          <h3>Publicações Relacionadas</h3>
          <div className="publications-section">
            <div className="publication-item">
              <h4>Machine learning approaches for efficient recognition of Brazilian Sign Language</h4>
              <p className="authors">MORAIS, L. M. G.; ALMEIDA, W. M.; REGO, ROSANA C. B.</p>
              <p className="venue">Simpósio Brasileiro de Sistemas de Informação (SBSI), 2025, Recife. Anais do Simpósio Brasileiro de Sistemas de Informação (SBSI), 2025.</p>
              <div className="publication-tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">Libras</span>
                <span className="tag">Acessibilidade</span>
              </div>
            </div>

            <div className="publication-item">
              <h4>BRAZILIAN SIGN LANGUAGE TRANSLATION: AI for the inclusion of deaf people</h4>
              <p className="authors">ANDRADE JUNIOR, N. F.; PINTO, A. A. B. F.; ALMEIDA, W. M.; REGO, ROSANA C. B.</p>
              <p className="venue">V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024. Anais do V Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia, 2024.</p>
              <div className="publication-tags">
                <span className="tag">Tradução</span>
                <span className="tag">IA</span>
                <span className="tag">Inclusão</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LibrasProjectPage;
