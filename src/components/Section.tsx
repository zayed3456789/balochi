
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
        "py-16",
        dark ? "bg-balochi-stone/90 text-white" : "bg-white",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="font-roboto text-lg md:text-xl max-w-3xl mx-auto opacity-80">
              {subtitle}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
