import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import Logo from "./Logo";
import UsageIcons from "./UsageIcons";
import KeyFigures from "./KeyFigures";

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
              src="/lovable-uploads/d7a7f6a1-302d-4c94-8f64-1fe7204e3e37.png"
              alt="Filtre sous évier ULTRA CARBON 01 – système de filtration d'eau pure à installer sous l'évier"
              className="relative z-10 w-full transform -rotate-15 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* DEUXIÈME ÉCRAN */}
      <div ref={secondScreenRef} className="container mx-auto px-4 min-h-screen flex flex-col justify-center py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Partie gauche: Produit + Bulles de bénéfices */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img
                src="/lovable-uploads/d7a7f6a1-302d-4c94-8f64-1fe7204e3e37.png"
                alt="Filtre sous évier ULTRA CARBON 01 – filtration d'eau du robinet"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Bulles flottantes avec les chiffres clés */}
            <div className="absolute inset-0 z-20">
              <KeyFigures />
            </div>
          </div>

          {/* Partie droite: Texte inspirant */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light mb-6">Profitez simplement</h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Avec ULTRA CARBON 01, transformez votre robinet en source d'eau pure.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Une installation sans travaux, une filtration de qualité industrielle, et surtout… 
              la liberté de savourer chaque instant — que ce soit pour votre thé, vos repas, ou vos proches.
            </p>
            <p className="text-xl text-water italic">
              Parce qu'une bonne eau, c'est celle qui simplifie la vie, au quotidien.
            </p>

            <div className="mt-12 p-6 bg-water/5 rounded-lg border border-water/10 backdrop-blur-sm">
              <h3 className="font-medium text-lg mb-4">Une qualité industrielle accessible</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-water/10 flex items-center justify-center shrink-0">
                    <span className="text-water">✓</span>
                  </div>
                  <div>
                    <span className="font-medium">Installation sans plombier</span>
                    <p className="text-sm text-gray-600">Prêt à fonctionner en moins de 30 minutes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-water/10 flex items-center justify-center shrink-0">
                    <span className="text-water">✓</span>
                  </div>
                  <div>
                    <span className="font-medium">Filtration ultra-précise</span>
                    <p className="text-sm text-gray-600">Élimine microplastiques, résidus et mauvais goûts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-water/10 flex items-center justify-center shrink-0">
                    <span className="text-water">✓</span>
                  </div>
                  <div>
                    <span className="font-medium">Charbon actif naturel</span>
                    <p className="text-sm text-gray-600">Pour une eau parfaitement pure et savoureuse</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
