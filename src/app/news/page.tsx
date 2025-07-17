import { Reveal } from '@/components/animations/reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  { title: "The Future of Web Design", date: "July 20, 2024", excerpt: "Exploring the latest trends shaping the digital landscape.", image: "https://placehold.co/400x250" },
  { title: "Why Your Business Needs a Strong Brand Identity", date: "July 15, 2024", excerpt: "A deep dive into the power of branding and how it can elevate your business.", image: "https://placehold.co/400x250" },
  { title: "5 SEO Tips to Boost Your Ranking in 2024", date: "July 10, 2024", excerpt: "Practical tips to improve your search engine visibility and drive organic traffic.", image: "https://placehold.co/400x250" },
];

export default function NewsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">News & Insights</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Stay updated with the latest from our team and the industry.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Reveal key={post.title}>
                <Card className="flex flex-col h-full overflow-hidden">
                  <Image src={post.image} alt={post.title} width={400} height={250} className="w-full object-cover" data-ai-hint="technology abstract" />
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0">
                      <Link href="#">Read More</Link>
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
