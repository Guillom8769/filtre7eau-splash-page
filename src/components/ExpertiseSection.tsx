
import { motion } from "framer-motion";
import { Microscope, Shield, Droplet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExpertiseSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-light mb-6 leading-tight">
            De l'expertise industrielle<br />à votre foyer
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Développé initialement pour des besoins industriels exigeants, 
            Filtre7Eau apporte désormais cette technologie de pointe directement 
            dans votre cuisine, sans compromis sur la qualité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-6 space-y-2">
              <Shield className="text-water h-6 w-6 mb-2" />
              <h3 className="font-medium">Contrôle qualité</h3>
              <p className="text-sm text-gray-600">Tests rigoureux et certification industrielle</p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-6 space-y-2">
              <Microscope className="text-water h-6 w-6 mb-2" />
              <h3 className="font-medium">Précision</h3>
              <p className="text-sm text-gray-600">Filtration ultra-fine à 0,1 micron</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="relative">
        {/* Images avec effet de superposition */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src="/lovable-uploads/ec4404f7-4a88-4de0-baea-27d2c9e24d0c.png"
              alt="Chef professionnel utilisant de l'eau filtrée"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          
          {/* Image du filtre en superposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-12 -right-12 w-48 h-48 rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="/lovable-uploads/5d46eeff-bd4b-46b5-91bd-e9d38f86fe5d.png"
              alt="Filtre industriel en laboratoire"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Overlay décoratif */}
        <div className="absolute -inset-4 bg-gradient-to-br from-water-light/5 to-water-light/20 rounded-lg -z-10 blur-2xl" />
      </div>
    </div>
  );
};

export default ExpertiseSection;
