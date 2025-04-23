
import { motion } from "framer-motion";

const TeamSection = () => {
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
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <img 
              src="/images/founders.jpg" 
              alt="Les fondateurs de 7Eau" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Une aventure humaine</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              C'est avant tout une aventure humaine. Lorsque nos deux co-fondateurs se sont rencontrés, 
              ils ont découvert une passion commune pour l'eau, la planète et le bien-être de chacun.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Animés par la même envie d'agir concrètement, ils ont décidé d'unir leurs forces pour créer 
              un produit aussi utile que durable. C'est ainsi qu'est né UltraZéro, un filtre à eau nouvelle 
              génération qui incarne leur vision d'une innovation au service du quotidien et de l'environnement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
