'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import { AppItem, Platform, ReleaseStatus } from '@/data/types';
import AppCard from './AppCard';
import Badge from './Badge';

interface CatalogueViewProps {
  initialApps: AppItem[];
  availablePlatforms: Platform[];
  availableStatuses: ReleaseStatus[];
}

export default function CatalogueView({
  initialApps,
  availablePlatforms,
  availableStatuses,
}: CatalogueViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Filter logic
  const filteredApps = useMemo(() => {
    return initialApps.filter((app) => {
      // Search term
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        app.name.toLowerCase().includes(query) ||
        app.tagline.toLowerCase().includes(query) ||
        app.description.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query) ||
        (app.techStack && app.techStack.some((t) => t.toLowerCase().includes(query))) ||
        app.features.some((f) => f.toLowerCase().includes(query));

      // Platform filter
      const matchesPlatform =
        selectedPlatform === 'All' ||
        app.platforms.some((p) => p.toLowerCase() === selectedPlatform.toLowerCase());

      // Status filter
      const matchesStatus =
        selectedStatus === 'All' ||
        app.status.toLowerCase() === selectedStatus.toLowerCase();

      return matchesSearch && matchesPlatform && matchesStatus;
    });
  }, [initialApps, searchQuery, selectedPlatform, selectedStatus]);

  const hasActiveFilters =
    searchQuery.trim() !== '' || selectedPlatform !== 'All' || selectedStatus !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedPlatform('All');
    setSelectedStatus('All');
  };

  // Only highlight featured if not actively searching/filtering
  const featuredApp = useMemo(() => {
    if (hasActiveFilters) return null;
    return initialApps.find((app) => app.featured);
  }, [initialApps, hasActiveFilters]);

  return (
    <section className="space-y-10" aria-label="Application Catalogue">
      {/* Featured App Showcase (Only when present and no filter active) */}
      {featuredApp && (
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/25 bg-gradient-to-br from-[#101828]/95 via-[#0c121e]/90 to-[#070b12]/95 shadow-2xl backdrop-blur-sm">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content Column */}
            <div className="p-8 md:p-10 lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[#c7f44a]/15 text-[#c7f44a] border border-[#c7f44a]/30">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    Featured Application
                  </span>
                  <Badge variant="status" status={featuredApp.status}>
                    {featuredApp.status}
                  </Badge>
                  {featuredApp.platforms.map((p) => (
                    <Badge key={p} variant="platform">
                      {p}
                    </Badge>
                  ))}
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {featuredApp.name}
                  </h2>
                  <p className="mt-2 text-base sm:text-lg text-slate-300">
                    {featuredApp.tagline}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  {featuredApp.description}
                </p>

                {/* Tech tags */}
                {featuredApp.techStack && featuredApp.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredApp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={`/apps/${featuredApp.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  View full documentation
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                {featuredApp.sourceUrl && (
                  <a
                    href={featuredApp.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition-all hover:bg-white/10 hover:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                  >
                    View Source Repository
                  </a>
                )}
              </div>
            </div>

            {/* Right Visual & Spec Column */}
            <div className="lg:col-span-5 bg-[#080d17]/80 border-t lg:border-t-0 lg:border-l border-white/10 p-6 md:p-8 flex flex-col justify-between gap-6">
              {featuredApp.bannerImage && (
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-inner">
                  <Image
                    src={featuredApp.bannerImage}
                    alt={featuredApp.name}
                    width={600}
                    height={340}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              )}

              <dl className="space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-400">Target Platform</dt>
                  <dd className="font-mono text-slate-200">{featuredApp.platforms.join(', ')}</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-400">Category</dt>
                  <dd className="font-mono text-slate-200">{featuredApp.category}</dd>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <dt className="text-slate-400">License</dt>
                  <dd className="font-mono text-slate-200">{featuredApp.license || 'Open Source'}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-400">Distribution</dt>
                  <dd className="font-mono text-amber-300">In Development</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filters Bar */}
      <div className="rounded-2xl border border-white/10 bg-[#090d16]/80 p-5 md:p-6 backdrop-blur-md space-y-5">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <label htmlFor="catalogue-search" className="sr-only">
              Search applications by name, description, or keyword
            </label>
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="catalogue-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, description, tags, or keywords..."
              className="w-full rounded-xl border border-white/15 bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-blue-400 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
                aria-label="Clear search input"
              >
                Clear
              </button>
            )}
          </div>

          {/* Reset Action */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-mono text-slate-300 hover:bg-white/10 hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Reset filters
            </button>
          )}
        </div>

        {/* Filters Group */}
        <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-white/5 text-xs">
          {/* Platform Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-slate-400 uppercase tracking-wider">
              Platform:
            </span>
            {['All', ...availablePlatforms].map((plat) => (
              <button
                key={plat}
                type="button"
                onClick={() => setSelectedPlatform(plat)}
                className={`px-3 py-1 rounded-full font-mono transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a] ${
                  selectedPlatform === plat
                    ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-500/30'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
                aria-pressed={selectedPlatform === plat}
              >
                {plat}
              </button>
            ))}
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-slate-400 uppercase tracking-wider">
              Status:
            </span>
            {['All', ...availableStatuses].map((stat) => (
              <button
                key={stat}
                type="button"
                onClick={() => setSelectedStatus(stat)}
                className={`px-3 py-1 rounded-full font-mono transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a] ${
                  selectedStatus === stat
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-500/30'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
                aria-pressed={selectedStatus === stat}
              >
                {stat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
          Showing {filteredApps.length} {filteredApps.length === 1 ? 'application' : 'applications'}
        </p>
        {hasActiveFilters && (
          <span className="text-xs font-mono text-blue-400">
            Filtered view
          </span>
        )}
      </div>

      {/* Grid of App Cards */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-white/10 bg-[#090d16]/60 p-12 text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-slate-400">
            <Search className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white">No matching software found</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              We couldn&apos;t find any applications matching &ldquo;{searchQuery}&rdquo; with the selected filters.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Reset all filters
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
