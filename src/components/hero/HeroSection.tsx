
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

      <div className="container mx-auto px-4 pt-32 pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte et features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-6">
              Comment aimez-vous votre eau ?
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Le filtre sous évier ULTRA CARBON 01 s'installe facilement sous votre évier, 
              sans travaux, et offre une eau du robinet pure grâce à une filtration de qualité 
              industrielle. Bénéfique pour votre santé et votre confort d'usage, cette eau 
              filtrée vous accompagne au quotidien.
            </p>

            <UsageIcons />
          </motion.div>

          {/* Image produit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-water-light/10 to-water-light/30 rounded-full blur-2xl" />
              <img
                src="/lovable-uploads/d7a7f6a1-302d-4c94-8f64-1fe7204e3e37.png"
                alt="Filtre sous évier ULTRA CARBON 01 – système de filtration d'eau pure à installer sous l'évier"
                className="relative z-10 w-full transform rotate-[-15deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

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
    </section>
  );
};

export default HeroSection;
