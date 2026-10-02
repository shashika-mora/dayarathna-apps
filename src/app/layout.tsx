import type { Metadata } from 'next';
import { DM_Sans, IBM_Plex_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shashika's Apps — Personal Software Catalogue",
  description:
    'A personal collection of useful software, system utilities, and developer tools built by Shashika Dayarathna. Transparent engineering, verified source code, and release documentation.',
  metadataBase: new URL('https://apps.dayarathna.com'),
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable} dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#05070d] text-[#f1f4fc] antialiased selection:bg-[#c7f44a] selection:text-[#070a10]">
        <Starfield />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
