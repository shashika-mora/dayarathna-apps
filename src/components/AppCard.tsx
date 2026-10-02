import Link from 'next/link';
import Image from 'next/image';
import { AppItem } from '@/data/types';

interface AppCardProps {
  app: AppItem;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <article className="project-card">
      {/* Real verified image only (if present in repo) */}
      {app.image && (
        <div className="project-art">
          <Image
            src={app.image}
            alt={`${app.name} preview`}
            width={700}
            height={320}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b101a] via-transparent to-black/20 pointer-events-none" />
        </div>
      )}

      {/* Card Content */}
      <div className="project-copy">
        <div className="project-kicker">
          <span>{app.category.toUpperCase()}</span>
          <span className="status">{app.status.toUpperCase()}</span>
        </div>

        <h3>
          <Link
            href={`/apps/${app.slug}`}
            className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          >
            {app.name}
          </Link>
        </h3>

        <p>{app.description}</p>

        {/* Project Tags matching Portfolio */}
        {app.techStack && app.techStack.length > 0 && (
          <div className="project-tags" aria-label="Technology stack">
            {app.techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}

        {/* Footer Link Row */}
        <div className="project-link-row">
          <Link
            href={`/apps/${app.slug}`}
            className="inline-flex items-center gap-2 hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
          >
            <span>View details</span>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>

          {app.sourceUrl && (
            <a
              href={app.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#9da9bf] hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
              aria-label={`View ${app.name} source code on GitHub`}
            >
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
