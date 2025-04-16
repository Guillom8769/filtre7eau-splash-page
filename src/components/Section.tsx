
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "water" | "eco" | "sand" | "neutral";
}

const Section = ({
  children,
  className,
  id,
  background = "white",
}: SectionProps) => {
  const bgStyles = {
    white: "bg-white",
    water: "bg-water-light",
    eco: "bg-eco-light",
    sand: "bg-sand-light",
    neutral: "bg-neutral-light",
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 px-4 md:py-24 md:px-8",
        bgStyles[background],
        className
      )}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
