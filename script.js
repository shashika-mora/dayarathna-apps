// Motion preference & reveal observer
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// Year in footer
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll progress bar
let frame = false;
const progressBar = document.querySelector('.progress');
window.addEventListener(
  'scroll',
  () => {
    if (!frame) {
      requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        if (progressBar) {
          progressBar.style.width = (height > 0 ? (window.scrollY / height) * 100 : 0) + '%';
        }
        frame = false;
      });
      frame = true;
    }
  },
  { passive: true }
);

// Back to top button
const backTop = document.querySelector('.back-top');
let spaceFrame = false;
function updateBackTop() {
  if (!backTop) return;
  const visible = window.scrollY > 80;
  backTop.classList.toggle('shown', visible);
  backTop.setAttribute('aria-hidden', String(!visible));
  backTop.tabIndex = visible ? 0 : -1;
  spaceFrame = false;
}
window.addEventListener(
  'scroll',
  () => {
    if (!spaceFrame) {
      spaceFrame = true;
      requestAnimationFrame(updateBackTop);
    }
  },
  { passive: true }
);
updateBackTop();

// ==========================================================================
// Comprehensive Application Data Dictionary
// ==========================================================================
const APPS_DATA = {
  'smart-power-manager': {
    slug: 'smart-power-manager',
    name: 'SmartPowerManager',
    tagline: 'Windows power scheme switcher via native powercfg.',
    description:
      'A fast, dependency-free Windows batch CLI utility using native powercfg to switch power plans instantly—crafted for battery preservation during power cuts in Sri Lanka and performance tuning for gaming and development.',
    category: 'System Utility',
    platforms: ['Windows'],
    status: 'Completed / Stable CLI',
    image: 'public/apps/smart-power-manager/preview.svg',
    downloadAvailable: true,
    downloadUrl: 'https://raw.githubusercontent.com/shashika-mora/power-plan-switcher/main/power_switch.bat',
    downloadNote:
      'Standalone portable Windows batch script (.bat). Zero build dependencies or runtime installation required—clone the repository or download power_switch.bat directly to run.',
    sourceUrl: 'https://github.com/shashika-mora/power-plan-switcher',
    supportUrl: 'https://github.com/shashika-mora/power-plan-switcher/issues',
    license: 'Public Repository (Unlicensed)',
    techStack: ['Windows Batch (.bat)', 'powercfg.exe', 'CLI Utility', 'Offline'],
    features: [
      'Active scheme detection: queries the current active power plan on launch using native powercfg /getactivescheme',
      'Instant preset switching: direct numeric options for Balanced (SCHEME_BALANCED), High Performance (SCHEME_MIN), and Power Saver (SCHEME_MAX)',
      'Sri Lanka power cut optimization: quickly throttles CPU power limits to maximize laptop battery runtime during unexpected blackouts',
      'Gaming & compilation boost: instantly unlocks maximum CPU clock frequency and system responsiveness for heavy workloads',
      'Zero persistent overhead: pure on-demand Windows batch script with no background daemon or registry clutter',
      'Unicode & ASCII branding: clean console UI loop with formatted maintainer banner and input validation'
    ],
    installation: [
      'Clone or download https://github.com/shashika-mora/power-plan-switcher or download power_switch.bat directly',
      'Place power_switch.bat anywhere on your Windows 10 or 11 system',
      'Double-click power_switch.bat or run it from Command Prompt / Windows Terminal',
      'Enter 1 for Balanced, 2 for High Performance, 3 for Power Saver, or 4 to Exit'
    ],
    requirements: [
      'Windows 10 or Windows 11',
      'Native powercfg.exe command line tool (standard user privileges suffice for switching preset schemes)'
    ]
  },
  'systemmate': {
    slug: 'systemmate',
    name: 'SystemMate',
    tagline: 'Windows system cleanup and diagnostics utility with preview-first approval.',
    description:
      'A Windows desktop utility built with WinUI 3 and .NET 8 that previews temporary files and application caches before deletion, logging actions to a local SQLite database.',
    category: 'System Utility',
    platforms: ['Windows'],
    status: 'In development',
    image: 'public/apps/systemmate/wide-logo.png',
    downloadAvailable: false,
    downloadNote:
      'Release packaging is in development. The application can be built from source using Visual Studio and the .NET 8 SDK.',
    sourceUrl: 'https://github.com/shashika-mora/SystemMate',
    supportUrl: 'https://github.com/shashika-mora/SystemMate/issues',
    license: 'MIT',
    techStack: ['C#', '.NET 8 LTS', 'WinUI 3', 'Windows App SDK', 'SQLite'],
    features: [
      'Telemetry dashboard: monitors CPU load, RAM usage, and drive information',
      'Cleanup preview: scans Windows temp, browser caches, and development caches with size estimates before action',
      'SQLite history log: records operation history before execution'
    ],
    installation: [
      'Clone https://github.com/shashika-mora/SystemMate',
      'Install .NET 8.0 SDK and Visual Studio 2022 with Windows App SDK workload',
      'Build SystemMate.sln and run the application'
    ],
    requirements: [
      'Windows 10 (build 17763 or later) or Windows 11',
      '.NET 8.0 LTS Runtime'
    ],
    screenshots: [
      {
        url: 'public/apps/systemmate/wide-logo.png',
        alt: 'SystemMate Brand Identity',
        caption: 'SystemMate desktop utility logo'
      }
    ]
  },
  'gamebooster': {
    slug: 'gamebooster',
    name: 'GameBooster',
    tagline: 'Offline-first Windows game session launcher with reversible power plans.',
    description:
      'An offline-first Windows desktop utility built with WinUI 3 and .NET 8 for launching games with reversible power plan settings that restore on game exit.',
    category: 'Gaming Utility',
    platforms: ['Windows'],
    status: 'In development',
    downloadAvailable: false,
    downloadNote:
      'Release binaries are not published yet. Build from source via .NET 8 SDK.',
    sourceUrl: 'https://github.com/shashika-mora/GameBooster',
    supportUrl: 'https://github.com/shashika-mora/GameBooster/issues',
    license: 'MIT',
    techStack: ['C#', '.NET 8 LTS', 'WinUI 3', 'SQLite'],
    features: [
      'Reversible power plans: records initial plan and restores it when the game exits',
      'Interrupted session recovery: detects unfinished sessions on startup to restore original plan',
      'Steam manifest scanning: discovers locally installed Steam games with manual path entry support',
      'Local SQLite storage: persists game library and session records in %LOCALAPPDATA%\\GameBooster\\gamebooster.db'
    ],
    installation: [
      'Clone https://github.com/shashika-mora/GameBooster',
      'Install .NET 8.0 SDK and Windows App SDK workload',
      'Run dotnet run or dotnet build --configuration Release'
    ],
    requirements: [
      'Windows 10 (build 19041 or higher) or Windows 11',
      '.NET 8.0 SDK / Runtime'
    ]
  },
  'devatlas': {
    slug: 'devatlas',
    name: 'DevAtlas',
    tagline: 'Offline-first developer workspace manager and local Git inspector.',
    description:
      'An offline-first desktop application built with Avalonia UI and .NET 10 for discovering local development repositories, inspecting Git branches, and detecting project technologies.',
    category: 'Developer Tool',
    platforms: ['Cross-platform', 'Windows'],
    status: 'In development',
    downloadAvailable: false,
    downloadNote:
      'In development. Source solution is organized across domain, application, desktop, and test projects.',
    sourceUrl: 'https://github.com/shashika-mora/DevAtlas',
    supportUrl: 'https://github.com/shashika-mora/DevAtlas/issues',
    license: 'MIT',
    techStack: ['C#', '.NET 10', 'Avalonia UI', 'SQLite'],
    features: [
      'Local workspace scanning: discovers repositories across local directory trees',
      'Technology detection: detects Node.js, Rust, Go, Python, Java, and Docker projects',
      'Local Git state inspection: displays active branch, changed files, and recent commit history',
      'Local database: stores workspace roots and scanned projects in local SQLite db'
    ],
    installation: [
      'Clone https://github.com/shashika-mora/DevAtlas',
      'Install .NET 10 SDK with Avalonia UI support',
      'Run dotnet run --project src/DevAtlas.App'
    ],
    requirements: [
      'Windows 10/11, macOS, or Linux',
      '.NET 10 SDK'
    ]
  },
  'ai-companion': {
    slug: 'ai-companion',
    name: 'AI Companion',
    tagline: 'Desktop AI companion with PySide6 overlay and persistent local SQLite memory.',
    description:
      'A Windows desktop companion built in Python with persistent local SQLite memory, currently evolving from an interactive CLI prototype towards a PySide6 desktop overlay.',
    category: 'AI & Automation',
    platforms: ['Windows'],
    status: 'In development',
    image: 'public/apps/ai-companion/preview.png',
    downloadAvailable: false,
    downloadNote:
      'Early prototype (v0.1 CLI). PySide6 GUI interface is currently in active development.',
    sourceUrl: 'https://github.com/shashika-mora/ai-companion',
    supportUrl: 'https://github.com/shashika-mora/ai-companion/issues',
    license: 'MIT',
    techStack: ['Python', 'PySide6', 'SQLite'],
    features: [
      'PySide6 desktop overlay: native desktop interface prototype in development',
      'Persistent local memory: stores conversation context and persona state in local SQLite (companion.db)',
      'Speech input: roadmap concept for microphone input and speech recognition',
      'Tool execution bridge: roadmap concept for local system commands and WSL2 environments'
    ],
    installation: [
      'Clone https://github.com/shashika-mora/ai-companion',
      'Create virtual environment and install requirements from requirements.txt',
      'Run python run.py'
    ],
    requirements: [
      'Windows 10 or 11',
      'Python 3.11+'
    ],
    screenshots: [
      {
        url: 'public/apps/ai-companion/preview.png',
        alt: 'AI Companion PySide6 Desktop Overlay',
        caption: 'PySide6 overlay interface running natively on Windows desktop'
      }
    ]
  },
  'wife-passwords': {
    slug: 'wife-passwords',
    name: 'Wi-Fi Security Inspector',
    tagline: 'Windows WLAN profile enumerator and key viewer via native netsh.',
    description:
      'An interactive Windows batch command-line utility to query registered Wi-Fi profiles and inspect detailed security configurations, including cleartext security keys, using native Windows WLAN services.',
    category: 'Network Diagnostics',
    platforms: ['Windows'],
    status: 'Completed / Stable CLI',
    image: 'public/apps/wife-passwords/preview.svg',
    downloadAvailable: true,
    downloadUrl: 'https://raw.githubusercontent.com/shashika-mora/wife-passwords/main/show_wifi.cmd',
    downloadNote:
      'Standalone portable Windows command script (.cmd). Requires zero build dependencies or installation.',
    sourceUrl: 'https://github.com/shashika-mora/wife-passwords',
    supportUrl: 'https://github.com/shashika-mora/wife-passwords/issues',
    license: 'MIT',
    techStack: ['Windows Batch (.cmd)', 'netsh wlan', 'Windows API', 'CLI Utility'],
    features: [
      'Profile enumeration: queries and lists all registered wireless networks on demand',
      'Security configuration inspection: retrieves connection settings, authentication type, and encryption cipher',
      'Cleartext key display: displays stored network passwords when run with administrative privileges',
      'Unicode / UTF-8 support: configured with chcp 65001 for non-ASCII network SSIDs',
      '100% offline & private: operates strictly locally with zero external network telemetry'
    ],
    installation: [
      'Clone https://github.com/shashika-mora/wife-passwords or download show_wifi.cmd directly',
      'Inspect show_wifi.cmd in any text editor to verify command logic before running',
      'Right-click show_wifi.cmd and select Run as administrator (required by Windows to reveal cleartext profile keys via netsh)',
      'Select option [S] to show registered profiles and enter the profile index number'
    ],
    requirements: [
      'Windows 10, 11, or Windows Server',
      'Enabled WLAN adapter with saved network profiles',
      'Administrator privileges (required by Windows netsh to reveal stored profile credentials)'
    ]
  }
};

// ==========================================================================
// Detail Modal Controller
// ==========================================================================
const dialog = document.querySelector('#detail');
let previousFocus = null;

function openAppModal(slug) {
  const app = APPS_DATA[slug];
  if (!app || !dialog) return;

  previousFocus = document.activeElement;

  const categoryEl = document.querySelector('#detail-category');
  const titleEl = document.querySelector('#detail-title');
  const bodyEl = document.querySelector('#detail-body');

  if (categoryEl) categoryEl.textContent = `${app.category.toUpperCase()} · ${app.status.toUpperCase()}`;
  if (titleEl) titleEl.textContent = app.name;

  // Build body HTML
  let featuresHtml = '';
  if (app.features && app.features.length) {
    featuresHtml = `
      <div class="modal-section">
        <h4 class="modal-section-title">Implemented Capabilities</h4>
        <ul class="modal-feature-list">
          ${app.features.map(f => `<li class="modal-feature-item"><span class="bullet" aria-hidden="true">•</span><span>${f}</span></li>`).join('')}
        </ul>
      </div>
    `;
  }

  let installHtml = '';
  if (app.installation && app.installation.length) {
    installHtml = `
      <div class="modal-section">
        <h4 class="modal-section-title">Installation &amp; Usage</h4>
        <div class="install-box">
          <ol class="install-steps">
            ${app.installation.map(s => `<li>${s}</li>`).join('')}
          </ol>
        </div>
      </div>
    `;
  }

  let screenshotHtml = '';
  if (app.screenshots && app.screenshots.length) {
    screenshotHtml = `
      <div class="modal-section">
        <h4 class="modal-section-title">Verified Screenshots &amp; Assets</h4>
        <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
          ${app.screenshots.map(s => `
            <figure style="margin: 0; overflow: hidden; border-radius: 12px; border: 1px solid var(--line); background: rgba(255,255,255,0.02);">
              <img src="${s.url}" alt="${s.alt}" style="width: 100%; height: auto; display: block;" />
              ${s.caption ? `<figcaption style="padding: 10px 14px; font-family: var(--mono); font-size: 11px; color: var(--muted); border-top: 1px solid rgba(255,255,255,0.06);">${s.caption}</figcaption>` : ''}
            </figure>
          `).join('')}
        </div>
      </div>
    `;
  }

  let requirementsHtml = '';
  if (app.requirements && app.requirements.length) {
    requirementsHtml = app.requirements.map(r => `<span class="req-badge">${r}</span>`).join('');
  }

  bodyEl.innerHTML = `
    <div class="modal-header">
      <p class="modal-tagline">${app.tagline}</p>
      <p class="modal-desc">${app.description}</p>
      ${app.techStack ? `<div class="project-tags">${app.techStack.map(t => `<span>${t}</span>`).join('')}</div>` : ''}
    </div>

    <div class="distribution-box">
      <div class="dist-info">
        <h4>Distribution &amp; Availability</h4>
        <p>${app.downloadNote || 'Application source code is available in the public repository.'}</p>
      </div>
      <div class="dist-actions">
        ${app.downloadAvailable && app.downloadUrl ? `<a href="${app.downloadUrl}" target="_blank" rel="noopener noreferrer" class="button primary" style="font-size: 12px; padding: 10px 20px;">Download release</a>` : `<span style="font-family: var(--mono); font-size: 11px; color: var(--muted); padding: 8px 14px; border: 1px solid var(--line); border-radius: 20px;">Download not available yet</span>`}
        ${app.sourceUrl ? `<a href="${app.sourceUrl}" target="_blank" rel="noopener noreferrer" class="button secondary" style="font-size: 12px; padding: 10px 20px;">Source code ↗</a>` : ''}
      </div>
    </div>

    <div class="modal-body-layout">
      <div>
        ${featuresHtml}
        ${installHtml}
        ${screenshotHtml}
      </div>
      <aside>
        <div class="spec-card">
          <div class="spec-card-title">Specifications</div>
          <div class="spec-list">
            <div class="spec-row"><span class="spec-label">Platform</span><span class="spec-val">${app.platforms.join(', ')}</span></div>
            <div class="spec-row"><span class="spec-label">Category</span><span class="spec-val">${app.category}</span></div>
            <div class="spec-row"><span class="spec-label">Status</span><span class="spec-val" style="color: var(--lime);">${app.status}</span></div>
            ${app.license ? `<div class="spec-row"><span class="spec-label">License</span><span class="spec-val">${app.license}</span></div>` : ''}
            ${requirementsHtml ? `<div style="padding-top: 6px;"><span class="spec-label">Requirements</span>${requirementsHtml}</div>` : ''}
          </div>
        </div>

        <div class="spec-card">
          <div class="spec-card-title">Source &amp; Issues</div>
          <div class="modal-links">
            ${app.sourceUrl ? `<a href="${app.sourceUrl}" target="_blank" rel="noopener noreferrer" class="modal-link-item"><span>GitHub repository</span><span>↗</span></a>` : ''}
            ${app.supportUrl ? `<a href="${app.supportUrl}" target="_blank" rel="noopener noreferrer" class="modal-link-item"><span>Report an issue</span><span>↗</span></a>` : ''}
            <a href="https://dayarathna.com#contact" target="_blank" rel="noopener noreferrer" class="modal-link-item"><span>Contact maintainer</span><span>↗</span></a>
          </div>
        </div>
      </aside>
    </div>
  `;

  // Update URL hash without scrolling
  history.replaceState(null, '', `#app-${slug}`);

  dialog.showModal();
  document.body.style.overflow = 'hidden';
  dialog.scrollTop = 0;
}

function closeAppModal() {
  if (!dialog) return;
  dialog.close();
  document.body.style.overflow = '';
  // Restore URL hash
  if (window.location.hash.startsWith('#app-')) {
    history.replaceState(null, '', window.location.pathname);
  }
  previousFocus?.focus();
}

// Dialog listeners
if (dialog) {
  document.querySelector('.close-dialog')?.addEventListener('click', closeAppModal);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        closeAppModal();
      }
    }
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    if (window.location.hash.startsWith('#app-')) {
      history.replaceState(null, '', window.location.pathname);
    }
    previousFocus?.focus();
  });
}

// Bind detail triggers
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-open-app]');
  if (target) {
    e.preventDefault();
    const slug = target.dataset.openApp;
    openAppModal(slug);
  }
});

// Deep link handling on load
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash.startsWith('#app-')) {
    const slug = hash.replace('#app-', '');
    if (APPS_DATA[slug]) {
      setTimeout(() => openAppModal(slug), 100);
    }
  }
});

// ==========================================================================
// Catalogue Live Search & Category Filtering
// ==========================================================================
const searchInput = document.querySelector('#catalogue-search');
const clearSearchBtn = document.querySelector('#clear-search');
const filterPills = document.querySelectorAll('.filter-pill');
const appCards = document.querySelectorAll('.project-card');
const countEl = document.querySelector('#catalogue-count');
const emptyStateEl = document.querySelector('#empty-state');
const resetSearchBtn = document.querySelector('#reset-search');

let currentCategory = 'all';
let searchQuery = '';

function filterApps() {
  const query = searchQuery.trim().toLowerCase();
  let visibleCount = 0;

  appCards.forEach((card) => {
    const cardCategory = card.dataset.category || '';
    const cardName = card.dataset.name || '';
    const cardDesc = card.dataset.desc || '';
    const cardTech = card.dataset.tech || '';

    const matchesCategory = currentCategory === 'all' || cardCategory.toLowerCase() === currentCategory.toLowerCase();
    const matchesSearch =
      !query ||
      cardName.includes(query) ||
      cardDesc.includes(query) ||
      cardCategory.toLowerCase().includes(query) ||
      cardTech.includes(query);

    const isVisible = matchesCategory && matchesSearch;
    card.style.display = isVisible ? 'flex' : 'none';
    if (isVisible) visibleCount++;
  });

  if (countEl) {
    if (query || currentCategory !== 'all') {
      countEl.textContent = `Showing ${visibleCount} of ${appCards.length} ${appCards.length === 1 ? 'app' : 'apps'}`;
    } else {
      countEl.textContent = `${appCards.length} applications`;
    }
  }

  if (emptyStateEl) {
    emptyStateEl.classList.toggle('shown', visibleCount === 0);
  }

  if (clearSearchBtn) {
    clearSearchBtn.classList.toggle('shown', searchQuery.length > 0);
  }
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterApps();
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    filterApps();
    searchInput?.focus();
  });
}

filterPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    filterPills.forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    currentCategory = pill.dataset.filter || 'all';
    filterApps();
  });
});

if (resetSearchBtn) {
  resetSearchBtn.addEventListener('click', () => {
    searchQuery = '';
    currentCategory = 'all';
    if (searchInput) searchInput.value = '';
    filterPills.forEach((p) => p.classList.toggle('active', p.dataset.filter === 'all'));
    filterApps();
  });
}

// Copy email helper
const copyBtn = document.querySelector('#copy-email');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText('shashikatheekshana67@gmail.com');
      if (status) status.textContent = 'Email copied: shashikatheekshana67@gmail.com';
    } catch {
      if (status) status.textContent = 'shashikatheekshana67@gmail.com';
    }
    setTimeout(() => {
      if (status) status.textContent = '';
    }, 7000);
  });
}

// ==========================================================================
// Celestial Starfield & Galaxy Gathering Canvas Physics Engine
// ==========================================================================
(() => {
  const canvas = document.querySelector('#starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const pref = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (n) => Math.max(0, Math.min(1, n));
  const smooth = (n) => n * n * (3 - 2 * n);

  let width = 0;
  let height = 0;
  let stars = [];
  let shapes = [];
  let raf = 0;
  let last = 0;
  let elapsed = 0;
  let px = 0;
  let py = 0;
  let tx = 0;
  let ty = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(200, Math.max(85, Math.round((width * height) / 7000)));
    stars = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.35 + Math.random() * 0.95,
      d: 0.25 + Math.random() * 0.75,
      phase: Math.random() * Math.PI * 2,
      lime: Math.random() < 0.12
    }));

    draw(0);
  }

  function dot(x, y, r, a, lime = false) {
    ctx.fillStyle = `rgba(${lime ? '190, 225, 154' : '190, 212, 247'}, ${a})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  function draw(dt) {
    elapsed += dt;
    ctx.clearRect(0, 0, width, height);
    const motion = !pref.matches;
    const scrollY = window.scrollY || 0;

    px += (tx - px) * 0.025;
    py += (ty - py) * 0.025;

    // Drifting background starfield
    for (const s of stars) {
      const x = (s.x * width + (motion ? elapsed * 0.004 * s.d + px * s.d : 0) + width) % width;
      const y =
        (s.y * height +
          (motion ? -elapsed * 0.0018 * s.d + py * s.d - scrollY * 0.018 * s.d : 0) +
          height * 100) %
        height;

      const alpha = motion
        ? 0.38 + 0.28 * (0.5 + 0.5 * Math.sin(elapsed * 0.0006 + s.phase))
        : 0.5;

      dot(x, y, s.r, alpha, s.lime);
    }

    // Interactive Celestial Galaxy Particle Gathering & Scattering Engine
    for (const shape of shapes) {
      const section = shape.section.getBoundingClientRect();
      const box = shape.anchor.getBoundingClientRect();

      const visibleHeight = Math.max(0, Math.min(box.bottom, height * 0.94) - Math.max(box.top, 80));
      const visibleRatio = visibleHeight / Math.max(1, Math.min(box.height, height * 0.8));

      if (visibleHeight <= 0) {
        shape.armed = false;
        shape.progress = 0;
      }

      if (section.bottom < -height * 0.25 || section.top > height * 1.25) continue;

      if (visibleRatio >= 0.45) {
        shape.armed = true;
      }

      const entering = clamp((height * 0.95 - section.top) / (height * 0.4));
      const leaving = clamp((section.bottom - height * 0.15) / (height * 0.65));
      const target = shape.armed ? smooth(Math.min(entering, leaving)) : 0;

      // Smooth gathering animation (~2.2s inward travel)
      if (target > shape.progress) {
        shape.progress = Math.min(target, shape.progress + dt / 2200);
      } else {
        shape.progress = target;
      }

      const progress = motion ? shape.progress : 1;
      const visible =
        clamp((height * 1.12 - section.top) / (height * 0.25)) *
        clamp((section.bottom + height * 0.15) / (height * 0.25));

      if (!visible || progress <= 0.001) continue;

      const sw = Math.min(box.width, box.height * shape.ratio);
      const sh = sw / shape.ratio;
      const ox = box.left + (box.width - sw) / 2;
      const oy = box.top + (box.height - sh) / 2;

      // Subtle slow cosmic rotation when formed
      const rot = motion ? elapsed * 0.00007 : 0;
      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);

      for (const p of shape.points) {
        const cu = p.u - 0.5;
        const cv = p.v - 0.5;
        const ru = 0.5 + cu * cosR - cv * sinR;
        const rv = 0.5 + cu * sinR + cv * cosR;

        const targetX = ox + ru * sw;
        const targetY = oy + rv * sh;
        const spreadX = p.x * width;
        const spreadY = p.y * height;

        const x = spreadX * (1 - progress) + targetX * progress;
        const y = spreadY * (1 - progress) + targetY * progress;

        const shimmer = motion ? 0.75 + 0.15 * Math.sin(elapsed * 0.001 + p.phase) : 0.85;
        const alpha = ((shape.armed ? 0.15 : 0.03) + 0.65 * progress) * visible * shimmer;

        dot(x, y, p.r, alpha, p.lime);
      }
    }
  }

  function tick(now) {
    raf = 0;
    if (document.hidden || pref.matches) return;
    const delta = last ? Math.min(now - last, 50) : 0;
    last = now;
    draw(delta);
    raf = requestAnimationFrame(tick);
  }

  function start() {
    cancelAnimationFrame(raf);
    raf = 0;
    last = 0;
    if (pref.matches) {
      draw(0);
      return;
    }
    if (!document.hidden) {
      raf = requestAnimationFrame(tick);
    }
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener(
    'scroll',
    () => {
      if (pref.matches) draw(0);
    },
    { passive: true }
  );
  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType === 'mouse') {
        tx = (e.clientX / width - 0.5) * 15;
        ty = (e.clientY / height - 0.5) * 15;
      }
    },
    { passive: true }
  );
  document.addEventListener('visibilitychange', start);
  pref.addEventListener('change', start);

  resize();
  start();

  // Load particle shapes
  fetch('particle-shapes.json?v=1.0')
    .then((r) => {
      if (!r.ok) throw Error('Shapes unavailable');
      return r.json();
    })
    .then((data) => {
      shapes = [...document.querySelectorAll('[data-particle]')].map((anchor) => {
        const spec = data[anchor.dataset.particle] || { ratio: 1.25, points: [] };
        return {
          anchor,
          armed: false,
          progress: 0,
          section: anchor.closest('section') || anchor.parentElement || document.body,
          ratio: spec.ratio || 1.25,
          points: (spec.points || []).map(([u, v], i) => {
            const dist = Math.hypot(u - 0.5, v - 0.5);
            const isCore = dist < 0.13;
            const r = isCore ? 0.55 + Math.random() * 0.9 : 0.38 + Math.random() * 0.75;
            return {
              u,
              v,
              x: Math.random(),
              y: Math.random(),
              r,
              phase: Math.random() * Math.PI * 2,
              lime: i % 7 === 0
            };
          })
        };
      });
      draw(0);
    })
    .catch((e) => {
      console.warn('Particle shapes fallback:', e);
    });
})();
