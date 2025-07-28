
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
    </>
  );
}
