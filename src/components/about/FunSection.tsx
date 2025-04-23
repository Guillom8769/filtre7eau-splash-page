
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const expressions = [
  "Château la Pompe",
  "Pousse-moulin",
  "Sirop de parapluie",
  "Clos des chiottes"
];

const FunSection = () => {
  const [newExpression, setNewExpression] = useState("");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Et l'eau du robinet, avec le sourire...
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Chez 7Eau, on aime bien ne pas se prendre trop au sérieux. 
            Il nous arrive même de donner des petits surnoms à l'eau du robinet...
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {expressions.map((expression, index) => (
              <motion.div
                key={expression}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-water">{expression}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <p className="text-lg font-medium mb-4">Vous en connaissez d'autres ?</p>
            <div className="flex gap-4">
              <input
                type="text"
                value={newExpression}
                onChange={(e) => setNewExpression(e.target.value)}
                placeholder="Votre expression..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent"
              />
              <Button 
                variant="default"
                onClick={() => {
                  // TODO: Implement submission logic
                  setNewExpression("");
                }}
              >
                Proposer
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunSection;
