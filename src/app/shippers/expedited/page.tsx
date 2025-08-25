import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';

const ExpeditedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5z"></path>
        <path d="M9 17V7"></path>
        <path d="M15.95 10.45l-2.3 2.3"></path>
        <path d="M13.65 10.45l2.3 2.3"></path>
        <path d="M5.5 10H4"></path>
        <path d="M5.5 14H4"></path>
        <circle cx="17.5" cy="17.5" r="2.5"></circle>
        <circle cx="7.5" cy="17.5" r="2.5"></circle>
    </svg>
)

const includedItems = [
    {
        title: 'Quick Turnarounds',
        description: "Trust Trafficology Logistics' expedited team to have drivers onsite within an hour of receiving your load details. When equipment requirements change at the last minute, we can pivot quickly to maintain critical timelines.",
    },
    {
        title: 'Airport Pickups',
        description: "When your shipment lands, Trafficology Logistics' expedited team ensures a driver is onsite to meet your freight as it is offloaded, minimizing any delay between landing and delivery.",
    },
    {
        title: 'Specialized Delivery Services',
        description: "When your urgent shipment requires specialized handling, Trafficology Logistics' expedited team has you covered. Whether it's white glove or inside delivery, we ensure your freight receives the meticulous care it needs.",
    },
    {
        title: 'Accuracy',
        description: 'Detail is crucial in expedited shipping, particularly during airport pickups. Our rigorously vetted drivers carefully cross-check labels with paperwork to guarantee accurate loading for delivery.',
    },
    {
        title: 'Documentation',
        description: 'Regardless of its monetary worth, we treat all expedited freight as high-value. Our drivers are trained photograph your freight before loading to ensure it arrives in the same condition it was picked up.',
    },
    {
        title: 'Expedited POD',
        description: 'We notify you immediately upon delivery and send your proof of delivery (POD) within 30 minutes of the receiver taking possession of your urgent shipments.',
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
        description: "Trafficology Logistics' team of expedited experts is committed to your business success, leveraging years of experience to ensure your urgent shipments arrive complete and on schedule."
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
        description: "Trafficology Logistics is committed to assembling North America's premier group of carriers. Trust that your expedited shipment is handled by our rigorously vetted service providers."
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
        description: 'Each member of our expedited team brings a minimum of 5 years of experience, ensuring your most urgent shipments are handled with precise attention to detail.'
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
        description: 'Whether you need a tracking update or have a last-minute shipment that needs to be expedited, our dedicated team is available to assist regardless of the day or time.'
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
        description: 'Get complete visibility into your urgent loads with customized tracking updates at your specified intervals, ensuring you know where your freight is from pickup to delivery.'
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
            </svg>
        ),
        title: 'Integrity',
        description: "We don't focus on one-time transactions. Instead, our goal is to establish lasting partnerships built on trust, reliability, communication, and delivering high-performance results."
    },
]

const faqItems = [
    {
        question: "In what countries can you provide expedited service?",
        answer: "Trafficology Logistics offers expedited services within and between the United States and Canada. To learn more or to book your expedited shipment, contact us today.",
    },
    {
        question: "Can I follow my freight in transit?",
        answer: "Yes, we often have clients who choose to meet our drivers at pickup and follow behind the freight in transit. Some clients prefer to add air tags to their freight so they can track it en route. To book your expedited shipment or learn more, please contact us.",
    },
    {
        question: "What airports do you service?",
        answer: "Trafficology Logistics offers airport pickup service at all airports in the USA and select airports in Canada. Contact our team to learn more.",
    },
    {
        question: "What weight and dimensions can you haul with expedited?",
        answer: "Trafficology Logistics offers expedited services for shipments up to 12 pallets (or 24 double stacked) and up to 10,000lbs. To book your expedited shipment, contact us today.",
    },
    {
        question: "What is the max cargo value I can ship with expedited?",
        answer: "We offer standard cargo insurance for freight valued up to $250,000; however, if you have expedited shipments that exceed $250,000, you will need to authorize Trafficology Logistics to purchase additional insurance on your behalf. Additional insurance policies are obtained at the shipper’s expense. Contact us to learn more.",
    },
    {
        question: "Can you move furniture and do residential deliveries?",
        answer: "Yes, we handle furniture shipments and provide residential delivery. However, we do not offer inside delivery to residences. Contact us to learn more.",
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

function SuccessWithExpeditedSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="text-lg text-gray-400">Accelerating supply chains</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Success With<br />
                <span className="text-primary">Expedited</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Prevent stock-outs and line-down scenarios by integrating a dependable expedited transportation provider into your supply chain strategy. Explore more in our Expedited 101 article.
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
                src="/image/truck.jpg"
                alt="White van moving fast"
                data-ai-hint="delivery van"
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

function JitInventorySection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative p-2 border border-gray-800 rounded-lg">
              <Image
                src="/image/ExpeditedShipping.png"
                alt="Workers loading a van at a warehouse dock"
                data-ai-hint="warehouse loading"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="max-w-lg">
              <p className="text-lg text-gray-400">Avoid critical delays</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Just-In-Time (JIT)<br />
                Inventory<br />
                <span className="text-primary">Management</span>
              </h2>
              <p className="mt-6 text-base text-gray-300">
                While JIT offers benefits, it also has risks such as supply chain disruptions, slow response to demand changes, and unexpected delays. Expedited services mitigate these challenges, keeping your supply chain moving efficiently.
              </p>
              {/* <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                <Link href="#">
                  READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button> */}
            </div>
          </Reveal>
        </div>
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

export default function ExpeditedPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/truck.jpg"
            alt="Delivery van in motion"
            data-ai-hint="delivery van"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <Reveal>
              <ExpeditedIcon className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                Expedited
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-xl max-w-lg text-gray-300">
                Urgent shipments delivered with efficiency, expertise, and 24/7 visibility.
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
      <SuccessWithExpeditedSection />
      <JitInventorySection />
      <BenefitsSection />
      <FaqSection />
    </>
  );
}
