import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
];

const faqItems = [
    {
        question: "Are your warehouses bonded?",
        answer: "Yes! TRAFFIX offers both bonded and non-bonded warehousing options to meet your individual needs. Contact us today to learn more!",
    },
    {
        question: "What kind of warehouse leasing options do you offer?",
        answer: "TRAFFIX provides flexible warehouse leasing options tailored to your specific requirements. Whether you need short-term cross-docking, temporary storage for a week to a couple of months, or dedicated space for three months or longer, we can meet your needs. Contact our warehousing team today to discuss leasing options!",
    },
    {
        question: "Where are your warehouses located?",
        answer: "TRAFFIX offers warehousing space strategically located across the USA and Canada. Additionally, we can source, vet, and manage warehouses in your specific service area as required. Contact us today for our current space availability or to discuss your unique warehousing requirements.",
    },
    {
        question: "What industries do you serve?",
        answer: "We currently serve clients across industries including solar, furniture, automotive, agricultural equipment, and others. Our services also include temperature-controlled storage for items like produce and pharmaceuticals. TRAFFIX ensures each client is paired with the right warehousing partners for their unique needs. If our current partners don’t meet your requirements, we will source, vet, and manage new facilities that meet our high standards on your behalf. Contact us today for more information!",
    },
    {
        question: "What are your space minimums?",
        answer: "We conduct a unique analysis of each client’s business needs. By leveraging our existing volume with our warehousing partners, we work to negotiate favorable minimums on your behalf. Contact us today to learn more!",
    },
    {
        question: "What security measures are in place at your warehouses?",
        answer: "Our partner warehouses feature theft prevention measures like secure, well-lit yards with barbed wire and/or electric fencing, cameras, and guard shacks. All staff undergo thorough background checks for reliable freight handling. We also employ SOPs, including driver verification and photographing all identifiers on the equipment picking up, to ensure only trusted carriers handle your freight. Contact us today for further details!",
    },
    {
        question: "Does TRAFFIX offer a WMS?",
        answer: (
            <div className="space-y-4">
                <p>TRAFFIX offers a user-friendly Warehouse Management System (WMS) designed to enhance efficiency, visibility, and workflow automation. Our WMS empowers businesses to streamline operations and deliver exceptional customer service.</p>
                <h4 className="font-bold">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Inventory Management</strong> – Real-time tracking for accuracy and control</li>
                    <li><strong>Business Intelligence & Reporting</strong> – Actionable insights for smarter decisions</li>
                    <li><strong>Shipment Management</strong> – Seamless coordination for on-time deliveries</li>
                    <li><strong>Cost Controls</strong> – Reduce expenses and improve profitability</li>
                </ul>
                <h4 className="font-bold">Designed for Ease & Flexibility:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Intuitive Interface</strong> – Simple, modern, and easy to navigate</li>
                    <li><strong>Customizable Roles</strong> – Tailored access levels for your team</li>
                    <li><strong>Mobility & Scanning</strong> – Enhance productivity with mobile-friendly solutions</li>
                </ul>
                <p>Ready to optimize your warehouse operations? Contact us today!</p>
            </div>
        ),
    }
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
                  src="/image/warehousing-services.jpg"
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
                  src="/image/warehouse-management.webp"
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
            src="/image/warehousing-services.jpg"
            alt="Warehouse interior"
            data-ai-hint="warehouse interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
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
              <Button
                asChild
                size="lg"
                className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group"
              >
                <Link href="/contact">
                  GET A QUOTE{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>

      <WhatsIncludedSection />
      <WmsSection />
      <OutsourcedWarehousingSection />
      <BenefitsSection />
      <FaqSection />
    </>
  );
}