import { Reveal } from '@/components/animations/reveal';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">Contact Us</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Have a question or a project in mind? We'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <ContactForm />
            </Reveal>
            <Reveal>
              <h2 className="text-3xl font-bold mb-6">Our Information</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">123 Digital Avenue, Web City, WC 12345</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <a href="mailto:hello@traffix.dev" className="text-muted-foreground hover:text-primary">hello@traffix.dev</a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">(123) 456-7890</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
