import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

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
    <div className="text-3xl font-black tracking-tight text-white">
      TRAFIICOLOGY <span className="text-primary">LOGISTICS</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar: Logo & Description */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="pb-6 border-b border-border/50">
              <TrafiicologyLogo />
              <p className="text-muted-foreground mt-4 text-base max-w-sm mx-auto lg:mx-0">
                Reimagining digital experiences.
              </p>
            </div>
          </div>

          {/* Right Section: Navigation, Contact, Social */}
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-8">
            {/* Navigation */}
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-4 text-base relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-border">
                Navigation
              </h4>
              <ul className="space-y-3 mt-6">
                {footerNavLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-4 text-base relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-border">
                Contact
              </h4>
              <address className="not-italic text-muted-foreground space-y-4 mt-6 text-base">
                <p className="flex items-center justify-center md:justify-start gap-3">
                  <span className="p-1.5 border border-border rounded-full">
                    <MapPin className="h-5 w-5 text-muted-foreground animate-pulse hover:animate-none" />
                  </span>
                  11919 149 Ave SE, Calgary, AB T3S 0A7, Canada
                </p>
                <p className="flex items-center justify-center md:justify-start gap-3">
                  <span className="p-1.5 border border-border rounded-full">
                    <Phone className="h-5 w-5 text-muted-foreground animate-pulse hover:animate-none" />
                  </span>
                  <a
                    href="tel:+1825-883-1328"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    +1 825-883-1328
                  </a>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-3">
                  <span className="p-1.5 border border-border rounded-full">
                    <Mail className="h-5 w-5 text-muted-foreground animate-pulse hover:animate-none" />
                  </span>
                  <a
                    href="mailto:services@trafiicologylogistics.com"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    services@trafiicologylogistics.com
                  </a>
                </p>
              </address>
            </div>

            {/* Social Links */}
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-4 text-base relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-border">
                Follow Us
              </h4>
              <div className="flex justify-center md:justify-start space-x-6 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="p-1.5 border border-border rounded-full">
                      <social.icon className="h-6 w-6 animate-pulse hover:animate-none" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 relative">
          <div className="relative z-10 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.772097070614!2d-113.98701368429176!3d51.08005487956692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f3b7c8b3b7b%3A0x5e4a2c8b6f6e6f0d!2s76%20Westwinds%20Crescent%20NE%201115%2C%20Suite%203%2C%20Calgary%2C%20AB%20T3J%205H2%2C%20Canada!5e0!3m2!1sen!2sca!4v1698765432109!5m2!1sen!2sca"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trafiicology Logistics Location"
              className="group-hover:scale-[1.02] transition-transform duration-300"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[12px] pointer-events-none"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Trafiicology Logistics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}