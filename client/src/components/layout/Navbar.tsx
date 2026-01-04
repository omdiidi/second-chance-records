import { Link, useLocation } from "wouter";
import { Menu, X, ExternalLink, Disc } from "lucide-react";
import { useState, useEffect } from "react";
import { SITE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/visit", label: "Visit" },
    { href: "/community", label: "Community" },
    { href: "/second-chances", label: "Second Chances" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About Tasha" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <a 
          className={`text-sm tracking-wide transition-colors duration-200 hover:text-primary ${
            isActive ? "font-semibold text-primary" : "text-muted-foreground"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {label}
        </a>
      </Link>
    );
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
             {/* Open door motif icon */}
            <div className="w-8 h-8 border-2 border-foreground rounded-t-full relative flex items-end justify-center overflow-hidden transition-transform group-hover:scale-105">
               <div className="w-1 h-full bg-foreground absolute left-[6px] top-1"></div>
               <div className="w-1 h-full bg-foreground absolute right-[6px] top-1"></div>
               <div className="w-8 h-1 bg-foreground absolute bottom-0"></div>
            </div>
            <span className="font-serif font-bold text-xl tracking-tight hidden sm:block">
              Second Chance
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <Button variant="outline" size="sm" asChild className="ml-4 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href={SITE_DATA.general.discogs} target="_blank" rel="noopener noreferrer">
              <Disc className="w-4 h-4" />
              Shop on Discogs
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-lg animate-in slide-in-from-top-2 lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
            <Button className="w-full gap-2" asChild>
              <a href={SITE_DATA.general.discogs} target="_blank" rel="noopener noreferrer">
                <Disc className="w-4 h-4" />
                Shop on Discogs
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
