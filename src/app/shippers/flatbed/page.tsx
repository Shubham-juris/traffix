import { Button } from '@/components/ui/button';
import { ArrowRight, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';

const FlatbedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h17.6a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 19.6 6H15V4h-2v2H4a2 2 0 0 0-2 2v4Z"></path><path d="M22 12v4H15.3a2.7 2.7 0 0 1-2.6-2H2v4h10v2h-4v2h4a2 2 0 0 0 2-2v-2h6v2h-4v2h4a2 2 0 0 0 2-2v-4Z"></path><circle cx="6.5" cy="18.5" r="2.5"></circle><circle cx="17.5" cy="18.5" r="2.5"></circle>
        <path d="M15 10h4.5"></path>
    </svg>
)

export default function FlatbedPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Flatbed truck"
            data-ai-hint="flatbed truck"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <FlatbedIcon className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Flatbed <br /> Shipping
            </h1>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Flatbed freight shipped with precision, expertise, and the right capacity.
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
