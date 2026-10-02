import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { AppItem } from '@/data/types';
import Badge from './Badge';

interface AppCardProps {
  app: AppItem;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 ${
        app.featured
          ? 'border-blue-500/30 bg-gradient-to-b from-[#11192b]/90 via-[#0d1424]/85 to-[#080d18]/90 shadow-xl shadow-blue-950/20 hover:border-blue-400/60'
          : 'border-white/10 bg-gradient-to-b from-[#0e1626]/80 via-[#0a101c]/75 to-[#070b14]/85 hover:border-white/25 hover:bg-[#111a2d]/85'
      } hover:-translate-y-1 hover:shadow-2xl`}
    >
      <div>
        {/* Visual Artwork Banner (Matching Portfolio .project-art aesthetic) */}
        {app.bannerImage && (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#060a12] border-b border-white/10">
            <Image
              src={app.bannerImage}
              alt={`${app.name} interface illustration`}
              width={800}
              height={450}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              priority={app.featured}
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-transparent to-black/30 pointer-events-none" />

            {/* Optional Icon Overlay */}
            {app.iconImage && (
              <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-black/60 backdrop-blur-md p-1.5 shadow-lg">
                <Image
                  src={app.iconImage}
                  alt={`${app.name} icon`}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        )}

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          {/* Top Kicker: Category & Status */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="category">{app.category}</Badge>
              {app.platforms.map((plat) => (
                <Badge key={plat} variant="platform">
                  {plat}
                </Badge>
              ))}
            </div>
            <Badge variant="status" status={app.status}>
              {app.status}
            </Badge>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-1.5 mb-3">
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
              <Link
                href={`/apps/${app.slug}`}
                className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a] rounded-sm"
              >
                {app.name}
              </Link>
            </h3>
            <p className="text-sm font-medium text-slate-300 leading-snug">
              {app.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-2">
            {app.description}
          </p>

          {/* Tech Stack Tags (Matching .project-tags from Portfolio) */}
          {app.techStack && app.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Technologies used">
              {app.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-slate-300 transition-colors group-hover:border-white/20 group-hover:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Key Capabilities Bullet Points */}
          {app.features && app.features.length > 0 && (
            <div className="mb-2 space-y-2 border-t border-white/5 pt-4">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                Key Highlights
              </p>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {app.features.slice(0, 2).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#c7f44a] mt-0.5">•</span>
                    <span className="line-clamp-1">{feat.split(':')[0]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Status note & Action */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 border-t border-white/10 flex items-center justify-between gap-4 mt-auto">
        <div className="text-xs font-mono text-slate-400">
          {!app.downloadAvailable ? (
            <span className="inline-flex items-center gap-1.5 text-amber-300/90">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              In Development
            </span>
          ) : (
            <span className="text-emerald-400">Public Release Ready</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {app.sourceUrl && (
            <a
              href={app.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/25 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              title="View source repository"
              aria-label={`View ${app.name} source code on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          <Link
            href={`/apps/${app.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
          >
            View details
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
