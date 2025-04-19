
import { Coffee, CupSoda, LeafyGreen, PawPrint, Utensils, Carrot, Droplet, Recycle, Cup, Volleyball } from "lucide-react";

const usages = [
  { icon: Cup, label: "Thé" },
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
    <div className="grid grid-cols-5 md:grid-cols-10 gap-4 mt-8">
      {usages.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-water/5 flex items-center justify-center">
            <Icon className="w-6 h-6 text-water" />
          </div>
          <span className="text-xs text-gray-600">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default UsageIcons;
