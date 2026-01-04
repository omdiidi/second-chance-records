import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, HandHeart, Briefcase, GraduationCap, Home } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const iconMap: Record<string, any> = {
  "Jobs": Briefcase,
  "Housing & Health": Home,
  "Legal": GraduationCap, // Using cap as legal metaphor or just a generic icon
  "Training": GraduationCap,
  "Business": Briefcase,
};

export default function SecondChances() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <section className="bg-primary/10 py-20 border-b border-primary/10">
        <div className="container px-6 mx-auto max-w-4xl text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-primary-foreground/80 text-foreground"
          >
            Second Chances
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Everyone deserves a fresh start. We believe that people coming home face significant barriers like work, housing, and transportation, but with the right support, rebuilding trust and community is possible.
          </motion.p>
        </div>
      </section>

      {/* Resources */}
      <section className="container px-6 mx-auto py-16 space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-serif">Start Here</h2>
          <p className="text-muted-foreground max-w-2xl">
            A curated list of local organizations dedicated to helping folks get back on their feet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_DATA.resources.map((resource, idx) => {
            const Icon = iconMap[resource.category] || Heart;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs uppercase tracking-wider font-medium">{resource.category}</span>
                    </div>
                    <CardTitle className="font-serif text-xl">{resource.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full gap-2 group" asChild>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <Alert className="bg-muted border-none max-w-2xl mx-auto mt-12">
          <AlertTitle className="font-medium">Disclaimer</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            This page is for information purposes only and does not constitute legal advice. Please contact the organizations directly for specific assistance.
          </AlertDescription>
        </Alert>
      </section>

      {/* How to help */}
      <section className="bg-secondary/30 py-24">
        <div className="container px-6 mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif">How to help</h2>
            <p className="text-muted-foreground">Support the mission of second chances.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background border-none shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-serif">
                  <HandHeart className="w-6 h-6 text-primary" />
                  Volunteer & Donate
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>Many of the organizations listed above rely on volunteer support and donations. Consider giving your time or resources to groups like Constructing Hope or Mercy Corps NW.</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-serif">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Hire Fairly
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>If you're a business owner, consider fair chance hiring practices. Giving someone a job is one of the most powerful ways to support reentry and reduce recidivism.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
