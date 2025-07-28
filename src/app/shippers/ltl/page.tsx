import { Button } from '@/components/ui/button';
import { ArrowRight, Boxes } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LtlPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Pallet of yellow boxes"
            data-ai-hint="warehouse pallets"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <Boxes className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Less-Than-Truckload <br /> (LTL)
            </h1>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Your strategic partner in LTL transportation.
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
