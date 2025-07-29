import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, ChevronRight, Ship } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';

const DrayageIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
        <path d="M9 9h6" />
        <path d="M8 13h8" />
        <path d="M12 9v4" />
        <path d="M12 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h18v-2a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2Z" />
        <path d="M7 15v-1a1 1 0 0 1 1-1h1" />
        <path d="M15 14h1a1 1 0 0 1 1 1v1" />
        <circle cx="7.5" cy="19.5" r=".5" fill="currentColor" />
        <circle cx="16.5" cy="19.5" r=".5" fill="currentColor" />
    </svg>
)

const includedItems = [
    {
        title: 'Reduced Demurrage',
        description: "TRAFFIX' drayage services team schedules pickup on the day or day following your container's arrival at the port or rail terminal, eliminating unnecessary demurrage fees.",
    },
    {
        title: 'Carrier Management',
        description: "TRAFFIX serves as your single point of contact for drayage loads at all ports and rail terminals across Canada and the USA, alleviating the burden of managing multiple providers from your team.",
    },
    {
        title: 'Upfront Fee Payment',
        description: "TRAFFIX can pay port fees and per diem charges on your behalf for a streamlined experience (administrative fees may apply).",
    },
    {
        title: 'Dedicated Chassis Pools',
        description: "At your request, TRAFFIX can secure a pool of private chassis for your drayage needs, ensuring you have top-quality equipment and capacity when and where you need it.",
    },
    {
        title: 'Transparent Invoicing',
        description: 'TRAFFIX\' drayage services team is dedicated to "no-surprise" invoicing, ensuring you are informed of all fees upfront before receiving your itemized invoice.',
    },
    {
        title: 'Full Service Solution',
        description: 'TRAFFIX provides a comprehensive range of over-the-road services, enabling our team to create customized drayage solutions from port to delivery.',
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

function InsAndOutsSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="max-w-md">
                <p className="text-lg text-gray-400">Helping you understand the</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                  Ins and Outs<br />
                  of <span className="text-primary">Drayage</span>
                </h2>
                <p className="mt-6 text-base text-gray-300">
                  Supply chains involving the use of ocean or rail depend on drayage services to link shippers and receivers to ocean ports and rail terminals. Check our our article to learn more about drayage.
                </p>
                <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
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
                  alt="Truck with a container ship in the background"
                  data-ai-hint="truck container ship"
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

export default function DrayagePage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Truck with a yellow container on a highway"
            data-ai-hint="truck container"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-xl">
                <Reveal>
                    <DrayageIcon className="w-20 h-20 text-primary mb-6" />
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                        Drayage
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-6 text-xl max-w-lg text-gray-300">
                        Timely retrieval and advancement of your time-sensitive loads.
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
      <InsAndOutsSection />
    </>
  );
}
