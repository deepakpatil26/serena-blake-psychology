'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-5 right-5 z-50'>
      <Button
        size='icon'
        onClick={scrollToTop}
        className={cn(
          'rounded-full h-12 w-12 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-opacity duration-300',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          pointerEvents: isVisible ? 'auto' : 'none',
        }}>
        <ArrowUp className='h-6 w-6' />
        <span className='sr-only'>Go to top</span>
      </Button>
    </div>
  );
}
