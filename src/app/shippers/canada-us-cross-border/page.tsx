import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, ChevronRight, Map } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';

const CrossBorderIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M43.7241 18.7241L45.4382 17.01C46.602 15.8462 48.01 15.2643 49.4764 15.2643C50.9428 15.2643 52.3508 15.8462 53.5146 17.01L55.2287 18.7241L56.9428 20.4382C58.1066 21.602 58.6885 23.01 58.6885 24.4764C58.6885 25.9428 58.1066 27.3508 56.9428 28.5146L55.2287 30.2287L49.4764 35.981L43.7241 30.2287L38 35.981L32.2477 30.2287L38 24.4764L43.7241 18.7241Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M43.7241 24.4764L49.4764 30.2287" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 35V49" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 49L14 43.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 49L25 43.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 35L14 40.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 35L25 40.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const includedItems = [
    {
        title: 'Bonded Service',
        description: 'TRAFFIX is bonded, insured, and holds CTPAT, FAST, and PIP certifications, making us your premier partner for shipping between Canada and the US.',
    },
    {
        title: 'Seasonal Stability',
        description: 'With TRAFFIX, your team can eliminate struggles with seasonal freight cycles that deplete capacity. With 45+ years of experience in cross-border transportation, we stabilize your supply chain with the right capacity.',
    },
    {
        title: 'Drop Trailers',
        description: 'TRAFFIX specializes in cross-border drop trailer programs, streamlining your supply chain and reducing fees such as driver detention.',
    },
    {
        title: 'Cost Stabilization',
        description: 'With over 45 years of experience in Canada-US cross-border shipping, TRAFFIX has forged enduring partnerships with top carriers, enabling us to negotiate competitive pricing contracts, both short and long-term.',
    },
    {
        title: 'On-Time Performance',
        description: 'Our experienced cross-border team knows how to ensure efficient border crossings for your freight, ensuring on-time delivery, especially to retailers with strict appointment policies.',
    },
    {
        title: 'Risk Mitigation',
        description: "Amidst a freight market plagued by fraudulent carriers, TRAFFIX' risk management team and stringent security procedures ensure your freight is entrusted to meticulously vetted and reliable carriers.",
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

function ExperienceSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="max-w-md">
                <p className="text-lg text-gray-400">A long track record of success</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                  45+ Years of<br />
                  Cross Border<br />
                  <span className="text-primary">Experience</span>
                </h2>
                <p className="mt-6 text-base text-gray-300">
                  We have a long history of working with customer on Canada-US cross border shipments. That experience matters in delivering the best results for your business.
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
                  alt="Truck on a highway in a mountainous region"
                  data-ai-hint="truck highway"
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

export default function CanadaUsCrossBorderPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center justify-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Map of Canada and the United States"
            data-ai-hint="canada us map"
            fill
            className="object-cover opacity-30"
          />
           <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl ml-auto text-right">
            <Reveal>
              <CrossBorderIcon className="w-20 h-20 mb-6 inline-block" />
            </Reveal>
            <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Canada-US<br/>Cross Border
            </h1>
            </Reveal>
            <Reveal delay={0.2}>
            <p className="mt-6 text-xl max-w-lg ml-auto text-gray-300">
                Your bonded partner in Canada-US cross border shipping.
            </p>
            </Reveal>
            <Reveal delay={0.3}>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-3 font-bold text-base group">
              <Link href="/contact">
                SHIP WITH US <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            </Reveal>
          </div>
        </div>
      </div>
      <WhatsIncludedSection />
      <ExperienceSection />
    </>
  );
}
