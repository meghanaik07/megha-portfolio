import React, { useState } from 'react';
import { Github, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">03 / Works</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Selected academic and independent projects across machine learning, business intelligence, and web software.
          </p>
        </div>

        {/* 3 Balanced Attractive Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md shadow-black/20"
            >
              <div>
                {/* Small Appropriately Sized Project Preview Thumbnail */}
                <div
                  className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle top-right category badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900/85 backdrop-blur-sm text-purple-300 border border-zinc-700/60">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Number & Kicker */}
                  <div className="text-[11px] font-mono text-zinc-400 mb-1.5">
                    Project {project.number}
                  </div>

                  {/* Project Name */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-purple-200 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono block">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] text-zinc-300 bg-zinc-950/70 border border-zinc-800 rounded px-2 py-0.5 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] text-zinc-400 px-1 py-0.5 font-mono">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: GitHub Link & Details Action */}
              <div className="px-6 py-4 border-t border-zinc-800/80 bg-zinc-950/40 flex items-center justify-between gap-3">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  title="View GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-purple-300 hover:text-purple-200 transition-colors"
                >
                  <span>Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Project Overview Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
