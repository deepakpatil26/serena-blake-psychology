import { ContactForm } from './contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Take the First Step
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80">
            Ready to begin your journey towards healing and self-discovery? Reach out to schedule a free 15-minute consultation. I look forward to connecting with you.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-6 text-foreground/80">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:serena@blakepsychology.com" className="hover:text-primary transition-colors">serena@blakepsychology.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p>(323) 555-0192</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Office Location</h4>
                  <p>1287 Maplewood Drive, <br />Los Angeles, CA 90026</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Office Hours</h4>
                  <p>In-person: Tue & Thu, 10 AM–6 PM</p>
                  <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-background p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
