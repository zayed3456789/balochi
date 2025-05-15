
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

const Gallery = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-normal text-gray-800 mb-2">Balochi Cultural Heritage</h1>
          <div className="flex gap-2 text-sm text-gray-500 mb-4">
            <span className="border-r pr-2">Article</span>
            <span className="border-r pr-2">Discussion</span>
            <span>View source</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left content column - Main content */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-gray-700 text-lg mb-4">
              The Balochi people have developed a rich cultural heritage through centuries, expressed in textiles, crafts, music, and social traditions. This article explores visual elements of Balochi culture.
            </p>

            {/* Table of contents - Wikipedia style */}
            <Card className="mb-6 border border-gray-200">
              <CardContent className="p-4">
                <h2 className="text-base font-medium mb-2">Contents</h2>
                <ol className="list-decimal list-inside space-y-1 text-blue-600">
                  <li className="hover:underline"><a href="#textiles">Traditional Patterns & Textiles</a></li>
                  <li className="hover:underline"><a href="#heritage">Regional Textile Heritage</a></li>
                  <li className="hover:underline"><a href="#traditions">Living Traditions</a></li>
                  <li className="hover:underline"><a href="#significance">Cultural Significance</a></li>
                </ol>
              </CardContent>
            </Card>

            <section id="textiles" className="mb-8">
              <h2 className="text-2xl font-normal text-gray-800 mb-4 border-b pb-2">Traditional Patterns & Textiles</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-4">
                  <div className="float-right ml-4 mb-4 max-w-xs">
                    <img 
                      src="/lovable-uploads/fa2381ab-219b-4db3-8e1e-aade8244c8f5.png" 
                      alt="Traditional Balochi textile pattern featuring geometric designs in red, black and white" 
                      className="w-full border border-gray-200"
                    />
                    <p className="text-xs text-gray-500 mt-1 px-1">Traditional Balochi textile featuring geometric patterns in red and black</p>
                  </div>
                  <p className="text-gray-700">
                    Traditional Balochi textile patterns feature intricate geometric designs, often in vibrant red, contrasted with black and white elements. These patterns are commonly used in ceremonial garments and household items, serving both decorative and symbolic purposes.
                  </p>
                  <p className="text-gray-700">
                    The precision and complexity of these designs demonstrate the high level of craftsmanship within Balochi textile traditions. Patterns are often passed down through generations, with specific motifs carrying cultural meaning and regional identification.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="float-left mr-4 mb-4 max-w-xs">
                    <img 
                      src="/lovable-uploads/9754abc0-67b2-419d-a0e7-bba6507be54c.png" 
                      alt="Intricately embroidered Balochi dress detail" 
                      className="w-full border border-gray-200"
                    />
                    <p className="text-xs text-gray-500 mt-1 px-1">Ceremonial embroidery detail showing intricate needlework</p>
                  </div>
                  <p className="text-gray-700">
                    Ceremonial embroidery represents one of the most refined expressions of Balochi textile arts. Using techniques developed over centuries, artisans create detailed needlework that adorns special garments worn during important cultural celebrations and life events.
                  </p>
                  <p className="text-gray-700">
                    The predominant colors in Balochi embroidery—red, green, and white—carry symbolic significance within the culture. These embroidered items are often cherished family heirlooms, passed down through generations as tangible connections to cultural heritage.
                  </p>
                </div>
              </div>
            </section>

            <section id="heritage" className="mb-8">
              <h2 className="text-2xl font-normal text-gray-800 mb-4 border-b pb-2">Regional Textile Heritage</h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/47ff78c7-b08c-47d0-b7c6-9c2a90e7bf31.png" 
                    alt="Map of Pakistan showing various textile techniques across different regions" 
                    className="w-full border border-gray-200"
                  />
                  <p className="text-xs text-gray-500 mt-1 text-center">Regional distribution of textile techniques across Pakistan, including Balochi regions</p>
                </div>
                <p className="text-gray-700">
                  This cultural map highlights the diverse textile traditions across Pakistan, with special emphasis on Balochi embroidery techniques. The geographic distribution demonstrates how Balochi textile arts are part of the rich tapestry of South Asian handicraft traditions, showing both unique characteristics and shared influences with neighboring regions.
                </p>
                <p className="text-gray-700">
                  Regional variations in needlework and design elements are significant, with certain patterns being strongly associated with specific Balochi communities. These variations serve as visual markers of regional identity within the broader Balochi cultural sphere.
                </p>
              </div>
            </section>

            <section id="traditions" className="mb-8">
              <h2 className="text-2xl font-normal text-gray-800 mb-4 border-b pb-2">Living Traditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src="/lovable-uploads/1a46d131-eb19-4978-9301-0ed56a91d154.png" 
                    alt="Balochi men performing traditional dance in desert landscape" 
                    className="w-full mb-2 border border-gray-200"
                  />
                  <h3 className="text-lg font-medium mb-2">Traditional Dance</h3>
                  <p className="text-gray-700 text-sm">
                    Balochi men performing a traditional folk dance against the backdrop of an arid landscape. These dances serve as important cultural expressions, often performed during celebrations and ceremonies to maintain connection with cultural identity.
                  </p>
                </div>
                
                <div>
                  <img 
                    src="/lovable-uploads/a1003ba8-b047-46e5-a464-218171366424.png" 
                    alt="Collection of traditional Balochi instruments and crafts" 
                    className="w-full mb-2 border border-gray-200"
                  />
                  <h3 className="text-lg font-medium mb-2">Traditional Crafts</h3>
                  <p className="text-gray-700 text-sm">
                    A collection of traditional Balochi instruments, baskets, and household items showcasing the diverse craft traditions. These handmade objects reflect centuries of craftsmanship passed down through generations, combining practical utility with aesthetic expression.
                  </p>
                </div>
              </div>
            </section>

            <section id="significance" className="mb-8">
              <h2 className="text-2xl font-normal text-gray-800 mb-4 border-b pb-2">Cultural Significance</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  The artifacts and cultural expressions showcased in this gallery represent centuries of Balochi traditions. The intricate patterns found in textiles and embroidery often contain symbolic meanings, with specific motifs representing protection, fertility, or connection to the natural world.
                </p>
                <p className="text-gray-700">
                  Traditional dances, like the one pictured, serve multiple cultural purposes—from celebration and entertainment to the commemoration of historical events and reinforcement of community bonds. These dances are typically accompanied by distinctive musical traditions using instruments crafted by skilled artisans.
                </p>
                <p className="text-gray-700">
                  The diverse craft traditions shown through household items and musical instruments demonstrate the practical creativity that has always been central to Balochi culture. These crafts represent a harmonious relationship between functionality and artistic expression.
                </p>
              </div>
            </section>

            {/* References section - Wikipedia style */}
            <section className="mb-8">
              <h2 className="text-2xl font-normal text-gray-800 mb-4 border-b pb-2">References</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 pl-1">
                <li>Baloch, N. A. (2018). <i>Textile Traditions of Balochistan</i>. Journal of South Asian Cultural Studies, 42(3), 78-96.</li>
                <li>Ahmed, S. (2016). <i>Traditional Crafts of Pakistan's Indigenous Communities</i>. Islamabad: National Heritage Foundation.</li>
                <li>Khan, M. (2019). <i>Folk Dances and Musical Traditions of the Balochi People</i>. Karachi University Press.</li>
              </ol>
            </section>
          </div>

          {/* Right sidebar - Wikipedia style */}
          <div className="md:col-span-1">
            <Card className="sticky top-4 border border-gray-200">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-3">Balochi Culture</h3>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    <div className="border-b pb-2">
                      <h4 className="text-sm font-medium">Related Articles</h4>
                      <ul className="text-sm text-blue-600 space-y-1 mt-2">
                        <li className="hover:underline"><a href="#">Balochi People</a></li>
                        <li className="hover:underline"><a href="#">History of Balochistan</a></li>
                        <li className="hover:underline"><a href="#">Traditional Textile Arts</a></li>
                        <li className="hover:underline"><a href="#">Folk Music of South Asia</a></li>
                      </ul>
                    </div>
                    
                    <div className="border-b pb-2">
                      <h4 className="text-sm font-medium">Categories</h4>
                      <ul className="text-sm text-blue-600 space-y-1 mt-2">
                        <li className="hover:underline"><a href="#">Cultural Heritage</a></li>
                        <li className="hover:underline"><a href="#">Traditional Textiles</a></li>
                        <li className="hover:underline"><a href="#">Folk Dances</a></li>
                        <li className="hover:underline"><a href="#">Craftsmanship</a></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Tools</h4>
                      <ul className="text-sm text-blue-600 space-y-1 mt-2">
                        <li className="hover:underline"><a href="#">What links here</a></li>
                        <li className="hover:underline"><a href="#">Print/export</a></li>
                        <li className="hover:underline"><a href="#">Download as PDF</a></li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Navigation footer - Wikipedia style */}
        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between text-sm">
          <Button variant="link" className="text-blue-600 px-0">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Balochi History
          </Button>
          <Button variant="link" className="text-blue-600 px-0">
            Balochi Language
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
