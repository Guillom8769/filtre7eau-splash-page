
import { motion } from "framer-motion";

const figures = [
  {
    number: "7",
    unit: "L/min",
    description: "Débit ultra-rapide",
    position: "top-5 left-0 md:-left-10"
  },
  {
    number: "0,1",
    unit: "micron",
    description: "Filtration ultra-fine",
    position: "top-1/4 right-0 md:-right-5"
  },
  {
    number: "100%",
    unit: "",
    description: "Charbon actif naturel",
    position: "top-2/3 left-0 md:-left-5"
  },
  {
    number: "30",
    unit: "min",
    description: "Installation sans travaux",
    position: "bottom-10 right-0 md:-right-10"
  },
  {
    number: "100%",
    unit: "",
    description: "Antibactérien Ions Argent",
    position: "top-1/2 left-0 md:-left-10"
  }
];

const KeyFigures = () => {
  return (
    <>
      {figures.map((figure, index) => (
        <motion.div
          key={figure.description}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className={`absolute ${figure.position} z-20`}
        >
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-water/10"
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: index * 0.5
            }}
          >
            <div className="text-center">
              <div className="mb-1">
                <span className="text-xl font-bold text-water">{figure.number}</span>
                <span className="text-xs text-water-dark">{figure.unit}</span>
              </div>
              <p className="text-xs text-gray-600 whitespace-nowrap">{figure.description}</p>
            </div>
          </motion.div>

          {/* Ligne de connexion vers le produit */}
          <motion.div 
            className="absolute z-10 bg-water/20 h-px w-12"
            initial={{ width: 0 }}
            whileInView={{ width: "30px" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
            style={{
              top: '50%',
              left: index % 2 === 0 ? '100%' : 'auto',
              right: index % 2 === 1 ? '100%' : 'auto',
              transform: 'translateY(-50%)'
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default KeyFigures;
