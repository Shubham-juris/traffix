
import { Button } from '@/components/ui/button';
import { ArrowRight, Boxes, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const includedItems = [
  {
    title: 'Cost Optimization',
    description: 'At TRAFFIX, we aim to offer competitive rates aligned with the LTL market. More importantly, we focus on delivering value by helping you save time and avoid unnecessary costs.',
  },
  {
    title: 'Control Tower Visibility',
    description: "Whether you're managing one shipping location or many, the TRAFFIX Shipping App offers a comprehensive overview of your entire LTL supply chain operation.",
  },
  {
    title: 'Customized Reporting',
    description: 'TRAFFIX provides its LTL clients with top-tier business intelligence (BI) tools, complete with customized dashboards, enabling you to access vital information at the click of a button.',
  },
  {
    title: 'Accessorial Management',
    description: 'Our dedicated LTL auditors and operations team eliminates accessorial guesswork by auditing invoices on your behalf and providing guidance on how to eliminate future accessorials.',
  },
  {
    title: 'Carrier Management',
    description: 'Sometimes choosing the cheapest LTL carrier can end up being costly. TRAFFIX LTL experts understand which carriers are best for each shipment to avoid excessive accessorials and fines.',
  },
  {
    title: 'Inbound Vendor Management',
    description: 'Controlling inbound shipping costs is challenging when vendors choose the carrier. By adding TRAFFIX to your purchase order, we ensure a preferred carrier delivers your freight, putting control back in your hands.',
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

function ChoosingCarrierSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/800x600"
              alt="Choosing the right carrier"
              data-ai-hint="warehouse loading"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-400">Lowest Price ≠ Lowest Cost</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
              Choosing The<br />
              Right Carrier
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-md">
              Opting for the cheapest provider may not always be the most cost-effective choice. TRAFFIX' LTL experts are available to assist you in selecting the optimal carrier for every shipment.
            </p>
            <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
              <Link href="#">
                READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-20 border-t border-primary"></div>
      </div>
    </section>
  )
}

function SocSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <p className="text-lg text-gray-400">Data security and privacy</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
              SOC <br />
              <span className="text-primary">Compliant</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              TRAFFIX is SOC Compliant demonstrating our commitment to high standards for data security, privacy, and operational controls, giving clients confidence that their data is handled safely and responsibly.
            </p>
            <Button asChild variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
              <Link href="#">
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x600"
              alt="AICPA SOC Logo"
              data-ai-hint="aicpa logo"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-20 border-t border-primary"></div>
      </div>
    </section>
  );
}


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
      <WhatsIncludedSection />
      <ChoosingCarrierSection />
      <SocSection />
    </>
  );
}
