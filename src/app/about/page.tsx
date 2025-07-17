import { Reveal } from '@/components/animations/reveal';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const teamMembers = [
  { name: 'Alice Johnson', role: 'CEO & Founder', image: 'https://placehold.co/100x100' },
  { name: 'Bob Williams', role: 'CTO', image: 'https://placehold.co/100x100' },
  { name: 'Charlie Brown', role: 'Lead Designer', image: 'https://placehold.co/100x100' },
  { name: 'Diana Prince', role: 'Marketing Director', image: 'https://placehold.co/100x100' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">About Us</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We are a team of passionate creators, thinkers, and problem solvers dedicated to building exceptional digital experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <Image src="https://placehold.co/600x400" data-ai-hint="team collaboration" alt="Our team working" width={600} height={400} className="rounded-lg shadow-lg" />
            </Reveal>
            <Reveal>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                Our mission is to empower businesses by leveraging technology and design to create products that are not only beautiful but also highly functional and user-centric. We believe in collaboration, innovation, and pushing the boundaries of what's possible.
              </p>
              <p className="mt-4 text-muted-foreground">
                From startups to established enterprises, we partner with our clients to understand their unique challenges and deliver tailored solutions that drive results.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Meet the Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">The brilliant minds behind our success.</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Reveal key={member.name}>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} data-ai-hint="portrait person" />
                      <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
