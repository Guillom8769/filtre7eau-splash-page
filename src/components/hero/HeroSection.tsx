
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import ProductHighlight from "./ProductHighlight";
import FeaturesList from "./FeaturesList";
import Logo from "./Logo";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const element = document.getElementById("scroll2");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-water-light/5 to-water-light/10">
      {/* Texture d'eau subtile */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580437082423-4f0e58a2d413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')] opacity-[0.02] mix-blend-overlay" />
      
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
            className="flex flex-col items-start space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
              L'excellence de l'industrie dans votre cuisine
            </h1>
            
            <FeaturesList />

            <button
              onClick={scrollToNextSection}
              className="group flex items-center space-x-2 text-water hover:text-water-dark transition-colors"
            >
              <span className="font-light">Découvrir</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </button>
          </motion.div>

          {/* Image produit */}
          <ProductHighlight />
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-water/50 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
