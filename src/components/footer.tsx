'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      id='contact'
      className='bg-secondary border-t'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid lg:grid-cols-3 gap-12 text-center lg:text-left'>
          <div className='flex flex-col items-center lg:items-start'>
            <h3 className='text-2xl font-bold text-primary'>
              Dr. Serena Blake, PsyD
            </h3>
            <p className='text-muted-foreground mt-2'>
              Licensed Clinical Psychologist
            </p>
            <nav className='flex gap-4 md:gap-6 mt-6 flex-wrap justify-center lg:justify-start'>
              <Link
                href='#about'
                className='text-sm text-muted-foreground hover:text-foreground'>
                About
              </Link>
              <Link
                href='#services'
                className='text-sm text-muted-foreground hover:text-foreground'>
                Services
              </Link>
              <Link
                href='#faq'
                className='text-sm text-muted-foreground hover:text-foreground'>
                FAQ
              </Link>
            </nav>
          </div>

          <div className='space-y-4 text-muted-foreground'>
            <h4 className='font-semibold text-foreground text-lg'>
              Contact Information
            </h4>
            <div className='flex items-center justify-center lg:justify-start gap-3'>
              <Mail className='h-5 w-5 text-primary' />
              <a
                href='mailto:serena@blakepsychology.com'
                className='hover:text-primary transition-colors'>
                serena@blakepsychology.com
              </a>
            </div>
            <div className='flex items-center justify-center lg:justify-start gap-3'>
              <Phone className='h-5 w-5 text-primary' />
              <span>(323) 555-0192</span>
            </div>
          </div>

          <div className='space-y-4 text-muted-foreground'>
            <h4 className='font-semibold text-foreground text-lg'>Location</h4>
            <div className='flex items-center justify-center lg:justify-start gap-3'>
              <MapPin className='h-5 w-5 text-primary' />
              <p>
                1287 Maplewood Drive, <br />
                Los Angeles, CA 90026
              </p>
            </div>
            <div className='text-sm'>
              <p>In-person & Virtual Sessions Available</p>
            </div>
          </div>
        </div>

        <div className='border-t mt-12 pt-8 text-center text-sm text-muted-foreground'>
          <p>&copy; {currentYear} Dr. Serena Blake. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
