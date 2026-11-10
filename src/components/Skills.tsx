import React, { useState } from 'react';
import { Code2, BarChart3, Wrench, CheckCircle2, Terminal, Layers, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 1:
        return <BarChart3 className="w-5 h-5 text-indigo-400" />;
      case 2:
      default:
        return <Wrench className="w-5 h-5 text-purple-300" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">02 / Competencies</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
              Skills & Technical Toolset
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Grounded in core engineering fundamentals, hands-on data manipulation, and modern web software development.
          </p>
        </div>

        {/* 3 Skill Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.skills.map((category: SkillCategory, catIdx: number) => (
            <div
              key={category.title}
              className={`p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border transition-all duration-300 flex flex-col justify-between ${
                activeCategoryIndex === catIdx
                  ? 'border-purple-500/50 shadow-xl shadow-purple-950/20'
                  : 'border-zinc-800 hover:border-zinc-700/80'
              }`}
              onMouseEnter={() => setActiveCategoryIndex(catIdx)}
              onMouseLeave={() => setActiveCategoryIndex(null)}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-zinc-800/70 border border-zinc-700/60">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      {category.title}
                    </h3>
                    <span className="text-xs text-zinc-400">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skills List with Practical Context */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-zinc-950/50 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm text-zinc-200 group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 tracking-tight">
                          {skill.focus}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-normal">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Applied in Academic & Independent Projects</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
