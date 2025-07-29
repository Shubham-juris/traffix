import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/animations/reveal';
import { SVGProps } from 'react';

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
        description: 'You can rely on your dedicated TRAFFIX team for clear communication through your preferred method: email, phone, or even WhatsApp®.',
    },
    {
        title: 'Streamlined Process',
        description: 'Moving freight between Mexico and the USA requires a coordinated team effort. Choose TRAFFIX as your sole point of contact and let us handle all the details for you.',
    },
    {
        title: 'Bonded & CTPAT Certified',
        description: 'Pay duties and taxes at your chosen destination point with TRAFFIX, your bonded and CTPAT certified cross-border partner.',
    },
    {
        title: 'Cross Docking Facilities',
        description: "Take advantage of TRAFFIX' strategically located cross docking facilities located at the US/Mexico border.",
    },
    {
        title: 'Risk Mitigation',
        description: "You can relax knowing that TRAFFIX' risk management team and our security procedures protect you from fraudulent carriers.",
    },
    {
        title: 'Customized Solutions',
        description: "In addition to Mexico cross-border services, TRAFFIX' team of supply chain experts will work closely with you to create tailored logistics solutions that fit your unique requirements.",
    },
];

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

export default function MexicoCrossBorderPage() {
    return (
        <>
            <div className="relative h-screen bg-black text-white flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://placehold.co/1920x1080"
                        alt="Map of Mexico and the southern US"
                        data-ai-hint="mexico us map"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/80 to-black" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 items-center gap-8">
                    <div className="flex justify-center items-center">
                        <ArrowsIcon className="w-48 h-48 text-primary" />
                    </div>
                    <div className="text-left">
                        <Reveal>
                            <MexicoIcon className="w-16 h-16 mb-4" />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase">
                                Mexico Cross <br /> Border
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="mt-6 text-xl max-w-lg text-gray-300">
                                Your strategic partner for high-performance cross border solutions.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-8 py-3 font-bold text-base group">
                                <Link href="/contact">
                                    SHIP WITH US <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </Reveal>
                    </div>
                </div>
            </div>
            <WhatsIncludedSection />
        </>
    );
}
