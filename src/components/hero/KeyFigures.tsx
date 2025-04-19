
import { motion } from "framer-motion";

const figures = [
  {
    number: "7",
    unit: "L/min",
    description: "Débit de filtration ultra-rapide"
  },
  {
    number: "0,1",
    unit: "micron",
    description: "Niveau de filtration ultra-fin"
  },
  {
    number: "100%",
    unit: "",
    description: "Charbon actif naturel"
  },
  {
    number: "30",
    unit: "min",
    description: "Installation sans travaux"
  }
];

const KeyFigures = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {figures.map((figure, index) => (
        <motion.div
          key={figure.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="text-center"
        >
          <div className="bg-water/5 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-3">
            <div>
              <span className="text-2xl font-bold text-water">{figure.number}</span>
              <span className="text-sm text-water-dark">{figure.unit}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">{figure.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default KeyFigures;
