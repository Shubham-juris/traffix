import { Reveal } from '@/components/animations/reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const openPositions = [
    { title: 'Senior Frontend Developer', location: 'Remote', type: 'Full-time' },
    { title: 'UX/UI Designer', location: 'Web City, WC', type: 'Full-time' },
    { title: 'Digital Marketing Specialist', location: 'Remote', type: 'Part-time' },
];

export default function CareersPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">Join Our Team</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We're looking for talented individuals to help us build the future of digital.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
                <h2 className="text-3xl sm:text-4xl font-bold text-center">Open Positions</h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {openPositions.map(pos => (
                    <Reveal key={pos.title}>
                        <Card className="flex flex-col h-full">
                            <CardHeader>
                                <CardTitle>{pos.title}</CardTitle>
                                <CardDescription>{pos.location} &middot; {pos.type}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">We're seeking a passionate {pos.title} to join our dynamic team. If you love challenges and innovation, this is the place for you.</p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild>
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
