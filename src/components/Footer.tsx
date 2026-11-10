import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-800/80 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Purpose */}
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-white text-base">Megha Naik</span>
            <p className="text-xs text-zinc-400 mt-1">
              Information Science Engineering · Atria Institute of Technology, Bengaluru
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-400">
              © {new Date().getFullYear()} Megha Naik. All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Scroll to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
