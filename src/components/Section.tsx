
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
    water: "bg-gradient-to-b from-water-light/10 to-water-light/30",
    eco: "bg-gradient-to-b from-eco-light/20 to-eco-light/40",
    sand: "bg-gradient-to-b from-sand-light/10 to-sand-light/30",
    neutral: "bg-gradient-to-b from-neutral-light/10 to-neutral-light/30",
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full py-24 px-4 md:py-32 md:px-8",
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
