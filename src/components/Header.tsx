import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#05070d]/40 backdrop-blur-[24px] transition-all">
      <div className="portfolio-container mx-auto flex h-[74px] sm:h-[94px] items-center justify-between">
        {/* Brand Link */}
        <Link
          href="/"
          className="brand group flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          aria-label="Shashika Apps Home"
        >
          <Image
            src="/favicon.svg"
            alt="Shashika Dayarathna logo"
            width={38}
            height={38}
            className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] rounded-md transition-transform group-hover:scale-105"
            priority
          />
          <span className="font-mono text-xs uppercase tracking-widest text-[#9da9bf] border-l border-white/10 pl-2.5 ml-0.5">
            Apps
          </span>
        </Link>

        {/* Navigation */}
        <nav aria-label="Main navigation" className="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm">
          <Link
            href="/"
            className="text-[#c7f44a] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          >
            Catalogue
          </Link>
          <a
            href="https://dayarathna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#bec3b6] hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/shashika-mora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#bec3b6] hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
          >
            GitHub
          </a>
        </nav>

        {/* Contact CTA */}
        <a
          href="https://dayarathna.com#contact"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-top hidden md:flex items-center gap-3 text-sm text-[#bec3b6] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
        >
          <span>Let&apos;s talk</span>
          <span className="small-dot w-[7px] h-[7px] rounded-full bg-[#c7f44a]" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
