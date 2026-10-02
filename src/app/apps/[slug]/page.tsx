import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  ArrowLeft,
  ExternalLink,
  Download,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  FileCode,
  LifeBuoy
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { getAllApps, getAppBySlug } from '@/data/apps';
import Badge from '@/components/Badge';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Statically generate all detail routes at build time
export async function generateStaticParams() {
  const apps = getAllApps();
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: 'App Not Found — Shashika’s Apps',
    };
  }

  return {
    title: `${app.name} — Shashika’s Apps`,
    description: app.tagline,
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 space-y-12">
      {/* Back Button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          Back to Catalogue
        </Link>
      </div>

      {/* Visual Header Banner */}
      {app.bannerImage && (
        <div className="relative aspect-[21/9] sm:aspect-[24/10] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#060a12] shadow-2xl">
          <Image
            src={app.bannerImage}
            alt={`${app.name} interface illustration`}
            width={1200}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-black/20 pointer-events-none" />
        </div>
      )}

      {/* Main Header */}
      <header className="space-y-6 pb-8 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="category">{app.category}</Badge>
          {app.platforms.map((plat) => (
            <Badge key={plat} variant="platform">
              {plat}
            </Badge>
          ))}
          <Badge variant="status" status={app.status}>
            {app.status}
          </Badge>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            {app.name}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-3xl">
            {app.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
          {app.description}
        </p>

        {app.techStack && app.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1" aria-label="Technology stack">
            {app.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Download / Release Callout Box */}
      <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#0c1322]/90 via-[#080d17]/80 to-[#05070d]/90 p-8 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-400" aria-hidden="true" />
              Download & Distribution
            </h2>
            {app.downloadAvailable && app.downloadUrl ? (
              <p className="text-sm text-slate-300">
                Official release binaries are available for download.
              </p>
            ) : (
              <div className="space-y-1">
                <p className="text-sm font-medium text-amber-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                  Download not available yet
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {app.downloadNote ||
                    'This application is currently in active development. Standalone executable packages will be published when release verification is complete.'}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {app.downloadAvailable && app.downloadUrl ? (
              <a
                href={app.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                {app.downloadLabel || 'Download Installer'}
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-500 cursor-not-allowed"
                title="Download not available yet"
              >
                <Download className="w-4 h-4 opacity-50" aria-hidden="true" />
                Download not available yet
              </button>
            )}

            {app.sourceUrl && (
              <a
                href={app.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-white/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <GithubIcon className="w-4 h-4" />
                Source Repository
                <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Confirmed Version info if present */}
        {app.latestRelease && (
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block uppercase">Version</span>
              <span className="text-slate-200">{app.latestRelease.version}</span>
            </div>
            <div>
              <span className="text-slate-500 block uppercase">Release Date</span>
              <span className="text-slate-200">{app.latestRelease.date}</span>
            </div>
            {app.latestRelease.checksum && (
              <div className="col-span-2">
                <span className="text-slate-500 block uppercase">SHA-256 Checksum</span>
                <span className="text-slate-300 break-all">{app.latestRelease.checksum}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Content Sections: Features, Installation, Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          {/* Features */}
          {app.features && app.features.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-blue-400" aria-hidden="true" />
                Features & Capabilities
              </h2>
              <ul className="space-y-3">
                {app.features.map((feature, idx) => {
                  const parts = feature.split(':');
                  const hasPrefix = parts.length > 1;
                  return (
                    <li
                      key={idx}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-slate-300 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c7f44a] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        {hasPrefix ? (
                          <>
                            <strong className="text-white font-semibold">{parts[0]}:</strong>
                            <span>{parts.slice(1).join(':')}</span>
                          </>
                        ) : (
                          <span>{feature}</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {/* Installation Instructions */}
          {app.installation && app.installation.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                Installation & Usage
              </h2>
              <div className="rounded-2xl border border-white/10 bg-[#070b12] p-6 space-y-4">
                <ol className="space-y-3 text-sm text-slate-300">
                  {app.installation.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-slate-400 w-5 h-5 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {/* Screenshots Gallery (only if supplied) */}
          {app.screenshots && app.screenshots.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                Screenshots
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {app.screenshots.map((img, idx) => (
                  <figure
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      width={img.width || 800}
                      height={img.height || 450}
                      className="w-full h-auto object-cover"
                    />
                    {img.caption && (
                      <figcaption className="p-3 text-xs text-slate-400 font-mono">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Release Notes (only if confirmed) */}
          {app.latestRelease?.notes && app.latestRelease.notes.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                <FileCode className="w-5 h-5 text-amber-400" aria-hidden="true" />
                Release Notes ({app.latestRelease.version})
              </h2>
              <ul className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-2 text-sm text-slate-300">
                {app.latestRelease.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Sidebar: App Metadata & Links */}
        <aside className="space-y-8">
          {/* Specifications Box */}
          <div className="rounded-2xl border border-white/10 bg-[#090d16]/80 p-6 space-y-5 backdrop-blur-sm">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technical Details
            </h3>

            <dl className="space-y-3.5 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <dt className="text-slate-400">Supported OS</dt>
                <dd className="font-mono text-slate-200">{app.platforms.join(', ')}</dd>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <dt className="text-slate-400">Category</dt>
                <dd className="font-mono text-slate-200">{app.category}</dd>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-2.5">
                <dt className="text-slate-400">Development Status</dt>
                <dd className="font-mono text-amber-300">{app.status}</dd>
              </div>

              {app.license && (
                <div className="flex justify-between border-b border-white/5 pb-2.5">
                  <dt className="text-slate-400">License</dt>
                  <dd className="font-mono text-slate-200">{app.license}</dd>
                </div>
              )}

              {app.requirements && app.requirements.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <dt className="text-slate-400">System Prerequisites</dt>
                  <dd className="space-y-1">
                    {app.requirements.map((req, idx) => (
                      <span
                        key={idx}
                        className="block rounded-lg bg-white/[0.03] px-2.5 py-1.5 font-mono text-[11px] text-slate-300"
                      >
                        {req}
                      </span>
                    ))}
                  </dd>
                </div>
              )}

              {app.techStack && app.techStack.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <dt className="text-slate-400">Tech Stack</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {app.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Links & Support Box */}
          <div className="rounded-2xl border border-white/10 bg-[#090d16]/80 p-6 space-y-4 backdrop-blur-sm">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <LifeBuoy className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              Source & Support
            </h3>

            <div className="space-y-2.5 text-xs font-mono">
              {app.sourceUrl && (
                <a
                  href={app.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-slate-300 hover:text-white hover:border-white/25 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-slate-400" />
                    GitHub Repository
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                </a>
              )}

              {app.supportUrl && (
                <a
                  href={app.supportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-slate-300 hover:text-white hover:border-white/25 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  <span className="flex items-center gap-2">
                    <LifeBuoy className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    Report an Issue
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                </a>
              )}

              <a
                href="https://dayarathna.com#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/[0.02] text-slate-300 hover:text-white hover:border-white/25 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <span>Contact Maintainer</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
