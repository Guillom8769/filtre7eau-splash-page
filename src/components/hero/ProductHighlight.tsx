
import { motion } from "framer-motion";

const ProductHighlight = () => {
  return (
    <div className="relative">
      {/* Halo derrière le produit */}
      <div className="absolute inset-0 bg-gradient-radial from-water-light/20 to-transparent rounded-full blur-2xl" />
      
      {/* Image du produit */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <img
          src="https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1336&auto=format&fit=crop"
          alt="Filtre ULTRA 7Eau – ultrafiltration 0,1 micron, 7 L/min"
          className="w-full max-w-lg mx-auto drop-shadow-xl"
        />
        
        {/* Label ULTRA */}
        <div className="absolute top-1/3 right-0 text-water-dark font-thin text-2xl tracking-[0.3em] opacity-60 transform -rotate-90">
          ULTRA
        </div>
      </motion.div>
    </div>
  );
};

export default ProductHighlight;
