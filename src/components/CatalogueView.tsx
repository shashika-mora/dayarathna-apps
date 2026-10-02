'use client';

import { useState, useMemo } from 'react';
import { Search, RotateCcw } from 'lucide-react';
import { AppItem } from '@/data/types';
import AppCard from './AppCard';

interface CatalogueViewProps {
  initialApps: AppItem[];
}

export default function CatalogueView({ initialApps }: CatalogueViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter apps by name, description, category, or tech tags
  const filteredApps = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return initialApps;

    return initialApps.filter((app) => {
      return (
        app.name.toLowerCase().includes(query) ||
        app.tagline.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query) ||
        app.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
        app.features.some((feat) => feat.toLowerCase().includes(query))
      );
    });
  }, [initialApps, searchQuery]);

  return (
    <section className="portfolio-container pb-28 pt-8" id="catalogue" aria-label="Application Catalogue">
      {/* Section Head matching portfolio .section-head */}
      <div className="mb-12">
        <div className="font-mono text-xs text-[#9da9bf] tracking-widest uppercase mb-4">
          01 / Catalogue
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f1f4fc] leading-tight">
            Applications<br />
            &amp; <span className="serif">tools.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9da9bf] max-w-sm leading-relaxed mb-1">
            Standalone utilities and developer tools built with native runtimes and transparent tracking.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar styled with portfolio controls */}
      <div className="mb-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9da9bf] pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="catalogue-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, technology, or keywords..."
            className="w-full rounded-xl border border-white/[0.09] bg-white/[0.03] pl-10 pr-10 py-2.5 text-sm text-[#f1f4fc] placeholder-[#9da9bf]/60 transition-all focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-[#c7f44a]"
            aria-label="Search applications"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#9da9bf] hover:text-white"
              aria-label="Clear search input"
            >
              Clear
            </button>
          )}
        </div>

        <div className="font-mono text-xs text-[#9da9bf]">
          {searchQuery ? (
            <span>
              Showing {filteredApps.length} of {initialApps.length} {initialApps.length === 1 ? 'app' : 'apps'}
            </span>
          ) : (
            <span>{initialApps.length} applications</span>
          )}
        </div>
      </div>

      {/* Project Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 text-center space-y-4 max-w-xl mx-auto my-8">
          <div className="font-mono text-xs text-[#9da9bf] uppercase tracking-wider">
            No matching applications
          </div>
          <p className="text-sm text-[#9da9bf] leading-relaxed">
            No applications match &ldquo;{searchQuery}&rdquo;. Clear the search input to view the full catalogue.
          </p>
          <div>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="button secondary text-xs py-2 px-5 inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Reset search
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
