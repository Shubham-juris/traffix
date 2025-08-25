import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, ChevronRight, Train } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const IntermodalIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4.5h8" />
        <path d="M8 4.5V3h8v1.5" />
        <path d="M16.5 19.5h-9" />
        <path d="M16.5 19.5v1.5h-9v-1.5" />
        <path d="M4 11.5v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M20 12.5v4a2 2 0 0 1-2-2H6a2 2 0 0 1-2-2v-4" />
        <path d="M20 11.5H4" />
        <path d="M10 14h4" />
        <path d="M14 9.5a1.5 1.5 0 0 0-1.5-1.5h-1A1.5 1.5 0 0 0 10 9.5" />
        <path d="M12 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M14 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
)

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
        description: 'Experience dedicated care for your business with our team. Unlike many IMCs, we prioritize personal relationships over numbers, fostering lasting partnerships with a human touch.'
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
        description: 'Whether selecting the ideal Class 1 railroad for your supply chain or choosing the best drayage carrier, Trafficology Logistics ensures you have the right capacity to meet your needs.'
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
        description: 'Trust Trafficology Logistics\' intermodal team, each with 5+ years of experience, to guide your intermodal shipping needs and deliver high-performance results.'
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
        description: 'Regardless of the time or day, your dedicated team is available to assist you with tracking updates or last-minute pickups.'
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
        description: 'Intermodal ensures superior shipment visibility, with real time location tracking throughout its journey.'
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

const includedItems = [
    {
        title: 'Dedicated Team',
        description: "Unlike many other intermodal marketing companies (IMCs), Trafficology Logistics' intermodal service is delivered by dedicated account managers, ensuring you feel valued and supported regardless of your volume.",
    },
    {
        title: 'Comprehensive Service Offering',
        description: 'Trafficology Logistics offers a true IMC operating model with full control of drayage and railroad movements to ensure superior service and cost control.',
    },
    {
        title: 'Customized Solutions',
        description: "We don't believe in a one-size-fits-all approach. Our dedicated team is committed to crafting flexible, customized supply chain solutions tailored specifically to your individual needs.",
    },
    {
        title: 'Leverage our Relationships',
        description: 'Trafficology Logistics maintains direct relationships with all Class 1 railroads, enabling us to collaborate closely with them to establish tailored requirements on your behalf.',
    },
    {
        title: 'Predictable Pricing',
        description: 'Lock in long-term rates offering more price stability than other modes of transportation.',
    },
    {
        title: 'Sustainability',
        description: 'Reduce your carbon footprint by up to 75% by switching from truckload to intermodal on qualifying lanes.',
    },
];

const faqItems = [
    {
        question: "Can I track my shipment if I choose intermodal?",
        answer: "Certainly! Your dedicated team has real-time access to monitor your intermodal container’s journey. While you can contact us anytime for updates, we’ll collaborate to establish tailored tracking reports at agreed upon intervals, saving you time. Reach out today for details on our customized intermodal solutions!",
    },
    {
        question: "How much can I expect to save by switching from OTR to intermodal?",
        answer: "With the right market conditions, intermodal can save shippers between 20%-50% on average when compared to OTR.",
    },
    {
        question: "How do transit times compare to OTR?",
        answer: "On lanes ranging from 800 to 1,500 miles, shipping intermodal will add 1 – 2 days of transit time. For lanes over 1,500 miles, intermodal will take 2-3 days longer in transit. Contact our team today to learn about transit times on your shipping lanes.",
    },
    {
        question: "What type of intermodal service does Trafficology Logistics offer?",
        answer: "Trafficology Logistics’ intermodal team will build customized, full-service solutions based on your needs. Whether you are shipping from port-to-port, door-to-door, or anything in between, Trafficology Logistics’ comprehensive service offering has you covered from pickup to delivery. Contact us today to learn more.",
    },
    {
        question: "Where does the Trafficology Logistics intermodal network extend?",
        answer: "Trafficology Logistics works with all Class 1 railroads across Canada, the USA, and Mexico. Contact our team today to learn more!",
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

function StartShippingSection() {
    return (
        <section className="bg-black text-white py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Reveal>
                        <div className="max-w-md">
                            <p className="text-lg text-gray-400">Everything you need to know to</p>
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                                Start Shipping<br />
                                <span className="text-primary">Intermodal</span>
                            </h2>
                            <p className="mt-6 text-base text-gray-300">
                                Intermodal combines multiple transport modes including truck, rail, ocean, or air for efficient, cost-effective door-to-door shipping over long distances.
                            </p>
                            {/* <Button asChild variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                                <Link href="#">
                                    READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button> */}
                        </div>
                    </Reveal>
                    <Reveal>
                        <div>
                            <Image
                                src="/image/Schneider.jpg"
                                alt="Shipping containers stacked at a terminal"
                                data-ai-hint="shipping containers"
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

function SwitchToIntermodalSection() {
    return (
        <section className="bg-black text-white py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <Reveal>
                        <div>
                            <Image
                                src="/image/Intermodal-Rail.jpg"
                                alt="Yellow freight train on tracks"
                                data-ai-hint="freight train"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-2xl filter grayscale"
                            />
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="max-w-md">
                            <p className="text-lg text-gray-400">When should you</p>
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                                Switch to<br />
                                <span className="text-primary">Intermodal?</span>
                            </h2>
                            <p className="mt-6 text-base text-gray-300">
                                Transportation procurement faces challenges with fluctuating over-the-road (OTR) rates due to supply and demand. Intermodal offers a more sustainable solution, optimized capacity, and reduced freight spend amid these challenges.
                            </p>
                            {/* <Button asChild variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                                <Link href="#">
                                    READ MORE <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button> */}
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


export default function IntermodalPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/intermodal.jpg"
            alt="Yellow freight train on tracks"
            data-ai-hint="freight train"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <Reveal>
              <IntermodalIcon className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                Intermodal
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-xl max-w-lg text-gray-300">
                Beyond just another IMC. Service with a personal touch.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group"
              >
                <Link href="/contact">
                  SHIP WITH US{" "}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>

      <WhatsIncludedSection />
      <StartShippingSection />
      <SwitchToIntermodalSection />
      <BenefitsSection />
      <FaqSection />
    </>
  );
}
