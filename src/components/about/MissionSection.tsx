
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Une association engagée</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Au-delà du produit, 7Eau est aussi une association qui finance des projets concrets pour 
              l'accès à l'eau potable, la protection de l'environnement et la sensibilisation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Chaque filtre UltraZéro vendu contribue directement à ces actions sur le terrain. 
              Par exemple, vos achats aident à installer des points d'eau dans des communautés qui en manquent, 
              à nettoyer des rivières ou à organiser des ateliers d'éducation à l'environnement.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-water font-semibold">
                La transparence nous tient à cœur : nous partageons avec vous l'utilisation des fonds 
                et l'impact réel de chaque projet soutenu.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <img 
              src="/images/impact.jpg" 
              alt="Impact social de 7Eau" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
