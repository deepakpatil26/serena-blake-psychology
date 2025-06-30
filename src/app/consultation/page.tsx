'use client';

import { useState, useEffect } from 'react';
import { ConsultationForm } from '@/components/consultation-form';
import Link from 'next/link';

export default function ConsultationPage() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className='bg-secondary'>
      <header className='bg-background py-4 border-b'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
          <Link
            href='/'
            className='text-xl font-bold text-primary'>
            Dr. Serena Blake
          </Link>
        </div>
      </header>
      <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-3xl md:text-4xl font-bold text-primary tracking-tight'>
              New Client Inquiries
            </h1>
            <p className='mt-4 text-lg text-foreground/80'>
              Please complete this form and I will contact you within two
              business days to schedule a 15-minute consultation to see if we
              would be a good fit for working together.
            </p>
            <p className='mt-2 text-sm text-muted-foreground'>
              * Indicates required question
            </p>
          </div>
          <div className='bg-background p-6 sm:p-8 rounded-lg shadow-lg border'>
            <ConsultationForm />
          </div>
        </div>
      </main>
      <footer className='bg-background py-6 border-t mt-16 md:mt-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm'>
          <p>&copy; {year} Dr. Serena Blake. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
