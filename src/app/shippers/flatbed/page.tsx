import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Check, ChevronDown, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';
import { Reveal } from '@/components/animations/reveal';

const FlatbedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h17.6a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 19.6 6H15V4h-2v2H4a2 2 0 0 0-2 2v4Z"></path>
        <path d="M22 12v4H15.3a2.7 2.7 0 0 1-2.6-2H2v4h10v2h-4v2h4a2 2 0 0 0 2-2v-2h6v2h-4v2h4a2 2 0 0 0 2-2v-4Z"></path>
        <circle cx="6.5" cy="18.5" r="2.5"></circle>
        <circle cx="17.5" cy="18.5" r="2.5"></circle>
        <path d="M15 10h4.5"></path>
    </svg>
)

const includedItems = [
    {
        title: 'Right-Sized Shipments',
        description: 'New clients often request the wrong equipment for their flatbed freight, resulting in limited capacity and higher rates. Our team ensures your flatbed truckload or LTL shipments are loaded on the appropriate equipment.',
    },
    {
        title: 'Guide to Legal Loads',
        description: 'Shipping heavy or oversized loads demands a thorough understanding of legal weight and dimensional limits across various regions and jurisdictions. We serve as your guide to ensure your flatbed freight complies with all regulations.',
    },
    {
        title: 'Precision Timing',
        description: 'Our team specializes in meticulously planning and managing flatbed delivery schedules to ensure your project runs smoothly, preventing any delays caused by late drivers or out-of-sequence deliveries.',
    },
    {
        title: 'Communication',
        description: "Our dedicated team provides up-to-date flatbed shipment tracking and clear, detailed communication at every stage of your freight's journey, from pickup to delivery.",
    },
    {
        title: 'Shipment Accuracy',
        description: "When mistakes are made in flatbed shipping, they can have costly consequences. That's why our team asks thorough questions about each load to ensure no details are overlooked.",
    },
    {
        title: 'Experience Delivering',
        description: 'Whether your freight is headed to a steel mill or a major project site, our experienced team knows what it takes to ensure successful flatbed delivery, regardless of the destination.',
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
        description: "Trafiicology Logistics' team of experts are committed to your business success. They apply their years of experience to solving complex challenges and delivering results with customized flatbed solutions."
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
        description: 'While some brokers prioritize maximum capacity, Trafiicology Logistics prioritizes the right capacity. Experience peace of mind knowing your flatbed freight is handled by our meticulously vetted premium carriers.'
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
        description: 'Each member of our dedicated flatbed team brings a minimum of 10 years of experience, ensuring a proactive approach to freight management.'
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
        description: 'As flatbed delivery often involves job sites or meeting offload crews, we understand how important visibility in transit is. Trafiicology Logistics provides both technology enabled flatbed shipment tracking and customized updates.'
    },
    {
        icon: (props: SVGProps<SVGSVGElement>) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
            </svg>
        ),
        title: 'Integrity',
        description: "We're not focused on quick, one-time transactions. Our goal is to establish lasting partnerships built on trust, reliability, transparent communication, expert advice, and a dedication to delivering high-performance results through customized flatbed solutions."
    },
]

const faqItems = [
    {
        question: "What equipment is right for my shipment?",
        answer: "Selecting the right equipment requires asking the right questions, and our expert team, each with a minimum of 10 years of experience, knows exactly the right questions to ask to determine the best equipment for your needs. For more information, check out our equipment guide or contact our flatbed team today!",
    },
    {
        question: "What types of freight can Trafiicology Logistics ship?",
        answer: "If you need it shipped, we can handle it! From lumber to auto-haulers loaded with cars, the Trafiicology Logistics flatbed team has you covered. We commonly transport industrial manufacturing equipment and raw materials, steel, rolled aluminum, agricultural machinery, automobiles, construction equipment and supplies, wire, and tires. Don’t see your commodity listed? No problem! With over 10 years of experience each, our dedicated flatbed experts have the knowledge and expertise to manage your shipments. Contact us today to learn more!",
    },
    {
        question: "Will you give me a rate, but not give me a truck?",
        answer: "Unlike other service providers, Trafiicology Logistics focuses on delivering the right capacity, not the most capacity. To provide you with an optimal rate, we start by asking detailed questions about your shipment, including the shipment date. Once we have all the necessary information, we match you with the best carriers and equipment for your needs and will provide a rate after confirming availability on your shipment date. Keep in mind, our meticulously vetted carriers are in high demand, so while we ensure availability at the time of quoting, we cannot guarantee availability if you wait too long to book! Ready to get a rate? Contact us today!",
    },
    {
        question: "What is an over-dimensional shipment?",
        answer: "Over-dimensional shipments involve freight that exceeds the legal-size requirements for the area you are shipping in. Since regulations for moving over-dimensional freight vary by state and province, it’s crucial to have a knowledgeable team handling your shipment. Ensuring your freight has the needed permits, escorts, safety equipment, and properly trained drivers for the areas where it will be transported is essential. Knowledge and experience are key to successfully moving over-dimensional shipments, which makes partnering with the Trafiicology Logistics Flatbed team so advantageous for your business. To learn more about over-dimensional shipping, check out our equipment guide or contact our team today to book your consultation!",
    },
    {
        question: "What is a hot shot?",
        answer: "Hot shots are small, time-sensitive loads transported on medium-duty trucks (Classes 3, 4, or 5) pulling flatbed trailers over distances of 200-800 miles. These loads are typically 3 feet high and 102 inches wide, requiring ground-level loading rather than dock loading. Ideal hot shot loads are up to 15-20 feet long and weigh 5,000 pounds or less, though shipments up to 10,000 pounds can also be accommodated. Some hot shots can handle up to 20,000 pounds, but options for these larger loads are more limited. Hot shot drivers can typically cover 600 miles within 24 hours, making them a great choice for urgent shipments. Do you have a shipment that requires a hot shot? Contact us today for a quote!",
    },
    {
        question: "How will my freight be secured on a flatbed?",
        answer: "Safety is crucial when transporting flatbed freight, and drivers must follow strict regulations to properly secure loads on open-deck trailers. Freight can be secured either directly or indirectly using chains, straps, or tie-downs, often in combination. Direct tie-downs attach the cargo straight to the trailer deck, while indirect tie-downs loop over the freight, with straps anchored beneath the trailer and secured on the opposite side. The type and number of tie-downs used are determined by the weight and size of the cargo. Additional protection may be needed for some shipments, such as corner guards to prevent strap damage, tarps to shield the load from weather, and dunnage (e.g., wooden blocks or rubber mats) to increase friction and prevent shifting. Headboards or bulkheads may also be installed at the front of the trailer to block forward movement.",
    },
    {
        question: "How are flatbed rates calculated?",
        answer: "Flatbed shipment rates are typically calculated based on several factors that reflect the complexity and requirements of transporting the freight. Factors that influence flatbed rates include: Distance: The longer the haul, the higher the cost. Rates are often calculated per mile, with long-haul shipments benefiting from lower per-mile rates than shorter hauls. Weight and Dimensions: The size and weight of the freight affect the rate. For example, heavier shipments will burn more fuel in transit, thus will be more expensive to transport. Oversized loads may incur additional fees as they may require permits and escorts. These are factors that must be considered when rating a flatbed shipment. Freight Type: The nature of the cargo can influence your rate. Shipments requiring special handling, such as hazardous materials or fragile items, may be rated higher due to added risks and requirements. Equipment Type and Availability: Rates can vary depending on the type of flatbed equipment needed (e.g., standard flatbed, step-deck, or double-drop trailers). The more specialized the equipment, the higher the rate tends to be as those trailers have lower availability. Seasonal capacity restrictions may also influence your rate. Tarps and Additional Services: If the shipment requires tarping, dunnage, or other additional services, these will add to the cost. Extra charges may apply for securing special loads or using equipment like bulkheads. Location and Accessibility: Flatbed rates fluctuate based on the specific equipment required, whether standard flatbeds, step-decks, or double-drop trailers. Specialized trailers often carry higher rates due to limited availability. Additionally, pickup or delivery locations with restricted access, such as high-security sites requiring TWIC card authorization, can further strain capacity and increase rates. Market Conditions: Supply and demand fluctuations, fuel prices, and seasonal trends can affect flatbed rates, leading to higher prices in periods of high demand. At Trafiicology Logistics, our goal is to match your freight with the right capacity, balancing costs and quality to deliver maximum value. Contact us today to learn more.",
    },
    {
        question: "How can I track my flatbed shipment?",
        answer: "Trafiicology Logistics offers a range of tracking options to suit your needs, including technology-based tracking through MacroPoint, FourKites, Trucker Tools, and Project44; 24/7-365 email or phone updates from our dedicated tracking team; and GPS-enabled tracking devices attached to your freight. During shipment setup, our team will work with you to determine your preferred update frequency and tracking method, ensuring a tailored communication experience. Contact us today to learn more.",
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

function ExperienceMattersSection() {
    return (
      <section className="bg-black text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
            <div>
              <p className="text-lg text-gray-400">Why does experience matter in</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Flatbed<br />
                <span className="text-primary">Shipping?</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Each member of Trafiicology Logistics' flatbed team boasts a minimum of 10 years of experience, equipping them with the depth of knowledge and expertise required to optimize your flatbed shipments.
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
                src="/image/FlatbedBenefits.jpeg"
                alt="Yellow flatbed truck on a road"
                data-ai-hint="yellow truck"
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

function ProjectFreightSection() {
  return (
    <section className="bg-black text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
            <div>
                <Image
                src="/image/istockphoto.jpg"
                alt="Oversize load sign on a large vehicle"
                data-ai-hint="oversize load"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                />
            </div>
            </Reveal>
          <Reveal>
          <div>
            <p className="text-lg text-gray-400">Your ideal partner in</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
              Project<br />
              <span className="text-primary">Freight</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-md">
              Project freight is one of the most intricate types of transportation, and our team's extensive experience and dedication to delivering high-performance results makes Trafiicology Logistics your premier choice for project freight solutions.
            </p>
            {/* <Button asChild variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold">
              <Link href="#">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
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

export default function FlatbedPage() {
  return (
    <>
      <div className="relative h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/FlatbedShipping.jpg"
            alt="Flatbed truck"
            data-ai-hint="flatbed truck"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl">
            <Reveal>
              <FlatbedIcon className="w-20 h-20 text-primary mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                Flatbed <br /> Shipping
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-xl max-w-lg text-gray-300">
                Flatbed freight shipped with precision, expertise, and the right capacity.
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
      <ExperienceMattersSection />
      <BenefitsSection />
      <ProjectFreightSection />
      <FaqSection />
    </>
  );
}
