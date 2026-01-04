import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { MapPin, Clock, Car, Accessibility, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Visit() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="container px-6 mx-auto pt-12 pb-24 space-y-24">
        
        {/* Header & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Come say hi.
            </h1>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              We're located in the heart of Portland, ready for you to browse, listen, and connect.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Location</h3>
                  <p className="text-muted-foreground text-lg">{SITE_DATA.general.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Hours</h3>
                  <p className="text-muted-foreground text-lg">{SITE_DATA.general.hours}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Car className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Parking</h3>
                  <p className="text-muted-foreground">Street parking is available on Burnside and adjacent side streets.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Accessibility className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Accessibility</h3>
                  <p className="text-muted-foreground">Our shop is wheelchair accessible with a ramp at the main entrance.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="h-[600px] bg-secondary rounded-lg overflow-hidden relative shadow-xl"
          >
            {/* Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5383577713434!2d-122.60447328444066!3d45.52187397910166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0e5b7b9b8b7%3A0x1b7b7b7b7b7b7b7b!2s5744%20E%20Burnside%20St%2C%20Portland%2C%20OR%2097215!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="grayscale contrast-[.9] opacity-80 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </motion.div>
        </div>

        {/* What we do differently */}
        <div className="bg-primary/5 rounded-2xl p-12 md:p-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-serif text-center">What we do differently</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {SITE_DATA.store_features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center shrink-0 text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center shrink-0 text-primary">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-lg font-medium">Listen before you buy</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center shrink-0 text-primary">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-lg font-medium">Friendly, non-judgmental help</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[SITE_DATA.images.vinyl, SITE_DATA.images.hero, SITE_DATA.images.community, SITE_DATA.images.tasha].map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square bg-secondary rounded-md overflow-hidden"
            >
              <img src={img} alt="Store impression" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
