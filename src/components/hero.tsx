import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id='home'
      className='relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden'>
      <video
        src='/looped-ocean-waves.mp4'
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2'
      />
      <div className='absolute inset-0 bg-white/60' />
      <div className='relative z-10 p-4 space-y-6 max-w-3xl mx-auto'>
        <p className='text-lg md:text-xl font-semibold text-primary uppercase tracking-widest'>
          Serena Blake, PsyD
        </p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground/90'>
          Therapy for Individuals & Couples
        </h1>
        <h2 className='text-xl md:text-2xl font-light text-foreground/80'>
          Thoughtful, evidence-based care for adults navigating anxiety,
          relationships, and life transitions.
        </h2>
        <div className='pt-4'>
          <Button
            size='lg'
            asChild
            className='rounded-full shadow-lg'>
            <Link
              href='/consultation'
              target='_blank'
              rel='noopener noreferrer'>
              Book a Free Consult
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
