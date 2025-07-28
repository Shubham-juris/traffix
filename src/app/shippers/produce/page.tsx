
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';

const ProduceIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 7.5L15.5 10.5M15.5 10.5L18.5 7.5M15.5 10.5V2M9.5 7.5L6.5 10.5M6.5 10.5L3.5 7.5M6.5 10.5V2"/>
        <path d="M22 10.5H2"/>
        <path d="M20 22H4a2 2 0 01-2-2V12.5a2 2 0 012-2h16a2 2 0 012 2V20a2 2 0 01-2 2z"/>
    </svg>
)

const includedItems = [
    {
        title: 'Flexible Capacity',
        description: 'Produce transportation is subject to fluctuations in supply and demand. You need a partner with the right capacity available when and where you need it.',
    },
    {
        title: 'Ripe with Knowledge',
        description: 'There is a difference in the way you move asparagus versus watermelons or citrus versus potatoes. Ship with a team that knows your produce.',
    },
    {
        title: 'Produce Drayage',
        description: 'Importing produce from overseas? TRAFFIX has you covered with our temperature-controlled port drayage solutions.',
    },
    {
        title: 'Cold Cross-Dock',
        description: 'For produce shipments being imported from Mexico to the USA or Canada, take advantage of our cold cross-dock locations at the border.',
    },
    {
        title: 'Grocer Preferred',
        description: 'Delivering produce to major grocers and retailers involves strict requirements including deliveries by appointment. Trust your TRAFFIX team and preferred carriers to meet these demanding requirements.',
    },
    {
        title: 'Cross-Border Expertise',
        description: 'Our expert produce team ensures a compliant and efficient crossing by guiding you through the necessary preparations to ensure your produce arrives fresh at its final destination.',
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

function MitigatingRiskSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-400">Spoilage and shelf life</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Mitigating<br />
                <span className="text-primary">Risk</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Fresh produce is extremely sensitive to temperature changes, which can cause spoilage. Therefore, documentation and pulping are critical in produce shipping.
              </p>
              <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                <Link href="#">
                  READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://placehold.co/800x600"
                alt="Thermometer in a box of fresh produce in a warehouse"
                data-ai-hint="produce thermometer"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="mt-20 border-t border-primary"></div>
        </div>
      </section>
    );
}

function BestPracticesSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image
                    src="https://placehold.co/800x600"
                    alt="Man in hard hat in a produce warehouse"
                    data-ai-hint="produce warehouse"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl"
                />
            </div>
            <div>
              <p className="text-lg text-gray-400">Ensuring freshness</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Best<br />
                <span className="text-primary">Practices</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Meticulous planning and execution is needed to ensure that fruits and vegetables arrive at their destination in optimal condition.
              </p>
              <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                <Link href="#">
                  READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default function ProducePage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Apples in a crate with a truck in the background"
            data-ai-hint="apples crate"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <ProduceIcon className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Produce <br /> Transportation
            </h1>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Transporting fresh produce from farm to retailer.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
              <Link href="/contact">
                SHIP WITH US <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>
      </div>
      <WhatsIncludedSection />
      <MitigatingRiskSection />
      <BestPracticesSection />
    </>
  );
}
