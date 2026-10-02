import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAllApps, getAppBySlug } from '@/data/apps';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate all detail routes at build time
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
    <div className="portfolio-container py-12 sm:py-16 space-y-12">
      {/* Back Link */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#9da9bf] hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
        >
          <span>←</span>
          <span>Back to catalogue</span>
        </Link>
      </div>

      {/* Main App Header */}
      <header className="space-y-6 pb-10 border-b border-white/[0.08]">
        <div className="flex items-center justify-between font-mono text-xs tracking-wider uppercase text-[#9da9bf]">
          <span>{app.category}</span>
          <span className="text-[#c7f44a]">{app.status}</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f4fc] leading-tight">
            {app.name}
          </h1>
          <p className="text-lg sm:text-xl text-[#b8c3d6] leading-relaxed max-w-3xl">
            {app.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#9da9bf] leading-relaxed max-w-3xl">
          {app.description}
        </p>

        {/* Tech Stack Tags */}
        {app.techStack && app.techStack.length > 0 && (
          <div className="project-tags pt-2" aria-label="Technologies used">
            {app.techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
      </header>

      {/* Release & Distribution Status Box */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-lg font-medium text-[#f1f4fc]">
              Distribution &amp; Availability
            </h2>
            {app.downloadAvailable && app.downloadUrl ? (
              <p className="text-sm text-[#b8c3d6]">
                Verified release binary is available for download.
              </p>
            ) : (
              <div className="space-y-1">
                <p className="font-mono text-xs text-[#c7f44a]">
                  Status: In development · Download not available yet
                </p>
                <p className="text-xs text-[#9da9bf] leading-relaxed">
                  {app.downloadNote ||
                    'Release packages will be published when release verification is complete. The application source code is available in the public repository.'}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {app.downloadAvailable && app.downloadUrl ? (
              <a
                href={app.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button primary text-xs py-3 px-6"
              >
                {app.downloadLabel || 'Download release'}
              </a>
            ) : (
              <span className="font-mono text-xs text-[#9da9bf] border border-white/10 rounded-full px-4 py-2 bg-white/[0.02]">
                Download not available yet
              </span>
            )}

            {app.sourceUrl && (
              <a
                href={app.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary text-xs py-3 px-6"
              >
                Source repository ↗
              </a>
            )}
          </div>
        </div>

        {app.latestRelease && (
          <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div>
              <span className="text-[#9da9bf] block uppercase text-[10px]">Version</span>
              <span className="text-[#f1f4fc]">{app.latestRelease.version}</span>
            </div>
            <div>
              <span className="text-[#9da9bf] block uppercase text-[10px]">Date</span>
              <span className="text-[#f1f4fc]">{app.latestRelease.date}</span>
            </div>
            {app.latestRelease.checksum && (
              <div className="col-span-2">
                <span className="text-[#9da9bf] block uppercase text-[10px]">SHA-256</span>
                <span className="text-[#b8c3d6] break-all">{app.latestRelease.checksum}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Content Sections: Implemented Features, Installation, Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Features */}
          {app.features && app.features.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-[#f1f4fc]">
                Implemented Capabilities
              </h2>
              <ul className="space-y-3">
                {app.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 text-sm text-[#b8c3d6] flex items-start gap-3"
                  >
                    <span className="text-[#c7f44a] font-bold mt-0.5" aria-hidden="true">•</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Installation Instructions */}
          {app.installation && app.installation.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-[#f1f4fc]">
                Installation &amp; Usage
              </h2>
              <div className="rounded-xl border border-white/[0.08] bg-[#070b12] p-6 space-y-3">
                <ol className="space-y-3 font-mono text-xs text-[#b8c3d6]">
                  {app.installation.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#9da9bf] w-5 text-right flex-shrink-0">
                        {idx + 1}.
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {/* Real Screenshots Gallery (only if confirmed in repo) */}
          {app.screenshots && app.screenshots.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight text-[#f1f4fc]">
                Verified Screenshots &amp; Assets
              </h2>
              <div className="space-y-6">
                {app.screenshots.map((img, idx) => (
                  <figure
                    key={idx}
                    className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      width={img.width || 800}
                      height={img.height || 450}
                      className="w-full h-auto object-cover"
                    />
                    {img.caption && (
                      <figcaption className="p-3 text-xs text-[#9da9bf] font-mono border-t border-white/[0.06]">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar: App Metadata & Links */}
        <aside className="space-y-8">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#9da9bf]">
              Specifications
            </h3>

            <dl className="space-y-3.5 text-xs">
              <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                <dt className="text-[#9da9bf]">Platform</dt>
                <dd className="font-mono text-[#f1f4fc]">{app.platforms.join(', ')}</dd>
              </div>

              <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                <dt className="text-[#9da9bf]">Category</dt>
                <dd className="font-mono text-[#f1f4fc]">{app.category}</dd>
              </div>

              <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                <dt className="text-[#9da9bf]">Status</dt>
                <dd className="font-mono text-[#c7f44a]">{app.status}</dd>
              </div>

              {app.license && (
                <div className="flex justify-between border-b border-white/[0.06] pb-2.5">
                  <dt className="text-[#9da9bf]">License</dt>
                  <dd className="font-mono text-[#f1f4fc]">{app.license}</dd>
                </div>
              )}

              {app.requirements && app.requirements.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <dt className="text-[#9da9bf]">Requirements</dt>
                  <dd className="space-y-1">
                    {app.requirements.map((req, idx) => (
                      <span
                        key={idx}
                        className="block rounded bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[#b8c3d6]"
                      >
                        {req}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#9da9bf]">
              Source &amp; Issues
            </h3>

            <div className="space-y-2.5 font-mono text-xs">
              {app.sourceUrl && (
                <a
                  href={app.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#b8c3d6] hover:text-[#c7f44a] hover:border-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  <span>GitHub repository</span>
                  <span>↗</span>
                </a>
              )}

              {app.supportUrl && (
                <a
                  href={app.supportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#b8c3d6] hover:text-[#c7f44a] hover:border-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
                >
                  <span>Report an issue</span>
                  <span>↗</span>
                </a>
              )}

              <a
                href="https://dayarathna.com#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg border border-white/[0.08] bg-white/[0.02] text-[#b8c3d6] hover:text-[#c7f44a] hover:border-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              >
                <span>Contact maintainer</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
