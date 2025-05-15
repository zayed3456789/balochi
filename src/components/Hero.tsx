
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
  backgroundImage
}) => {
  return (
    <div 
      className="relative py-16 sm:py-20 bg-cover bg-center animate-fade-in"
      style={{ 
        backgroundImage: backgroundImage ? `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${backgroundImage})` : 'none',
        backgroundColor: backgroundImage ? 'transparent' : 'white'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/70 border border-gray-200 p-8 rounded shadow-sm">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {title}
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <Button
              asChild
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
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
