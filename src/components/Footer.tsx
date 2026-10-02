'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterXIcon,
  YoutubeIcon,
  MapPinIcon,
  MailIcon,
} from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-transparent text-[#9da9bf] mt-24 pt-16 pb-9 relative z-10 w-full">
      <div className="portfolio-container mx-auto">
        {/* Main 5-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.1fr] gap-9 mb-12">
          {/* Brand Column */}
          <div className="lg:pr-5">
            <Link
              href="https://dayarathna.com"
              className="inline-flex items-center gap-3 mb-4 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
              aria-label="Shashika Dayarathna Home"
            >
              <Image
                src="/favicon.svg"
                alt="Shashika Dayarathna logo"
                width={36}
                height={36}
                className="w-9 h-9 rounded-[8px] shadow-[0_0_12px_rgba(199,244,74,0.2)] group-hover:scale-105 transition-transform"
              />
              <span className="font-sans font-bold text-lg text-[#f1f4fc] tracking-tight">
                Dayarathna<span className="text-[0.65em] align-super text-[#c7f44a] ml-0.5">®</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-[#9da9bf] mb-4 max-w-xs font-sans">
              Software Engineer &amp; Systems Researcher at University of Moratuwa. Official open-source utility catalogue, CLI packages, and desktop tools.
            </p>
            <div className="flex flex-col gap-2 font-mono text-[11px]">
              <div className="inline-flex items-center gap-2 text-[#c7f44a] bg-[#c7f44a]/[0.08] border border-[#c7f44a]/20 px-3 py-1 rounded-full w-fit mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c7f44a] shadow-[0_0_8px_#c7f44a] animate-pulse"></span>
                <span>Active software release pipeline</span>
              </div>
              <span className="inline-flex items-center gap-2 text-[#8fa1bc]">
                <MapPinIcon className="w-3.5 h-3.5 text-[#c7f44a]" />
                Moratuwa / Colombo, Sri Lanka
              </span>
              <a
                href="mailto:shashikatheekshana67@gmail.com"
                className="inline-flex items-center gap-2 text-[#8fa1bc] hover:text-[#c7f44a] transition-colors"
              >
                <MailIcon className="w-3.5 h-3.5 text-[#c7f44a]" />
                shashikatheekshana67@gmail.com
              </a>
            </div>
          </div>

          {/* Ecosystem Column */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#f1f4fc] mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-4 after:h-[1.5px] after:bg-[#c7f44a]">
              Ecosystem
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans">
              <li>
                <a href="https://dayarathna.com" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Portfolio &amp; Systems
                </a>
              </li>
              <li>
                <Link href="/" className="text-[#c7f44a] font-medium">
                  Apps &amp; Tools
                </Link>
              </li>
              <li>
                <a href="https://blog.dayarathna.com" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Engineering Blog
                </a>
              </li>
              <li>
                <a href="https://academic.dayarathna.com" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Academic Portal
                </a>
              </li>
              <li>
                <a href="https://store.dayarathna.com" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Digital Store
                </a>
              </li>
            </ul>
          </div>

          {/* Engineering Column */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#f1f4fc] mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-4 after:h-[1.5px] after:bg-[#c7f44a]">
              Engineering
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans">
              <li>
                <a href="https://dayarathna.com#projects" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Pintos OS Kernel
                </a>
              </li>
              <li>
                <a href="https://dayarathna.com#projects" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Valyrian Decree
                </a>
              </li>
              <li>
                <a href="https://dayarathna.com#projects" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  BusLK Android
                </a>
              </li>
              <li>
                <a href="https://dayarathna.com#projects" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Nano Processor
                </a>
              </li>
              <li>
                <a href="https://dayarathna.com#projects" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Enigma 2026 Engine
                </a>
              </li>
            </ul>
          </div>

          {/* Knowledge Column */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#f1f4fc] mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-4 after:h-[1.5px] after:bg-[#c7f44a]">
              Knowledge
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans">
              <li>
                <a href="https://academic.dayarathna.com" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  CSE Curriculum
                </a>
              </li>
              <li>
                <a href="https://academic.dayarathna.com" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Research &amp; Papers
                </a>
              </li>
              <li>
                <a href="https://blog.dayarathna.com" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Architecture Journal
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shashika-mora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors inline-flex items-center gap-1"
                >
                  GitHub Codebase <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a href="https://dayarathna.com#about" className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors">
                  Colophon &amp; Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#f1f4fc] mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-4 after:h-[1.5px] after:bg-[#c7f44a]">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans">
              <li>
                <a
                  href="https://www.linkedin.com/in/shashika-dayarathna-420875359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shashika-mora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors inline-flex items-center gap-1"
                >
                  GitHub <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/shashika.dayarathna.2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors inline-flex items-center gap-1"
                >
                  Facebook <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/shashika_daya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors inline-flex items-center gap-1"
                >
                  Instagram <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors inline-flex items-center gap-1"
                >
                  X (Twitter) <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9da9bf] hover:text-[#c7f44a] transition-colors inline-flex items-center gap-1"
                >
                  YouTube <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#8fa1bc]">
          <div className="flex flex-col gap-1">
            <span>© 2026 Shashika Dayarathna. All rights reserved.</span>
            <span className="text-[#61728d]">apps.dayarathna.com • Engineered with celestial physics &amp; neon accents.</span>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/shashika-dayarathna-420875359"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-[#aac1e0]/20 bg-white/[0.03] grid place-items-center text-[#a0acc0] hover:text-[#c7f44a] hover:border-[#c7f44a]/50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/shashika-mora"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-[#aac1e0]/20 bg-white/[0.03] grid place-items-center text-[#a0acc0] hover:text-[#c7f44a] hover:border-[#c7f44a]/50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://web.facebook.com/shashika.dayarathna.2025/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#aac1e0]/20 bg-white/[0.03] grid place-items-center text-[#a0acc0] hover:text-[#c7f44a] hover:border-[#c7f44a]/50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/shashika_daya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#aac1e0]/20 bg-white/[0.03] grid place-items-center text-[#a0acc0] hover:text-[#c7f44a] hover:border-[#c7f44a]/50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full border border-[#aac1e0]/20 bg-white/[0.03] grid place-items-center text-[#a0acc0] hover:text-[#c7f44a] hover:border-[#c7f44a]/50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-[#aac1e0]/20 bg-white/[0.03] grid place-items-center text-[#a0acc0] hover:text-[#c7f44a] hover:border-[#c7f44a]/50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] grid place-items-center text-[#d2dbea] hover:bg-[#c7f44a] hover:text-[#05070d] hover:border-[#c7f44a] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 19V5m-6 6 6-6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
