
import { motion } from "framer-motion";
import Logo from "./Logo";
import UsageIcons from "./UsageIcons";
import KeyFigures from "./KeyFigures";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-water-light/5 to-water-light/10">
      {/* Texture d'eau subtile */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3')] opacity-[0.02] mix-blend-overlay" />
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <Logo />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative">
        <div className="max-w-5xl mx-auto">
          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-center mb-12"
          >
            Comment aimez-vous votre eau ?
          </motion.h1>

          {/* Icônes d'usage */}
          <UsageIcons />

          {/* Sous-titre */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-light text-center mt-16 mb-8"
          >
            Ne choisissez plus
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-lg leading-relaxed text-center mb-16 max-w-3xl mx-auto"
          >
            Le filtre sous évier ULTRA CARBON 01 s'installe facilement sous votre évier, 
            sans travaux, et offre une eau du robinet pure grâce à une filtration de qualité 
            industrielle. Bénéfique pour votre santé et votre confort d'usage, cette eau 
            filtrée vous accompagne au quotidien.
          </motion.p>

          {/* Image du produit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-16"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-water-light/10 to-water-light/30 rounded-full blur-2xl" />
            <img
              src="/lovable-uploads/d7a7f6a1-302d-4c94-8f64-1fe7204e3e37.png"
              alt="Filtre sous évier ULTRA CARBON 01 – système de filtration d'eau pure à installer sous l'évier"
              className="relative z-10 w-3/4 mx-auto transform rotate-[-15deg] hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>

          {/* Chiffres clés */}
          <KeyFigures />

          {/* Slogan final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-2xl font-light text-gray-800 leading-relaxed">
              La filtration industrielle, chez vous.
              <br />
              <span className="text-water">Sans compromis. Sans contrainte.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
