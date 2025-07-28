import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';

const TemperatureControlledIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2h4" />
        <path d="M12 18V2" />
        <path d="M12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M19 8h2.79a2.79 2.79 0 0 1 2.5 3.12l-1.6 8.8A2.79 2.79 0 0 1 20 22H4a2.79 2.79 0 0 1-2.69-2.08l-1.6-8.8A2.79 2.79 0 0 1 2.21 8H5" />
        <path d="M5 8V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
    </svg>
)

const includedItems = [
    {
        title: 'Experience',
        description: 'When it comes to temperature-controlled shipping, success is in the details. Our experts know what questions to ask to ensure no critical detail is overlooked.',
    },
    {
        title: 'Network Capacity',
        description: 'Our premium carrier network operating top-of-the-line equipment ensures your thermosensitive freight travels at the right temperature from pickup to delivery.',
    },
    {
        title: 'Technology',
        description: "From temperature tracking to shipment visibility, TRAFFIX' team of experts are backed by industry-leading technology.",
    },
    {
        title: 'Cold Storage',
        description: 'TRAFFIX streamlines your temperature-controlled shipments between the US and Mexico with our secure cold storage locations at the border.',
    },
    {
        title: 'Responsive Support',
        description: 'Enjoy peace of mind knowing that our expert support team is available to you around the clock, no matter the day.',
    },
    {
        title: 'Seamless Claims Process',
        description: 'When the unexpected happens, TRAFFIX has you covered. Our dedicated team makes the claims process quick and hassle-free.',
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

function ExperiencedPartnerSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-400">A track record of success</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Your Experienced<br />
                <span className="text-primary">Partner</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Experience always matters in transportation, but even more so with temperature-controlled service. Our solutions are backed by 45+ years of experience.
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
                alt="White truck with yellow refrigeration unit"
                data-ai-hint="white truck"
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

export default function TemperatureControlledPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Refrigerated truck"
            data-ai-hint="refrigerated truck"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <TemperatureControlledIcon className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Temperature <br /> Controlled
            </h1>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Expert attention to detail. Backed by the right capacity.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
              <Link href="/contact">
                SHIP WITH US <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>
      </div>
      <WhatsIncludedSection />
      <ExperiencedPartnerSection />
    </>
  );
}
