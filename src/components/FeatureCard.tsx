
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
      "backdrop-blur-sm bg-white/80 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
      className
    )}>
      {image && (
        <div className="h-48 overflow-hidden border-b border-gray-200">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-serif text-xl font-bold mb-2 text-gray-800 hover:text-blue-600">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return <Link to={link} className="no-underline">{content}</Link>;
  }

  return content;
};

export default FeatureCard;
