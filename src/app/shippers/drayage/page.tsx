import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, ChevronRight, Ship } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DrayageIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
        <path d="M9 9h6" />
        <path d="M8 13h8" />
        <path d="M12 9v4" />
        <path d="M12 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h18v-2a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2Z" />
        <path d="M7 15v-1a1 1 0 0 1 1-1h1" />
        <path d="M15 14h1a1 1 0 0 1 1 1v1" />
        <circle cx="7.5" cy="19.5" r=".5" fill="currentColor" />
        <circle cx="16.5" cy="19.5" r=".5" fill="currentColor" />
    </svg>
)

const includedItems = [
    {
        title: 'Reduced Demurrage',
        description: "Trafiicology Logistics' drayage services team schedules pickup on the day or day following your container's arrival at the port or rail terminal, eliminating unnecessary demurrage fees.",
    },
    {
        title: 'Carrier Management',
        description: "Trafiicology Logistics serves as your single point of contact for drayage loads at all ports and rail terminals across Canada and the USA, alleviating the burden of managing multiple providers from your team.",
    },
    {
        title: 'Upfront Fee Payment',
        description: "Trafiicology Logistics can pay port fees and per diem charges on your behalf for a streamlined experience (administrative fees may apply).",
    },
    {
        title: 'Dedicated Chassis Pools',
        description: "At your request, Trafiicology Logistics can secure a pool of private chassis for your drayage needs, ensuring you have top-quality equipment and capacity when and where you need it.",
    },
    {
        title: 'Transparent Invoicing',
        description: 'Trafiicology Logistics\' drayage services team is dedicated to "no-surprise" invoicing, ensuring you are informed of all fees upfront before receiving your itemized invoice.',
    },
    {
        title: 'Full Service Solution',
        description: 'Trafiicology Logistics provides a comprehensive range of over-the-road services, enabling our team to create customized drayage solutions from port to delivery.',
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
        description: "Trafiicology Logistics is committed to your business success, working with you to ensure you receive the best drayage solutions at fair market prices."
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
        description: "Trafiicology Logistics is dedicated to building North America's premier carrier network, ensuring that only the most meticulously vetted drayage carriers handle your cargo."
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
        description: 'Our expert drayage team serves as your guide to efficient processes, analyzing and optimizing freight movement while keeping you informed about your containers throughout the entire process.'
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
        description: 'Regardless of the time or day, your dedicated drayage services team is available to assist you with tracking updates or last-minute pickups.'
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
        description: "Trafiicology Logistics' drayage team has advanced visibility into your containers' arrival at ports, as well as their contents, enabling proactive drayage booking and container optimization strategies."
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
            </svg>
        ),
        title: 'Integrity',
        description: "We're not focused on quick, one-time transactions. Our goal is to establish lasting partnerships built on trust, reliability, transparent communication, expert advice, and a dedication to delivering high-performance results."
    },
];

const faqItems = [
    {
        question: "Do you work with all ports and rails?",
        answer: "Yes, Trafiicology Logistics is your single-source solution for drayage services to/from all ports and rail terminals in the United States and Canada. To learn more, contact us today.",
    },
    {
        question: "Do you offer all-in rates?",
        answer: "Yes, to the best of our ability, we tailor pricing to meet our customer’s needs. For reasons beyond our control, some drayage fees and accessorials cannot be included with all-in rates. Contact our drayage services team to learn more.",
    },
    {
        question: "Do you pay port fees on a customer’s behalf?",
        answer: "Yes, for an administrative fee, we can pay port fees and steamship charges upfront on your behalf. Contact our drayage solutions team to learn more.",
    },
    {
        question: "Can you provide dedicated pools of private chassis?",
        answer: "Yes, for an upfront fee, you can purchase a dedicated pool of private chassis for your exclusive use. Contact our drayage solutions team to learn more.",
    },
    {
        question: "Do you offer specialized drayage services and/or equipment?",
        answer: "Yes, Trafiicology Logistics provides specialized drayage services including overweight and hazardous shipments. For heavier containers, Trafiicology Logistics offers access to triaxle chassis, expediting pickups independent of port schedules. Contact our drayage team to learn more.",
    },
];

function FaqSection() {
    return (
        <section className="bg-white text-black py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 uppercase">
                    Frequently Asked Questions
                </h2>
                </Reveal>
                <Reveal>
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqItems.map((item) => (
                            <AccordionItem value={item.question} key={item.question} className="bg-gray-100 rounded-lg border-none">
                                <AccordionTrigger className="w-full text-left p-4 font-bold text-lg hover:no-underline [&[data-state=open]>div]:bg-primary [&[data-state=open]>div>svg]:text-black">
                                    {item.question}                                    
                                </AccordionTrigger>
                                <AccordionContent className="p-4 pt-0 text-base text-gray-700">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                </Reveal>
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

function InsAndOutsSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="max-w-md">
                <p className="text-lg text-gray-400">Helping you understand the</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                  Ins and Outs<br />
                  of <span className="text-primary">Drayage</span>
                </h2>
                <p className="mt-6 text-base text-gray-300">
                  Supply chains involving the use of ocean or rail depend on drayage services to link shippers and receivers to ocean ports and rail terminals. Check our our article to learn more about drayage.
                </p>
                <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                  <Link href="#">
                    READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <Image
                  src="/image/Truk.jpg"
                  alt="Truck with a container ship in the background"
                  data-ai-hint="truck container ship"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
          <div className="mt-20 border-t border-primary"></div>
        </div>
      </section>
    );
}

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
                                <h3 className="text-xl font-bold">{benefit.title}</h3>
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

export default function DrayagePage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/Delivery.png"
            alt="Truck with a yellow container on a highway"
            data-ai-hint="truck container"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <Reveal>
              <DrayageIcon className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-black mb-6 uppercase">
                Drayage Services by <span className="text-primary">Trafiicology Logistics</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg sm:text-xl text-gray-300 mb-6">
                Trafiicology Logistics provides reliable, efficient, and transparent drayage services from port to destination, ensuring your containers arrive safely and on time.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <WhatsIncludedSection />
      <InsAndOutsSection />
      <BenefitsSection />
      <FaqSection />
    </>
  );
}
