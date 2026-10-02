'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#05070d]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          aria-label="Shashika Apps Home"
        >
          <Image
            src="/favicon.svg"
            alt="Shashika Apps"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg shadow-sm"
          />
          <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
            Apps
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link
            href="/"
            className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          >
            Catalogue
          </Link>
          <Link
            href="/#about"
            className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          >
            About
          </Link>
          <a
            href="https://dayarathna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          >
            Portfolio
            <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/shashika-mora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          >
            GitHub
            <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
          </a>
        </nav>

        {/* CTA link to main portfolio contact or quick button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://dayarathna.com#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 transition-all hover:border-[#c7f44a]/50 hover:bg-[#c7f44a]/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          >
            Get in touch
            <span className="w-1.5 h-1.5 rounded-full bg-[#c7f44a]" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#070a10]/95 px-6 py-5 backdrop-blur-xl">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-300">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Catalogue
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              About
            </Link>
            <a
              href="https://dayarathna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between py-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Main Portfolio</span>
              <ExternalLink className="w-4 h-4 opacity-70" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/shashika-mora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between py-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-4 h-4 opacity-70" aria-hidden="true" />
            </a>
            <a
              href="https://dayarathna.com#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.05] py-2.5 text-sm text-white"
            >
              <span>Get in touch</span>
              <span className="w-2 h-2 rounded-full bg-[#c7f44a]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
