import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, Warehouse } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';

const includedItems = [
    {
        title: 'Integrated Logistics Solutions',
        description: 'TRAFFIX is your single-source solution provider for bonded and non-bonded warehousing, providing comprehensive services such as short-term and long-term storage, drayage, over-the-road (OTR) transportation, and container destuffing/rework.',
    },
    {
        title: 'Reduced Minimum Requirements',
        description: "Leverage TRAFFIX' existing relationships and volume to access smaller amounts of warehousing space, eliminating the need to meet higher minimum space requirements.",
    },
    {
        title: 'Damage & Theft Prevention',
        description: 'We match clients with specialized warehousing partners to ensure proper handling, reducing damages and claims. Our theft prevention includes tracking devices, secure yards, cameras, guard shacks, background checks, driver verification, and photographing equipment.',
    },
    {
        title: 'Flexible Leasing Options',
        description: 'Achieve supply chain flexibility with our short-term leasing options, including month-to-month and six-month terms.',
    },
    {
        title: 'Market Expansion Support',
        description: 'As your business expands, TRAFFIX will find the right warehouse capacity to meet your needs. Rest assured that all new warehouses must undergo a thorough vetting process to ensure they meet our high quality standards.',
    },
    {
        title: 'Technology',
        description: "Utilize TRAFFIX' cloud-based warehouse management system (WMS) or integrate with your current system.",
    },
];

const benefits = [
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <path d="M18 18h6v-3a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v3h6z"></path>
                <path d="M21 12V9a3 3 0 0 0-3-3h-1"></path>
            </svg>
        ),
        title: 'Collaborative Partnership',
        description: "TRAFFIX' team of experts are committed to the business success of our clients. They apply their years of experience to solving complex challenges and delivering results."
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 17.6V5.4A2.4 2.4 0 0 0 11.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h6.2a2.4 2.4 0 0 0 2.4-2.4Z"></path>
                <path d="M14 17.6a2.4 2.4 0 0 1 2.4-2.4h2.2a2.4 2.4 0 0 1 2.4 2.4v3.2a2.4 2.4 0 0 1-2.4 2.4H8"></path>
                <circle cx="7.5" cy="16.5" r="1.5"></circle>
                <circle cx="16.5" cy="16.5" r="1.5"></circle>
            </svg>
        ),
        title: 'The Right Capacity',
        description: 'TRAFFIX ensures peace of mind by prioritizing the right capacity over the most capacity, partnering with meticulously vetted carriers and warehouses for secure freight handling.'
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z"></path>
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3-3-4"></path>
                <path d="M12 22a7 7 0 0 1-7-7c0-2 1-3 3-4"></path>
            </svg>
        ),
        title: 'Expertise',
        description: 'Each member of our warehousing team brings a minimum of 5 years of experience, ensuring we engineer optimal solutions for your warehousing and transportation needs.'
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V5a2 2 0 0 0-4 0v3"></path>
                <path d="M12 18a6 6 0 1 0-12 0Z"></path>
                <path d="M12 18h7a4 4 0 0 0 4-4V7a2 2 0 0 0-2-2h-1"></path>
            </svg>
        ),
        title: '24/7-365 Support',
        description: 'Whether you need a tracking update or an after-hours load covered, our dedicated team is available to assist regardless of the day or time.'
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                <path d="M11 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            </svg>
        ),
        title: 'Visibility',
        description: 'Success in your supply chain relies on timely pickups, deliveries, and real-time visibility. TRAFFIX offers tech tracking and tailored updates to meet your needs.'
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
            </svg>
        ),
        title: 'Integrity',
        description: "We're not focused on one-time transactions. We aim to establish lasting partnerships built on trust, reliability, communication, expert advice, and dedication to delivering high-performance results."
    },
]

function BenefitsSection() {
    return (
        <section className="bg-black text-white py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <Reveal key={benefit.title} delay={index * 0.1}>
                        <div>
                            <div className="flex items-center gap-4">
                                <benefit.icon className="w-12 h-12 text-primary flex-shrink-0" />
                                <h3 className="text-xl font-bold text-primary">{benefit.title}</h3>
                            </div>
                            <p className="mt-4 text-gray-400">{benefit.description}</p>
                        </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

function OutsourcedWarehousingSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <p className="text-lg text-gray-400">Enhancing efficiency & growth</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                  Outsourced<br />
                  Warehousing &<br />
                  <span className="text-primary">Distribution</span>
                </h2>
                <p className="mt-6 text-base text-gray-300 max-w-md">
                  3PLs enhance inventory management, streamline order fulfillment, expedite shipments, navigate customs, and boost customer satisfaction through comprehensive solutions.
                </p>
                <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                  <Link href="#">
                    READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative p-2 border border-gray-800 rounded-lg">
                <Image
                  src="https://placehold.co/800x600"
                  alt="Outsourced Warehousing"
                  data-ai-hint="warehouse logistics"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </Reveal>
          </div>
           <div className="mt-20 border-t border-primary"></div>
        </div>
      </section>
    );
}

function WmsSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative p-2 border border-gray-800 rounded-lg">
                <Image
                  src="https://placehold.co/800x600"
                  alt="Warehouse Management System"
                  data-ai-hint="warehouse worker"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <p className="text-lg text-gray-400">Core Capabilities of TRAFFIX'</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                  Warehouse<br />
                  Managment<br />
                  <span className="text-primary">System (WMS)</span>
                </h2>
                <p className="mt-6 text-base text-gray-300 max-w-md">
                  TRAFFIX offers a modern, cloud-based WMS designed to enhance efficiency, visibility, and workflow automation. With features like real-time inventory management, business intelligence, shipment tracking, and cost controls, our intuitive system simplifies operations and boosts performance. Customizable roles, a user-friendly interface, and mobile compatibility ensure flexibility and ease of use. Contact us today to learn more!
                </p>
                <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                  <Link href="#">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    );
}

function WhatsIncludedSection() {
  return (
    <section className="bg-white text-black py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 uppercase">
          What's Included
        </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
          {includedItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
            <div className="flex gap-4">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WarehousingPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Warehouse interior"
            data-ai-hint="warehouse interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <Reveal>
            <Warehouse className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Warehousing
            </h1>
            </Reveal>
            <Reveal delay={0.2}>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Flexible and scalable warehousing solutions.
            </p>
            </Reveal>
            <Reveal delay={0.3}>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
              <Link href="/contact">
                GET A QUOTE <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            </Reveal>
        </div>
      </div>
      <WhatsIncludedSection />
      <WmsSection />
      <OutsourcedWarehousingSection />
      <BenefitsSection />
    </>
  );
}
