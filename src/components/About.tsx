import React from 'react';
import { Compass, Lightbulb, BookOpen, Cpu, Sparkles, MapPin, GraduationCap, Building } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">01 / Background</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            <p className="text-white font-medium text-lg sm:text-xl leading-snug">
              I am a third-year Information Science Engineering student at{' '}
              <span className="text-purple-300">Atria Institute of Technology, Bengaluru</span>,
              fascinated by the intersection of data analytics, machine learning, and dependable software engineering.
            </p>

            <p className="text-zinc-400 text-base leading-relaxed">
              My interest in technology began with curiosity about how complex patterns hide within everyday numbers.
              Whether analyzing millions of financial transactions to spot minute fraudulent signals or aggregating operational
              metrics into clear, actionable Power BI executive dashboards, I enjoy unraveling messy datasets into structured,
              intuitive narratives.
            </p>

            <p className="text-zinc-400 text-base leading-relaxed">
              Rather than chasing buzzwords, I focus on building solid foundations: understanding how operating systems schedule
              processes, writing idiomatic and maintainable Python code, formulating efficient SQL queries, and designing
              straightforward user interfaces that make data accessible to real people.
            </p>

            <p className="text-zinc-400 text-base leading-relaxed">
              Outside of classes, you will find me experimenting with new machine learning algorithms, earning technical
              certifications across Infosys Springboard and Cisco, exploring open-source repositories, and collaborating on
              full-stack applications like TableTurn.
            </p>
          </div>

          {/* Academic Snapshot & Core Pillars Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Snapshot Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                Academic Snapshot
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-medium text-white block">Bachelor of Engineering (B.E.)</span>
                    <span className="text-zinc-400 text-xs">Information Science & Engineering (3rd Year)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-medium text-white block">Atria Institute of Technology</span>
                    <span className="text-zinc-400 text-xs">Affiliated to VTU, Bengaluru</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-medium text-white block">Bengaluru, Karnataka, India</span>
                    <span className="text-zinc-400 text-xs">Available for on-site & remote roles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Approaches Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                How I Work & Learn
              </h3>

              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-zinc-100 font-medium">Curiosity First:</strong> Deeply understanding
                    why a metric moves or why an algorithm fails rather than treating models like black boxes.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-zinc-100 font-medium">Practical Delivery:</strong> Writing clean,
                    reproducible code and building dashboards that solve genuine business pain points.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-zinc-100 font-medium">Continuous Growth:</strong> Regularly
                    completing coursework across data systems, statistical research methodology, and AI fundamentals.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
