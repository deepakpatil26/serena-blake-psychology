import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions are held via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice is required for cancellations.',
  },
  {
    question: 'What are your session fees?',
    answer:
      'Fees are $200 per individual session and $240 per couples session.',
  },
];

export default function Faq() {
  return (
    <section
      id='faq'
      className='py-16 md:py-20 lg:py-24 bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-primary tracking-tight'>
              Frequently Asked Questions
            </h2>
            <p className='mt-4 text-lg text-foreground/80'>
              Find answers to common questions about my practice.
            </p>
          </div>
          <Accordion
            type='single'
            collapsible
            className='w-full'>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}>
                <AccordionTrigger className='text-lg text-left hover:no-underline text-foreground/90'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className='text-base text-foreground/80 leading-relaxed'>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
