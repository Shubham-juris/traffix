import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
    { value: '46+', label: 'Years in Business' },
    { value: '750+', label: 'Expert Professionals' },
    { value: '449K+', label: 'Loads per Year' },
];

export default function AboutPage() {
    return (
        <>
            <div className="relative min-h-screen bg-black text-white flex flex-col justify-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://placehold.co/1920x1080"
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
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase">
                            About Our<br />
                            <span className="text-primary">Company</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-300">
                            Customized, technology-enabled solutions, executed by experts and delivered by the right capacity.
                        </p>
                        <Button asChild className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-6 py-3 font-bold text-base group">
                            <Link href="#">
                                READ MORE <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                </div>
                
                {/* Stats Section */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-left">
                                <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-lg text-gray-200 font-semibold">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="bg-black text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="max-w-6xl mx-auto text-center text-3xl md:text-4xl font-black tracking-wide leading-tight">
                        SINCE 1979, TRAFFIX' TEAM OF SUPPLY CHAIN EXPERTS HAS BEEN LEVERAGING EXPERIENCE, INDUSTRY-LEADING TECHNOLOGY, AND A TRUSTED CARRIER NETWORK TO TACKLE THE MOST COMPLEX LOGISTICAL CHALLENGES WITH PRECISION AND EXPERTISE.
                    </p>
                </div>
            </section>
        </>
    );
}
