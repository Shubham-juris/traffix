import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Reveal } from '@/components/animations/reveal';

const stats = [
    { value: '46+', label: 'Years in Business' },
    { value: '750+', label: 'Expert Professionals' },
    { value: '449K+', label: 'Loads per Year' },
];

const timelineEvents = [
    {
        year: "2017",
        title: "OPENS US HEADQUARTERS",
        description: "In 2017, Trafficology Logistics, a then $71M company, established its US headquarters in Chicago.",
        image: "https://placehold.co/600x400",
        imageHint: "chicago skyline"
    },
    {
        year: "2018",
        title: "MEXICO EXPANSION",
        description: "Trafficology Logistics opened its Mexico operation, expanding its service offering to include Mexico cross border transportation.",
        image: "https://placehold.co/600x400",
        imageHint: "truck highway"
    },
    {
        year: "2019",
        title: "COURIER SERVICE",
        description: "As part of its LTL offering, Trafficology Logistics added courier to its suite of services.",
        image: "https://placehold.co/600x400",
        imageHint: "delivery courier"
    }
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


function TimelineSection() {
    return (
        <section className="bg-black py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {timelineEvents.map((event, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-white text-black rounded-lg overflow-hidden flex flex-col h-full relative pb-10">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            data-ai-hint={event.imageHint}
                                            width={600}
                                            height={400}
                                            className="w-full object-cover filter grayscale"
                                        />
                                        <CardContent className="p-6 flex-grow">
                                            <h3 className="text-2xl font-black text-black">
                                                {event.year} &ndash; {event.title}
                                            </h3>
                                            <p className="mt-4 text-gray-600">
                                                {event.description}
                                            </p>
                                        </CardContent>
                                        <div 
                                            className="absolute bottom-0 right-0 w-0 h-0"
                                            style={{
                                                borderBottom: '40px solid white',
                                                borderLeft: '40px solid transparent',
                                            }}
                                        />
                                        <div 
                                            className="absolute bottom-0 right-0 w-full h-10 bg-black"
                                            style={{
                                                clipPath: 'polygon(calc(100% - 40px) 0, 100% 0, 100% 100%, 100% 100%)'
                                            }}
                                        />
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute top-[-4rem] right-0 flex items-center gap-2">
                        <CarouselPrevious className="relative -left-0 -top-0 translate-y-0 bg-gray-800 border-primary text-primary hover:bg-primary hover:text-black" />
                        <CarouselNext className="relative -left-0 -top-0 translate-y-0 bg-gray-800 border-primary text-primary hover:bg-primary hover:text-black" />
                    </div>
                </Carousel>
                </Reveal>
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
                        <Reveal delay={0.2}>
                        <Button asChild className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-6 py-3 font-bold text-base group">
                            <Link href="#">
                                READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
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
                        SINCE 1979, TRAFFICOLOGY LOGISTICS' TEAM OF SUPPLY CHAIN EXPERTS HAS BEEN LEVERAGING EXPERIENCE, INDUSTRY-LEADING TECHNOLOGY, AND A TRUSTED CARRIER NETWORK TO TACKLE THE MOST COMPLEX LOGISTICAL CHALLENGES WITH PRECISION AND EXPERTISE.
                    </p>
                    </Reveal>
                </div>
            </section>
            <TimelineSection />
            <CtaSection />
        </>
    );
}
