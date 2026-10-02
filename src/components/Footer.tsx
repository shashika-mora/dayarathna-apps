export default function Footer() {
  return (
    <div className="site-footer-wrapper">
      <footer className="site-footer">
        <div className="footer-directory">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <a href="https://dayarathna.com" className="footer-brand" aria-label="Shashika Dayarathna Home">
              <img src="/favicon.svg" alt="Shashika Dayarathna logo" className="brand-logo" width="36" height="36" />
              <span className="brand-text">Dayarathna</span>
            </a>
            <p className="brand-bio">
              Computer Science &amp; Engineering undergraduate at the University of Moratuwa. Exploring systems architecture, software design, networks, and DevOps.
            </p>
            <div className="brand-meta">
              <div className="status-badge">
                <span className="pulse-dot"></span>
                <span>Open to conversations &amp; connections</span>
              </div>
              <span className="meta-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                Moratuwa / Colombo, Sri Lanka
              </span>
              <a href="mailto:shashikatheekshana67@gmail.com" className="meta-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                shashikatheekshana67@gmail.com
              </a>
            </div>
          </div>

          {/* Ecosystem Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Ecosystem</h4>
            <ul className="footer-links">
              <li><a href="https://dayarathna.com" className="footer-link">Portfolio &amp; Systems</a></li>
              <li><a href="https://apps.dayarathna.com" className="footer-link">Shashika’s Apps</a></li>
              <li><a href="https://blog.dayarathna.com" className="footer-link">Shashika’s Blog</a></li>
              <li><a href="https://academic.dayarathna.com" className="footer-link">Shashika’s Academic Space</a></li>
              <li><a href="https://store.dayarathna.com" className="footer-link">Shashika’s Store</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-copy">
            <span>© 2026 Shashika Dayarathna. All rights reserved.</span>
          </div>

          <div className="footer-social-row" aria-label="Social media profiles">
            <a className="social-icon" href="https://www.linkedin.com/in/shashika-dayarathna-420875359" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3.5 9h3v12h-3zM9 9h3v1.6c.8-1.2 1.8-1.9 3.4-1.9 3.3 0 4.1 2.1 4.1 5V21h-3v-6.4c0-1.7-.3-3-2.1-3-1.9 0-2.4 1.4-2.4 3V21H9z"/></svg>
            </a>
            <a className="social-icon" href="https://github.com/shashika-mora" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 4v-3.9a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.8-1.6 6.8-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4S18-.2 15 1.7a13.4 13.4 0 0 0-6 0C6-.2 4.8.2 4.8.2a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3.5 6.9 6.8 7.3a3.4 3.4 0 0 0-1 2.6V22" transform="translate(0 1) scale(1 .9)"/></svg>
            </a>
            <a className="social-icon" href="https://web.facebook.com/shashika.dayarathna.2025/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M15 21v-8h3l.5-4H15V7c0-1.2.4-2 2-2h2V1.5A23 23 0 0 0 16 1c-3 0-5 1.8-5 5v3H8v4h3v8z"/></svg>
            </a>
            <a className="social-icon" href="https://www.instagram.com/shashika_daya/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
