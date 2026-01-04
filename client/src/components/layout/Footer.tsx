import { Link } from "wouter";
import { SITE_DATA } from "@/lib/data";
import { Instagram, MapPin, Mail, Disc } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-border mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <img
              src={SITE_DATA.images.logo}
              alt="Second Chance Records"
              className="h-12 w-auto object-contain"
            />
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              {SITE_DATA.mission.subhead}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/visit"><a className="hover:text-primary transition-colors">Visit</a></Link></li>
              <li><Link href="/community"><a className="hover:text-primary transition-colors">Community</a></Link></li>
              <li><Link href="/second-chances"><a className="hover:text-primary transition-colors">Second Chances</a></Link></li>
              <li><Link href="/shop"><a className="hover:text-primary transition-colors">Shop</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Tasha</a></Link></li>
            </ul>
          </div>

          {/* Visit */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Visit Us</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>{SITE_DATA.general.address}</span>
              </p>
              <p className="pl-6">{SITE_DATA.general.hours}</p>
              <p className="flex items-center gap-2 pt-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href={`mailto:${SITE_DATA.general.email}`} className="hover:text-primary transition-colors">{SITE_DATA.general.email}</a>
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Connect</h4>
            <div className="flex flex-col gap-4">
              <a
                href={SITE_DATA.general.discogs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Disc className="w-5 h-5" />
                Shop on Discogs
              </a>
              <a
                href={SITE_DATA.general.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Second Chance Records. All rights reserved.</p>
          <p>Designed with care in Portland.</p>
        </div>
      </div>
    </footer>
  );
}
