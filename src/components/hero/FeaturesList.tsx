
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Ultrafiltration 0,1 micron",
  "Bloc de charbon actif",
  "Débit de 7 L/min",
  "Installation sans travaux",
  "Eau pure, sans contraintes"
];

const FeaturesList = () => {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <motion.li
          key={feature}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="flex items-center space-x-3"
        >
          <Check className="w-5 h-5 text-water" />
          <span className="text-gray-700 font-light">{feature}</span>
        </motion.li>
      ))}
    </ul>
  );
};

export default FeaturesList;
