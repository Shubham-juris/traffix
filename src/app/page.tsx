import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://placehold.co/1920x1080/1A1A1A/A30000"
          alt="Background video placeholder"
          data-ai-hint="abstract technology"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              Driving Growth Through
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight mt-2">
              Innovative Solutions
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-neutral-300">
              We are a full-service digital agency that helps brands to grow at scale. We build amazing products, create beautiful experiences and make our clients successful.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </Reveal>
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
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
