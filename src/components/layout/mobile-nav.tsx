"use client";

import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm md:hidden",
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
          <Link href="/" onClick={onClose} className="text-2xl font-bold text-primary">
            Traffix.
          </Link>
          <Button onClick={onClose} variant="ghost" size="icon">
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={onClose} className="text-lg text-foreground hover:text-primary transition-colors py-2">
              {link.label}
            </Link>
          ))}
          <Button asChild variant="default" className="mt-4" onClick={onClose}>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
