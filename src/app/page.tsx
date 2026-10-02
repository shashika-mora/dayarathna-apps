import { getAllApps, getAllPlatforms, getAllStatuses } from '@/data/apps';
import CatalogueView from '@/components/CatalogueView';
import Link from 'next/link';
import { ArrowRight, Code2, ShieldCheck, Terminal, ExternalLink } from 'lucide-react';

export default function HomePage() {
  const apps = getAllApps();
  const platforms = getAllPlatforms();
  const statuses = getAllStatuses();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 space-y-20">
      {/* Hero Intro Section */}
      <section className="relative pt-6 space-y-4 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.08]">
          Software I build.<br />
          Tools designed to be <span className="serif text-[#c7f44a]">dependable.</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
          Welcome to <strong className="font-semibold text-white">Shashika&apos;s Apps</strong> — a personal collection of system utilities, tools, and experiments. Built with transparent architecture, zero bloat, and verified public source code.
        </p>
      </section>

      {/* Catalogue Grid & Interactive View */}
      <CatalogueView
        initialApps={apps}
        availablePlatforms={platforms}
        availableStatuses={statuses}
      />

      {/* About this Collection Section */}
      <section id="about" className="rounded-3xl border border-white/10 bg-[#080d16]/80 p-8 sm:p-12 space-y-8 backdrop-blur-md">
        <div className="space-y-3">
          <div className="font-mono text-xs tracking-wider uppercase text-blue-400">
            02 / Standards & Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            About this <span className="serif text-[#c7f44a]">collection.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            This site serves as the central distribution and documentation hub for standalone software projects created by Shashika Dayarathna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-white">Honest Releases</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every project accurately represents its current state. Works in progress are clearly labeled, and downloads are published only when binaries are compiled and verified.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300">
              <Code2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-white">Independent Repositories</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Each software utility lives in its own dedicated repository with its own issues, commits, and release cycle. This catalogue acts as the discovery index.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
              <Terminal className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-semibold text-white">Systems Focus</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Prioritizing low-overhead native utilities, operating system integration, and tools that solve practical friction points without unnecessary background services.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Looking for my personal portfolio, background, and academic path?
          </div>
          <a
            href="https://dayarathna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-white hover:border-[#c7f44a] hover:bg-[#c7f44a]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
          >
            <span>Visit dayarathna.com</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
