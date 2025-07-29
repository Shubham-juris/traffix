import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/animations/reveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <section className={cn("py-20 sm:py-32", className)}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const heroStats = [
    { number: "1", text: "45 YEARS OF EXPERTISE" },
    { number: "2", text: "THE RIGHT CAPACITY" },
    { number: "3", text: "TECHNOLOGY-ENABLED SOLUTIONS" },
];

export default function Home() {
  return (
    <>
      <section className="relative h-screen bg-black text-white flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080"
            alt="Two engineers discussing plans in a warehouse"
            data-ai-hint="engineers planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center pt-20">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase">
                Custom Solutions for Complex<br />
                <span className="text-primary">Supply Chains</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-300">
                TRAFFIX' solutions are backed by expertise, the right capacity, and 24/7-365 support. We engineer technology-enabled solutions to tackle the most complex supply chain challenges.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button asChild size="lg" className="mt-8 bg-primary text-black hover:bg-primary/80 rounded-full px-6 py-3 font-bold text-base group">
                <Link href="/contact">
                  SHIP WITH US <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroStats.map((stat, index) => (
              <Reveal key={stat.text} delay={index * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {stat.number}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight">{stat.text}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center">What We Do</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            We provide a wide range of services to help your business succeed in the digital world.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Web Development", description: "Building robust and scalable web applications." },
            { title: "UI/UX Design", description: "Creating intuitive and beautiful user experiences." },
            { title: "Digital Marketing", description: "Driving traffic and conversions through strategic campaigns." },
            { title: "Branding", description: "Crafting unique brand identities that resonate." },
            { title: "SEO Optimization", description: "Improving your visibility on search engines." },
            { title: "Content Creation", description: "Engaging your audience with compelling content." },
          ].map((service) => (
            <Reveal key={service.title}>
              <Card className="h-full bg-card hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
      
      <Section className="bg-card">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to start a project?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Let's build something amazing together.</p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
