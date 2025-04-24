
import { Droplet } from "lucide-react";

const Logo = ({ variant = "default" }: { variant?: "default" | "light" | "dark" }) => {
  const textColorClass = 
    variant === "light" ? "text-white" : 
    variant === "dark" ? "text-gray-800" : 
    "text-water";

  return (
    <div className="flex items-center space-x-1">
      <Droplet className={`w-6 h-6 ${textColorClass}`} />
      <span className={`text-xl font-light tracking-wide ${textColorClass}`}>7Eau</span>
    </div>
  );
};

export default Logo;
