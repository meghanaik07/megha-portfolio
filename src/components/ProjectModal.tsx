import React from 'react';
import { X, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl my-auto rounded-2xl bg-[#0c0c0e] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-950/40 border border-purple-800/40">
              Project {project.number}
            </span>
            <h2 className="text-lg font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Small Clean Preview Image */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-zinc-800 max-h-56 bg-zinc-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Summary */}
          <div>
            <h3 className="text-sm font-semibold text-purple-300 mb-1">
              {project.tagline}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-2 font-mono">
              Technologies & Tools
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block font-mono">
              Key Project Highlights
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problem & Methodology */}
          <div className="space-y-3 text-xs text-zinc-400 leading-relaxed">
            <div>
              <strong className="text-zinc-200 block mb-0.5">Problem Context:</strong>
              <p>{project.technicalDetails.problemStatement}</p>
            </div>
            <div>
              <strong className="text-zinc-200 block mb-0.5">Methodology:</strong>
              <p>{project.technicalDetails.methodology}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-zinc-800 bg-zinc-900/60">
          <div className="text-xs text-zinc-400">
            Project by <span className="text-white font-medium">Megha Naik</span> · ISE
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/meghanaik07"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
              title="View Megha's GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Profile</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
