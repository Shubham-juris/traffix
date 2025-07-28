"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, ChevronRight, Truck, Boxes, Warehouse, Plane, Ship, Train, Globe, Cpu, ShoppingBasket, Thermometer, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNav } from './mobile-nav';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const navLinks = [
  { href: '#', label: 'Shippers', hasDropdown: true },
  { href: '/careers', label: 'Carriers' },
  { href: '/services', label: 'Solutions' },
  { href: '/about', label: 'Company' },
  { href: '/news', label: 'Resources' },
];

const shipperSolutions = [
  { href: '/shippers/ftl', label: 'Full Truckload (FTL)', icon: Truck },
  { href: '/shippers/ltl', label: 'Less-than-Truckload (LTL)', icon: Boxes },
  { href: '#', label: 'Flatbed', icon: Truck },
  { href: '#', label: 'Temperature Controlled', icon: Thermometer },
  { href: '#', label: 'Produce', icon: ShoppingBasket },
  { href: '#', label: 'Managed Transportation', icon: Cpu },
  { href: '#', label: 'Warehousing', icon: Warehouse },
  { href: '#', label: 'Expedited', icon: Plane },
  { href: '#', label: 'Drayage', icon: Ship },
  { href: '#', label: 'Intermodal', icon: Train },
  { href: '#', label: 'Canada-US Cross-Border', icon: Map },
  { href: '#', label: 'Mexico Cross-Border', icon: Globe },
];

function TraffixLogo() {
    return (
        <div className="text-3xl font-black tracking-wider text-white">
            TRAFFI<span className="text-primary">X</span>
        </div>
    )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
          scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <TraffixLogo />
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <DropdownMenu key={link.href}>
                    <DropdownMenuTrigger asChild>
                       <button className="flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        {link.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-96 p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {shipperSolutions.map(solution => (
                          <DropdownMenuItem key={solution.label} asChild>
                            <Link href={solution.href} className="flex items-center gap-2">
                              <solution.icon className="h-5 w-5 text-primary" />
                              <span className="text-sm font-medium">{solution.label}</span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link key={link.href} href={link.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-6">
              <Button asChild variant="link" className="text-primary text-sm font-semibold p-0">
                <Link href="/contact" className="flex items-center">Ask an Expert <div className="ml-2 bg-primary rounded-full p-1 "><ChevronRight className="h-4 w-4 text-black"/></div></Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-transparent border-border rounded-md">
                    En <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Español</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="lg:hidden">
              <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navLinks={navLinks} />
    </>
  );
}
