
import { motion } from "framer-motion";
import { Droplet, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Droplet,
    title: "Débit ultra-rapide",
    description: "Jusqu'à 7 L/min pour une utilisation sans contrainte"
  },
  {
    icon: Shield,
    title: "Filtration ultra-fine",
    description: "0,1 micron pour une eau pure sans impuretés"
  },
  {
    icon: Leaf,
    title: "100% naturel",
    description: "Cartouche en charbon actif naturel et durable"
  }
];

const ProductSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[400px] md:h-[600px]">
            <motion.div 
              className="absolute inset-0 bg-water/10 rounded-3xl p-8 transform rotate-2"
              whileHover={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/product-detail.jpg" 
                alt="UltraZéro en situation" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">La filtration sans compromis</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              UltraZéro, c'est la filtration industrielle qui s'invite chez vous. 
              Fruit d'un savoir-faire professionnel, ce filtre nouvelle génération offre enfin 
              une eau d'une pureté exceptionnelle au quotidien.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <feature.icon className="text-water h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
