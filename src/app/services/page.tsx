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
    image: 'https://placehold.co/600x400',
    imageHint: 'warehouse produce',
    icon: Globe,
    highlight: false,
  },
  {
    title: 'Destination Container Management',
    description: 'Stop paying excessive demurrage, detention, and per diem charges; increase visibility; and gain flexibility over your ocean containers from port to delivery with our destination container management solution.',
    image: 'https://placehold.co/600x400',
    imageHint: 'shipping container',
    icon: Ship,
    highlight: true,
  },
  {
    title: 'Long-Haul LTL Consolidation',
    description: 'Want to optimize your LTL supply chain? Reduce costs, shorten transit times and increase distribution flexibility while enhancing both visibility and customer satisfaction with our long-haul LTL consolidation solution.',
    image: 'https://placehold.co/600x400',
    imageHint: 'logistics pallets',
    icon: Truck,
    highlight: false,
  },
];

const SolutionCard = ({ solution }: { solution: (typeof solutions)[0] }) => {
    const Icon = solution.icon;
    return (
        <Card className={cn("border border-gray-700 rounded-lg overflow-hidden flex flex-col bg-transparent group transition-all duration-300", solution.highlight ? "" : "hover:bg-primary")}>
            <div className="relative">
                <Image
                    src={solution.image}
                    alt={solution.title}
                    data-ai-hint={solution.imageHint}
                    width={600}
                    height={400}
                    className="w-full object-cover filter grayscale"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 rounded-full p-2 border border-gray-600">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
            </div>
            <CardContent className={cn("p-6 flex flex-col flex-grow", solution.highlight ? "bg-primary text-primary-foreground" : "bg-black text-white", "group-hover:text-primary-foreground")}>
                <h3 className="text-xl font-bold mb-4 flex-grow">{solution.title}</h3>
                <p className={cn("mb-6 flex-grow", solution.highlight ? "" : "text-gray-400", "group-hover:text-primary-foreground")}>{solution.description}</p>
                <div className={cn("border-t", solution.highlight ? "border-black" : "border-gray-700", "group-hover:border-primary-foreground")}></div>
                <Link href="#" className="flex justify-between items-center pt-4 font-semibold text-sm hover:underline">
                    READ MORE
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardContent>
        </Card>
    )
}

export default function ServicesPage() {
  return (
    <div className="bg-black text-white pt-20">
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-left mb-16 max-w-4xl">
                <h1 className="text-5xl sm:text-7xl font-black tracking-tight uppercase">
                    Solutions
                </h1>
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
