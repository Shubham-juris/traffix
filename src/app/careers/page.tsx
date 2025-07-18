import { Reveal } from '@/components/animations/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
    { value: '449K+', label: 'Loads per Year' },
    { value: '46+', label: 'Years in Business' },
    { value: 'Spanning', label: 'North America' },
];

export default function CareersPage() {
  return (
    <div className="pt-20">
      <section className="relative bg-black text-white py-40 sm:py-52 flex items-center">
        <Image 
            src="https://placehold.co/1920x1080"
            alt="Truck driver smiling"
            data-ai-hint="truck driver"
            fill
            className="object-cover opacity-30"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
                <Reveal>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                        WHY HAUL <br/>
                        <span className="text-primary">FOR TRAFFIX</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="mt-6 text-lg text-neutral-300">
                        Join our elite network of carriers. Let's be partners in business.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/contact">Haul With Us <ArrowRight className="ml-2 h-5 w-5"/></Link>
                    </Button>
                </Reveal>
            </div>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {stats.map((stat, index) => (
                    <Reveal key={stat.label} delay={0.3 + index * 0.1}>
                        <div>
                            <p className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</p>
                            <p className="mt-2 text-lg text-neutral-300">{stat.label}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
