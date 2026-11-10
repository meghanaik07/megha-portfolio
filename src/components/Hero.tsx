import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, GraduationCap, Database, Terminal, BarChart2, Cpu, Code2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle ambient background constellation nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const nodeCount = 28;
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes within distance threshold
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.14 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particle points
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(216, 180, 254, 0.4)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background ambient radial glow accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[480px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-950/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle background canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability / Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-8 backdrop-blur-sm shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-zinc-200">Available for Internships & Projects</span>
          <span className="text-zinc-500">·</span>
          <span className="text-zinc-400">Bengaluru, IN</span>
        </div>

        {/* Main Name & Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 text-balance leading-[1.12]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-indigo-200">Megha Naik</span>.
        </h1>

        {/* Supporting Narrative */}
        <p className="text-xl sm:text-2xl text-zinc-200 font-medium leading-relaxed mb-6 max-w-3xl mx-auto text-balance">
          An Information Science Engineering student exploring the world of Data Analytics, Artificial Intelligence and Python.
        </p>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto text-balance">
          I enjoy turning data into meaningful insights, solving problems and building practical digital experiences.
        </p>

        {/* Action Buttons & Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all shadow-md shadow-purple-950/20 active:scale-[0.98]"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all active:scale-[0.98]"
          >
            <Download className="w-4 h-4 text-purple-400" />
            <span>Academic & Project Resume</span>
          </button>

          <div className="flex items-center gap-2.5 pl-2 sm:pl-4 border-l border-zinc-800">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              title="GitHub Profile (meghanaik07)"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              title="LinkedIn Profile (Megha Naik)"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              aria-label="Email Megha Naik"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              title="Email Megha Naik"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Quiet Balanced Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto text-left mb-16">
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors">
            <div className="flex items-center gap-2.5 mb-2 text-purple-300">
              <BarChart2 className="w-4 h-4" />
              <h3 className="font-semibold text-sm text-white">Data Analytics</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Exploratory analysis, relational SQL querying, and interactive Power BI business intelligence dashboards.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors">
            <div className="flex items-center gap-2.5 mb-2 text-indigo-300">
              <Cpu className="w-4 h-4" />
              <h3 className="font-semibold text-sm text-white">Machine Learning</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Predictive classification, addressing skewed datasets with SMOTE, and model evaluation metrics.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors">
            <div className="flex items-center gap-2.5 mb-2 text-purple-300">
              <Code2 className="w-4 h-4" />
              <h3 className="font-semibold text-sm text-white">Practical Engineering</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              UNIX/Linux operating systems training, algorithm fundamentals, and building full-stack web solutions.
            </p>
          </div>
        </div>

        {/* Academic & Engineering Summary Strip */}
        <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-base sm:text-lg font-display font-bold text-white">3rd Year B.E.</div>
            <div className="text-xs text-zinc-400 mt-0.5">Information Science & Engg</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-display font-bold text-purple-300">Atria Institute of Technology</div>
            <div className="text-xs text-zinc-400 mt-0.5">Bengaluru, Karnataka</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-display font-bold text-white">Infosys · Cisco · NPTEL</div>
            <div className="text-xs text-zinc-400 mt-0.5">Verified Technical Coursework</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-display font-bold text-zinc-200">Python & Analytics</div>
            <div className="text-xs text-zinc-400 mt-0.5">Core Technical Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
};
