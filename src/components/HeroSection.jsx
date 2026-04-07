import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import LogoCILab from '../assets/logo-cilab.png';

function HeroSection() {
  const canvasRef = useRef(null);
  const orbitRef  = useRef(null);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('cilab-theme') !== 'light');

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      localStorage.setItem('cilab-theme', 'dark');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      localStorage.setItem('cilab-theme', 'light');
    }
  }, [isDark]);

  // partículas de fundo
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const pts = Array.from({ length: 38 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.2 + 0.4,
    }));
    let animId;
    function drawBg() {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const light = document.body.classList.contains('theme-light');
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = light ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';
        ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 85) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = light ? `rgba(0,0,0,${0.03*(1-d/85)})` : `rgba(255,255,255,${0.03*(1-d/85)})`;
          ctx.lineWidth = 0.4; ctx.stroke();
        }
      }));
      animId = requestAnimationFrame(drawBg);
    }
    drawBg();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  // anéis 3D
  useEffect(() => {
    const canvas = orbitRef.current;
    const ctx = canvas.getContext('2d');
    const S = 340;
    canvas.width = S; canvas.height = S;
    const cx = S / 2, cy = S / 2;

    // todos os anéis com o mesmo raio — coesos
    const R = 112;
    const STEPS = 160;
    const LOGO_R = 48; // zona de fade ao redor da logo

    // cores CILab
    const ORANGE = [242, 106, 75];
    const TEAL   = [46, 196, 182];

    function lerpRGB(a, b, t) {
      return [
        Math.round(a[0] + (b[0]-a[0])*t),
        Math.round(a[1] + (b[1]-a[1])*t),
        Math.round(a[2] + (b[2]-a[2])*t),
      ];
    }

    // projeta ponto 3D em 2D com rotações em X e Y
    function project(angle, tX, tY) {
      // ponto na elipse no plano XZ
      let x = Math.cos(angle) * R;
      let y = 0;
      let z = Math.sin(angle) * R;

      // rotação eixo X
      let y2 = y * Math.cos(tX) - z * Math.sin(tX);
      let z2 = y * Math.sin(tX) + z * Math.cos(tX);

      // rotação eixo Y
      let x3 =  x * Math.cos(tY) + z2 * Math.sin(tY);
      let z3 = -x * Math.sin(tY) + z2 * Math.cos(tY);

      // perspectiva suave
      const fov = 480;
      const s = fov / (fov + z3 * 0.15);

      return { sx: cx + x3 * s, sy: cy + y2 * s, z: z3 };
    }

    // 3 anéis — mesmo raio, inclinações bem distintas, velocidades parecidas e lentas
    const rings = [
      { tX: Math.PI * 0.42, tY: 0.05,           speed:  0.0018, phase: 0,              color: TEAL   },
      { tX: Math.PI * 0.18, tY: Math.PI * 0.44,  speed: -0.0022, phase: Math.PI * 0.5,  color: ORANGE },
      { tX: Math.PI * 0.30, tY: Math.PI * 0.85,  speed:  0.0015, phase: Math.PI * 1.1,  color: TEAL   },
    ];

    let time = 0;
    let animId;

    function drawRing(ring) {
      const light = document.body.classList.contains('theme-light');
      const rot = ring.phase + time * ring.speed;

      // posição do ponto brilhante (0-1)
      const glowT = ((time * Math.abs(ring.speed) * 0.35) % 1 + 1) % 1;

      // pré-calcula pontos projetados
      const pts = [];
      for (let i = 0; i <= STEPS; i++) {
        const angle = (i / STEPS) * Math.PI * 2 + rot;
        pts.push(project(angle, ring.tX, ring.tY));
      }

      // desenha segmento a segmento
      for (let i = 0; i < STEPS; i++) {
        const p1 = pts[i];
        const p2 = pts[i + 1];

        // fade perto da logo
        const d1 = Math.hypot(p1.sx - cx, p1.sy - cy);
        const d2 = Math.hypot(p2.sx - cx, p2.sy - cy);
        const dAvg = (d1 + d2) * 0.5;
        const logoFade = Math.min(1, Math.max(0, (dAvg - LOGO_R * 0.5) / (LOGO_R * 1.4)));

        if (logoFade < 0.02) continue;

        // proximidade do ponto brilhante
        const segT = i / STEPS;
        let diff = Math.abs(segT - glowT);
        if (diff > 0.5) diff = 1 - diff;
        const glow = Math.max(0, 1 - diff / 0.22);

        // profundidade — frente mais visível que trás
        const depth = (p1.z / R + 1) * 0.5; // 0 atrás, 1 frente

        // cor base do anel + brilhante laranja
        const [r, g, b] = lerpRGB(ring.color, ORANGE, glow * 0.85);

        // opacidade: bem sutil na base, mais presente no brilhante
        const baseA = light
          ? (0.08 + depth * 0.14) * logoFade
          : (0.10 + depth * 0.18) * logoFade;
        const alpha = Math.min(0.88, baseA + glow * 0.38 * logoFade);

        ctx.beginPath();
        ctx.moveTo(p1.sx, p1.sy);
        ctx.lineTo(p2.sx, p2.sy);
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = 0.6 + glow * 1.2 + depth * 0.3;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // ponto brilhante — some perto da logo
      const gA = glowT * Math.PI * 2 + rot;
      const gp = project(gA, ring.tX, ring.tY);
      const gDist = Math.hypot(gp.sx - cx, gp.sy - cy);
      const gFade = Math.min(1, Math.max(0, (gDist - LOGO_R * 0.4) / LOGO_R));

      if (gFade > 0.05) {
        const grad = ctx.createRadialGradient(gp.sx, gp.sy, 0, gp.sx, gp.sy, 14);
        grad.addColorStop(0,   `rgba(242,106,75,${(light ? 0.45 : 0.65) * gFade})`);
        grad.addColorStop(0.5, `rgba(242,106,75,${0.15 * gFade})`);
        grad.addColorStop(1,   'rgba(242,106,75,0)');
        ctx.beginPath();
        ctx.arc(gp.sx, gp.sy, 14, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(gp.sx, gp.sy, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.85 * gFade})`;
        ctx.fill();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, S, S);
      rings.forEach(r => drawRing(r));
      time++;
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className={`hero-wrap ${isDark ? 'dark' : 'light'}`}>
      <div className="hero-glow" />
      <canvas ref={canvasRef} className="hero-canvas" />

      <button className="theme-toggle" onClick={() => setIsDark(!isDark)} aria-label="Alternar tema">
        {isDark ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
        <span>{isDark ? 'Light' : 'Dark'}</span>
      </button>

      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            UFERSA · Pesquisa em IA
          </div>
          <h1 className="hero-title">
            Inteligência<br />
            Computacional<br />
            <em>que transforma.</em>
          </h1>
          <p className="hero-subtitle">
            Desenvolvemos soluções de IA para desafios do mundo real,
            com foco em pesquisa, ética e impacto social duradouro.
          </p>
          <div className="hero-ctas">
            <a href="#what-we-use" className="btn-primary">Descubra nossos métodos →</a>
            <a href="#projects" className="btn-secondary">Ver projetos</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">12<em>+</em></span>
              <span className="stat-label">Projetos</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">3<em>+</em></span>
              <span className="stat-label">Áreas</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">8<em>+</em></span>
              <span className="stat-label">Publicações</span>
            </div>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="hero-img-wrap">
            <canvas className="hero-orbit-canvas" ref={orbitRef} />
            <div className="hero-core-glow" />
            <img src={LogoCILab} alt="Logo CILab" className="hero-logo-img" />
          </div>
        </div>
      </div>

      <div className="hero-diagonal" />
    </div>
  );
}

export default HeroSection;