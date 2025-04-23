
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import TeamSection from "@/components/about/TeamSection";
import MissionSection from "@/components/about/MissionSection";
import ProductSection from "@/components/about/ProductSection";
import FunSection from "@/components/about/FunSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-water/5 to-white">
      {/* En-tête de la page */}
      <motion.header 
        className="container mx-auto px-4 py-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Shield className="text-water h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Une histoire d'innovation et d'engagement
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez l'équipe passionnée derrière UltraZéro et notre vision d'un avenir où l'eau pure est accessible à tous.
        </p>
      </motion.header>

      <TeamSection />
      <MissionSection />
      <ProductSection />
      <FunSection />
    </div>
  );
};

export default About;
