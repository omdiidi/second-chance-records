import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SITE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Map, Disc } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="container px-6 mx-auto pt-12">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 space-y-4"
          >
            <h1 className="text-5xl font-serif">Get in touch</h1>
            <p className="text-xl text-muted-foreground">Questions? Requests? Just want to say hello?</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Info */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="space-y-12"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl mb-6">Store Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <Button size="icon" variant="secondary" className="rounded-full">
                         <Phone className="w-4 h-4" />
                       </Button>
                       <span className="text-lg">{SITE_DATA.general.phone}</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <Button size="icon" variant="secondary" className="rounded-full">
                         <Mail className="w-4 h-4" />
                       </Button>
                       <a href={`mailto:${SITE_DATA.general.email}`} className="text-lg hover:text-primary transition-colors">{SITE_DATA.general.email}</a>
                    </div>
                    <div className="flex items-center gap-4">
                       <Button size="icon" variant="secondary" className="rounded-full">
                         <Map className="w-4 h-4" />
                       </Button>
                       <a href={`https://maps.google.com/?q=${SITE_DATA.general.address}`} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors max-w-xs text-left">
                         {SITE_DATA.general.address}
                       </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl mb-4">Hours</h3>
                  <p className="text-xl text-muted-foreground">{SITE_DATA.general.hours}</p>
                </div>

                <div className="pt-4">
                  <Button variant="outline" size="lg" className="gap-2 w-full md:w-auto" asChild>
                    <a href={SITE_DATA.general.discogs} target="_blank" rel="noopener noreferrer">
                      <Disc className="w-4 h-4" />
                      Shop on Discogs
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-secondary/30 p-8 rounded-2xl"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help?" className="min-h-[120px] bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full text-lg h-12">Send Message</Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
