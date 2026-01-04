import { motion } from "framer-motion";
import { useState } from "react";
import { SITE_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Community() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredEvents = SITE_DATA.events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    // Mock filter logic since we don't have categories in the data yet, just using neighborhood as a proxy for demo
    const matchesFilter = filter === "All" ? true : event.neighborhood.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-secondary/30 py-20">
        <div className="container px-6 mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif"
          >
            Community Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Connect with neighbors, discover local art, and support the community.
          </motion.p>
        </div>
      </div>

      <div className="container px-6 mx-auto -mt-8">
        <Card className="p-6 shadow-lg border-border/50 bg-card mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search events..." 
                className="pl-10" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {["All", "Pearl District", "Alberta", "Downtown"].map((f) => (
                <Button 
                  key={f} 
                  variant={filter === f ? "default" : "outline"}
                  onClick={() => setFilter(f)}
                  className="whitespace-nowrap"
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="font-normal">{event.neighborhood}</Badge>
                  </div>
                  <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50">
                   <Button variant="link" className="px-0 text-primary" asChild>
                     <a href={event.link}>Learn more <span className="sr-only">about {event.title}</span></a>
                   </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p>No events found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
