
import { Coffee, CupSoda, LeafyGreen, PawPrint, Utensils, Carrot, Droplet, Recycle, Volleyball, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

const usages = [
  { icon: Coffee, label: "Thé" },
  { icon: Coffee, label: "Café" },
  { icon: CupSoda, label: "Sirop" },
  { icon: LeafyGreen, label: "Plantes" },
  { icon: PawPrint, label: "Animaux" },
  { icon: Utensils, label: "Vaisselle" },
  { icon: Carrot, label: "Aliments" },
  { icon: Volleyball, label: "Sport" },
  { icon: Droplet, label: "Hydratation" },
  { icon: Recycle, label: "Réutilisation" },
  { icon: PlusCircle, label: "Choisissez..." },
];

const UsageIcons = () => {
  // Organisation en grille 4/4/3 pour une meilleure utilisation de l'espace
  const row1 = usages.slice(0, 4);
  const row2 = usages.slice(4, 8);
  const row3 = usages.slice(8, 11);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Première ligne: 4 icônes */}
      <div className="flex justify-between">
        {row1.map(({ icon: Icon, label }) => (
          <motion.div 
            key={label} 
            variants={itemVariants}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-16 h-16 rounded-full bg-water/5 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer">
              <Icon className="w-8 h-8 text-water" />
            </div>
            <span className="text-sm text-gray-600">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Deuxième ligne: 4 icônes */}
      <div className="flex justify-between">
        {row2.map(({ icon: Icon, label }) => (
          <motion.div 
            key={label} 
            variants={itemVariants}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-16 h-16 rounded-full bg-water/5 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer">
              <Icon className="w-8 h-8 text-water" />
            </div>
            <span className="text-sm text-gray-600">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Troisième ligne: 3 icônes (centrées) */}
      <div className="flex justify-center gap-12">
        {row3.map(({ icon: Icon, label }) => (
          <motion.div 
            key={label} 
            variants={itemVariants}
            className="flex flex-col items-center gap-3"
          >
            <div className={`w-16 h-16 rounded-full ${label === 'Choisissez...' ? 'bg-water/10 border border-water' : 'bg-water/5'} flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer`}>
              <Icon className={`w-8 h-8 ${label === 'Choisissez...' ? 'text-water-dark' : 'text-water'}`} />
            </div>
            <span className={`text-sm ${label === 'Choisissez...' ? 'text-water-dark font-medium' : 'text-gray-600'}`}>{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsageIcons;
