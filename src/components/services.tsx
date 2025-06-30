'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      'Learn proven techniques to manage worry, reduce stress, and find a sense of balance.',
    detailedDescription:
      "In our sessions, we will work collaboratively to identify the root causes of your anxiety and stress. You'll learn practical, evidence-based strategies such as Cognitive Behavioral Therapy (CBT) and mindfulness to reframe negative thought patterns, manage panic symptoms, and develop healthy coping mechanisms. The goal is to empower you with the tools to navigate life's challenges with greater calm and confidence.",
    imageUrl:
      'https://images.pexels.com/photos/3958464/pexels-photo-3958464.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'A person sitting calmly by a window with a cup of tea',
  },
  {
    title: 'Relationship Counseling',
    description:
      'Strengthen communication, resolve conflicts, and deepen your connection with your partner.',
    detailedDescription:
      "Whether you're facing specific challenges or looking to proactively strengthen your bond, couples counseling offers a safe space to improve your relationship. We will focus on enhancing communication skills, resolving persistent conflicts, and rebuilding trust. By exploring underlying dynamics and fostering mutual understanding, you and your partner can work towards a more fulfilling and resilient partnership.",
    imageUrl:
      'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg',
    alt: 'A couple in a supportive counseling session',
  },
  {
    title: 'Trauma Recovery',
    description:
      'Heal from past events in a safe, trauma-informed, and supportive space.',
    detailedDescription:
      'Healing from trauma is a delicate process that requires safety, trust, and a compassionate approach. I am trained in trauma-informed care to help you gently process distressing memories and emotions at your own pace. Together, we will work on building resilience, re-establishing a sense of safety in the world, and integrating these experiences so you can move forward with a renewed sense of hope and well-being.',
    imageUrl:
      'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg',
    alt: 'A person looking out a window with a sense of hope',
  },
];

export default function Services() {
  return (
    <section
      id='services'
      className='py-16 md:py-20 lg:py-24 bg-secondary'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary tracking-tight'>
            How I Can Help
          </h2>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-foreground/80'>
            I specialize in a few key areas, offering dedicated support tailored
            to your unique journey. Click on a service to learn more.
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <Dialog key={service.title}>
              <DialogTrigger asChild>
                <Card className='flex flex-col text-center items-center overflow-hidden shadow-lg border-none cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                  <div className='relative w-full h-56'>
                    <Image
                      src={service.imageUrl}
                      alt={service.alt}
                      fill
                      sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      className='object-cover'
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className='text-xl'>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className='flex-grow'>
                    <p className='text-base text-foreground/80 leading-relaxed'>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[625px]'>
                <DialogHeader>
                  <div className='relative w-full h-64 rounded-lg overflow-hidden mb-6'>
                    <Image
                      src={service.imageUrl}
                      alt={service.alt}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <DialogTitle className='text-2xl text-primary'>
                    {service.title}
                  </DialogTitle>
                  <DialogDescription asChild>
                    <div className='text-left text-base text-foreground/80 py-4 leading-relaxed'>
                      {service.detailedDescription}
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <div className='pt-4 text-center'>
                  <Button
                    asChild
                    size='lg'>
                    <Link
                      href='/consultation'
                      target='_blank'
                      rel='noopener noreferrer'>
                      Book a Free Consult
                    </Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
