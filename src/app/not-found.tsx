import Link from 'next/link';
import { ArrowLeft, Search, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 sm:px-8 text-center space-y-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/15 bg-white/[0.03] text-slate-400">
        <HelpCircle className="w-8 h-8 text-blue-400" aria-hidden="true" />
      </div>

      <div className="space-y-3">
        <span className="font-mono text-xs uppercase tracking-widest text-[#c7f44a]">
          404 / Route Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          This page does not exist.
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
          The requested application or path could not be found in the apps catalogue. It may have moved or hasn&apos;t been published yet.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Return to Apps Catalogue
        </Link>
        <a
          href="https://dayarathna.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
        >
          Go to Portfolio
        </a>
      </div>
    </div>
  );
}
