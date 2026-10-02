import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070d]/90 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-bold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
            >
              <Image
                src="/favicon.svg"
                alt="Shashika Apps"
                width={28}
                height={28}
                className="w-7 h-7 rounded-lg shadow-sm"
              />
              <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">
                Apps
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              A personal collection of software built and maintained by Shashika Dayarathna. Systems, utilities, and developer tools with public source code.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-widest uppercase text-slate-300">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  App Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  About this collection
                </Link>
              </li>
              <li>
                <a
                  href="https://dayarathna.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  Main Portfolio (dayarathna.com)
                  <ExternalLink className="w-3 h-3 opacity-70" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shashika-mora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  GitHub Organisation
                  <ExternalLink className="w-3 h-3 opacity-70" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-widest uppercase text-slate-300">
              Connect
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="https://dayarathna.com#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  <Mail className="w-4 h-4 text-slate-400" aria-hidden="true" />
                  <span>Send a message</span>
                  <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                </a>
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://github.com/shashika-mora"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/30 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashika-dayarathna-420875359"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/30 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Shashika Dayarathna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
