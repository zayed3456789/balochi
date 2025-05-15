
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop"
}) => {
  return (
    <div 
      className="relative py-24 sm:py-32 bg-cover bg-center animate-fade-in"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` 
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="font-roboto text-xl md:text-2xl mb-8 text-white/90">
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <Button
              asChild
              size="lg"
              className="bg-balochi-blue hover:bg-balochi-blue/90 text-white"
            >
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
