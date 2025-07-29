import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Train } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';

const IntermodalIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4.5h8" />
        <path d="M8 4.5V3h8v1.5" />
        <path d="M16.5 19.5h-9" />
        <path d="M16.5 19.5v1.5h-9v-1.5" />
        <path d="M4 11.5v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M20 12.5v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
        <path d="M20 11.5H4" />
        <path d="M10 14h4" />
        <path d="M14 9.5a1.5 1.5 0 0 0-1.5-1.5h-1A1.5 1.5 0 0 0 10 9.5" />
        <path d="M12 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M14 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
)

export default function IntermodalPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Yellow freight train on tracks"
            data-ai-hint="freight train"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-lg">
                <Reveal>
                    <IntermodalIcon className="w-20 h-20 text-primary mb-8" />
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                    Intermodal
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-6 text-xl text-gray-300">
                        Beyond just another IMC. Service with a personal touch.
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
