import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Music, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="container px-6 mx-auto pt-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-[3/4] md:aspect-square rounded-lg overflow-hidden shadow-xl"
        >
          <img src={SITE_DATA.images.tasha} alt="Tasha Brain" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-5xl font-serif">Hi, I'm Tasha.</h1>
          <h2 className="text-xl text-muted-foreground font-medium">Owner & Founder of Second Chance Records</h2>
          
          <div className="prose prose-lg text-muted-foreground relative p-6 border-l-2 border-primary/20">
             <span className="absolute -top-3 left-6 text-xs uppercase tracking-widest text-primary/50 font-medium bg-background px-2">Filler Text</span>
             <p>
               I opened Second Chance Records six months ago with a simple idea: that music has the power to heal, and that everyone deserves a place where they can start fresh.
             </p>
             <p>
               Growing up in Portland, I spent my weekends digging through crates at dusty shops, finding magic in forgotten albums. But I also saw how hard it was for people in my community to find their footing after making mistakes.
             </p>
             <p>
               This shop is my way of bringing those two worlds together. It's a space where the vinyl is cleaned with care, and where the people are treated with dignity, no matter their past. Whether you're a serious collector or just looking for that one song your dad used to play, you're welcome here.
             </p>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <section className="bg-secondary/30 py-24">
        <div className="container px-6 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-background rounded-full flex items-center justify-center text-primary shadow-sm">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg">Music First</h3>
              <p className="text-sm text-muted-foreground">We believe in the power of sound to connect us all.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-background rounded-full flex items-center justify-center text-primary shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg">Community</h3>
              <p className="text-sm text-muted-foreground">A safe, welcoming space for everyone in the neighborhood.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-background rounded-full flex items-center justify-center text-primary shadow-sm">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg">Empathy</h3>
              <p className="text-sm text-muted-foreground">Leading with kindness and understanding, always.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-background rounded-full flex items-center justify-center text-primary shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg">Care</h3>
              <p className="text-sm text-muted-foreground">Treating every record and every person with respect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* In the shop */}
      <section className="container px-6 mx-auto py-24">
        <h2 className="text-3xl font-serif text-center mb-12">In the shop</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-md bg-card">
            <CardContent className="pt-6 text-center space-y-4">
              <p className="font-serif text-xl italic">"Handwritten notes"</p>
              <p className="text-muted-foreground text-sm">
                You'll find my personal thoughts and recommendations on sticky notes all over the bins.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-card">
            <CardContent className="pt-6 text-center space-y-4">
              <p className="font-serif text-xl italic">"Listening Station"</p>
              <p className="text-muted-foreground text-sm">
                Two turntables ready for you to spin anything in the shop before you buy.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-card">
            <CardContent className="pt-6 text-center space-y-4">
              <p className="font-serif text-xl italic">"Fresh Sleeves"</p>
              <p className="text-muted-foreground text-sm">
                Every used record gets a ultrasonic clean and a brand new anti-static inner sleeve.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
