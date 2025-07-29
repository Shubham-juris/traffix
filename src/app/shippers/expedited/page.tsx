import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
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
    </>
  );
}
