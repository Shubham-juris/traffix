import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronRight, Train } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';

const IntermodalIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4.5h8" />
        <path d="M8 4.5V3h8v1.5" />
        <path d="M16.5 19.5h-9" />
        <path d="M16.5 19.5v1.5h-9v-1.5" />
        <path d="M4 11.5v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M20 12.5v4a2 2 0 0 1-2-2H6a2 2 0 0 1-2-2v-4" />
        <path d="M20 11.5H4" />
        <path d="M10 14h4" />
        <path d="M14 9.5a1.5 1.5 0 0 0-1.5-1.5h-1A1.5 1.5 0 0 0 10 9.5" />
        <path d="M12 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M14 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
)

const includedItems = [
    {
        title: 'Dedicated Team',
        description: "Unlike many other intermodal marketing companies (IMCs), TRAFFIX' intermodal service is delivered by dedicated account managers, ensuring you feel valued and supported regardless of your volume.",
    },
    {
        title: 'Comprehensive Service Offering',
        description: 'TRAFFIX offers a true IMC operating model with full control of drayage and railroad movements to ensure superior service and cost control.',
    },
    {
        title: 'Customized Solutions',
        description: "We don't believe in a one-size-fits-all approach. Our dedicated team is committed to crafting flexible, customized supply chain solutions tailored specifically to your individual needs.",
    },
    {
        title: 'Leverage our Relationships',
        description: 'TRAFFIX maintains direct relationships with all Class 1 railroads, enabling us to collaborate closely with them to establish tailored requirements on your behalf.',
    },
    {
        title: 'Predictable Pricing',
        description: 'Lock in long-term rates offering more price stability than other modes of transportation.',
    },
    {
        title: 'Sustainability',
        description: 'Reduce your carbon footprint by up to 75% by switching from truckload to intermodal on qualifying lanes.',
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

function StartShippingSection() {
    return (
        <section className="bg-black text-white py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Reveal>
                        <div className="max-w-md">
                            <p className="text-lg text-gray-400">Everything you need to know to</p>
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                                Start Shipping<br />
                                <span className="text-primary">Intermodal</span>
                            </h2>
                            <p className="mt-6 text-base text-gray-300">
                                Intermodal combines multiple transport modes including truck, rail, ocean, or air for efficient, cost-effective door-to-door shipping over long distances.
                            </p>
                            <Button asChild variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                                <Link href="#">
                                    READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div>
                            <Image
                                src="https://placehold.co/800x600"
                                alt="Shipping containers stacked at a terminal"
                                data-ai-hint="shipping containers"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </Reveal>
                </div>
                <div className="mt-20 border-t border-primary"></div>
            </div>
        </section>
    );
}

function SwitchToIntermodalSection() {
    return (
        <section className="bg-black text-white py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <Reveal>
                        <div>
                            <Image
                                src="https://placehold.co/800x600"
                                alt="Yellow freight train on tracks"
                                data-ai-hint="freight train"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-2xl filter grayscale"
                            />
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="max-w-md">
                            <p className="text-lg text-gray-400">When should you</p>
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                                Switch to<br />
                                <span className="text-primary">Intermodal?</span>
                            </h2>
                            <p className="mt-6 text-base text-gray-300">
                                Transportation procurement faces challenges with fluctuating over-the-road (OTR) rates due to supply and demand. Intermodal offers a more sustainable solution, optimized capacity, and reduced freight spend amid these challenges.
                            </p>
                            <Button asChild variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                                <Link href="#">
                                    READ MORE <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </Reveal>
                </div>
                <div className="mt-20 border-t border-primary"></div>
            </div>
        </section>
    );
}

export default function IntermodalPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Yellow freight train on tracks"
            data-ai-hint="freight train"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-lg">
                <Reveal>
                    <IntermodalIcon className="w-20 h-20 text-primary mb-8" />
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                    Intermodal
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-6 text-xl text-gray-300">
                        Beyond just another IMC. Service with a personal touch.
                    </p>
                </Reveal>
                <Reveal delay={0.3}>
                    <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
                    <Link href="/contact">
                        SHIP WITH US <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    </Button>
                </Reveal>
            </div>
        </div>
      </div>
      <WhatsIncludedSection />
      <StartShippingSection />
      <SwitchToIntermodalSection />
    </>
  );
}
