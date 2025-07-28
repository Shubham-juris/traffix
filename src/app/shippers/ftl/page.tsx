import { Button } from '@/components/ui/button';
import { ArrowRight, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FtlPage() {
  return (
    <div className="relative h-screen bg-black text-white flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Truck on a highway"
          data-ai-hint="truck highway"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 items-center">
        <div className="md:col-start-2 text-left">
          <Truck className="w-20 h-20 text-primary mb-6" />
          <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
            Full Truckload <br /> (FTL)
          </h1>
          <p className="mt-6 text-xl max-w-lg text-gray-300">
            Over-the-road (OTR) services customized to meet your transportation needs.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
            <Link href="/contact">
              SHIP WITH US <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
