import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SVGProps } from 'react';

const FlatbedIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h17.6a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 19.6 6H15V4h-2v2H4a2 2 0 0 0-2 2v4Z"></path><path d="M22 12v4H15.3a2.7 2.7 0 0 1-2.6-2H2v4h10v2h-4v2h4a2 2 0 0 0 2-2v-2h6v2h-4v2h4a2 2 0 0 0 2-2v-4Z"></path><circle cx="6.5" cy="18.5" r="2.5"></circle><circle cx="17.5" cy="18.5" r="2.5"></circle>
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
        description: "TRAFFIX' team of experts are committed to your business success. They apply their years of experience to solving complex challenges and delivering results with customized flatbed solutions."
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
        description: 'While some brokers prioritize maximum capacity, TRAFFIX prioritizes the right capacity. Experience peace of mind knowing your flatbed freight is handled by our meticulously vetted premium carriers.'
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
        description: 'As flatbed delivery often involves job sites or meeting offload crews, we understand how important visibility in transit is. TRAFFIX provides both technology enabled flatbed shipment tracking and customized updates.'
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

function WhatsIncludedSection() {
    return (
      <section className="bg-white text-black py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 uppercase">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
            {includedItems.map((item) => (
              <div key={item.title} className="flex gap-4">
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
            <div>
              <p className="text-lg text-gray-400">Why does experience matter in</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
                Flatbed<br />
                <span className="text-primary">Shipping?</span>
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-md">
                Each member of TRAFFIX' flatbed team boasts a minimum of 10 years of experience, equipping them with the depth of knowledge and expertise required to optimize your flatbed shipments.
              </p>
              <Button asChild variant="outline" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold group">
                <Link href="#">
                  READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://placehold.co/800x600"
                alt="Yellow flatbed truck on a road"
                data-ai-hint="yellow truck"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
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
                    {benefits.map((benefit) => (
                        <div key={benefit.title}>
                            <div className="flex items-center gap-4">
                                <benefit.icon className="w-12 h-12 text-primary flex-shrink-0" />
                                <h3 className="text-xl font-bold text-primary">{benefit.title}</h3>
                            </div>
                            <p className="mt-4 text-gray-400">{benefit.description}</p>
                        </div>
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
          <div>
            <Image
              src="https://placehold.co/800x600"
              alt="Oversize load sign on a large vehicle"
              data-ai-hint="oversize load"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <p className="text-lg text-gray-400">Your ideal partner in</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 uppercase">
              Project<br />
              <span className="text-primary">Freight</span>
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-md">
              Project freight is one of the most intricate types of transportation, and our team's extensive experience and dedication to delivering high-performance results makes TRAFFIX your premier choice for project freight solutions.
            </p>
            <Button asChild variant="secondary" className="mt-8 bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 font-bold">
              <Link href="#">
                READ MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
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
            src="https://placehold.co/1920x1080"
            alt="Flatbed truck"
            data-ai-hint="flatbed truck"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <FlatbedIcon className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
              Flatbed <br /> Shipping
            </h1>
            <p className="mt-6 text-xl max-w-lg text-gray-300">
                Flatbed freight shipped with precision, expertise, and the right capacity.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-4 font-bold text-lg group">
              <Link href="/contact">
                SHIP WITH US <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>
      </div>
      <WhatsIncludedSection />
      <ExperienceMattersSection />
      <BenefitsSection />
      <ProjectFreightSection />
    </>
  );
}
