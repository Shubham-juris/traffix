import React from 'react';
import { ArrowRight, Truck, Boxes, Thermometer, ShoppingBasket, Cpu, Warehouse, Plane, Ship, Train, Map, Globe, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

function CarrierPaymentSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-md">
            <p className="text-lg text-gray-400 mb-2">Transparent billing with the</p>
            <h2 className="text-5xl font-black tracking-tight leading-tight">
              TRAFFIX' <br />
              CARRIER <br />
              <span className="text-primary">PAYMENT APP</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              TRAFFIX' Carrier Payment app provides access to complete billing visibility at your fingertips, 24/7-365. To learn more <Link href="/contact" className="text-primary hover:underline">contact</Link> our app support team today.
            </p>
          </div>
          <div className="relative">
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary rounded-b-lg"></div>
             <Image 
                src="https://placehold.co/800x600"
                alt="Traffix Carrier Payment App on a laptop"
                data-ai-hint="laptop dashboard"
                width={800}
                height={600}
                className="relative rounded-lg shadow-2xl"
             />
          </div>
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
          <h2 className="text-5xl font-black tracking-tight">MODES</h2>
          <p className="text-lg text-gray-600">
            Moving 330,000+ shipments across North America annually; haul your next load with TRAFFIX today.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {modes.map((mode) => (
            <div 
              key={mode.name} 
              className="border border-gray-200 rounded-lg p-6 flex items-center gap-4 hover:bg-primary hover:text-black group transition-all duration-300 cursor-pointer"
            >
              <mode.icon className="w-8 h-8 text-primary group-hover:text-black" />
              <span className="font-semibold">{mode.name}</span>
            </div>
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-8">
              WHY HAUL<br/>
              <span className="text-yellow-400">FOR TRAFFIX</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
              Join our elite network of carriers. Let's be partners in business.
            </p>

            {/* CTA Button */}
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-base hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 group">
              HAUL WITH US 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 mb-2">
                449K+
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">
                Loads per Year
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 mb-2">
                46+
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">
                Years in Business
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 mb-2">
                SPANNING
              </div>
              <div className="text-lg md:text-xl text-gray-300 font-medium">
                North America
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModesSection />
      <CarrierPaymentSection />
    </>
  );
}
