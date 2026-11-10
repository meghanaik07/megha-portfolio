import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Filter, ShieldCheck, ChevronRight, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedIssuer, setSelectedIssuer] = useState<string>('All');
  const [activeCertModal, setActiveCertModal] = useState<Certification | null>(null);

  const issuers = ['All', 'Infosys Springboard', 'NPTEL', 'Cisco'];

  const filteredCerts =
    selectedIssuer === 'All'
      ? PORTFOLIO_DATA.certifications
      : PORTFOLIO_DATA.certifications.filter((c) => c.issuer === selectedIssuer);

  return (
    <section id="certifications" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">04 / Verified Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
              Certifications & Training
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Rigorous industry training programs validating core programming, operating systems, data analytics, and research inquiry.
          </p>
        </div>

        {/* Filter Tabs (Interactive Filter Controls allowed per guideline §1.A) */}
        <div className="flex items-center gap-2 p-1.5 bg-zinc-900/70 border border-zinc-800 rounded-xl w-fit mb-8 overflow-x-auto max-w-full">
          {issuers.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setSelectedIssuer(issuer)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedIssuer === issuer
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {issuer} {issuer === 'All' ? `(${PORTFOLIO_DATA.certifications.length})` : ''}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCertModal(cert)}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:shadow-lg hover:shadow-purple-950/10"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-3 text-xs text-zinc-400">
                  <span className="font-semibold text-purple-300">{cert.issuer}</span>
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified</span>
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {cert.summary}
                </p>

                {/* Skills Covered Unboxed Chips */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skillsCovered.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] text-zinc-400 bg-zinc-950/60 border border-zinc-800/60 px-2 py-0.5 rounded font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsCovered.length > 3 && (
                    <span className="text-[11px] text-zinc-400 px-1 py-0.5 font-mono">
                      +{cert.skillsCovered.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 group-hover:text-purple-300 transition-colors">
                <span>View Credential Details</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        {activeCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#0c0c0e] border border-zinc-800 p-6 shadow-2xl space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-purple-300 uppercase tracking-wider block mb-1">
                    {activeCertModal.issuer} · {activeCertModal.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">
                    {activeCertModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-2 text-xs">
                <span className="font-semibold text-zinc-200 block">Curriculum Summary</span>
                <p className="text-zinc-400 leading-relaxed">
                  {activeCertModal.summary}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 block mb-2">
                  Competencies & Key Concepts Mastered
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCertModal.skillsCovered.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs rounded bg-purple-950/30 border border-purple-800/40 text-purple-200 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Credential Record</span>
                </span>
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="px-4 py-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
