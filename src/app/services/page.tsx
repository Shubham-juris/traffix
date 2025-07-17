import { Reveal } from '@/components/animations/reveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const services = [
    { title: "Web Development", items: ["Custom Web Apps", "E-commerce Solutions", "CMS Development"] },
    { title: "UI/UX Design", items: ["User Research", "Wireframing & Prototyping", "Interaction Design"] },
    { title: "Digital Marketing", items: ["SEO & SEM", "Social Media Campaigns", "Email Marketing"] },
    { title: "Branding & Strategy", items: ["Logo Design", "Brand Strategy", "Style Guides"] },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">Our Services</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We offer a comprehensive suite of services to elevate your brand and business.
            </p>
          </Reveal>
        </div>
      </section>
      
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map(service => (
              <Reveal key={service.title}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.items.map(item => (
                        <li key={item} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
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
