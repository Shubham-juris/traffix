import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Reveal } from '@/components/animations/reveal';

const includedItems = [
  {
    title: 'Multi-Modal Partner',
    description: 'Trafficology Logistics is equipped to handle all your full truckload requirements and can also serve as your single-source provider of North American OTR solutions.',
  },
  {
    title: 'Flexibility',
    description: 'When demand shifts unexpectedly or last-minute changes to your supply chain are needed, Trafficology Logistics is ready to adapt alongside your business.',
  },
  {
    title: 'Responsiveness',
    description: 'You need a transportation provider who is there when you need them. Whether you need a tracking update or last-minute capacity, your dedicated team is committed to providing swift responses at your convenience.',
  },
  {
    title: 'No Surprises',
    description: "No one likes surprises on their invoice. That's why we prioritize transparency and provide upfront notifications when accessorial charges are incurred on your shipment.",
  },
  {
    title: 'Expert Problem Solving',
    description: 'At Trafficology Logistics, we specialize in solving complex problems. Our Net Promoter Score (NPS) feedback indicates this is what our customers appreciate most about working with our team.',
  },
  {
    title: 'Theft Prevention',
    description: 'Freight theft causes significant financial and operational disruptions to your business. Minimize this risk by utilizing our meticulously vetted premium carrier network.',
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
    description: "Trafficology Logistics' team of experts are committed to the business success of our clients. We apply our years of experience to solving complex challenges and delivering results."
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
    description: 'Each member of our dedicated truckload team brings a minimum of 5 years of experience, ensuring a proactive approach to freight management.'
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
    description: "We're not focused on one-time transactions. We aim to establish lasting partnerships built on trust, reliability, communication, expert advice, and dedication to delivering high-performance results."
  },
]

const faqItems = [
  {
    question: "What countries do you serve?",
    answer: "Trafficology Logistics provides over-the-road transportation services across Canada, the USA, and Mexico. Contact Us today to start building your over-the-road solutions!",
  },
  {
    question: "Do you own your own assets?",
    answer: "Trafficology Logistics has a small fleet of trucks and trailers located in Canada. Our fleet operates domestically within Canada and cross-border between the USA and Canada.",
  },
  {
    question: "Do you ship hazardous freight?",
    answer: "Yes, Trafficology Logistics has a network of haz-certified premium carriers. Trafficology Logistics does NOT transport Class 1 (Explosives), Class 2.1 (Flammable Gasses), Class 2.3 (Toxic Gasses), Class 5.1 (Oxidizing Substances), Class 6.1 (Toxic Substances), Class 7 (Radioactive Materials), or Packing Group I.",
  },
  {
    question: "How many trucks do you have in your network?",
    answer: "In today’s transportation market, where fraud and theft are significant concerns, Trafficology Logistics prioritizes having the right capacity over the most capacity. With over 45 years of experience, we’ve developed a meticulous vetting process overseen by our expert risk management team. This ensures that we provide our clients with extensive capacity across North America, partnering only with premium carriers who have proven track records. Contact us today to discover how we can secure the right capacity for your transportation needs.",
  },
  {
    question: "Is Trafficology Logistics CTPAT certified?",
    answer: "Trafficology Logistics goes beyond just having a CTPAT (Customs Trade Partnership Against Terrorism) certification; we also hold FAST (Free and Secure Trade), and PIP (Partners in Protection) certifications, and are fully bonded and insured. This comprehensive accreditation makes us the perfect choice as your cross-border partner. Contact us today to learn more!",
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

function WhyTraffixSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <Image
                src="/image/ChallengeAhead.jpg"
                alt="Challenges Ahead Sign"
                data-ai-hint="road sign challenges"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <p className="text-lg text-gray-400">Flexibility to meet your needs</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Why Trafficology Logistics<br />
                <span className="text-primary">for FTL?</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                The ability to adapt quickly to changing supply chain demands can make the difference between success or failure.
              </p>
              {/* <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                <Link href="#">
                  READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button> */}
            </div>
          </Reveal>
        </div>
        <div className="mt-20 border-t border-primary"></div>
      </div>
    </section>
  )
}

export default function FtlPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/truck.jpg"
            alt="Truck on a highway"
            data-ai-hint="truck highway"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <Reveal>
              <Truck className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                Full Truckload <br /> (FTL)
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-xl max-w-lg text-gray-300">
                Over-the-road (OTR) services customized to meet your transportation needs.
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
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>

      <WhatsIncludedSection />
      <WhyTraffixSection />
      <BenefitsSection />
      <FaqSection />
    </>
  );
}
