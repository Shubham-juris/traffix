import { Reveal } from '@/components/animations/reveal';
import { CarrierForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mx-auto mb-16">
          <Reveal>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight uppercase">
            Become a <span className="text-primary">Carrier</span>
          </h1>
          </Reveal>
          <Reveal delay={0.1}>
          <p className="mt-8 text-xl text-gray-300">How can we help you?</p>
          </Reveal>
          <Reveal delay={0.2}>
          <div className="mt-4 flex flex-wrap gap-4">
            <button className="px-4 py-2 text-sm font-bold border border-primary text-primary hover:bg-primary hover:text-black transition-colors rounded-md">
              START HAULING WITH Trafficology Logistics            </button>
            <button className="px-4 py-2 text-sm font-bold border border-gray-600 text-gray-300 hover:border-primary hover:text-primary transition-colors rounded-md">
              CARRIER PAYMENT APP SUPPORT
            </button>
            <button className="px-4 py-2 text-sm font-bold border border-gray-600 text-gray-300 hover:border-primary hover:text-primary transition-colors rounded-md">
              OTHER
            </button>
          </div>
          </Reveal>
        </header>

        <main className="max-w-4xl mx-auto">
          <Reveal>
           <h2 className="text-2xl font-bold mb-6 text-gray-200">
             Provide your details so we can contact you
           </h2>
          </Reveal>
          <Reveal>
            <CarrierForm />
          </Reveal>
        </main>
      </div>
    </div>
  );
}
