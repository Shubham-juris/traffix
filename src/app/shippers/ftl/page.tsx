import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const includedItems = [
  {
    title: 'Multi-Modal Partner',
    description: 'TRAFFIX is equipped to handle all your full truckload requirements and can also serve as your single-source provider of North American OTR solutions.',
  },
  {
    title: 'Flexibility',
    description: 'When demand shifts unexpectedly or last-minute changes to your supply chain are needed, TRAFFIX is ready to adapt alongside your business.',
  },
  {
    title: 'Responsiveness',
    description: 'You need a transportation provider who is there when you need them. Whether you need a tracking update or last-minute capacity, your dedicated team is committed to providing swift responses at your convenience.',
  },
  {
    title: 'No Surprises',
    description: "No one likes surprises on their invoice. That's why we prioritize transparency and provide upfront notifications when accessorial charges are incurred on your shipment.",
  },
  {
    title: 'Expert Problem Solving',
    description: 'At TRAFFIX, we specialize in solving complex problems. Our Net Promoter Score (NPS) feedback indicates this is what our customers appreciate most about working with our team.',
  },
  {
    title: 'Theft Prevention',
    description: 'Freight theft causes significant financial and operational disruptions to your business. Minimize this risk by utilizing our meticulously vetted premium carrier network.',
  },
]

function WhatsIncludedSection() {
  return (
    <section className="bg-white text-black py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16">
          WHAT'S INCLUDED
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
          {includedItems.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
                  <Check className="h-5 w-5 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function FtlPage() {
  return (
    <>
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
      <WhatsIncludedSection />
    </>
  );
}
