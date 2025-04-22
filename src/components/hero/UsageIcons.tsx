
import { Coffee, CupSoda, LeafyGreen, PawPrint, Utensils, Carrot, Droplet, Recycle, Volleyball } from "lucide-react";

const usages = [
  { icon: Coffee, label: "Thé" },
  { icon: Coffee, label: "Café" },
  { icon: CupSoda, label: "Sirop" },
  { icon: LeafyGreen, label: "Plantes" },
  { icon: PawPrint, label: "Animaux" },
  { icon: Utensils, label: "Vaisselle" },
  { icon: Carrot, label: "Aliments" },
  { icon: Volleyball, label: "Sport" },
  { icon: Droplet, label: "Hydratation" },
  { icon: Recycle, label: "Réutilisation" },
];

const UsageIcons = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-8">
      {usages.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-water/5 flex items-center justify-center transform hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-water" />
          </div>
          <span className="text-sm text-gray-600">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default UsageIcons;
