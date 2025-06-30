'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 border-b backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex-1 flex justify-start'>
            <Link
              href='/'
              className={cn(
                'text-xl font-bold transition-colors',
                isScrolled ? 'text-primary' : 'text-white'
              )}>
              Dr. Serena Blake
            </Link>
          </div>

          <nav className='hidden md:flex items-center gap-10'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-semibold text-sm uppercase tracking-wider transition-colors',
                  isScrolled
                    ? 'text-foreground/70 hover:text-primary'
                    : 'text-white/90 hover:text-white'
                )}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='flex-1 hidden md:flex justify-end'>
            <Button
              asChild
              variant='outline'
              className={cn(
                'rounded-full transition-colors',
                isScrolled
                  ? 'border-primary/50 text-primary hover:bg-primary/5'
                  : 'border-white text-white hover:bg-white/20'
              )}>
              <Link
                href='/consultation'
                target='_blank'
                rel='noopener noreferrer'>
                Book a Consult
              </Link>
            </Button>
          </div>

          <div className='md:hidden'>
            <Sheet
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className={cn(
                    'transition-colors',
                    isScrolled ? 'text-primary' : 'text-white hover:bg-white/20'
                  )}>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='w-[300px] sm:w-[400px] bg-background'>
                <div className='flex flex-col h-full p-6'>
                  <Link
                    href='/'
                    className='text-xl font-bold text-primary mb-8'
                    onClick={() => setMobileMenuOpen(false)}>
                    Dr. Serena Blake
                  </Link>
                  <nav className='flex flex-col gap-6 text-lg'>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className='text-foreground/70 hover:text-primary font-medium transition-colors'
                        onClick={() => setMobileMenuOpen(false)}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button
                    asChild
                    className='mt-auto rounded-full'>
                    <Link
                      href='/consultation'
                      onClick={() => setMobileMenuOpen(false)}
                      target='_blank'
                      rel='noopener noreferrer'>
                      Book a Free Consult
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
