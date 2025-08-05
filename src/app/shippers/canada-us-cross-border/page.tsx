
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronDown, ChevronRight, Map } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CrossBorderIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M43.7241 18.7241L45.4382 17.01C46.602 15.8462 48.01 15.2643 49.4764 15.2643C50.9428 15.2643 52.3508 15.8462 53.5146 17.01L55.2287 18.7241L56.9428 20.4382C58.1066 21.602 58.6885 23.01 58.6885 24.4764C58.6885 25.9428 58.1066 27.3508 56.9428 28.5146L55.2287 30.2287L49.4764 35.981L43.7241 30.2287L38 35.981L32.2477 30.2287L38 24.4764L43.7241 18.7241Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M43.7241 24.4764L49.4764 30.2287" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 35V49" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 49L14 43.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 49L25 43.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 35L14 40.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 35L25 40.5" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const includedItems = [
    {
        title: 'Bonded Service',
        description: 'TRAFFIX is bonded, insured, and holds CTPAT, FAST, and PIP certifications, making us your premier partner for shipping between Canada and the US.',
    },
    {
        title: 'Seasonal Stability',
        description: 'With TRAFFIX, your team can eliminate struggles with seasonal freight cycles that deplete capacity. With 45+ years of experience in cross-border transportation, we stabilize your supply chain with the right capacity.',
    },
    {
        title: 'Drop Trailers',
        description: 'TRAFFIX specializes in cross-border drop trailer programs, streamlining your supply chain and reducing fees such as driver detention.',
    },
    {
        title: 'Cost Stabilization',
        description: 'With over 45 years of experience in Canada-US cross-border shipping, TRAFFIX has forged enduring partnerships with top carriers, enabling us to negotiate competitive pricing contracts, both short and long-term.',
    },
    {
        title: 'On-Time Performance',
        description: 'Our experienced cross-border team knows how to ensure efficient border crossings for your freight, ensuring on-time delivery, especially to retailers with strict appointment policies.',
    },
    {
        title: 'Risk Mitigation',
        description: "Amidst a freight market plagued by fraudulent carriers, TRAFFIX' risk management team and stringent security procedures ensure your freight is entrusted to meticulously vetted and reliable carriers.",
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
        description: "TRAFFIX' team of experts are committed to the success of our clients. They apply their years of experience to solving complex challenges and delivering results."
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
        description: 'While some brokers prioritize maximum capacity, TRAFFIX prioritizes the right capacity. Experience peace of mind knowing your freight is handled by our meticulously vetted premium carriers.'
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
        description: 'Each member of our dedicated cross-border team brings a minimum of 5 years of experience, ensuring a proactive approach to freight management.'
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
        question: "Is TRAFFIX a customs broker?",
        answer: "No, TRAFFIX is not a customs broker. TRAFFIX will work with any customs broker you choose to ensure your freight has an efficient border crossing. Contact us today to learn more.",
    },
    {
        question: "Is TRAFFIX bonded?",
        answer: "Yes, TRAFFIX is a bonded 3PL, allowing you to ship between Canada, the USA, and Mexico without paying duties until your freight arrives at a designated point. Contact us today to learn more.",
    },
    {
        question: "What areas of Canada and the USA do you service?",
        answer: "TRAFFIX provides service coast-to-coast throughout Canada and the USA. Contact us today to learn more.",
    },
    {
        question: "Do you offer warehousing capacity?",
        answer: "Yes, TRAFFIX offers outsourced warehousing solutions in both Canada and the USA, including bonded storage facilities and cross-dock locations. To learn more contact us or visit our warehousing page.",
    },
    {
        question: "What kinds of equipment do you offer?",
        answer: "TRAFFIX’ premium carrier network offers capacity covering a wide variety of equipment types including dry vans, reefers, and open deck equipment. We can also accommodate special requests such as vented trailers, logistics floors, and more. Contact us today to learn more.",
    },
    {
        question: "Are you CPTAT certified?",
        answer: "Yes, TRAFFIX is CTPAT certified. We also hold FAST and PIP certifications.",
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

function ExperienceSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="max-w-md">
                <p className="text-lg text-gray-400">A long track record of success</p>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                  45+ Years of<br />
                  Cross Border<br />
                  <span className="text-primary">Experience</span>
                </h2>
                <p className="mt-6 text-base text-gray-300">
                  We have a long history of working with customer on Canada-US cross border shipments. That experience matters in delivering the best results for your business.
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
                  src="/image/image4.jpg"
                  alt="Truck on a highway in a mountainous region"
                  data-ai-hint="truck highway"
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

export default function CanadaUsCrossBorderPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/canada.jpg"
            alt="Map of Canada and the United States"
            data-ai-hint="canada us map"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <Reveal>
              <CrossBorderIcon className="w-20 h-20 mb-6 text-primary" />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                Canada-US <br /> Cross Border
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-xl max-w-lg text-gray-300">
                Your bonded partner in Canada-US cross border shipping.
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
      <ExperienceSection />
      <BenefitsSection />
      <FaqSection />
    </>
  );
}
