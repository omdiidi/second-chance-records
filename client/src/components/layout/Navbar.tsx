import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, Disc, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { SITE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

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
    { href: "/about", label: "About Tasha" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <a
          className={`text-sm tracking-wide transition-colors duration-200 hover:text-primary ${isActive ? "font-semibold text-primary" : "text-muted-foreground"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            {/* Open door motif icon */}
            <img
              src={SITE_DATA.images.logo}
              alt="Second Chance Records"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}

          {/* Shop Dropdown */}
          <div
            className="relative ml-4"
            onMouseEnter={() => setShopDropdownOpen(true)}
            onMouseLeave={() => setShopDropdownOpen(false)}
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180' : ''}`} />
            </Button>

            {shopDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <Link href="/shop">
                  <a className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-secondary transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                    Online Shop
                  </a>
                </Link>
                <a
                  href={SITE_DATA.general.discogs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-secondary transition-colors border-t border-border"
                >
                  <Disc className="w-4 h-4" />
                  Discogs
                </a>
              </div>
            )}
          </div>
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

            {/* Mobile Shop Dropdown */}
            <div className="space-y-2">
              <button
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Shop
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {shopDropdownOpen && (
                <div className="ml-4 space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <Link href="/shop">
                    <a
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Online Shop
                    </a>
                  </Link>
                  <a
                    href={SITE_DATA.general.discogs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-secondary rounded-md transition-colors"
                  >
                    <Disc className="w-4 h-4" />
                    Discogs
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
