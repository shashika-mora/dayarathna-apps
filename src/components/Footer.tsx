import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-transparent text-[#9da9bf] font-mono text-xs">
      <div className="portfolio-container mx-auto py-9 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Attribution */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="brand flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7f44a]"
            aria-label="Shashika Apps Home"
          >
            <Image
              src="/favicon.svg"
              alt="Shashika Dayarathna logo"
              width={30}
              height={30}
              className="w-[30px] h-[30px] rounded-[8px] shadow-[0_0_10px_rgba(199,244,74,0.18)]"
            />
          </Link>
          <span className="text-xs text-[#9da9bf]">
            Shashika Dayarathna · Software Catalogue
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-xs text-[#9da9bf]">
          <Link
            href="/"
            className="hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
          >
            Catalogue
          </Link>
          <a
            href="https://dayarathna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
          >
            Portfolio
          </a>
          <a
            href="https://dayarathna.com#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c7f44a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
          >
            Contact
          </a>
        </div>

        {/* Social Links matching Portfolio .social-icon */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/shashika-mora"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full border border-[#aac1e0]/20 bg-white/[0.03] grid place-items-center text-[#a0acc0] hover:text-[#c7f44a] hover:border-[#c7f44a]/50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/shashika-dayarathna-420875359"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full border border-[#aac1e0]/20 bg-white/[0.03] grid place-items-center text-[#a0acc0] hover:text-[#c7f44a] hover:border-[#c7f44a]/50 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7f44a]"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
