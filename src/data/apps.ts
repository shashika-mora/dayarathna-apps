import { AppItem, Platform, ReleaseStatus } from './types';

export const APPS: AppItem[] = [
  {
    id: 'smart-power-manager',
    slug: 'smart-power-manager',
    name: 'SmartPowerManager',
    tagline: 'Lightweight Windows power scheme switcher and battery configuration utility.',
    description:
      'A focused Windows utility designed to make power scheme toggling frictionless. Rather than navigating deep legacy Control Panel menus or Windows Settings panels, SmartPowerManager queries active system schemes via native powercfg and enables immediate switching between Balanced, High Performance, and Power Saver profiles.',
    category: 'System Utility',
    platforms: ['Windows'],
    status: 'In development',
    featured: true,
    bannerImage: '/apps/smart-power-manager/banner.svg',
    downloadAvailable: false,
    downloadNote:
      'Binary installer packaging is in development. You can run or inspect the interactive power switch script directly from the public GitHub repository.',
    sourceUrl: 'https://github.com/shashika-mora/power-plan-switcher',
    supportUrl: 'https://github.com/shashika-mora/power-plan-switcher/issues',
    license: 'MIT',
    techStack: ['Windows 11', 'Batch', 'powercfg.exe', 'ACPI Scheme Management', 'CLI'],
    features: [
      'Active Plan Detection: Instantly inspects and outputs the currently active Windows scheme GUID upon startup.',
      'One-Key Plan Switching: Seamlessly switch to Balanced (SCHEME_BALANCED), High Performance (SCHEME_MIN), or Power Saver (SCHEME_MAX).',
      'Zero Daemon Overhead: No persistent background process, no battery drain, and no third-party kernel drivers required.',
      'Native Integration: Relies entirely on Windows native powercfg utility for maximum system stability and reliability.'
    ],
    installation: [
      'Clone or download the repository from GitHub: https://github.com/shashika-mora/power-plan-switcher',
      'Open the folder on any Windows 10 or Windows 11 machine.',
      'Double-click power_switch.bat to launch the interactive selector.',
      'Enter 1 for Balanced, 2 for High Performance, 3 for Power Saver, or 4 to exit.'
    ],
    requirements: [
      'Windows 10 or Windows 11',
      'Native powercfg.exe command line tool (standard in all Windows editions)'
    ],
    screenshots: [
      {
        url: '/apps/smart-power-manager/banner.svg',
        alt: 'SmartPowerManager Interface Overview',
        caption: 'Console view showing active power scheme GUID inspection and one-key profile switching'
      }
    ]
  },
  {
    id: 'systemmate',
    slug: 'systemmate',
    name: 'SystemMate',
    tagline: 'Clean, honest Windows system cleanup and hardware diagnostics companion.',
    description:
      'A professional Windows system utility built with WinUI 3 and .NET 8. Designed around honesty and visibility, SystemMate previews every temporary cache, file count, and byte total before touching anything. All operations are logged into a local SQLite database prior to deletion, ensuring complete accountability with zero silent background tasks.',
    category: 'System Optimization',
    platforms: ['Windows'],
    status: 'In development',
    featured: false,
    bannerImage: '/apps/systemmate/banner.svg',
    iconImage: '/apps/systemmate/square-logo.png',
    downloadAvailable: false,
    downloadNote:
      'MSIX packaging is currently in development. Source code and architecture specifications are available on GitHub.',
    sourceUrl: 'https://github.com/shashika-mora/SystemMate',
    supportUrl: 'https://github.com/shashika-mora/SystemMate/issues',
    license: 'MIT',
    techStack: ['WinUI 3', '.NET 8 LTS', 'C#', 'Windows App SDK', 'SQLite', 'Live Telemetry'],
    features: [
      'Transparent Previews: Inspect temp files, browser caches, and Recycle Bin items with category-level breakdowns before cleaning.',
      'Explicit Confirmation: Requires explicit user approval on individual categories; nothing runs silently.',
      'Pre-Operation SQLite Audit: Logs every intended action to %LOCALAPPDATA%\\SystemMate\\history.db before deletion begins.',
      'Live Telemetry: Real-time CPU, RAM, disk, and boot time performance statistics.'
    ],
    installation: [
      'Clone the repository: https://github.com/shashika-mora/SystemMate',
      'Install .NET 8.0 SDK and Visual Studio 2022 with Windows App SDK workload.',
      'Open SystemMate.sln and build the SystemMate project in Release configuration.',
      'Run the application directly or deploy via MSIX packaging project.'
    ],
    requirements: [
      'Windows 10 (build 17763 or later) or Windows 11',
      '.NET 8.0 LTS Runtime'
    ],
    screenshots: [
      {
        url: '/apps/systemmate/banner.svg',
        alt: 'SystemMate Fluent Dashboard Preview',
        caption: 'Interactive WinUI 3 dashboard with live CPU/RAM meters and pre-action SQLite logging'
      }
    ]
  },
  {
    id: 'gamebooster',
    slug: 'gamebooster',
    name: 'GameBooster',
    tagline: 'Offline-first Windows game session launcher with explicit, reversible settings.',
    description:
      'An offline-first Windows desktop utility for launching games with explicit, reversible session settings. It records original system states before making changes, watches the running game process, and restores the original power plan upon exit. Zero background telemetry, no FPS gimmicks, and complete crash recovery safety.',
    category: 'Gaming Utility',
    platforms: ['Windows'],
    status: 'In development',
    featured: false,
    bannerImage: '/apps/gamebooster/banner.svg',
    downloadAvailable: false,
    downloadNote:
      'Release packaging for Windows is in progress. The solution can be built from source using .NET 8 SDK.',
    sourceUrl: 'https://github.com/shashika-mora/GameBooster',
    supportUrl: 'https://github.com/shashika-mora/GameBooster/issues',
    license: 'MIT',
    techStack: ['WinUI 3', '.NET 8 LTS', 'C#', 'SQLite', 'Steam API Discovery', 'Process Monitor'],
    features: [
      'Reversible Session Profiles: Automatically records original power plan to disk and restores it when the game process terminates.',
      'State Recovery on Crash: Detects interrupted sessions on startup and offers immediate one-click restoration of system scheme.',
      'Steam & Local Library Discovery: Scans local Steam manifests to enumerate installed games, with support for custom executables.',
      'Real-Time System Monitoring: Native CPU load and memory usage tracking during active gameplay.',
      'Local SQLite Persistence: All game configurations and session records stored in %LOCALAPPDATA%\\GameBooster.'
    ],
    installation: [
      'Clone the repository: https://github.com/shashika-mora/GameBooster',
      'Install .NET 8.0 SDK and Visual Studio 2022 with Windows App SDK workload.',
      'Run dotnet restore followed by dotnet run to start the application.',
      'Build release binary via dotnet build --configuration Release.'
    ],
    requirements: [
      'Windows 10 (build 19041 or higher) or Windows 11',
      '.NET 8.0 SDK / Runtime (x64 or ARM64)'
    ],
    screenshots: [
      {
        url: '/apps/gamebooster/banner.svg',
        alt: 'GameBooster Session Management Preview',
        caption: 'Reversible game session dashboard with Steam library discovery and CPU/RAM telemetry'
      }
    ]
  },
  {
    id: 'ai-companion',
    slug: 'ai-companion',
    name: 'AI Companion',
    tagline: 'Extensible, privacy-first native desktop AI companion with persistent memory.',
    description:
      'Engineered as a long-term personal co-pilot (Code Name: Weapon) running natively on Windows with controlled bridges to WSL2. Combines an independent persona identity engine, structured persistent SQLite memory, speech-to-text input, and a permissioned tool execution framework.',
    category: 'AI & Automation',
    platforms: ['Windows'],
    status: 'In development',
    featured: false,
    bannerImage: '/apps/ai-companion/banner.svg',
    downloadAvailable: false,
    downloadNote:
      'Active prototype (v0.3). You can inspect and run the companion natively using Python and PySide6.',
    sourceUrl: 'https://github.com/shashika-mora/ai-companion',
    supportUrl: 'https://github.com/shashika-mora/ai-companion/issues',
    license: 'MIT',
    techStack: ['Python 3.11', 'PySide6', 'SQLite', 'Speech Recognition', 'WSL2 Bridge', 'Tool Execution'],
    features: [
      'Desktop Holographic Overlay: Lightweight, translucent PySide6 desktop HUD inspired by Cortana/Weapon.',
      'Episodic & Semantic Memory: Persistent structured SQLite database for remembering past sessions and context.',
      'Speech-to-Text Input: Hands-free vocal interaction with real-time audio waveform feedback.',
      'WSL2 Subsystem Integration: Safe execution bridge between Windows host and Linux development environments.',
      'Privacy-First Architecture: Zero remote telemetry; all identity and session data stored on local machine.'
    ],
    installation: [
      'Clone the repository: https://github.com/shashika-mora/ai-companion',
      'Create a virtual environment: python -m venv venv and activate it.',
      'Install dependencies: pip install -r requirements.txt',
      'Launch the companion overlay: python run.py'
    ],
    requirements: [
      'Windows 10 or Windows 11',
      'Python 3.11 or higher',
      'WSL2 (optional, for Linux tool execution)'
    ],
    screenshots: [
      {
        url: '/apps/ai-companion/preview.png',
        alt: 'AI Companion Weapon Desktop Overlay',
        caption: 'PySide6 holographic overlay interface running natively on Windows desktop'
      },
      {
        url: '/apps/ai-companion/banner.svg',
        alt: 'AI Companion Architecture Overview',
        caption: 'Cognitive engine architecture combining STT, episodic memory, and WSL2 execution'
      }
    ]
  },
  {
    id: 'devatlas',
    slug: 'devatlas',
    name: 'DevAtlas',
    tagline: 'Offline-first developer workspace manager and local Git telemetry inspector.',
    description:
      'An offline-first desktop application for managing developer workspaces across local directories. Automatically identifies project runtimes (Node.js, Rust, Go, Python, Java, Docker), tracks local Git branch state and uncommitted changes, monitors port conflicts, and lets you resume development without cloud dependencies.',
    category: 'Developer Tool',
    platforms: ['Cross-platform', 'Windows'],
    status: 'In development',
    featured: false,
    bannerImage: '/apps/devatlas/banner.svg',
    downloadAvailable: false,
    downloadNote:
      'In development. The .NET 10 solution is structured across Domain, Application, and Desktop projects.',
    sourceUrl: 'https://github.com/shashika-mora/DevAtlas',
    supportUrl: 'https://github.com/shashika-mora/DevAtlas/issues',
    license: 'MIT',
    techStack: ['Avalonia UI', '.NET 10', 'C#', 'SQLite', 'Git Telemetry', 'Multi-Runtime Detection'],
    features: [
      'Asynchronous Workspace Discovery: Scans filesystem roots for code repositories with customizable ignore rules.',
      'Multi-Stack Detection: Automatic signal inspection for Node.js, Rust, Go, Python, Java, PHP, and Docker.',
      'Local Git Inspection: Live branch tracking, uncommitted file counters, and recent commit history without remote queries.',
      'Zero Cloud Dependency: SQLite persistence in platform local app data directory; zero credentials or tracking.'
    ],
    installation: [
      'Clone repository: https://github.com/shashika-mora/DevAtlas',
      'Install .NET 10 SDK with Avalonia UI templates.',
      'Build solution: dotnet build DevAtlas.sln',
      'Run desktop app: dotnet run --project src/DevAtlas.Desktop'
    ],
    requirements: [
      'Windows 10/11, macOS, or Linux',
      '.NET 10 SDK / Runtime'
    ],
    screenshots: [
      {
        url: '/apps/devatlas/banner.svg',
        alt: 'DevAtlas Workspace Manager Preview',
        caption: 'Local repository scanner, tech stack detection, and Git branch telemetry'
      }
    ]
  },
  {
    id: 'wife-passwords',
    slug: 'wife-passwords',
    name: 'Wi-Fi Security Inspector',
    tagline: 'Windows WLAN profile enumerator and security configuration diagnostic utility.',
    description:
      'An interactive Windows utility to query registered Wi-Fi profiles and inspect detailed network security parameters, including authentication types, encryption ciphers, and cleartext keys via the native Windows WLAN service.',
    category: 'Network Diagnostics',
    platforms: ['Windows'],
    status: 'Stable',
    featured: false,
    bannerImage: '/apps/wife-passwords/banner.svg',
    downloadAvailable: false,
    downloadNote:
      'Available directly as an interactive batch utility from the public GitHub repository.',
    sourceUrl: 'https://github.com/shashika-mora/wife-passwords',
    supportUrl: 'https://github.com/shashika-mora/wife-passwords/issues',
    license: 'MIT',
    techStack: ['Windows WLAN API', 'Batch', 'CLI', 'Network Security', 'Zero Dependencies'],
    features: [
      'Profile Enumeration: Instantly scans and lists all saved WLAN networks on the local machine.',
      'Security Audit: Inspects authentication protocols (WPA2, WPA3 Personal/Enterprise) and encryption cipher suites.',
      'Key Recovery: Displays cleartext security key with administrative privilege validation.',
      'Zero Installation: Single self-contained Windows script using native netsh wlan commands.'
    ],
    installation: [
      'Clone repository: https://github.com/shashika-mora/wife-passwords',
      'Right-click wifi_passwords.bat and select Run as administrator.',
      'Press [S] to show profiles and select your target network number.'
    ],
    requirements: [
      'Windows 10 or Windows 11',
      'WLAN interface adapter',
      'Administrative privileges for cleartext key inspection'
    ],
    screenshots: [
      {
        url: '/apps/wife-passwords/banner.svg',
        alt: 'Wi-Fi Security Inspector Console',
        caption: 'Interactive Windows batch console querying WLAN service and security cipher profiles'
      }
    ]
  }
];

export function getAllApps(): AppItem[] {
  return APPS;
}

export function getAppBySlug(slug: string): AppItem | undefined {
  return APPS.find((app) => app.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllCategories(): string[] {
  return Array.from(new Set(APPS.map((app) => app.category)));
}

export function getAllPlatforms(): Platform[] {
  const platforms = new Set<Platform>();
  APPS.forEach((app) => app.platforms.forEach((p) => platforms.add(p)));
  return Array.from(platforms);
}

export function getAllStatuses(): ReleaseStatus[] {
  return Array.from(new Set(APPS.map((app) => app.status)));
}
