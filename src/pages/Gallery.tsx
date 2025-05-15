
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800",
      title: "Desert Landscape",
      description: "The arid landscapes of Balochistan that have shaped the Balochi way of life for centuries."
    },
    {
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800",
      title: "Traditional Architecture",
      description: "Mosques and historical structures showcasing elements of Balochi architectural traditions."
    },
    {
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800",
      title: "Nomadic Heritage",
      description: "Camels represent the nomadic heritage that continues to influence Balochi culture."
    },
    {
      src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800",
      title: "Desert Plains",
      description: "The vast desert plains that characterize much of the Balochistan region."
    },
    {
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800",
      title: "Cultural Monuments",
      description: "Historical monuments that stand as testament to the rich Balochi cultural heritage."
    },
    {
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800",
      title: "Traditional Transport",
      description: "Traditional modes of transportation that have been used by Balochi people for generations."
    }
  ];

  return (
    <Layout>
      <Hero
        title="Photo Gallery"
        subtitle="Visual exploration of Balochi landscapes, culture, and people"
        backgroundImage="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop"
      />

      <Section
        title="Balochi Visual Heritage"
        subtitle="A glimpse into the world of the Balochi people through imagery"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-playfair text-xl font-bold mb-2 text-balochi-terracotta">{image.title}</h3>
                <p className="font-roboto text-gray-700">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Explore More"
        dark={true}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-roboto text-lg mb-6">
            This gallery features a small selection of images representing Balochi landscapes and cultural elements. The Balochi visual heritage is vast and diverse, encompassing traditional crafts, textiles, architecture, and natural landscapes.
          </p>
          <p className="font-roboto text-lg">
            We are continuously expanding our collection to showcase more aspects of Balochi culture and history. Check back regularly for new additions to the gallery.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Gallery;
