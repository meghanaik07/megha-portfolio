import React from 'react';
import { X, Download, Printer, Mail, MapPin, GraduationCap, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
MEGHA NAIK
Information Science Engineering Student | Data Analytics & Python
Email: ${PORTFOLIO_DATA.profile.email}
Location: ${PORTFOLIO_DATA.profile.location}
GitHub: ${PORTFOLIO_DATA.profile.github}
LinkedIn: ${PORTFOLIO_DATA.profile.linkedin}
College: Atria Institute of Technology, Bengaluru

============================================================
ACADEMIC SUMMARY & PROJECT OVERVIEW (VERIFIED STUDENT RECORD)
============================================================

EDUCATION
------------------------------------------------------------
Bachelor of Engineering (B.E.) in Information Science and Engineering
Atria Institute of Technology, Bengaluru (Affiliated to VTU)
Duration: 2022 - 2026 | Currently in 3rd Year

TECHNICAL SKILLS
------------------------------------------------------------
* Programming: Python, JavaScript, HTML, CSS, Core Java
* Data Analytics: SQL, Excel, Power BI, Data Visualization, DAX
* Systems & Tools: UNIX/Linux Shell, Git, GitHub
* Machine Learning: Scikit-learn, Random Forest, Logistic Regression, SMOTE

FEATURED PROJECTS
------------------------------------------------------------
1. RiskLens - Credit Card Fraud Detection using Machine Learning
   Technologies: Python, Pandas, Scikit-learn, Random Forest, Logistic Regression, SMOTE
   - Explored class imbalance handling in financial fraud datasets using SMOTE.
   - Compared Logistic Regression and Random Forest classification models.
   - Evaluated precision-recall trade-offs and decision threshold variations.

2. Power BI Executive Dashboards
   Technologies: Power BI, Data Visualization, DAX, Data Modeling, Excel
   - Built interactive dashboards connecting sales and operational datasets.
   - Defined custom DAX calculations and star-schema relationships.
   - Designed visual hierarchy for exploring regional and category trends.

3. TableTurn - Restaurant Reservation & Waitlist System
   Technologies: React, JavaScript, Node.js, Express.js, MongoDB
   - Engineered full-stack table status and waitlist management web application.
   - Built visual floor map for real-time table tracking (Available, Occupied, Reserved).
   - Designed queue management interface for dining room turnover.

CERTIFICATIONS & INDUSTRY TRAINING
------------------------------------------------------------
* Infosys Springboard: Basic Python
* Infosys Springboard: Introduction to Artificial Intelligence
* Infosys Springboard: Java
* Infosys Springboard: Complete UNIX & Linux OS Fundamentals Training
* Infosys Springboard: Data Structures and Algorithms
* NPTEL: Research Methodology
* Cisco: Data Analytics Essentials

Note: Official PDF resume available upon request via naikmegha2006@gmail.com.
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Megha_Naik_Academic_Summary.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <div className="relative w-full max-w-3xl my-auto rounded-2xl bg-[#0c0c0e] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-sm">Megha Naik – Academic & Project Summary</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
              title="Print Summary / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors"
              title="Download text summary"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Surface */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-zinc-300 bg-[#09090b] print:bg-white print:text-zinc-900 print:p-6">
          {/* Header */}
          <div className="border-b border-zinc-800 print:border-zinc-300 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white print:text-black tracking-tight">
                Megha Naik
              </h1>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 print:bg-zinc-200 text-zinc-300 print:text-zinc-800">
                Student Profile Placeholder
              </span>
            </div>

            <p className="text-sm font-medium text-purple-300 print:text-purple-700">
              Information Science Engineering Student · 3rd Year · Aspiring Data Analyst
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-400 print:text-zinc-600 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-purple-400 print:text-zinc-700" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-400 print:text-zinc-700" />
                <span>Bengaluru, Karnataka, India</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-purple-400 print:text-zinc-700" />
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  github.com/meghanaik07
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-purple-400 print:text-zinc-700" />
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/megha-naik
                </a>
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 print:text-purple-800 font-semibold">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <strong className="text-white print:text-black font-semibold block">
                  Bachelor of Engineering (B.E.) in Information Science and Engineering
                </strong>
                <span className="text-zinc-400 print:text-zinc-600">
                  Atria Institute of Technology, Bengaluru (Affiliated to VTU)
                </span>
              </div>
              <span className="font-mono text-zinc-400 print:text-zinc-600 text-xs text-right whitespace-nowrap">
                2022 – 2026 (3rd Year)
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 print:text-purple-800 font-semibold">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-zinc-900/50 print:bg-zinc-100 border border-zinc-800 print:border-zinc-200">
                <span className="font-semibold text-white print:text-black block mb-1">Programming</span>
                <p className="text-zinc-400 print:text-zinc-700 leading-relaxed">
                  Python, JavaScript, HTML, CSS, Core Java
                </p>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/50 print:bg-zinc-100 border border-zinc-800 print:border-zinc-200">
                <span className="font-semibold text-white print:text-black block mb-1">Data & Analytics</span>
                <p className="text-zinc-400 print:text-zinc-700 leading-relaxed">
                  SQL, Excel, Power BI, Data Visualization, DAX
                </p>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/50 print:bg-zinc-100 border border-zinc-800 print:border-zinc-200">
                <span className="font-semibold text-white print:text-black block mb-1">Tools & ML Fundamentals</span>
                <p className="text-zinc-400 print:text-zinc-700 leading-relaxed">
                  Scikit-learn, Random Forest, SMOTE, Git, GitHub, UNIX/Linux
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 print:text-purple-800 font-semibold">
              Academic & Independent Projects
            </h2>

            <div className="space-y-3 text-xs">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-zinc-900/40 print:bg-zinc-50 border border-zinc-800/80 print:border-zinc-200">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-white print:text-black text-sm">{proj.title}</span>
                    <span className="text-[11px] font-mono text-zinc-400 print:text-zinc-600">
                      {proj.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="text-zinc-300 print:text-zinc-700 leading-relaxed mb-2">
                    {proj.description}
                  </p>
                  <ul className="space-y-1 text-zinc-400 print:text-zinc-600 text-[11px]">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-purple-400 print:text-purple-700">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 print:text-purple-800 font-semibold">
              Verified Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div key={cert.id} className="flex items-start gap-2 text-zinc-300 print:text-zinc-800">
                  <span className="text-purple-400 print:text-purple-700 mt-0.5">•</span>
                  <div>
                    <span className="font-medium text-white print:text-black">{cert.title}</span>
                    <span className="text-zinc-500 print:text-zinc-600 text-[11px]"> — {cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honest Note */}
          <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-400">
            Note: This document summarizes verified student coursework and academic projects. Official PDF resume available upon request via <span className="text-zinc-300 font-mono">naikmegha2006@gmail.com</span>.
          </div>
        </div>
      </div>
    </div>
  );
};
