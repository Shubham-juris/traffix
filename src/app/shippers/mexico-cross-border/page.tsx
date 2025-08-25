import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ArrowsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
        <g filter="url(#filter0_f_1_1)">
            <path d="M53.76,96.39,32.39,75a3.34,3.34,0,0,1,0-4.72L53.76,49.A3a3.34,3.34,0,0,1,4.72,0l2.36,2.36a3.34,3.34,0,0,1,0,4.72L46,71.25H80.51a3.33,3.33,0,0,1,3.33,3.33v3.34a3.33,3.33,0,0,1-3.33,3.33H46l14.84,14.83a3.34,3.34,0,0,1,0,4.72L58.48,101.1A3.34,3.34,0,0,1,53.76,96.39Z" transform="translate(0 0) rotate(90 64 64)" stroke="hsl(var(--primary))" strokeWidth="2" />
            <path d="M74.24,31.61,95.61,53a3.34,3.34,0,0,1,0,4.72L74.24,79.11a3.34,3.34,0,0,1-4.72,0L67.16,76.75a3.34,3.34,0,0,1,0-4.72L82,57.25H47.49a3.33,3.33,0,0,1-3.33-3.33V50.58a3.33,3.33,0,0,1,3.33-3.33H82L67.16,32.42a3.34,3.34,0,0,1,0-4.72l2.36-2.36A3.34,3.34,0,0,1,74.24,31.61Z" transform="translate(0 0) rotate(90 64 64)" stroke="hsl(var(--primary))" strokeWidth="2" />
        </g>
        <defs>
            <filter id="filter0_f_1_1" x="0" y="0" width="128" height="128" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="7.5" result="effect1_foregroundBlur_1_1" />
            </filter>
        </defs>
    </svg>
)

const MexicoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M43.7241 18.7241L45.4382 17.01C46.602 15.8462 48.01 15.2643 49.4764 15.2643C50.9428 15.2643 52.3508 15.8462 53.5146 17.01L55.2287 18.7241L56.9428 20.4382C58.1066 21.602 58.6885 23.01 58.6885 24.4764C58.6885 25.9428 58.1066 27.3508 56.9428 28.5146L55.2287 30.2287L49.4764 35.981L43.7241 30.2287L38 35.981L32.2477 30.2287L38 24.4764L43.7241 18.7241Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M43.7241 24.4764L49.4764 30.2287" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 35V49" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 49L14 43.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 49L25 43.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 35L14 40.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 35L25 40.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const includedItems = [
    {
        title: 'Communication',
        description: 'You can rely on your dedicated Trafficology Logistics team for clear communication through your preferred method: email, phone, or even WhatsApp®.',
    },
    {
        title: 'Streamlined Process',
        description: 'Moving freight between Mexico and the USA requires a coordinated team effort. Choose Trafficology Logistics as your sole point of contact and let us handle all the details for you.',
    },
    {
        title: 'Bonded & CTPAT Certified',
        description: 'Pay duties and taxes at your chosen destination point with Trafficology Logistics, your bonded and CTPAT certified cross-border partner.',
    },
    {
        title: 'Cross Docking Facilities',
        description: "Take advantage of Trafficology Logistics' strategically located cross docking facilities located at the US/Mexico border.",
    },
    {
        title: 'Risk Mitigation',
        description: "You can relax knowing that Trafficology Logistics' risk management team and our security procedures protect you from fraudulent carriers.",
    },
    {
        title: 'Customized Solutions',
        description: "In addition to Mexico cross-border services, Trafficology Logistics' team of supply chain experts will work closely with you to create tailored LOGISTICS solutions that fit your unique requirements.",
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
        description: "Trafficology Logistics' team of experts, strategically positioned throughout Mexico, are dedicated to leveraging their experience to tackle complex challenges and deliver outstanding results."
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
        description: 'While some brokers prioritize maximum capacity, Trafficology Logistics prioritizes the right capacity. Experience peace of mind knowing your freight is handled by our meticulously vetted premium carriers.'
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
        description: 'Each member of our dedicated Mexico cross-border team brings a minimum of 5 years of experience, ensuring a proactive approach to freight management.'
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
        description: 'Success in your supply chain relies on timely pickups, deliveries, and consistent communication in transit. Trafficology Logistics offers customized updates to meet your needs.'
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
        question: "Is Trafficology Logistics a customs broker?",
        answer: "No, Trafficology Logistics is not a customs broker. Trafficology Logistics will work with any customs broker you choose to ensure your freight has an efficient border crossing. Contact us today to learn more.",
    },
    {
        question: "Is Trafficology Logistics bonded?",
        answer: "Yes, Trafficology Logistics is a bonded 3PL, allowing you to ship between Canada, the USA, and Mexico without paying duties until your freight arrives at a designated point. Contact us today to learn more.",
    },
    {
        question: "What areas of Mexico do you service?",
        answer: "Trafficology Logistics provides service coast-to-coast throughout Mexico for shipments crossing the border into either the USA or Canada. Contact us today to learn more.",
    },
    {
        question: "Do you offer warehousing capacity?",
        answer: "Yes, Trafficology Logistics offers outsourced warehousing solutions in both Canada and the USA, including bonded storage and cross-dock facilities strategically located near the Mexico-US border. To learn more contact us or visit our warehousing page.",
    },
    {
        question: "Are you CPTAT certified?",
        answer: "Yes, Trafficology Logistics is CTPAT certified. We also hold FAST and PIP certifications.",
    },
    {
        question: "Do you own your assets?",
        answer: "Trafficology Logistics does operate a fleet of trucks and trailers from our Milton, ON, facility; however, we do not service Mexico cross border shipments with our own assets. Instead, we work with a meticulously vetted network of experienced Mexico cross-border carriers. Contact us today to learn more.",
    },
    {
        question: "Do you offer domestic Mexico?",
        answer: "Trafficology Logistics does not currently offer domestic Mexico services.",
    },
    {
        question: "Can you offer Mexico cross-border LTL service?",
        answer: "Yes, Trafficology Logistics can offer LTL service crossing the border between Mexico, the USA, and Canada. Contact us today to learn more.",
    },
    {
        question: "Are trailers transloaded at the border?",
        answer: (
            <div className="space-y-2">
                <p>Typically, trailers are transloaded at the border between Mexico and the USA. Our Mexican carrier delivers to one of our vetted cross-dock facilities at the border, where your shipment is then picked up by one of our trusted US partners.</p>
                <p>For shipments requiring extra care, we offer direct options where the same carrier handles the delivery from start to finish. However, these options are generally more expensive and less available. For more economical and readily available solutions, trust our transload model, where your freight receives meticulous care and attention from our vetted warehousing staff.</p>
            </div>
        )
    }
];

function ColdChainSection() {
    return (
        <section className="bg-black text-white py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Reveal>
                        <div className="max-w-md">
                            <p className="text-lg text-gray-400">Cold chain efficiency</p>
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                                Mexico Cross-Border Produce <br/>
                                <span className="text-primary">Transportation</span>
                            </h2>
                            <p className="mt-6 text-base text-gray-300">
                                Ensure the freshness and quality of your produce shipments moving between Mexico, the USA, and Canada with our cross-border produce transportation solution.
                            </p>
                            {/* <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                                <Link href="/shippers/produce">
                                    READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button> */}
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="relative">
                            <Image
                                src="/image/Shipping.jpg"
                                alt="Cold storage warehouse for produce"
                                data-ai-hint="cold storage"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-2xl"
                            />
                             <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary/80 blur-xl"></div>
                             <div className="absolute top-1/3 right-1/2 w-20 h-20 bg-primary/80 blur-xl"></div>
                        </div>
                    </Reveal>
                </div>
                <div className="mt-20 border-t border-primary"></div>
            </div>
        </section>
    )
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

export default function MexicoCrossBorderPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/canada.jpg"
            alt="Map of Mexico and the southern US"
            data-ai-hint="mexico us map"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <Reveal>
              <MexicoIcon className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                Mexico Cross <br /> Border
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-xl max-w-lg text-gray-300">
                Your strategic partner for high-performance cross border solutions.
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
      <ColdChainSection />
      <BenefitsSection />
      <FaqSection />
    </>
  );
}