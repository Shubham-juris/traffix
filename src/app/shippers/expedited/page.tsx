import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';

const ExpeditedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5z"></path>
        <path d="M9 17V7"></path>
        <path d="M15.95 10.45l-2.3 2.3"></path>
        <path d="M13.65 10.45l2.3 2.3"></path>
        <path d="M5.5 10H4"></path>
        <path d="M5.5 14H4"></path>
        <circle cx="17.5" cy="17.5" r="2.5"></circle>
        <circle cx="7.5" cy="17.5" r="2.5"></circle>
    </svg>
)

const includedItems = [
    {
        title: 'Quick Turnarounds',
        description: "Trust TRAFFIX' expedited team to have drivers onsite within an hour of receiving your load details. When equipment requirements change at the last minute, we can pivot quickly to maintain critical timelines.",
    },
    {
        title: 'Airport Pickups',
        description: "When your shipment lands, TRAFFIX' expedited team ensures a driver is onsite to meet your freight as it is offloaded, minimizing any delay between landing and delivery.",
    },
    {
        title: 'Specialized Delivery Services',
        description: "When your urgent shipment requires specialized handling, TRAFFIX' expedited team has you covered. Whether it's white glove or inside delivery, we ensure your freight receives the meticulous care it needs.",
    },
    {
        title: 'Accuracy',
        description: 'Detail is crucial in expedited shipping, particularly during airport pickups. Our rigorously vetted drivers carefully cross-check labels with paperwork to guarantee accurate loading for delivery.',
    },
    {
        title: 'Documentation',
        description: 'Regardless of its monetary worth, we treat all expedited freight as high-value. Our drivers are trained photograph your freight before loading to ensure it arrives in the same condition it was picked up.',
    },
    {
        title: 'Expedited POD',
        description: 'We notify you immediately upon delivery and send your proof of delivery (POD) within 30 minutes of the receiver taking possession of your urgent shipments.',
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

function SuccessWithExpeditedSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="text-lg text-gray-400">Accelerating supply chains</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Success With<br />
                <span className="text-primary">Expedited</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Prevent stock-outs and line-down scenarios by integrating a dependable expedited transportation provider into your supply chain strategy. Explore more in our Expedited 101 article.
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
                alt="White van moving fast"
                data-ai-hint="delivery van"
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

function JitInventorySection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative p-2 border border-gray-800 rounded-lg">
              <Image
                src="https://placehold.co/800x600"
                alt="Workers loading a van at a warehouse dock"
                data-ai-hint="warehouse loading"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="max-w-lg">
              <p className="text-lg text-gray-400">Avoid critical delays</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Just-In-Time (JIT)<br />
                Inventory<br />
                <span className="text-primary">Management</span>
              </h2>
              <p className="mt-6 text-base text-gray-300">
                While JIT offers benefits, it also has risks such as supply chain disruptions, slow response to demand changes, and unexpected delays. Expedited services mitigate these challenges, keeping your supply chain moving efficiently.
              </p>
              <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                <Link href="#">
                  READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

export default function ExpeditedPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Delivery van in motion"
            data-ai-hint="delivery van"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-xl">
                <Reveal>
                    <ExpeditedIcon className="w-20 h-20 text-primary mb-6" />
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                    Expedited
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-6 text-xl max-w-lg text-gray-300">
                        Urgent shipments delivered with efficiency, expertise, and 24/7 visibility.
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
      <SuccessWithExpeditedSection />
      <JitInventorySection />
    </>
  );
}
