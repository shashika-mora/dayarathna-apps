'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed right-[26px] bottom-[26px] max-sm:right-[18px] max-sm:bottom-[18px] z-25 w-[52px] h-[52px] max-sm:w-[48px] max-sm:h-[48px] grid place-items-center rounded-full bg-[#172135dc] backdrop-blur-[15px] border border-[#b2c8e9]/40 text-[#f1f4fc] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-250 cursor-pointer hover:bg-[#c7f44a] hover:text-[#080b10] hover:border-[#c7f44a] ${
        visible
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-3.5 pointer-events-none'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M12 19V5m-6 6 6-6 6 6" />
      </svg>
    </button>
  );
}
