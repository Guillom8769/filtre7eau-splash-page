
import React from "react";
import { motion } from "framer-motion";
import { Coffee, ChefHat, Dog, Leaf, Utensils, Dumbbell } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const waterUsages = [
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Boissons",
    benefit: "Goût pur, sans résidu ni odeur."
  },
  {
    icon: <ChefHat className="h-6 w-6" />,
    title: "Cuisine & Cuisson",
    benefit: "Ingrédients plus sains, saveurs naturelles préservées."
  },
  {
    icon: <Dog className="h-6 w-6" />,
    title: "Famille & Animaux",
    benefit: "Hydratation douce : sans polluants ni microplastiques."
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Jardinage & Plantes",
    benefit: "Feuillage épanoui grâce à une eau sans minéraux indésirables."
  },
  {
    icon: <Utensils className="h-6 w-6" />,
    title: "Vaisselle & Ustensiles",
    benefit: "Éclat retrouvé, moins de traces de calcaire."
  },
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Sport & Bien-être",
    benefit: "Hydratation naturelle pour sportifs, sans compromis."
  }
];

const WaterUsageGrid = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Accordion type="single" collapsible className="w-full">
        {waterUsages.map((usage, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="flex items-center gap-3">
              <span className="text-water">{usage.icon}</span>
              <span>{usage.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600 pl-9">{usage.benefit}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {waterUsages.map((usage, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <div className={cn(
            "p-4 rounded-xl transition-all duration-300",
            "hover:bg-water hover:text-white",
            "flex flex-col items-center text-center gap-3",
            "cursor-pointer bg-white/50 backdrop-blur-sm"
          )}>
            <div className="transition-colors group-hover:text-white text-water">
              {usage.icon}
            </div>
            <h3 className="font-medium">{usage.title}</h3>
            <p className="text-sm opacity-80">{usage.benefit}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WaterUsageGrid;
