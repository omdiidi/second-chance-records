import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SITE_DATA } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Disc, Filter, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Shop() {
  // Duplicate products to make grid of 12
  const allProducts = [...SITE_DATA.sample_products, ...SITE_DATA.sample_products].map((p, i) => ({...p, id: i}));
  
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  
  const genres = Array.from(new Set(allProducts.map(p => p.genre)));

  const filteredProducts = allProducts.filter(product => {
    const price = parseInt(product.price.replace('$', ''));
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(product.genre);
    return matchesPrice && matchesGenre;
  });

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-background border-b border-border pt-12 pb-8 sticky top-20 z-30">
        <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-serif font-medium">Shop Selection</h1>
            <p className="text-sm text-muted-foreground mt-1">
              A small sample of what's in store. Full inventory on Discogs.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-serif">Filter Records</SheetTitle>
                </SheetHeader>
                <div className="py-6 space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-medium text-sm">Price Range (${priceRange[0]} - ${priceRange[1]})</h3>
                    <Slider 
                      defaultValue={[0, 100]} 
                      max={100} 
                      step={1} 
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium text-sm">Genres</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {genres.map(genre => (
                        <div key={genre} className="flex items-center space-x-2">
                          <Checkbox 
                            id={genre} 
                            checked={selectedGenres.includes(genre)}
                            onCheckedChange={() => toggleGenre(genre)}
                          />
                          <Label htmlFor={genre} className="text-sm font-normal cursor-pointer">{genre}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="secondary"
                    onClick={() => {
                      setPriceRange([0, 100]);
                      setSelectedGenres([]);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <Button className="gap-2" asChild>
               <a href={SITE_DATA.general.discogs} target="_blank" rel="noopener noreferrer">
                <Disc className="w-4 h-4" /> Shop All on Discogs
               </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-6 mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layout
            >
              <Card className="border-none shadow-none group cursor-pointer bg-transparent">
                <div className="relative aspect-square overflow-hidden rounded-md bg-secondary mb-3 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <img 
                    src={product.image} 
                    alt={product.album} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="font-normal bg-background/90 backdrop-blur-sm shadow-sm">{product.condition}</Badge>
                  </div>
                </div>
                <CardContent className="p-0 space-y-1">
                  <h3 className="font-medium leading-tight group-hover:text-primary transition-colors">{product.album}</h3>
                  <p className="text-sm text-muted-foreground">{product.artist}</p>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm font-medium">{product.price}</span>
                    <span className="text-xs text-muted-foreground border border-border px-1.5 py-0.5 rounded-full">{product.genre}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-secondary/50 rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-2xl font-serif">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our online inventory is limited. Visit us in person to dig through thousands of records, or check our full catalog on Discogs.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/visit">Visit Store</Link>
            </Button>
            <Button asChild>
              <a href={SITE_DATA.general.discogs} target="_blank" rel="noopener noreferrer">
                Browse on Discogs
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
