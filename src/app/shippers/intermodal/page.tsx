import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, Train } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';

export default function IntermodalPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Freight train"
            data-ai-hint="freight train"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <Reveal>
            <Train className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Intermodal
            </h1>
            </Reveal>
            <Reveal delay={0.2}>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Cost-effective and sustainable intermodal solutions.
            </p>
            </Reveal>
            <Reveal delay={0.3}>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
              <Link href="/contact">
                GET A QUOTE <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            </Reveal>
        </div>
      </div>
    </>
  );
}
