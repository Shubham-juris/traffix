import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/animations/reveal';

const stats = [
    { value: '26+', label: 'Years in Business' },
    { value: '437+', label: 'Expert Professionals' },
    { value: '249K+', label: 'Loads per Year' },
];


const ctaCards = [
    {
        title: "SOLUTIONS FOR SHIPPERS",
        description: "Custom Solutions for complex supply chains.",
        image: "/image/worke.jpg",
        imageHint: "warehouse workers",
        href: "/services"
    },
    {
        title: "WHY HAUL WITH TRAFFICOLOGY LOGISTICS",
        description: "Join our elite network of carriers. Let's be partners in business.",
        image: "/image/i.jpg",
        imageHint: "truck driver",
        href: "/careers"
    },
    {
        title: "WHY JOIN OUR TEAM",
        description: "Join our team where transportation experts cultivate high-performance careers.",
        image: "/image/callgirl.jpg",
        imageHint: "customer service",
        href: "/careers"
    }
];

function CtaSection() {
    return (
        <section className="bg-black py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ctaCards.map((card, index) => (
                        <Reveal key={card.title} delay={index * 0.1}>
                        <Link href={card.href} className="group">
                            <Card className="bg-black border border-gray-800 rounded-lg overflow-hidden flex flex-col h-full hover:border-primary transition-colors duration-300">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        data-ai-hint={card.imageHint}
                                        width={600}
                                        height={400}
                                        className="w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-black text-white flex items-center">
                                        {card.title}
                                        <ChevronsRight className="ml-2 h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
                                    </h3>
                                    <p className="mt-4 text-gray-400 flex-grow">
                                        {card.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default function AboutPage() {
    return (
        <>
            <div className="relative min-h-screen bg-black text-white flex flex-col justify-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/image/supply.jpg"
                        alt="Business handshake over a logistics background"
                        data-ai-hint="business handshake"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20">
                    <div className="max-w-4xl">
                        <Reveal>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase">
                            About Our<br />
                            <span className="text-primary">Company</span>
                        </h1>
                        </Reveal>
                        <Reveal delay={0.1}>
                        <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-300">
                            Customized, technology-enabled solutions, executed by experts and delivered by the right capacity.
                        </p>
                        </Reveal>
                        
                    </div>

                </div>
                
                {/* Stats Section */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                        {stats.map((stat, index) => (
                            <Reveal key={stat.label} delay={index * 0.1}>
                            <div className="text-left">
                                <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-lg text-gray-200 font-semibold">
                                    {stat.label}
                                </div>
                            </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            <section className="bg-black text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                    <p className="max-w-6xl mx-auto text-center text-3xl md:text-4xl font-black tracking-wide leading-tight">
                        The Trafiicology Logistics team leverages deep supply chain expertise, industry-leading technology, and a trusted carrier network to tackle even the most complex logistics challenges with precision and efficiency.
                    </p>
                    </Reveal>
                </div>
            </section>
         
            <CtaSection />
        </>
    );
}
