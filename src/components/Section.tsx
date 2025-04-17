
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
    water: "bg-gradient-to-b from-water-light/20 to-water-light/40",
    eco: "bg-gradient-to-b from-eco-light/30 to-eco-light/50",
    sand: "bg-gradient-to-b from-sand-light/20 to-sand-light/40",
    neutral: "bg-gradient-to-b from-neutral-light/20 to-neutral-light/40",
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full py-20 px-4 md:py-28 md:px-8",
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
