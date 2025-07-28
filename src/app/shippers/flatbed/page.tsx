import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';

const FlatbedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h17.6a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 19.6 6H15V4h-2v2H4a2 2 0 0 0-2 2v4Z"></path><path d="M22 12v4H15.3a2.7 2.7 0 0 1-2.6-2H2v4h10v2h-4v2h4a2 2 0 0 0 2-2v-2h6v2h-4v2h4a2 2 0 0 0 2-2v-4Z"></path><circle cx="6.5" cy="18.5" r="2.5"></circle><circle cx="17.5" cy="18.5" r="2.5"></circle>
        <path d="M15 10h4.5"></path>
    </svg>
)

const includedItems = [
    {
        title: 'Right-Sized Shipments',
        description: 'New clients often request the wrong equipment for their flatbed freight, resulting in limited capacity and higher rates. Our team ensures your flatbed truckload or LTL shipments are loaded on the appropriate equipment.',
    },
    {
        title: 'Guide to Legal Loads',
        description: 'Shipping heavy or oversized loads demands a thorough understanding of legal weight and dimensional limits across various regions and jurisdictions. We serve as your guide to ensure your flatbed freight complies with all regulations.',
    },
    {
        title: 'Precision Timing',
        description: 'Our team specializes in meticulously planning and managing flatbed delivery schedules to ensure your project runs smoothly, preventing any delays caused by late drivers or out-of-sequence deliveries.',
    },
    {
        title: 'Communication',
        description: "Our dedicated team provides up-to-date flatbed shipment tracking and clear, detailed communication at every stage of your freight's journey, from pickup to delivery.",
    },
    {
        title: 'Shipment Accuracy',
        description: "When mistakes are made in flatbed shipping, they can have costly consequences. That's why our team asks thorough questions about each load to ensure no details are overlooked.",
    },
    {
        title: 'Experience Delivering',
        description: 'Whether your freight is headed to a steel mill or a major project site, our experienced team knows what it takes to ensure successful flatbed delivery, regardless of the destination.',
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

function ExperienceMattersSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-400">Why does experience matter in</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Flatbed<br />
                <span className="text-primary">Shipping?</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Each member of TRAFFIX' flatbed team boasts a minimum of 10 years of experience, equipping them with the depth of knowledge and expertise required to optimize your flatbed shipments.
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
                alt="Yellow flatbed truck on a road"
                data-ai-hint="yellow truck"
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

export default function FlatbedPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Flatbed truck"
            data-ai-hint="flatbed truck"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <FlatbedIcon className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Flatbed <br /> Shipping
            </h1>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Flatbed freight shipped with precision, expertise, and the right capacity.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
              <Link href="/contact">
                SHIP WITH US <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>
      </div>
      <WhatsIncludedSection />
      <ExperienceMattersSection />
    </>
  );
}
