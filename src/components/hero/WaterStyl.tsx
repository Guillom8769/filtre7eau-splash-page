
import { useState } from "react";
import { motion } from "framer-motion";
import WaterUsageGrid from "./WaterUsageGrid";
import KeyFigures from "./KeyFigures";
import KeyAdvantages from "./KeyAdvantages";

const WaterStyl = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left Column - Filter Image and Key Figures (40% on desktop) */}
          <div className="md:col-span-2 relative">
            {/* Mobile Heading (visible only on mobile) */}
            <div className="block md:hidden mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2">Profitez simplement</h2>
              <p className="text-xl text-water font-medium">
                L'eau pure, sans effort.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-water-light/10 to-water-light/30 rounded-full blur-2xl" />
              <img
                src="/lovable-uploads/49f98406-99e8-4d33-a164-9645775f200b.png"
                alt="Filtre ULTRA CARBON 01 – filtration d'eau du robinet"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
              
              {/* Key Figures Badges */}
              <div className="absolute inset-0">
                <KeyFigures />
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Content (60% on desktop) */}
          <div className="md:col-span-3">
            {/* Desktop Heading (visible only on desktop) */}
            <div className="hidden md:block mb-8">
              <h2 className="text-4xl font-bold mb-4">Profitez simplement</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                L'eau pure, sans effort. Avec ULTRA CARBON 01, votre robinet devient une source d'eau purifiée ultra-rapide.
                L'Ultra Carbon 01 rend tout plus simple au quotidien. Cuisine, boissons chaudes ou rafraîchissantes, vaisselle,
                arrosage des plantes, hydratation des animaux de compagnie ou préparation sportive – l'eau filtrée est partout.
              </p>
              <p className="text-water italic mt-4">
                Pure et riche en goût, elle vous accompagne sans plastique ni souci dans tous vos moments de vie.
              </p>
            </div>
            
            {/* Water Usage Grid */}
            <WaterUsageGrid />
            
            {/* Key Advantages Card */}
            <div className="mt-16">
              <KeyAdvantages />
            </div>

            {/* Closing Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 p-6 bg-water/5 rounded-xl border border-water/10"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                Conçu pour tous – familles actives, sportifs, jeunes couples, seniors, écolos ou amateurs de haute technologie –
                ULTRA CARBON 01 s'adapte à votre style de vie. Découvrez la liberté d'une eau pure et généreuse, enfin à votre portée.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterStyl;
