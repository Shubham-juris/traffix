import { Reveal } from '@/components/animations/reveal';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Globe, Ship, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const solutions = [
  {
    title: 'Mexico Cross Border Produce Transportation',
    description: 'Importing produce from Mexico? Gain peace of mind knowing that your fruits and vegetables are protected from temperature fluctuations with our end-to-end Mexico cross-border produce solution.',
    image: '/image/Shipping.jpg',
    imageHint: 'warehouse produce',
   
    highlight: false,
  },
  {
    title: 'Destination Container Management',
    description: 'Stop paying excessive demurrage, detention, and per diem charges; increase visibility; and gain flexibility over your ocean containers from port to delivery with our destination container management solution.',
    image: '/image/Intermodal-Rail.jpg',
    imageHint: 'shipping container',
    
    highlight: true,
  },
  {
    title: 'Long-Haul LTL Consolidation',
    description: 'Want to optimize your LTL supply chain? Reduce costs, shorten transit times and increase distribution flexibility while enhancing both visibility and customer satisfaction with our long-haul LTL consolidation solution.',
    image: '/image/greenloading.jpg',
    imageHint: 'LOGISTICS pallets',
  
    highlight: false,
  },
  {
    title: 'Cross-Border US-Canada Solutions',
    description: 'TRAFFICOLOGY LOGISTICS provides seamless and efficient cross-border transportation between the US and Canada.',
    image: '/image/Management.jpg',
    imageHint: 'cross border trucks',
   
    highlight: false,
  },
  {
    title: 'E-commerce Fulfillment',
    description: 'Fast and reliable e-commerce fulfillment with TRAFFICOLOGY LOGISTICS to meet growing online demands.',
    image: '/image/trm.jpg',
    imageHint: 'ecommerce packages',
   
    highlight: true,
  },
  {
    title: 'Temperature Controlled Shipping',
    description: 'Protect sensitive shipments with our temperature-controlled LOGISTICS powered by TRAFFICOLOGY LOGISTICS.',
    image: '/image/image2.jpg',
    imageHint: 'cold storage trucks',
   
    highlight: false,
  },
  {
    title: 'Expedited Freight',
    description: 'Time-critical shipments delivered quickly and securely with TRAFFICOLOGY LOGISTICS expedited freight solutions.',
    image: '/image/ExpeditedShipping.png',
    imageHint: 'express delivery',
    
    highlight: false,
  },
  {
    title: 'Warehousing Solutions',
    description: 'Scalable warehousing with TRAFFICOLOGY LOGISTICS to meet seasonal or long-term storage requirements.',
    image: '/image/image4.jpg',
    imageHint: 'warehouse shelves',
   
    highlight: true,
  },
  {
    title: 'Intermodal Transportation',
    description: 'Leverage cost-efficient intermodal solutions with TRAFFICOLOGY LOGISTICS to keep freight moving smoothly.',
    image: '/image/warehouse-management.webp',
    imageHint: 'rail transport',
   
    highlight: false,
  },
  {
    title: 'Managed Transportation',
    description: 'Outsource your supply chain management to TRAFFICOLOGY LOGISTICS for increased efficiency.',
    image: '/image/truck.jpg',
    imageHint: 'supply chain team',
   
    highlight: false,
  },
  {
    title: 'Retail Distribution',
    description: 'Keep your retail supply chain optimized and efficient with TRAFFICOLOGY LOGISTICS customized distribution.',
    image: '/image/supply.jpg',
    imageHint: 'retail LOGISTICS',
   
    highlight: true,
  },
  {
    title: 'Project Cargo Solutions',
    description: 'Handle oversized and complex cargo with TRAFFICOLOGY LOGISTICS project cargo expertise.',
    image: '/image/image.webp',
    imageHint: 'heavy lift cargo',
   
    highlight: false,
  },
];
const SolutionCard = ({ solution }: { solution: (typeof solutions)[0] }) => {
  
  return (
    <Card className="border border-gray-700 rounded-lg overflow-hidden flex flex-col bg-transparent group transition-all duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={solution.image}
          alt={solution.title}
          data-ai-hint={solution.imageHint}
          fill
          className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 rounded-t-lg"
        />
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-full p-2 border border-gray-600">
          
        </div>
      </div>
      <CardContent
        className={cn(
          "p-6 flex flex-col flex-grow transition-colors duration-300",
          solution.highlight
            ? "bg-primary text-primary-foreground hover:bg-primary hover:text-black"
            : "bg-black text-white hover:bg-primary hover:text-black"
        )}
      >
        <h3 className="text-xl font-bold mb-4 flex-grow">{solution.title}</h3>
        <p
          className={cn(
            "mb-6 flex-grow",
            solution.highlight ? "text-primary-foreground" : "text-gray-400 group-hover:text-black"
          )}
        >
          {solution.description}
        </p>
        <div
          className={cn(
            "border-t",
            solution.highlight ? "border-black" : "border-gray-700 group-hover:border-black"
          )}
        ></div>
        {/* <Link href="#" className="flex justify-between items-center pt-4 font-semibold text-sm hover:underline">
          READ MORE
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link> */}
      </CardContent>
    </Card>
  );
};

export default function ServicesPage() {
  return (
    <div className="bg-black text-white pt-20">
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-left mb-16 max-w-4xl">
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight uppercase">Solutions</h1>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight uppercase text-primary">
              For Shippers
            </h1>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Reveal key={solution.title} delay={index * 0.1}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}