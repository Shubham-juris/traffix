"use client";

import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string, hasDropdown?: boolean }[];
}

function TraffixLogo() {
    return (
        <div className="text-3xl font-black tracking-wider text-white">
            TRAFFI<span className="text-primary">X</span>
        </div>
    )
}

export function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm lg:hidden",
        "transition-opacity duration-300 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-xs bg-background shadow-lg",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-border">
          <Link href="/" onClick={onClose}>
            <TraffixLogo />
          </Link>
          <Button onClick={onClose} variant="ghost" size="icon">
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Accordion type="single" collapsible className="w-full">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <AccordionItem value={link.label} key={link.href} className="border-b-0">
                  <AccordionTrigger className="py-3 text-lg hover:no-underline hover:text-primary">
                    {link.label}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4">
                    <Link href="#" onClick={onClose} className="block text-base text-muted-foreground hover:text-primary transition-colors py-2">Sub-item 1</Link>
                    <Link href="#" onClick={onClose} className="block text-base text-muted-foreground hover:text-primary transition-colors py-2">Sub-item 2</Link>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link key={link.href} href={link.href} onClick={onClose} className="text-lg text-foreground hover:text-primary transition-colors py-3 flex items-center w-full">
                  {link.label}
                </Link>
              )
            ))}
          </Accordion>

          <div className="border-t border-border pt-4 space-y-4">
            <Button asChild variant="link" className="w-full justify-start text-lg p-0" onClick={onClose}>
              <Link href="#">Login</Link>
            </Button>
            <Button asChild variant="link" className="w-full justify-start text-primary text-lg p-0" onClick={onClose}>
              <Link href="#">Ask an Expert</Link>
            </Button>
            <Button variant="outline" className="w-full" onClick={onClose}>
              Language: En
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
