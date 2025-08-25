"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Truck, Boxes, Thermometer, ShoppingBasket, Cpu, Warehouse, Plane, Ship, Train, Map, Globe } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { cn } from '@/lib/utils';
import { SVGProps, useState } from 'react';
import { shipperSolutions } from '@/lib/data';

const FlatbedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h17.6a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 19.6 6H15V4h-2v2H4a2 2 0 0 0-2 2v4Z"></path><path d="M22 12v4H15.3a2.7 2.7 0 0 1-2.6-2H2v4h10v2h-4v2h4a2 2 0 0 0 2-2v-2h6v2h-4v2h4a2 2 0 0 0 2-2v-4Z"></path><circle cx="6.5" cy="18.5" r="2.5"></circle><circle cx="17.5" cy="18.5" r="2.5"></circle>
        <path d="M15 10h4.5"></path>
    </svg>
)

const ContainerMgmtIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9.5h15.2a2.3 2.3 0 0 0 2.3-2.3V5.7a2.3 2.3 0 0 0-2.3-2.3H2Z" /><path d="M20 9.5h-2.5" /><path d="M15 9.5 7.5 17H2" /><path d="M22 9.5V17h-2.5" /><circle cx="4.5" cy="19.5" r="2.5" /><circle cx="17.5" cy="19.5" r="2.5" />
    </svg>
);

const MexicoProduceIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 3a5.2 5.2 0 0 0-4 1.8 5.2 5.2 0 0 0-4 1.8c-1.5 2.1-1.5 5.1 0 7.2 1.5 2.1 4.5 3.2 7.5 3.2 5.5 0 8.5-3.5 8.5-8.5 0-3.3-1.2-5.7-3.2-7.2" /><path d="M12.5 3.5c-1.4 0-2.5 1-2.5 3" /><path d="M11.5 17c-1.4 0-3 .3-4.5.8" /><path d="M13 18.5c-5.5.5-8.5 1.5-8.5 2.5" /><path d="m14 14.5-4 2 4.5 3.5" /><path d="m17 12-4.5 3-1-3.5" />
    </svg>
);

const LtlConsolidationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9V6.5A2.5 2.5 0 0 1 7.5 4h3" /><path d="M15 4h1.5A2.5 2.5 0 0 1 19 6.5V9" /><path d="M5 15v2.5A2.5 2.5 0 0 0 7.5 20h3" /><path d="M15 20h1.5a2.5 2.5 0 0 0 2.5-2.5V15" /><path d="M12 4v16" /><path d="M9 12H5" /><path d="M19 12h-4" /><path d="M21 17h-8" /><path d="M3 17h4" /><path d="M21 7h-8" /><path d="M3 7h4" />
    </svg>
);

const serviceIcons: { [key: string]: (props: SVGProps<SVGSVGElement>) => JSX.Element } = {
    'Full Truckload (FTL)': Truck,
    'Less-than-Truckload (LTL)': Boxes,
    'Flatbed': FlatbedIcon,
    'Temperature Controlled': Thermometer,
    'Produce': ShoppingBasket,
    'Managed Transportation': Cpu,
    'Warehousing': Warehouse,
    'Expedited': Plane,
    'Drayage': Ship,
    'Intermodal': Train,
    'Canada-US Cross-Border': Map,
    'Mexico Cross-Border': Globe,
}

const solutionsData = [
    {
      id: 'dest-container-mgmt',
      title: 'Destination Container Management',
      icon: ContainerMgmtIcon,
      description: "Stop paying excessive demurrage, detention, and per diem charges; increase visibility; and gain flexibility over your ocean containers from port to delivery with our destination container management solution.",
      image: '/image/Destination.jpg',
      imageHint: "shipping containers",
      href: '/services',
    },
    {
      id: 'mexico-produce',
      title: 'Mexico Cross Border Produce Transportation',
      icon: MexicoProduceIcon,
      description: "Importing produce from Mexico? Gain peace of mind knowing that your fruits and vegetables are protected from temperature fluctuations with our end-to-end Mexico cross-border produce solution.",
      image: '/image/Mexico.jpg',
      imageHint: "fresh produce",
      href: '/services',
    },
    {
      id: 'ltl-consolidation',
      title: 'Long-Haul LTL Consolidation',
      icon: LtlConsolidationIcon,
      description: "Looking to reduce costs, shorten transit times, increase distribution flexibility, improve shipment visibility, and enhance customer service? Discover our long-haul LTL consolidation solution.",
      image: '/image/Shipping.jpg',
      imageHint: "forklift loading",
      href: '/services',
    },
  ];

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <section className={cn("py-20 sm:py-32", className)}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const heroStats = [
    { number: "1", text: "45 YEARS OF EXPERTISE" },
    { number: "2", text: "THE RIGHT CAPACITY" },
    { number: "3", text: "TECHNOLOGY-ENABLED SOLUTIONS" },
];


function ServicesSection() {
  return (
    <Section className="bg-white text-black">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <Reveal>
          <h2 className="text-5xl font-black tracking-tight uppercase">Services</h2>
        </Reveal>
        <Reveal>
          <p className="text-lg text-gray-600">
            Trafficology Logistics&apos; solutions are backed by expertise, the right capacity, and 24/7-365 support. We engineer technology-enabled solutions to tackle the most complex supply chain challenges.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shipperSolutions.map((service, index) => {
           const Icon = serviceIcons[service.label] || Truck;
          return (
            <Reveal key={service.label} delay={index * 0.05}>
              <Link href={service.href} className="group">
                <div 
                  className="border border-gray-200 rounded-lg p-6 flex items-center gap-4 h-full hover:bg-primary hover:text-black transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-primary group-hover:text-black transition-colors" />
                  <span className="font-semibold text-base">{service.label}</span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function SolutionsSection() {
    const [activeSolution, setActiveSolution] = useState(solutionsData[2]);

    return (
      <Section className="bg-black text-white">
        <Reveal>
          <h2 className="text-5xl font-black tracking-tight uppercase mb-16">SOLUTIONS</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="space-y-4">
              {solutionsData.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <button
                    key={solution.id}
                    onClick={() => setActiveSolution(solution)}
                    className={cn(
                      "w-full text-left p-6 border border-gray-800 rounded-lg flex items-center gap-4 transition-all duration-300",
                      activeSolution.id === solution.id
                        ? "bg-gray-800 border-primary"
                        : "hover:bg-gray-900"
                    )}
                  >
                    <Icon className={cn(
                      "w-8 h-8 transition-colors",
                      activeSolution.id === solution.id ? "text-primary" : "text-gray-400"
                    )} />
                    <span className="text-lg font-semibold">{solution.title}</span>
                  </button>
                )
              })}
            </div>
          </Reveal>
          <Reveal>
             {activeSolution && (
                 <div className="flex flex-col items-start">
                    <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                        <Image
                        src={activeSolution.image}
                        alt={activeSolution.title}
                        data-ai-hint={activeSolution.imageHint}
                        fill
                        className="object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <h3 className="text-3xl font-black mb-4">{activeSolution.title}</h3>
                    <p className="text-gray-400 mb-6">{activeSolution.description}</p>
                    <Button asChild variant="outline" className="bg-white text-black hover:bg-gray-200 rounded-full font-bold group">
                        <Link href={activeSolution.href}>
                        READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
             )}
          </Reveal>
        </div>
      </Section>
    );
}

export default function Home() {
  return (
    <>
      <section className="relative h-screen bg-black text-white flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/truck.jpg"
            alt="Two engineers discussing plans in a warehouse"
            data-ai-hint="engineers planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center pt-20">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase">
                Custom Solutions for Complex<br />
                <span className="text-primary">Supply Chains</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-300">
                 Trafficology Logistics&apos; solutions are backed by expertise, the right capacity, and 24/7-365 support. We engineer technology-enabled solutions to tackle the most complex supply chain challenges.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-6 py-3 font-bold text-base group">
                <Link href="/contact">
                  SHIP WITH US <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroStats.map((stat, index) => (
              <Reveal key={stat.text} delay={index * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {stat.number}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{stat.text}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <SolutionsSection />
    </>
  );
}
