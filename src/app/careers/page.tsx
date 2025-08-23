import React from 'react';
import { ArrowRight, Truck, Boxes, Thermometer, ShoppingBasket, Cpu, Warehouse, Plane, Ship, Train, Map, Globe, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';

const modes = [
  { name: 'Full Truckload (FTL)', icon: Truck },
  { name: 'Less-than-Truckload (LTL)', icon: Boxes },
  { name: 'Flatbed', icon: Truck },
  { name: 'Temperature Controlled', icon: Thermometer },
  { name: 'Produce', icon: ShoppingBasket },
  { name: 'Managed Transportation', icon: Cpu },
  { name: 'Warehousing', icon: Warehouse },
  { name: 'Expedited', icon: Plane },
  { name: 'Drayage', icon: Ship },
  { name: 'Intermodal', icon: Train },
  { name: 'Canada-US Cross-Border', icon: Map },
  { name: 'Mexico Cross-Border', icon: Globe },
];

const whyHaulReasons = [
  {
    title: 'Partners in Business',
    description: 'Trafiicology Logistics can seamlessly integrate with your business. Leverage our sales team to maximize the use of your available capacity on your preferred lanes.',
  },
  {
    title: 'Expert Team',
    description: "When challenges arise on the road, it's reassuring to have an expert team on your side. At Trafiicology Logistics, we employ industry professionals with a minimum of 5 years of experience.",
  },
  {
    title: 'Available 24/7-365',
    description: 'Our expert team is available around the clock to answer your call when you are on the road.',
  },
  {
    title: 'Tracking Technology',
    description: 'Avoid excessive tracking calls by leveraging a comprehensive set of tech-tracking tools, so you can focus on the road and we can focus on the client.',
  },
  {
    title: 'Delivering Integrity',
    description: 'At Trafiicology Logistics, we view our carriers as business partners. Our goal is to establish long-term relationships founded on trust, communication, fair business practices, and mutual respect.',
  },
  {
    title: 'Preferred Lane Volume',
    description: "Trafiicology Logistics' preferred lane program guarantees high volumes in specific areas. Benefit from our steady inbound and outbound traffic to keep your trucks moving continuously.",
  },
]

function WhyHaulSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16">
         Why Choose Trafiicology Logistics?
        </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {whyHaulReasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.1}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
                  <Check className="h-5 w-5 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{reason.title}</h3>
                <p className="mt-2 text-gray-400 text-base">{reason.description}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinancialResilienceSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
          <div>
            <Image 
              src="/image/FINANCIALRESILIENCE.jpg" 
              alt="Financial Resilience"
              data-ai-hint="financial growth"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
          </Reveal>
          <Reveal>
          <div className="max-w-lg">
            <p className="text-lg text-gray-400">Leveraging factors and brokers to gain</p>
            <h2 className="text-5xl font-black tracking-tight mt-2">
              FINANCIAL <br/>
              <span className="text-primary">RESILIENCE</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Learn how working with non-recourse factors and reliable brokers can help you create a financially resilient business.
            </p>
            {/* <Button asChild variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold">
              <Link href="#">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
          </div>
          </Reveal>
        </div>
        <div className="mt-20 border-t border-primary"></div>
      </div>
    </section>
  )
}

function CarrierPaymentSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
          <div className="max-w-md">
            <p className="text-lg text-gray-400 mb-2">Transparent billing with the</p>
            <h2 className="text-5xl font-black tracking-tight leading-tight">
              Trafiicology Logistics' <br />
              CARRIER <br />
              <span className="text-primary">PAYMENT APP</span>
            </h2>
            <p className="mt-6 text-xl text-gray-300">
              Trafiicology Logistics' Carrier Payment app provides access to complete billing visibility at your fingertips, 24/7-365. To learn more <Link href="/contact" className="text-primary hover:underline">contact</Link> our app support team today.
            </p>
          </div>
          </Reveal>
          <Reveal>
          <div className="relative">
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary rounded-b-lg"></div>
             <Image 
                src="/image/pay.jpg"
                alt="Trafiicology Logistics Carrier Payment App on a laptop"
                data-ai-hint="laptop dashboard"
                width={800}
                height={600}
                className="relative rounded-lg shadow-2xl"
             />
          </div>
          </Reveal>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <hr className="border-primary" />
      </div>
    </section>
  )
}

function ModesSection() {
  return (
    <section className="py-20 sm:py-24 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <Reveal>
          <h2 className="text-5xl font-black tracking-tight">MODES</h2>
          </Reveal>
          <Reveal>
          <p className="text-lg text-gray-600">
            Moving 330,000+ shipments across North America annually; haul your next load with Trafiicology Logistics today.
          </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {modes.map((mode, index) => (
            <Reveal key={mode.name} delay={index * 0.05}>
            <div 
              className="border border-gray-200 rounded-lg p-6 flex items-center gap-4 hover:bg-primary hover:text-black group transition-all duration-300 cursor-pointer"
            >
              <mode.icon className="w-8 h-8 text-primary group-hover:text-black" />
              <span className="font-semibold">{mode.name}</span>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function TraffixHeroSection() {
  return (
    <>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Truck driver in cab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <Reveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8">
               WHY CHOOSE  <br/>
              <span className="text-yellow-400">TRAFIICOLOGY LOGISTICS</span>
            </h1>
            </Reveal>

            {/* Subheading */}
            <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
              Join our elite network of carriers. Let's be partners in business.
            </p>
            </Reveal>

            {/* CTA Button */}
            {/* <Reveal delay={0.2}>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-base hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 group">
              HAUL WITH US 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            </Reveal> */}
          </div>

          {/* Stats Section */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto w-full">
            <Reveal>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 mb-2">
                437K+
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">
                Loads per Year
              </div>
            </div>
            </Reveal>
            <Reveal delay={0.1}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 mb-2">
                26+
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">
                Years in Business
              </div>
            </div>
            </Reveal>
            <Reveal delay={0.2}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 mb-2">
                SPANNING
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">
                North America
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </div>
      <ModesSection />
      <CarrierPaymentSection />
      <FinancialResilienceSection />
      <WhyHaulSection />
    </>
  );
}
