
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-3px]",
      className
    )}>
      <div className="mb-4 text-water text-3xl">{icon}</div>
      <h3 className="text-xl font-normal mb-2">{title}</h3>
      <p className="text-gray-600 font-light">{description}</p>
    </div>
  );
};

export default FeatureCard;
