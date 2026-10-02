import { getAllApps } from '@/data/apps';
import CatalogueView from '@/components/CatalogueView';

export default function HomePage() {
  const apps = getAllApps();

  return (
    <div>
      {/* Spacious Hero Opening Structure matching dayarathna.com */}
      <section className="portfolio-container pt-12 sm:pt-16 pb-16 sm:pb-24 flex flex-col justify-center min-h-[calc(85svh-94px)]" id="home">
        {/* Hero Meta */}
        <div className="flex justify-between items-center text-xs font-mono text-[#9da9bf] tracking-wider uppercase mb-8 sm:mb-12">
          <span>SHASHIKA DAYARATHNA</span>
          <span>SOFTWARE CATALOGUE</span>
        </div>

        {/* Hero Title */}
        <div className="mb-8 sm:mb-10 max-w-4xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[108px] font-medium tracking-[-0.065em] leading-[0.98] text-[#f1f4fc]">
            Personal <span className="serif">software.</span><br />
            Built to solve.
          </h1>
        </div>

        {/* Hero Intro & Actions */}
        <div className="max-w-xl">
          <p className="text-lg sm:text-xl text-[#b8c3d6] leading-relaxed mb-8">
            A catalogue of standalone desktop applications, utilities, and developer tools built and maintained by Shashika Dayarathna. Each project links directly to its source repository.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a href="#catalogue" className="button primary">
              Explore catalogue
            </a>
            <a
              href="https://dayarathna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              Main portfolio ↗
            </a>
          </div>
        </div>
      </section>

      {/* Catalogue Section (Flows directly from hero without large featured panel) */}
      <CatalogueView initialApps={apps} />

      {/* About Section matching portfolio minimalist design */}
      <section id="about" className="portfolio-container py-24 border-t border-white/[0.08]" aria-label="About this collection">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="font-mono text-xs text-[#9da9bf] tracking-widest uppercase mb-4">
              02 / Architecture &amp; Structure
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#f1f4fc] leading-tight">
              About this <span className="serif">collection.</span>
            </h2>
            <p className="mt-5 text-[#b8c3d6] text-base leading-relaxed max-w-md">
              This repository hosts the static application catalogue for discovering and evaluating software projects. Each listed application is maintained in its own dedicated repository.
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#9da9bf]">
            <div className="border-t border-white/[0.08] pt-4">
              <strong className="block text-base font-medium text-[#f1f4fc] mb-1">Independent Repositories</strong>
              <p className="leading-relaxed">
                Codebases, tests, issues, and packaging workflows live in individual application repositories. The catalogue does not vendor binaries or embed application codebases.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-4">
              <strong className="block text-base font-medium text-[#f1f4fc] mb-1">Factual Development Tracking</strong>
              <p className="leading-relaxed">
                Applications are marked according to their verified state. Unconfirmed releases are clearly identified as in development, and working download links are provided only when release assets exist.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-4">
              <strong className="block text-base font-medium text-[#f1f4fc] mb-1">Static Architecture</strong>
              <p className="leading-relaxed">
                Exported as pre-rendered static HTML with zero tracking, no runtime backend, and fast delivery via Firebase Hosting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
