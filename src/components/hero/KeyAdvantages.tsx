
import React from "react";
import { motion } from "framer-motion";
import { Timer, Zap, Leaf, Shield } from "lucide-react";

const KeyAdvantages = () => {
  const advantages = [
    {
      icon: <Timer className="text-water" size={24} />,
      title: "Installation ultra-facile",
      description: "Sans travaux ni plombier, prêt en moins de 30 minutes grâce à un guide pas-à-pas, une vidéo tutorielle et un service client à l'écoute."
    },
    {
      icon: <Zap className="text-water" size={24} />,
      title: "Débit ultra-rapide",
      description: "Plus d'attente pour remplir bouteilles ou carafes, même en pleine effervescence à la maison."
    },
    {
      icon: <Leaf className="text-water" size={24} />,
      title: "Écologique et économique",
      description: "Fini les bouteilles en plastique. Chaque litre filtré ne coûte que quelques centimes, sans transport ni emballage."
    },
    {
      icon: <Shield className="text-water" size={24} />,
      title: "Qualité premium, zéro compromis",
      description: "Charbon actif naturel 100 % et filtration ultra-précise pour éliminer le chlore, les impuretés et tous les goûts parasites. Résultat : une eau pure et délicieuse."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-6"
    >
      {advantages.map((advantage, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-md border border-water/10"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1">{advantage.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default KeyAdvantages;
