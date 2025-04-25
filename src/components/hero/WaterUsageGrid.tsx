
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { TeaCup, Utensils, PawPrint, Leaf, UtensilsCrossed, Barbell } from "lucide-react";

export interface WaterUsage {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: {
    title: string;
    description: string;
    image?: string;
  };
}

const waterUsages: WaterUsage[] = [
  {
    icon: <TeaCup size={24} />,
    title: "Boissons",
    description: "Goût pur, sans résidu ni odeur",
    content: {
      title: "Un goût authentique pour vos boissons",
      description: "Redécouvrez le vrai goût de vos thés, cafés et infusions. Sans chlore ni résidus, les arômes s'expriment pleinement. Dégustez des boissons plus pures et plus savoureuses.",
    }
  },
  {
    icon: <Utensils size={24} />,
    title: "Cuisine",
    description: "Saveurs naturelles préservées",
    content: {
      title: "Une cuisine aux saveurs préservées",
      description: "Les ingrédients révèlent leurs vraies saveurs quand l'eau est pure. Légumes plus colorés, pâtes plus fermes, soupes plus savoureuses... Cuisinez avec une eau qui respecte les aliments.",
    }
  },
  {
    icon: <PawPrint size={24} />,
    title: "Famille & Animaux",
    description: "Hydratation douce, sans polluants",
    content: {
      title: "Une eau saine pour toute la famille",
      description: "Protégez vos proches des micropolluants et microplastiques. Une eau idéale pour préparer les biberons, hydrater vos animaux de compagnie et préserver la santé de chacun au quotidien.",
    }
  },
  {
    icon: <Leaf size={24} />,
    title: "Plantes",
    description: "Feuillage épanoui, zéro minéraux indésirables",
    content: {
      title: "Des plantes éclatantes de santé",
      description: "Vos plantes d'intérieur s'épanouissent mieux avec une eau filtrée. Sans calcaire ni chlore, les feuillages sont plus verts, plus brillants et la floraison plus intense.",
    }
  },
  {
    icon: <UtensilsCrossed size={24} />,
    title: "Vaisselle",
    description: "Éclat retrouvé, moins de traces de calcaire",
    content: {
      title: "Une vaisselle éclatante, sans traces",
      description: "Fini les traces blanches sur la vaisselle et les verres ternes. L'eau filtrée réduit considérablement les dépôts de calcaire et offre un résultat impeccable, même sans produit.",
    }
  },
  {
    icon: <Barbell size={24} />,
    title: "Sport",
    description: "Hydratation optimale pour les activités physiques",
    content: {
      title: "Des performances sportives optimisées",
      description: "Une hydratation de qualité est essentielle pour les sportifs. L'eau filtrée, sans contaminants, contribue à une meilleure récupération et maintient votre corps à son niveau optimal.",
    }
  }
];

interface WaterUsageGridProps {
  selectedUsage: number;
  onSelectUsage: (index: number) => void;
}

const WaterUsageGrid: React.FC<WaterUsageGridProps> = ({ selectedUsage, onSelectUsage }) => {
  const isMobile = useIsMobile();
  
  // For mobile view, use carousel
  if (isMobile) {
    return (
      <div className="space-y-8">
        <Carousel className="w-full">
          <CarouselContent>
            {waterUsages.map((usage, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                <div 
                  className={`h-full flex flex-col items-center justify-center p-4 text-center rounded-lg transition-all cursor-pointer
                    ${selectedUsage === index ? 'bg-water/10 text-water shadow-md' : 'bg-gray-100/50 text-gray-600 hover:bg-gray-100'}`}
                  onClick={() => onSelectUsage(index)}
                >
                  <div className="text-current mb-2">{usage.icon}</div>
                  <h3 className="font-medium mb-1">{usage.title}</h3>
                  <p className="text-xs">{usage.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Dynamic content based on selected usage */}
        <motion.div
          key={selectedUsage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md"
        >
          <h3 className="text-xl font-medium text-water mb-3">{waterUsages[selectedUsage].content.title}</h3>
          <p className="text-gray-600">{waterUsages[selectedUsage].content.description}</p>
        </motion.div>
      </div>
    );
  }
  
  // For desktop view, use grid
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {waterUsages.map((usage, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg flex items-start transition-all cursor-pointer
              ${selectedUsage === index ? 'bg-water/10 text-water shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100/80'}`}
            onClick={() => onSelectUsage(index)}
          >
            <div className="mr-3 mt-1">{usage.icon}</div>
            <div>
              <h3 className="font-medium mb-1">{usage.title}</h3>
              <p className="text-xs">{usage.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dynamic content based on selected usage */}
      <motion.div
        key={selectedUsage}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md"
      >
        <h3 className="text-xl font-medium text-water mb-3">{waterUsages[selectedUsage].content.title}</h3>
        <p className="text-gray-600">{waterUsages[selectedUsage].content.description}</p>
      </motion.div>
    </div>
  );
};

export default WaterUsageGrid;
