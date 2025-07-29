import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, Warehouse } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';

const includedItems = [
    {
        title: 'Integrated Logistics Solutions',
        description: 'TRAFFIX is your single-source solution provider for bonded and non-bonded warehousing, providing comprehensive services such as short-term and long-term storage, drayage, over-the-road (OTR) transportation, and container destuffing/rework.',
    },
    {
        title: 'Reduced Minimum Requirements',
        description: "Leverage TRAFFIX' existing relationships and volume to access smaller amounts of warehousing space, eliminating the need to meet higher minimum space requirements.",
    },
    {
        title: 'Damage & Theft Prevention',
        description: 'We match clients with specialized warehousing partners to ensure proper handling, reducing damages and claims. Our theft prevention includes tracking devices, secure yards, cameras, guard shacks, background checks, driver verification, and photographing equipment.',
    },
    {
        title: 'Flexible Leasing Options',
        description: 'Achieve supply chain flexibility with our short-term leasing options, including month-to-month and six-month terms.',
    },
    {
        title: 'Market Expansion Support',
        description: 'As your business expands, TRAFFIX will find the right warehouse capacity to meet your needs. Rest assured that all new warehouses must undergo a thorough vetting process to ensure they meet our high quality standards.',
    },
    {
        title: 'Technology',
        description: "Utilize TRAFFIX' cloud-based warehouse management system (WMS) or integrate with your current system.",
    },
];

function WhatsIncludedSection() {
  return (
    <section className="bg-white text-black py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 uppercase">
          What's Included
        </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
          {includedItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
                  <Check className="h-5 w-5 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-base">{item.description}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WarehousingPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Warehouse interior"
            data-ai-hint="warehouse interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <Reveal>
            <Warehouse className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Warehousing
            </h1>
            </Reveal>
            <Reveal delay={0.2}>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Flexible and scalable warehousing solutions.
            </p>
            </Reveal>
            <Reveal delay={0.3}>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
              <Link href="/contact">
                GET A QUOTE <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            </Reveal>
        </div>
      </div>
      <WhatsIncludedSection />
    </>
  );
}
