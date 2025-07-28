
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';

const ManagedTransportationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9V7a2 2 0 0 1 2-2h11" />
        <path d="M10 16h1" />
        <path d="M13 16h1" />
        <path d="M16 16h1" />
        <path d="m18 10-2 2 2 2" />
        <path d="m6 10-2 2 2 2" />
        <path d="M12 10v10" />
        <path d="M12 5v1" />
        <path d="M6 5v10" />
        <path d="M18 5v10" />
        <path d="M21 9a2 2 0 0 0-2-2h-2" />
        <path d="M3 9a2 2 0 0 1 2-2h2" />
    </svg>
)

const includedItems = [
    {
        title: 'Cloud-Based TMS',
        description: 'Gain access to our industry-leading cloud-based transportation management system (TMS), built to optimize your network and deliver cost savings and operational efficiencies.',
    },
    {
        title: 'Analytics & Reporting',
        description: 'Advanced analytics and reporting capabilities provide insights into your supply chain operations, enhancing data-driven decision making.',
    },
    {
        title: 'Network Planning',
        description: 'TRAFFIX customizes solutions tailored to optimize order management, load planning, transportation costs, efficiency, and transit times.',
    },
    {
        title: 'Flexible Control',
        description: "We don't believe in one-size-fits-all solutions. We tailor our services to meet the needs of your business.",
    },
    {
        title: 'Intimate Scalability',
        description: 'TRAFFIX engineers and implements customized systems and processes designed to help your business scale, while our expert team maintains a strong focus on individualized and detailed aspects.',
    },
    {
        title: 'The Right Resources',
        description: 'TRAFFIX aims to reduce financial and operational costs by leveraging the three pillars of MTS: technology, our team of experts, and the right capacity.',
    },
];

function WhatsIncludedSection() {
  return (
    <section className="bg-white text-black py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 uppercase">
          What's Included
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
          {includedItems.map((item) => (
            <div key={item.title} className="flex gap-4">
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ManagedTransportationPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Logistics network background"
            data-ai-hint="logistics technology"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <ManagedTransportationIcon className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
              Managed <br /> Transportation <br /> Solutions (MTS)
            </h1>
            <p className="mt-6 text-xl max-w-2xl text-gray-300">
                Enabling value-added network strategies to maximize efficiency, reduce risk, and save costs.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
              <Link href="/contact">
                SHIP WITH US <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>
      </div>
      <WhatsIncludedSection />
    </>
  );
}
