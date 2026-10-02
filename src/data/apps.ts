import { AppItem, Platform, ReleaseStatus } from './types';

export const APPS: AppItem[] = [
  {
    id: 'smart-power-manager',
    slug: 'smart-power-manager',
    name: 'SmartPowerManager',
    tagline: 'Windows power scheme switcher via native powercfg.',
    description:
      'A Windows batch utility that queries the active system power plan and switches between Balanced, High Performance, and Power Saver schemes using Windows powercfg.',
    category: 'System Utility',
    platforms: ['Windows'],
    status: 'In development',
    downloadAvailable: false,
    downloadNote:
      'No compiled installer is released. The interactive switch script can be run directly from the GitHub repository.',
    sourceUrl: 'https://github.com/shashika-mora/power-plan-switcher',
    supportUrl: 'https://github.com/shashika-mora/power-plan-switcher/issues',
    license: 'Public Repository (Unlicensed)',
    techStack: ['Windows Batch', 'powercfg.exe'],
    features: [
      'Active plan detection: queries the current active scheme using powercfg /getactivescheme',
      'Preset switching: provides quick options for Balanced (SCHEME_BALANCED), High Performance (SCHEME_MIN), and Power Saver (SCHEME_MAX)',
      'Zero persistent background process: executes only on demand with no background service'
    ],
    installation: [
      'Clone or download https://github.com/shashika-mora/power-plan-switcher',
      'Open the folder on Windows 10 or 11',
      'Run power_switch.bat to launch the interactive selector',
      'Enter option 1 for Balanced, 2 for High Performance, 3 for Power Saver, or 4 to exit'
    ],
    requirements: [
      'Windows 10 or Windows 11',
      'Native powercfg.exe command line tool (standard user privileges suffice for switching preset schemes)'
    ]
  },
  {
    id: 'systemmate',
    slug: 'systemmate',
    name: 'SystemMate',
    tagline: 'Windows system cleanup and diagnostics utility with preview-first approval.',
    description:
      'A Windows desktop utility built with WinUI 3 and .NET 8 that previews temporary files and application caches before deletion, logging actions to a local SQLite database.',
    category: 'System Utility',
    platforms: ['Windows'],
    status: 'In development',
    image: '/apps/systemmate/wide-logo.png',
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
        url: '/apps/systemmate/wide-logo.png',
        alt: 'SystemMate Brand Identity',
        caption: 'SystemMate desktop utility logo'
      }
    ]
  },
  {
    id: 'gamebooster',
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
  {
    id: 'devatlas',
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
  {
    id: 'ai-companion',
    slug: 'ai-companion',
    name: 'AI Companion',
    tagline: 'Desktop AI companion with PySide6 overlay and persistent local SQLite memory.',
    description:
      'A Windows desktop companion built in Python with persistent local SQLite memory, currently evolving from an interactive CLI prototype towards a PySide6 desktop overlay.',
    category: 'AI & Automation',
    platforms: ['Windows'],
    status: 'In development',
    image: '/apps/ai-companion/preview.png',
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
        url: '/apps/ai-companion/preview.png',
        alt: 'AI Companion PySide6 Desktop Overlay',
        caption: 'PySide6 overlay interface running natively on Windows desktop'
      }
    ]
  },
  {
    id: 'wife-passwords',
    slug: 'wife-passwords',
    name: 'Wi-Fi Security Inspector',
    tagline: 'Windows WLAN profile enumerator and key viewer via native netsh.',
    description:
      'An interactive Windows command script that enumerates registered Wi-Fi profiles and inspects connection settings and security keys using the native Windows WLAN service.',
    category: 'Network Diagnostics',
    platforms: ['Windows'],
    status: 'In development',
    downloadAvailable: false,
    downloadNote:
      'No compiled binary required. The utility script is available directly in the GitHub repository.',
    sourceUrl: 'https://github.com/shashika-mora/wife-passwords',
    supportUrl: 'https://github.com/shashika-mora/wife-passwords/issues',
    license: 'MIT',
    techStack: ['Windows Command Script', 'netsh wlan'],
    features: [
      'Profile enumeration: queries registered Wi-Fi networks using netsh wlan show profiles',
      'Security configuration inspection: retrieves authentication type and encryption cipher',
      'Cleartext key display: displays security keys when run with administrative privileges'
    ],
    installation: [
      'Clone https://github.com/shashika-mora/wife-passwords',
      'Inspect show_wifi.cmd in any text editor to verify command logic before running',
      'Right-click show_wifi.cmd and select Run as administrator (required by Windows to retrieve cleartext profile keys via netsh)',
      'Select option S to show profiles and enter the profile number'
    ],
    requirements: [
      'Windows 10 or 11',
      'WLAN adapter',
      'Administrator privileges (required by Windows netsh to reveal stored profile credentials)'
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
