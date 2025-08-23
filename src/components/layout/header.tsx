"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { shipperSolutions } from "@/lib/data";

const navLinks = [
  { href: "#", label: "Shippers", hasDropdown: true },
  { href: "/careers", label: "Carriers" },
  { href: "/services", label: "Solutions" },
  { href: "/about", label: "Company" },
];

function TrafficologyLogo() {
  return (
    <div className="text-3xl font-black tracking-wider text-white">
      TRAFFICOLOGY<span className="text-primary">LOGISTICS</span>{" "}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shipperMenuOpen, setShipperMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled ? "bg-background/90 shadow-md backdrop-blur" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <TrafficologyLogo />
            </Link>
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <DropdownMenu
                    key={link.href}
                    open={shipperMenuOpen}
                    onOpenChange={setShipperMenuOpen}
                  >
                    <DropdownMenuTrigger asChild>
                      <button
                        onMouseEnter={() => setShipperMenuOpen(true)}
                        className={cn(
                          "flex items-center text-sm font-semibold transition-colors",
                          pathname === link.href
                            ? "text-primary underline"
                            : "text-white hover:text-primary"
                        )}
                      >
                        {link.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      onMouseLeave={() => setShipperMenuOpen(false)}
                      className="w-96 p-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {shipperSolutions.map((solution) => (
                          <DropdownMenuItem key={solution.label} asChild>
                            <Link
                              href={solution.href}
                              className="flex items-center gap-2 hover:text-primary"
                            >
                              <solution.icon className="h-5 w-5 text-primary" />
                              <span className="text-sm font-medium">
                                {solution.label}
                              </span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      pathname === link.href
                        ? "text-primary underline"
                        : "text-white hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
            <div className="hidden lg:flex items-center space-x-6">
              <Button
                asChild
                variant="link"
                className="text-primary text-sm font-semibold p-0"
              >
                <Link href="/contact" className="flex items-center">
                  Ask an Expert
                  <div className="ml-2 bg-primary rounded-full p-1">
                    <ChevronRight className="h-4 w-4 text-black" />
                  </div>
                </Link>
              </Button>
            </div>
            <div className="flex items-center lg:hidden">
              <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {isClient && (
        <MobileNav
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navLinks={navLinks}
        />
      )}
    </>
  );
}
