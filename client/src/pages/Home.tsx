import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, Clock, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SITE_DATA } from "@/lib/data";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function VideoCard({ video }: { video: typeof SITE_DATA.videos[0] }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="group cursor-pointer space-y-3" onClick={togglePlay}>
      <div className="aspect-video bg-secondary rounded-md overflow-hidden relative group-hover:shadow-lg transition-all duration-300">
        {!isPlaying ? (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </>
        ) : (
          <video
            ref={videoRef}
            src={video.src}
            className="w-full h-full object-cover"
            controls
            autoPlay
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-medium group-hover:text-primary transition-colors">{video.title}</h3>
        <p className="text-sm text-muted-foreground">{video.description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* 1. Mission Statement Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_DATA.images.hero}
            alt="Record store interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 px-6 py-12 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight text-foreground tracking-tight">
              {SITE_DATA.mission.headline}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              {SITE_DATA.mission.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8 py-6 h-auto font-medium" asChild>
                <Link href="/visit">Visit the shop</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto font-medium bg-transparent border-foreground/20 hover:bg-foreground/5" asChild>
                <Link href="/second-chances">Second chance resources</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Community Events Preview */}
      <section className="container px-6 mx-auto">
        <motion.div {...fadeIn} className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border pb-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif">Community Events</h2>
              <p className="text-muted-foreground">Connecting our neighborhood through music and support.</p>
            </div>
            <Button variant="ghost" className="gap-2 group" asChild>
              <Link href="/community">
                View all events <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_DATA.events.slice(0, 3).map((event) => (
              <Card key={event.id} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="text-primary text-sm font-medium mb-2 uppercase tracking-wide">{event.neighborhood}</div>
                  <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <span className="text-xs text-muted-foreground/60 italic">Event list updated monthly</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. About the Store Preview */}
      <section className="bg-secondary/30 py-24">
        <div className="container px-6 mx-auto">
          <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif">A different kind of record store.</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Find us</h3>
                    <p className="text-muted-foreground">{SITE_DATA.general.address}</p>
                    <a
                      href={`https://maps.google.com/?q=${SITE_DATA.general.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm mt-2 inline-block hover:underline"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Hours</h3>
                    <p className="text-muted-foreground">{SITE_DATA.general.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-serif text-xl mb-4">What you'll find here</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SITE_DATA.store_features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              {/* Embed map or just an image placeholder */}
              <img src={SITE_DATA.images.vinyl} alt="Store interior" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Video Section */}
      <section className="container px-6 mx-auto">
        <motion.div {...fadeIn} className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-serif">From the shop</h2>
            <p className="text-muted-foreground">Stories, sessions, and sounds from our community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_DATA.videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Reviews Highlight */}
      <section className="bg-primary/5 py-24">
        <div className="container px-6 mx-auto max-w-5xl">
          <motion.div {...fadeIn} className="text-center space-y-12">
            <h2 className="text-3xl font-serif">Community Love</h2>

            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {SITE_DATA.reviews.slice(0, 5).map((review) => (
                  <CarouselItem key={review.id}>
                    <div className="p-6 md:p-12">
                      <div className="space-y-6">
                        <div className="flex justify-center gap-1 text-primary">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-xl md:text-2xl font-serif leading-relaxed">
                          "{review.text}"
                        </blockquote>
                        <div className="space-y-2">
                          <cite className="not-italic font-medium block text-lg">— {review.author}</cite>
                          {review.response && (
                            <p className="text-sm text-muted-foreground bg-background/50 inline-block px-3 py-1 rounded-full">
                              Response: {review.response}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="container px-6 mx-auto pb-12">
        <motion.div
          {...fadeIn}
          className="bg-foreground text-background rounded-2xl p-12 md:p-24 text-center space-y-8 relative overflow-hidden"
        >
          {/* Decorative motif background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)' }}></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif relative z-10">
            Stop by, dig through the bins, <br className="hidden md:block" />
            and leave with something that gets a second spin.
          </h2>
          <div className="relative z-10 pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-6 h-auto" asChild>
              <Link href="/visit">Plan your visit</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
