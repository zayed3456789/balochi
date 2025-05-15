
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className,
  dark = false,
}) => {
  return (
    <section 
      className={cn(
        "py-10",
        dark ? "bg-gray-100" : "bg-white",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/80 border border-gray-200 p-6 rounded-lg shadow-sm mb-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 border-b pb-2 border-gray-200">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-700 mt-2">
              {subtitle}
            </p>
          )}
        </div>
        <div className="backdrop-blur-sm bg-white/80 border border-gray-200 p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
