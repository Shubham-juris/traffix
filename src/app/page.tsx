import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Truck, Boxes, Thermometer, ShoppingBasket, Cpu, Warehouse, Plane, Ship, Train, Map, Globe } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { SVGProps } from 'react';
import { shipperSolutions } from '@/lib/data';

const FlatbedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h17.6a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 19.6 6H15V4h-2v2H4a2 2 0 0 0-2 2v4Z"></path><path d="M22 12v4H15.3a2.7 2.7 0 0 1-2.6-2H2v4h10v2h-4v2h4a2 2 0 0 0 2-2v-2h6v2h-4v2h4a2 2 0 0 0 2-2v-4Z"></path><circle cx="6.5" cy="18.5" r="2.5"></circle><circle cx="17.5" cy="18.5" r="2.5"></circle>
        <path d="M15 10h4.5"></path>
    </svg>
)

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
            TRAFFIX&apos; solutions are backed by expertise, the right capacity, and 24/7-365 support. We engineer technology-enabled solutions to tackle the most complex supply chain challenges.
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

export default function Home() {
  return (
    <>
      <section className="relative h-screen bg-black text-white flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Two engineers discussing plans in a warehouse"
            data-ai-hint="engineers planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
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
                TRAFFIX' solutions are backed by expertise, the right capacity, and 24/7-365 support. We engineer technology-enabled solutions to tackle the most complex supply chain challenges.
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
      
      <Section className="bg-card">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to start a project?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Let's build something amazing together.</p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
