import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, ChevronRight, Ship } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';

const DrayageIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
        <path d="M9 9h6" />
        <path d="M8 13h8" />
        <path d="M12 9v4" />
        <path d="M12 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h18v-2a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2Z" />
        <path d="M7 15v-1a1 1 0 0 1 1-1h1" />
        <path d="M15 14h1a1 1 0 0 1 1 1v1" />
        <circle cx="7.5" cy="19.5" r=".5" fill="currentColor" />
        <circle cx="16.5" cy="19.5" r=".5" fill="currentColor" />
    </svg>
)

export default function DrayagePage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Truck with a yellow container on a highway"
            data-ai-hint="truck container"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-xl">
                <Reveal>
                    <DrayageIcon className="w-20 h-20 text-primary mb-6" />
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                        Drayage
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-6 text-xl max-w-lg text-gray-300">
                        Timely retrieval and advancement of your time-sensitive loads.
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
    </>
  );
}
