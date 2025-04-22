
import { motion } from "framer-motion";

const figures = [
  {
    number: "7",
    unit: "L/min",
    description: "Débit ultra-rapide"
  },
  {
    number: "0,1",
    unit: "micron",
    description: "Filtration ultra-fine"
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
      {figures.map((figure, index) => (
        <motion.div
          key={figure.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="text-center"
        >
          <div className="bg-water/5 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
            <div>
              <span className="text-4xl font-bold text-water">{figure.number}</span>
              <span className="text-sm text-water-dark">{figure.unit}</span>
            </div>
          </div>
          <p className="text-lg text-gray-600">{figure.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default KeyFigures;
