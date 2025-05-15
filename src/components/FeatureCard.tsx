
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  link,
  className,
}) => {
  const content = (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
      className
    )}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold mb-2 text-balochi-terracotta">{title}</h3>
        <p className="text-gray-700 font-roboto">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
};

export default FeatureCard;
