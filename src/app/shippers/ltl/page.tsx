import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Boxes, Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';
import { Reveal } from '@/components/animations/reveal';


const includedItems = [
  {
    title: 'Cost Optimization',
    description: 'At TRAFFIX, we aim to offer competitive rates aligned with the LTL market. More importantly, we focus on delivering value by helping you save time and avoid unnecessary costs.',
  },
  {
    title: 'Control Tower Visibility',
    description: "Whether you're managing one shipping location or many, the TRAFFIX Shipping App offers a comprehensive overview of your entire LTL supply chain operation.",
  },
  {
    title: 'Customized Reporting',
    description: 'TRAFFIX provides its LTL clients with top-tier business intelligence (BI) tools, complete with customized dashboards, enabling you to access vital information at the click of a button.',
  },
  {
    title: 'Accessorial Management',
    description: 'Our dedicated LTL auditors and operations team eliminates accessorial guesswork by auditing invoices on your behalf and providing guidance on how to eliminate future accessorials.',
  },
  {
    title: 'Carrier Management',
    description: 'Sometimes choosing the cheapest LTL carrier can end up being costly. TRAFFIX LTL experts understand which carriers are best for each shipment to avoid excessive accessorials and fines.',
  },
  {
    title: 'Inbound Vendor Management',
    description: 'Controlling inbound shipping costs is challenging when vendors choose the carrier. By adding TRAFFIX to your purchase order, we ensure a preferred carrier delivers your freight, putting control back in your hands.',
  },
]

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
        description: "At TRAFFIX, we foster partnerships through collaborative efforts. Our team leverages its expertise to meticulously audit your LTL supply chain and serves as your trusted advisor in pursuit of optimization."
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
        description: 'Choosing the cheapest option can be costly in LTL shipping. Our role includes managing carrier relationships, negotiating for you, and ensuring the right carrier for each load.'
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
        description: 'Each member of our dedicated LTL team brings a minimum of 5 years of experience, ensuring a proactive and consultative approach to LTL freight management.'
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
        description: 'Whether you need a tracking update, or need a shipment expedited, our dedicated team is available to assist regardless of the day or time.'
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
        description: 'In LTL transportation, tracking, invoicing, and accessorial visibility are crucial. With the TRAFFIX Shipping App, you gain total visibility over your entire LTL supply chain.'
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
]

const faqItems = [
    {
        question: "What areas does your LTL network cover?",
        answer: "TRAFFIX offers LTL services domestically in Canada and the USA, as well as, cross border between Canada, the USA, and Mexico.",
    },
    {
        question: "Can the TRAFFIX LTL team really save me money?",
        answer: "At TRAFFIX LTL, we are committed to offering competitive market rates for your LTL shipping lanes. However, our approach goes beyond mere financial savings, emphasizing the importance of adding value. Through our consultative freight analysis, we assess your purchasing strategies to identify potential savings opportunities. Additionally, we provide insights to enhance your operations, including time-saving measures, process optimization, freight claims reduction, improved on-time delivery performance, and strategies to minimize avoidable accessorials. All findings are presented in a comprehensive report for your review. Contact us today to schedule your consultation.",
    },
    {
        question: "I have my own system. Do I need to use the TRAFFIX Shipping App?",
        answer: "No, TRAFFIX is pleased to offer flexible API and EDI integrations to your TMS or ERP. Contact us today to learn more.",
    },
    {
        question: "How will I access my data and track my shipments?",
        answer: "The TRAFFIX Shipping App offers comprehensive visibility into your LTL operations. Alongside our Shipping App, qualifying clients will gain access to our cloud-based business intelligence software, featuring a tailored dashboard for one-click access to essential information. Track all your LTL shipments in transit through the TRAFFIX Shipping App, the carrier’s website, or opt for personalized updates from our dedicated tracking team. Contact us to talk to one of our LTL experts today.",
    },
    {
        question: "Does TRAFFIX offer freight bill auditing?",
        answer: "Certainly! TRAFFIX’ LTL auditors carefully examine each invoice to ensure accurate charges and validate accessorial fees. Our auditing team meticulously verifies reweighs and reclasses, identifying opportunities to enhance operational efficiencies.",
    },
];

function FaqSection() {
    return (
        <section className="bg-white text-black py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                <h2 className="text-4xl sm:text-5xl font-black text-center mb-16">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                </Reveal>
                <Reveal>
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqItems.map((item) => (
                            <AccordionItem value={item.question} key={item.question} className="bg-gray-100 rounded-lg border-none">
                                <AccordionTrigger className="w-full text-left p-4 font-bold text-lg hover:no-underline [&[data-state=open]>div]:bg-primary [&[data-state=open]>div>svg]:text-black">
                                    {item.question}
                                    <div className="bg-black rounded-md p-2 ml-4 transition-colors">
                                        <ChevronDown className="h-5 w-5 text-primary transition-colors" />
                                    </div>
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
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16">
          WHAT'S INCLUDED
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

function ChoosingCarrierSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
          <div>
            <Image
              src="https://placehold.co/800x600"
              alt="Choosing the right carrier"
              data-ai-hint="warehouse loading"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          </Reveal>
          <Reveal>
          <div>
            <p className="text-lg text-gray-400">Lowest Price ≠ Lowest Cost</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
              Choosing The<br />
              Right Carrier
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-md">
              Opting for the cheapest provider may not always be the most cost-effective choice. TRAFFIX' LTL experts are available to assist you in selecting the optimal carrier for every shipment.
            </p>
            <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
              <Link href="#">
                READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          </Reveal>
        </div>
        <div className="mt-20 border-t border-primary"></div>
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
            </div>
        </section>
    )
}

function SocSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
          <div className="max-w-lg">
            <p className="text-lg text-gray-400">Data security and privacy</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
              SOC <br />
              <span className="text-primary">Compliant</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              TRAFFIX is SOC compliant demonstrating our commitment to high standards for data security, privacy, and operational controls, giving clients confidence that their data is handled safely and responsibly.
            </p>
            <Button asChild variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
              <Link href="#">
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          </Reveal>
          <Reveal>
          <div>
            <Image
              src="https://placehold.co/600x600"
              alt="AICPA SOC Logo"
              data-ai-hint="aicpa logo"
              width={600}
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


export default function LtlPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Pallet of yellow boxes"
            data-ai-hint="warehouse pallets"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <Reveal>
            <Boxes className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Less-Than-Truckload <br /> (LTL)
            </h1>
            </Reveal>
            <Reveal delay={0.2}>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Your strategic partner in LTL transportation.
            </p>
            </Reveal>
            <Reveal delay={0.3}>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
              <Link href="/contact">
                SHIP WITH US <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            </Reveal>
        </div>
      </div>
      <WhatsIncludedSection />
      <ChoosingCarrierSection />
      <BenefitsSection />
      <SocSection />
      <FaqSection />
    </>
  );
}
