
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <Layout>
      <Hero
        title="Balochi Cultural Heritage"
        subtitle="A visual journey through the rich culture and traditions of the Balochi people"
        backgroundImage="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop"
      />

      <Section
        title="Traditional Patterns & Textiles"
        subtitle="Intricate designs that tell stories of Balochi heritage"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/lovable-uploads/fa2381ab-219b-4db3-8e1e-aade8244c8f5.png" 
                      alt="Traditional Balochi textile pattern featuring geometric designs in red, black and white" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-playfair text-xl font-bold mb-2">Geometric Patterns</h3>
                  <p className="font-roboto text-sm">
                    Traditional Balochi textile patterns featuring intricate geometric designs in vibrant red, contrasted with black and white elements, commonly used in ceremonial garments.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/lovable-uploads/9754abc0-67b2-419d-a0e7-bba6507be54c.png" 
                      alt="Intricately embroidered Balochi dress detail" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-playfair text-xl font-bold mb-2">Ceremonial Embroidery</h3>
                  <p className="font-roboto text-sm">
                    Traditional Balochi embroidery on ceremonial clothing, showcasing skilled needlework with geometric patterns in red, green, and white, often featuring symbolic motifs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        title="Regional Textile Heritage"
        dark={true}
      >
        <div className="max-w-6xl mx-auto mb-8">
          <Card className="overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="/lovable-uploads/47ff78c7-b08c-47d0-b7c6-9c2a90e7bf31.png" 
                    alt="Map of Pakistan showing various textile techniques across different regions" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-playfair text-xl font-bold mb-2 text-balochi-stone">Textile Map of Pakistan</h3>
                <p className="font-roboto text-base text-balochi-stone">
                  This cultural map highlights the diverse textile traditions across Pakistan, including Balochi embroidery techniques. The map showcases regional variations in needlework and design elements, illustrating how Balochi textile arts are part of the rich tapestry of South Asian handicraft traditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        title="Living Traditions"
        subtitle="Cultural expressions that continue to thrive today"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/lovable-uploads/1a46d131-eb19-4978-9301-0ed56a91d154.png" 
                      alt="Balochi men performing traditional dance in desert landscape" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-playfair text-xl font-bold mb-2">Traditional Dance</h3>
                  <p className="font-roboto text-sm">
                    Balochi men performing a traditional folk dance against the backdrop of an arid landscape. These dances serve as important cultural expressions, often performed during celebrations and ceremonies.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="/lovable-uploads/a1003ba8-b047-46e5-a464-218171366424.png" 
                      alt="Collection of traditional Balochi instruments and crafts" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-playfair text-xl font-bold mb-2">Traditional Crafts</h3>
                  <p className="font-roboto text-sm">
                    A collection of traditional Balochi instruments, baskets, and household items showcasing the diverse craft traditions. These handmade objects reflect centuries of craftsmanship passed down through generations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        title="Cultural Significance"
        subtitle="The meaning behind Balochi cultural expressions"
        dark={true}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            The artifacts and cultural expressions showcased in this gallery represent centuries of Balochi traditions. The intricate patterns found in textiles and embroidery often contain symbolic meanings, with specific motifs representing protection, fertility, or connection to the natural world.
          </p>
          <p className="font-roboto text-lg">
            Traditional dances, like the one pictured, serve multiple cultural purposes—from celebration and entertainment to the commemoration of historical events and reinforcement of community bonds. These dances are typically accompanied by distinctive musical traditions using instruments crafted by skilled artisans.
          </p>
          <p className="font-roboto text-lg">
            The diverse craft traditions shown through household items and musical instruments demonstrate the practical creativity that has always been central to Balochi culture. These crafts represent a harmonious relationship between functionality and artistic expression.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Gallery;
