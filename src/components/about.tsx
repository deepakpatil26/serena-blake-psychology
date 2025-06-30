import Image from 'next/image';

export default function About() {
  return (
    <section
      id='about'
      className='py-20 lg:py-32 bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 lg:gap-24 items-center'>
          <div className='space-y-6'>
            <h2 className='text-3xl md:text-4xl font-bold text-primary tracking-tight'>
              Meet Dr. Blake
            </h2>
            <p className='text-lg text-foreground/80 leading-relaxed'>
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma.
            </p>
            <p className='text-lg text-foreground/80 leading-relaxed'>
              Whether you meet in her Maplewood Drive office or connect
              virtually via Zoom, Dr. Blake is committed to creating a safe,
              supportive space for you to thrive.
            </p>
          </div>
          <div className='relative aspect-[4/5] md:h-[500px] rounded-lg overflow-hidden shadow-lg order-first md:order-last'>
            <Image
              src='/dr-serena-blake.png'
              alt='Dr. Serena Blake headshot'
              data-ai-hint='professional blonde woman'
              fill
              sizes='(min-width: 768px) 50vw, 100vw'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
