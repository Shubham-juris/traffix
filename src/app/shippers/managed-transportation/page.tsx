import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';
import { Reveal } from '@/components/animations/reveal';

const ManagedTransportationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9V7a2 2 0 0 1 2-2h11" />
        <path d="M10 16h1" />
        <path d="M13 16h1" />
        <path d="M16 16h1" />
        <path d="m18 10-2 2 2 2" />
        <path d="m6 10-2 2 2 2" />
        <path d="M12 10v10" />
        <path d="M12 5v1" />
        <path d="M6 5v10" />
        <path d="M18 5v10" />
        <path d="M21 9a2 2 0 0 0-2-2h-2" />
        <path d="M3 9a2 2 0 0 1 2-2h2" />
    </svg>
)

const includedItems = [
    {
        title: 'Cloud-Based TMS',
        description: 'Gain access to our industry-leading cloud-based transportation management system (TMS), built to optimize your network and deliver cost savings and operational efficiencies.',
    },
    {
        title: 'Analytics & Reporting',
        description: 'Advanced analytics and reporting capabilities provide insights into your supply chain operations, enhancing data-driven decision making.',
    },
    {
        title: 'Network Planning',
        description: 'Trafficology Logistics customizes solutions tailored to optimize order management, load planning, transportation costs, efficiency, and transit times.',
    },
    {
        title: 'Flexible Control',
        description: "We don't believe in one-size-fits-all solutions. We tailor our services to meet the needs of your business.",
    },
    {
        title: 'Intimate Scalability',
        description: 'Trafficology Logistics engineers and implements customized systems and processes designed to help your business scale, while our expert team maintains a strong focus on individualized and detailed aspects.',
    },
    {
        title: 'The Right Resources',
        description: 'Trafficology Logistics aims to reduce financial and operational costs by leveraging the three pillars of MTS: technology, our team of experts, and the right capacity.',
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
        description: "Trafficology Logistics MTS is an extension of your business, bringing over 45+ years of North American transportation expertise to optimize your supply chain operations."
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
        description: 'While some outsourced LOGISTICS providers prioritize maximum capacity, Trafficology Logistics curates the right capacity solutions with our meticulously vetted premium carrier network.'
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
        description: 'Each member of our team brings a minimum of 5 years of experience, ensuring a proactive approach to transportation management.'
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
        description: 'Whether you need a tracking update, or an after-hours load covered, our dedicated team is available to assist regardless of the day or time.'
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
        description: 'Success in your supply chain relies on timely pickups, deliveries, and real-time visibility. Trafficology Logistics offers tech tracking and tailored updates to meet your needs.'
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
            </svg>
        ),
        title: 'Integrity',
        description: "We aim to establish lasting partnerships built on trust, reliability, communication, expert advice, cost and operational optimization, and the delivery of high-performance results."
    },
]

const faqItems = [
    {
        question: "What are the benefits of a managed transportation solution?",
        answer: "Partnering with a reputable outsourced LOGISTICS provider offers numerous benefits, including cost savings, improved network efficiency, enhanced visibility and analytics, flexibility and scalability, risk mitigation, expert insights, and up-to-date cloud-based technology. If you are interested in getting these benefits for your business, contact us today to book a consultation.",
    },
    {
        question: "What managed transportation services do you offer?",
        answer: "Trafficology Logistics MTS encompasses transportation planning and optimization, carrier procurement and management, shipment execution and tracking, performance analytics and reporting, and freight auditing and payment. For more information on our comprehensive services, contact us today!",
    },
    {
        question: "What operating model best fits my business?",
        answer: (
            <div>
                <p>While we don’t believe in one-size-fits-all solutions, here are some general guidelines for determining which operating model is best for your business:</p>
                <h4 className="font-bold mt-4 mb-2">Full Outsource (4PL)</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>This is a centralized solution that includes technology, an expertly trained dedicated team, and Trafficology Logistics’ premium capacity.</li>
                    <li>Trafficology Logistics industry-leading transportation management system (TMS) will be used for all in-scope modes.</li>
                    <li>Trafficology Logistics will execute and manage all in-scope modes of transportation for you through contracted capacity with carriers from our premium network.</li>
                </ul>
                <h4 className="font-bold mt-4 mb-2">Managed TMS (4PL)</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>This is a centralized solution that includes technology, an expertly trained dedicated team, and a combination of your capacity and Trafficology Logistics’ premium capacity.</li>
                    <li>This is an end-to-end supply chain management solution.</li>
                    <li>Trafficology Logistics will manage all in-scope moves on your behalf through contracted carriers.</li>
                </ul>
                <h4 className="font-bold mt-4 mb-2">SaaS Solution</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>This is a technology only solution that gives you access to Trafficology Logistics’ cloud-based TMS where you can manage all in-scope modes.</li>
                    <li>Your team is in the driver’s seat, executing and managing shipments within the TMS.</li>
                    <li>Network capacity is contracted and managed by your team; however, you may also access carriers from Trafficology Logistics’ premium network.</li>
                </ul>
                <p className="mt-4">We encourage you to book a no-obligation consultation to determine which operating model will produce the best results for your business. Book your consultation today!</p>
            </div>
        )
    },
    {
        question: "Do managed transportation solutions really deliver cost savings?",
        answer: "Yes, on average, Trafficology Logistics has saved its managed transportation clients 18% – 25% overall in the first year of partnership. Book your no-obligation consultation today to learn more about how Trafficology Logistics’ managed transportation solutions can generate savings for your business!",
    },
    {
        question: "What does the implementation process look like if I am interested?",
        answer: "You can download our implementation checklist here. For more information, book a no-obligation consultation today!",
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
                  <ArrowRight className="h-5 w-5 text-black" />
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
                <div className="mt-20 border-t border-primary"></div>
            </div>
        </section>
    )
}

function TransformingLOGISTICSSection() {
    return (
        <section className="bg-black text-white py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Reveal>
                    <div>
                        <p className="text-lg text-gray-400">Transforming LOGISTICS with</p>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                            Managed<br />
                            <span className="text-primary">Transportation</span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-300 max-w-md">
                           We align our mission with your business needs and partnership goals to deliver value and solutions that maximize efficiency, reduce risk, and save costs, driving high-performance results.
                        </p>
                        {/* <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                            <Link href="#">
                                READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button> */}
                    </div>
                    </Reveal>
                    <Reveal>
                    <div>
                        <Image
                            src="/image/Management.jpg"
                            alt="LOGISTICS worker with a futuristic data interface"
                            data-ai-hint="LOGISTICS worker dashboard"
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

export default function ManagedTransportationPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/photo.webp"
            alt="LOGISTICS network background"
            data-ai-hint="LOGISTICS technology"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <Reveal>
              <ManagedTransportationIcon className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
                Managed <br /> Transportation <br /> Solutions (MTS)
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-xl max-w-lg text-gray-300">
                Enabling value-added network strategies to maximize efficiency, reduce risk, and save costs.
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
      <TransformingLOGISTICSSection />
      <BenefitsSection />
      <FaqSection />
    </>
  );
}