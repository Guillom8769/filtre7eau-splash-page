
import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const KeyFigures = () => {
  const isMobile = useIsMobile();
  const figures = [
    { text: "7 L/min – Débit ultra-rapide" },
    { text: "0,1 µm – Filtration ultra-fine" },
    { text: "100 % – Charbon actif naturel" },
    { text: "30 min – Installation sans travaux" }
  ];

  if (isMobile) {
    return (
      <Carousel className="w-full">
        <CarouselContent>
          {figures.map((figure, i) => (
            <CarouselItem key={i} className="basis-3/4">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-water/10">
                <p className="text-water font-medium">{figure.text}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {figures.map((figure, index) => {
        const angle = (index * 360) / figures.length;
        const radius = 180;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-water/10 whitespace-nowrap">
              <p className="text-water font-medium">{figure.text}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default KeyFigures;
