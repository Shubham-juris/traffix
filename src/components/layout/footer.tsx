import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61579724252934', name: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/trafiicology_logistics/', name: 'Instagram' },
];

const footerNavLinks = [
    { href: '#', label: 'Shippers' },
    { href: '/careers', label: 'Carriers' },
    { href: '/services', label: 'Solutions' },
    { href: '/about', label: 'Company' },
    { href: '/contact', label: 'Contact' },
];

function TrafiicologyLogo() {
    return (
        <div className="text-3xl font-black tracking-wider text-white">
            TRAFIICOLOGY <span className="text-primary">LOGISTICS</span>
        </div>
    )
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <TrafiicologyLogo />
            <p className="text-muted-foreground mt-4">Reimagining digital experiences.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerNavLinks.map(link => (
                 <li key={link.label}>
                   <Link href={link.href} className="text-muted-foreground hover:text-primary">
                     {link.label}
                   </Link>
                 </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>123 Digital Avenue</p>
              <p>Web City, WC 12345</p>
              <a href="mailto:hello@trafiicologylogistics.com" className="hover:text-primary">
                hello@trafiicologylogistics.com
              </a>
            </address>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="text-muted-foreground hover:text-primary" 
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Trafiicology Logistics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
