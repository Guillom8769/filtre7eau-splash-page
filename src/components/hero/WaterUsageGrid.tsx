
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Coffee, Utensils, PawPrint, Leaf, UtensilsCrossed, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WaterUsage {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: {
    title: string;
    description: string;
    benefit: string;
  };
}

const waterUsages: WaterUsage[] = [
  {
    icon: <Coffee size={24} />,
    title: "Boissons",
    description: "Boissons chaudes ou rafraîchissantes",
    content: {
      title: "Des boissons au goût authentique",
      description: "Retrouvez le vrai goût de vos boissons chaudes et froides, sans résidus ni odeurs parasites.",
      benefit: "Goût pur, sans résidu ni odeur."
    }
  },
  {
    icon: <Utensils size={24} />,
    title: "Cuisine & Cuisson",
    description: "Pour une cuisine plus saine",
    content: {
      title: "Une cuisine aux saveurs préservées",
      description: "Cuisinez avec une eau plus pure qui respecte et révèle le goût naturel de vos ingrédients.",
      benefit: "Ingrédients plus sains, saveurs naturelles préservées."
    }
  },
  {
    icon: <PawPrint size={24} />,
    title: "Famille & Animaux",
    description: "Une eau saine pour tous",
    content: {
      title: "Une eau douce pour toute la famille",
      description: "Offrez une eau pure à vos proches et animaux de compagnie, sans polluants ni microplastiques.",
      benefit: "Hydratation douce : sans polluants ni microplastiques."
    }
  },
  {
    icon: <Leaf size={24} />,
    title: "Jardinage & Plantes",
    description: "Pour des plantes épanouies",
    content: {
      title: "Des plantes en pleine santé",
      description: "Donnez à vos plantes une eau pure sans minéraux indésirables pour un feuillage plus épanoui.",
      benefit: "Feuillage épanoui grâce à une eau sans minéraux indésirables."
    }
  },
  {
    icon: <UtensilsCrossed size={24} />,
    title: "Vaisselle & Ustensiles",
    description: "Une brillance retrouvée",
    content: {
      title: "Une vaisselle éclatante",
      description: "Retrouvez l'éclat de votre vaisselle avec une eau qui laisse moins de traces de calcaire.",
      benefit: "Éclat retrouvé, moins de traces de calcaire."
    }
  },
  {
    icon: <Dumbbell size={24} />,
    title: "Sport & Bien-être",
    description: "Hydratation optimale",
    content: {
      title: "Une hydratation naturelle pour vos activités",
      description: "Profitez d'une eau pure et équilibrée pour vos activités sportives, sans compromis.",
      benefit: "Hydratation naturelle pour sportifs, sans compromis."
    }
  }
];

interface WaterUsageGridProps {
  selectedUsage: number;
  onSelectUsage: (index: number) => void;
}

const WaterUsageGrid: React.FC<WaterUsageGridProps> = ({ selectedUsage, onSelectUsage }) => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <div className="space-y-8">
        <Carousel className="w-full">
          <CarouselContent>
            {waterUsages.map((usage, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                <button 
                  className={cn(
                    "w-full h-full flex flex-col items-center justify-center p-4 text-center rounded-lg transition-all",
                    "focus:outline-none focus:ring-2 focus:ring-water focus:ring-offset-2",
                    selectedUsage === index 
                      ? "bg-water text-white shadow-md" 
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  )}
                  onClick={() => onSelectUsage(index)}
                  aria-selected={selectedUsage === index}
                  role="tab"
                >
                  <div className="text-current mb-2">{usage.icon}</div>
                  <h3 className="font-medium mb-1">{usage.title}</h3>
                  <p className="text-xs">{usage.description}</p>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <motion.div
          key={selectedUsage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <h3 className="text-xl font-medium text-water mb-3">{waterUsages[selectedUsage].content.title}</h3>
          <p className="text-gray-600 mb-4">{waterUsages[selectedUsage].content.description}</p>
          <p className="text-water font-medium">{waterUsages[selectedUsage].content.benefit}</p>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {waterUsages.map((usage, index) => (
          <button 
            key={index}
            className={cn(
              "p-4 rounded-lg flex items-start transition-all",
              "focus:outline-none focus:ring-2 focus:ring-water focus:ring-offset-2",
              selectedUsage === index 
                ? "bg-water text-white shadow-md" 
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            )}
            onClick={() => onSelectUsage(index)}
            aria-selected={selectedUsage === index}
            role="tab"
          >
            <div className="mr-3 mt-1">{usage.icon}</div>
            <div className="text-left">
              <h3 className="font-medium mb-1">{usage.title}</h3>
              <p className="text-xs">{usage.description}</p>
            </div>
          </button>
        ))}
      </div>
      
      <motion.div
        key={selectedUsage}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-md"
      >
        <h3 className="text-xl font-medium text-water mb-3">{waterUsages[selectedUsage].content.title}</h3>
        <p className="text-gray-600 mb-4">{waterUsages[selectedUsage].content.description}</p>
        <p className="text-water font-medium">{waterUsages[selectedUsage].content.benefit}</p>
      </motion.div>
    </div>
  );
};

export default WaterUsageGrid;
