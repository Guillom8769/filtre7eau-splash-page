
import { motion } from "framer-motion";
import { Clock, Droplet, Filter, Coins } from "lucide-react";

const advantages = [
  {
    icon: <Clock className="text-water" />,
    title: "Installation en 30 min, sans plombier",
    description: "Facile à installer sans outils spéciaux ni connaissances techniques"
  },
  {
    icon: <Droplet className="text-water" />,
    title: "Débit ultra-rapide (7 L/min)",
    description: "3x plus rapide que les filtres standards pour un usage sans contrainte"
  },
  {
    icon: <Filter className="text-water" />,
    title: "Filtration 0,1 µm",
    description: "Élimine microplastiques, bactéries et impuretés pour une eau pure"
  },
  {
    icon: <Coins className="text-water" />,
    title: "Coût par litre négligeable",
    description: "Économisez jusqu'à 90% par rapport à l'eau en bouteille"
  }
];

const KeyAdvantages = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-water/10"
    >
      <h3 className="text-xl font-medium mb-6">Avantages ULTRA CARBON 01</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advantages.map((advantage, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="flex items-start"
          >
            <div className="mr-4 p-2 bg-water/5 rounded-full">{advantage.icon}</div>
            <div>
              <h4 className="font-medium mb-1">{advantage.title}</h4>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default KeyAdvantages;
