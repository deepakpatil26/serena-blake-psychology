import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { PT_Sans } from 'next/font/google';
import ScrollToTop from '@/components/scroll-to-top';
import ClientOnly from '@/components/client-only';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Dr. Serena Blake, PsyD | Clinical Psychologist',
  description:
    'Compassionate therapy for anxiety, relationships, and trauma in Los Angeles. Dr. Serena Blake offers a safe space for healing and growth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='!scroll-smooth'>
      <body
        className={`${ptSans.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
        <ClientOnly>
          <ScrollToTop />
        </ClientOnly>
      </body>
    </html>
  );
}
