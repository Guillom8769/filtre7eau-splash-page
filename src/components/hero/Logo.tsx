
import { Droplet } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Droplet className="w-6 h-6 text-water" />
      <span className="text-xl font-light tracking-wide">7Eau</span>
    </div>
  );
};

export default Logo;
