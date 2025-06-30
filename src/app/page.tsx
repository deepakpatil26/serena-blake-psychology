import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Faq from '@/components/faq';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <About />
        <Services />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
