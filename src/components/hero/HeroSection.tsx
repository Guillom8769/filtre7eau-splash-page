
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import Logo from "./Logo";
import UsageIcons from "./UsageIcons";
import KeyFigures from "./KeyFigures";
import WaterStyl from "./WaterStyl";

const HeroSection = () => {
  const secondScreenRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-water-light/5 to-water-light/10">
      {/* Texture subtile */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3')] opacity-[0.02] mix-blend-overlay" />
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <Logo />
      </div>

      {/* PREMIER ÉCRAN */}
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center relative">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Partie gauche: Icônes + Texte fort */}
          <div className="order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light tracking-tight text-left mb-8 md:mb-12"
            >
              Comment aimez-vous votre eau ?
            </motion.h1>

            {/* Icônes d'usage */}
            <div className="mb-12">
              <UsageIcons />
            </div>

            {/* Texte fort */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <h2 className="text-4xl font-light mb-4">
                Ne choisissez plus
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                ULTRA CARBON 0.1 : <span className="text-water">La filtration industrielle chez vous.</span><br/>
                Sans compromis. Sans travaux.
              </p>
            </motion.div>
          </div>

          {/* Partie droite: Image du produit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-water-light/10 to-water-light/30 rounded-full blur-2xl" />
            <img
              src="/lovable-uploads/5702c205-2257-4124-96cb-eefe1edf6d18.png"
              alt="Filtre sous évier ULTRA CARBON 01 – système de filtration d'eau pure à installer sous l'évier"
              className="relative z-10 w-full transform -rotate-15 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={() => secondScreenRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="animate-bounce" size={32} />
        </motion.div>
      </div>

      {/* DEUXIÈME ÉCRAN */}
      <div ref={secondScreenRef} className="min-h-screen flex flex-col justify-center py-24">
        <WaterStyl />
      </div>
    </section>
  );
};

export default HeroSection;
