export type Platform = 'Windows' | 'macOS' | 'Linux' | 'Cross-platform';

export type ReleaseStatus = 'In development' | 'Preview' | 'Beta' | 'Stable';

export interface Screenshot {
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface ReleaseInfo {
  version: string;
  date: string;
  notes?: string[];
  downloadUrl?: string;
  downloadLabel?: string;
  checksum?: string;
}

export interface AppItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  platforms: Platform[];
  status: ReleaseStatus;
  image?: string;
  
  // Downloads & Source
  downloadAvailable: boolean;
  downloadUrl?: string;
  downloadLabel?: string;
  downloadNote?: string;
  sourceUrl?: string;
  supportUrl?: string;
  license?: string;
  
  // Versions & Release
  latestRelease?: ReleaseInfo;
  
  // Detailed Content
  features: string[];
  installation: string[];
  requirements?: string[];
  techStack: string[];
  screenshots?: Screenshot[];
}
