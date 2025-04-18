
import { motion } from "framer-motion";

const ProductHighlight = () => {
  return (
    <div className="relative">
      {/* Halo subtil derrière le produit */}
      <div className="absolute inset-0 bg-gradient-to-br from-water-light/10 to-water-light/30 rounded-full blur-2xl" />
      
      {/* Image du produit ULTRA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <img
          src="/lovable-uploads/d7a7f6a1-302d-4c94-8f64-1fe7204e3e37.png"
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
