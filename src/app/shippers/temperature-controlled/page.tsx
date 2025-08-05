import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';
import { Reveal } from '@/components/animations/reveal';

const TemperatureControlledIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2h4" />
        <path d="M12 18V2" />
        <path d="M12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M19 8h2.79a2.79 2.79 0 0 1 2.5 3.12l-1.6 8.8A2.79 2.79 0 0 1 20 22H4a2.79 2.79 0 0 1-2.69-2.08l-1.6-8.8A2.79 2.79 0 0 1 2.21 8H5" />
        <path d="M5 8V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
    </svg>
)

const includedItems = [
    {
        title: 'Experience',
        description: 'When it comes to temperature-controlled shipping, success is in the details. Our experts know what questions to ask to ensure no critical detail is overlooked.',
    },
    {
        title: 'Network Capacity',
        description: 'Our premium carrier network operating top-of-the-line equipment ensures your thermosensitive freight travels at the right temperature from pickup to delivery.',
    },
    {
        title: 'Technology',
        description: "From temperature tracking to shipment visibility, TRAFFIX' team of experts are backed by industry-leading technology.",
    },
    {
        title: 'Cold Storage',
        description: 'TRAFFIX streamlines your temperature-controlled shipments between the US and Mexico with our secure cold storage locations at the border.',
    },
    {
        title: 'Responsive Support',
        description: 'Enjoy peace of mind knowing that our expert support team is available to you around the clock, no matter the day.',
    },
    {
        title: 'Seamless Claims Process',
        description: 'When the unexpected happens, TRAFFIX has you covered. Our dedicated team makes the claims process quick and hassle-free.',
    },
];

const benefits = [
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z"></path>
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3-3-4"></path>
                <path d="M12 22a7 7 0 0 1-7-7c0-2 1-3 3-4"></path>
            </svg>
        ),
        title: 'Expertise',
        description: 'Your temperature-controlled shipping requirements are non-negotiable, and we follow them exactly to ensure that shipments arrive in optimal condition.'
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
        description: 'We pair your temperature-controlled freight with carriers committed to delivering the attention to detail and urgency you deserve.'
    },
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
        description: "Our team is committed to optimizing your supply chain, alleviating the burden from your team, allowing you to focus on business growth."
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
        description: 'When you need updates on your temperature-controlled freight, rest easy knowing that our team is available to assist regardless of the day or time.'
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
        description: 'You need to know where your temperature-controlled freight is in transit. We enhance visibility with tech tracking and personalized updates from our dedicated tracking team.'
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
            </svg>
        ),
        title: 'Integrity',
        description: "TRAFFIX earns your business through trust, reliability, communication, expert guidance, and a commitment to providing high-quality temperature-controlled shipping solutions at competitive prices."
    },
]

const faqItems = [
    {
        question: "What types of temperature-controlled freight do you have experience transporting?",
        answer: "TRAFFIX has experience transporting temperature-controlled freight from fresh fruits and vegetables to pharmaceuticals. We have extensive experience with food (manufacturing, service, grocery, and retail), consumer goods, and even hazardous chemicals. Contact us today to book your next temperature controlled shipment with TRAFFIX.",
    },
    {
        question: "Are you familiar with temperature-controlled delivery to big-box retailers and grocers?",
        answer: "TRAFFIX’ expert temperature-controlled transportation team understands the precise delivery requirements, appointment systems, and preferred carriers of all major North American retailers and grocers. This specialized knowledge ensures your goods are delivered on-time and in-full, minimizing the risk of fines. Choose TRAFFIX as your partner for temperature-controlled delivery to major retailers and grocers. Contact us today to learn more.",
    },
    {
        question: "What steps do you take to make sure temperature requirements are met?",
        answer: "Ensuring the success of temperature-controlled transportation hinges on meticulous planning and attention to detail. Oversights in pre-cooling requirements, washout protocols, or equipment specifications can lead to delays or even shipment failure. At TRAFFIX, our team of seasoned logistics professionals takes a proactive approach. We meticulously examine every aspect of your shipment, ensuring all details are addressed to optimize its success. Explore our article outlining the critical questions we ask for every temperature-controlled shipment. Contact us today to book your next shipment!",
    },
    {
        question: "What happens if I have a claim?",
        answer: "Even the most meticulously planned loads can encounter unforeseen circumstances. While breakdowns, accidents, or extreme weather are rare, TRAFFIX’ team of temperature controlled trucking experts are prepared to deal with the uncontrollable. Our team’s thorough documentation, accurate temperature data, and efficient claims team streamlines the claims process for our clients. Our goal is to minimize disruptions to your business and ensure you receive quick reimbursement.",
    },
    {
        question: "What areas do you cover with your temperature-controlled services?",
        answer: "TRAFFIX offers comprehensive temperature-controlled transportation services across Canada, the USA, and Mexico. Leverage our elite carrier network alongside our team of seasoned professionals, each with a minimum of five years of temperature-controlled trucking expertise. Contact us today to book your next shipment!",
    },
    {
        question: "What temperatures does TRAFFIX ship?",
        answer: "TRAFFIX ships freight in the following temperature ranges: Ambient/Room Temperature Shipments Sometimes referred to as protect from freeze (15 to 25 Degrees C / 59 to 77 Degrees F) Refrigerated/Cold Shipping (2 to 8 Degrees C / 35 to 46 Degrees F) Frozen Shipments (-10 to -25 Degrees C / 14 to -13 Degrees F)",
    },
    {
        question: "What are the critical touch points that pose the greatest risk of temperature deviation in shipping?",
        answer: "Proper documentation, temperature monitoring, and attention to detail are essential when managing temperature-controlled shipments. This is where experience becomes invaluable. The highest risk of temperature deviation occurs during loading and unloading, as well as at cross-docking and warehousing facilities. For highly sensitive products like produce, even a single-degree fluctuation can have significant consequences, making it crucial to maintain precise temperature control at every stage of the journey.",
    },
    {
        question: "What is freeze protection service?",
        answer: "Freeze protection, also known as “protect from freeze” service, involves using a heated trailer to prevent freezable freight from freezing in extremely cold temperatures. Common items requiring freeze protection include bottled beverages, which can burst if the liquid expands when frozen. Surprisingly, chocolate is also frequently shipped with freeze protection, as freezing can cause the cocoa butter to separate, creating a white discoloration. While this doesn’t affect the safety of the chocolate, it can make the product appear unappealing. Contact our team today to book your protect-from-freeze shipment.",
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

function ExperiencedPartnerSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
            <div>
              <p className="text-lg text-gray-400">A track record of success</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Your Experienced<br />
                <span className="text-primary">Partner</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Experience always matters in transportation, but even more so with temperature-controlled service. Our solutions are backed by 45+ years of experience.
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
                src="/image/truk.jpg"
                alt="White truck with yellow refrigeration unit"
                data-ai-hint="white truck"
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

export default function TemperatureControlledPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/Truck.jpg"
            alt="Refrigerated truck"
            data-ai-hint="refrigerated truck"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <Reveal>
            <TemperatureControlledIcon className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Temperature <br /> Controlled
            </h1>
            </Reveal>
            <Reveal delay={0.2}>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Expert attention to detail. Backed by the right capacity.
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
      <ExperiencedPartnerSection />
      <BenefitsSection />
      <FaqSection />
    </>
  );
}
