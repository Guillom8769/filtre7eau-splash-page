
import { Droplet, Leaf, Shield, Heart, BadgeCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-water/5 to-white">
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Section 1 - Humaine */}
        <section className="mt-12 mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Une aventure humaine</h2>
            <p className="text-gray-700 text-lg mb-4">
              C’est avant tout une aventure humaine. Lorsque nos deux co-fondateurs se sont rencontrés, ils ont découvert une passion commune pour l’eau, la planète et le bien-être de chacun.
              Animés par la même envie d’agir concrètement, ils ont décidé d’unir leurs forces pour créer un produit aussi utile que durable.
              C’est ainsi qu’est né UltraZéro, un filtre à eau nouvelle génération qui incarne leur vision d’une innovation au service du quotidien et de l’environnement.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/founders.jpg"
              alt="Les fondateurs de 7Eau"
              className="rounded-2xl object-cover w-full h-72 shadow-lg"
              style={{ maxWidth: 380 }}
            />
          </div>
        </section>
        {/* Section 2 - Association */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Une association engagée</h2>
            <p className="text-gray-700 text-lg mb-4">
              Au-delà du produit, 7Eau est aussi une association qui finance des projets concrets pour l’accès à l’eau potable, la protection de l’environnement et la sensibilisation.
              Chaque filtre UltraZéro vendu contribue directement à ces actions sur le terrain. 
              Par exemple, vos achats aident à installer des points d’eau dans des communautés qui en manquent, à nettoyer des rivières ou à organiser des ateliers d’éducation à l’environnement.
            </p>
            <div className="bg-white p-6 rounded-xl shadow border mt-2">
              <p className="text-water font-semibold">
                La transparence nous tient à cœur : nous partageons avec vous l’utilisation des fonds et l’impact réel de chaque projet soutenu.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex items-center justify-center">
            <img
              src="/images/impact.jpg"
              alt="Impact solidaire 7Eau"
              className="rounded-2xl object-cover w-full h-72 shadow-lg"
              style={{ maxWidth: 380 }}
            />
          </div>
        </section>
        {/* Section 3 - Filtration & valeurs */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">La filtration sans compromis</h2>
            <p className="text-gray-700 text-lg mb-3">
              UltraZéro, c’est la filtration industrielle qui s’invite chez vous. Fruit d’un savoir-faire professionnel, ce filtre nouvelle génération offre enfin une eau d’une pureté exceptionnelle au quotidien.
            </p>
            <ul className="mb-2 ml-0 pl-0">
              <li className="mb-1 flex items-center gap-2">
                <Droplet className="text-water w-5 h-5" />
                <span>Débit ultra-rapide : jusqu’à 7 L/min</span>
              </li>
              <li className="mb-1 flex items-center gap-2">
                <Shield className="text-water w-5 h-5" />
                <span>Filtration ultra-fine : 0,1 micron (sans impuretés)</span>
              </li>
              <li className="mb-1 flex items-center gap-2">
                <Leaf className="text-eco w-5 h-5" />
                <span>Cartouche 100% naturelle (charbon actif)</span>
              </li>
            </ul>
            <p className="text-gray-700 text-lg">
              Installation facile en moins de 30 minutes (sans travaux) – une eau saine, sans contrainte ni compromis sur la qualité ou le style.
            </p>
            {/* Avantages visuels - format "chips" */}
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border text-sm text-green-700 border-green-200 bg-green-50">
                <Leaf className="w-4 h-4 text-green-700" /> Écologique
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border text-sm text-blue-700 border-blue-200 bg-blue-50">
                <Heart className="w-4 h-4 text-blue-600" /> Santé optimale
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border text-sm text-water border-water/20 bg-water/10">
                <BadgeCheck className="w-4 h-4 text-water" /> Qualité certifiée
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/lovable-uploads/8b8cc8b7-1607-416a-b265-48c52b86a657.png"
              alt="Océan, symbole d'eau pure et naturelle"
              className="rounded-2xl object-cover w-full h-72 shadow-lg"
              style={{ maxWidth: 420 }}
            />
          </div>
        </section>
        {/* Section 4 - Humour */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Et l’eau du robinet, avec le sourire…
          </h2>
          <p className="text-gray-700 text-lg mb-4 text-center max-w-2xl mx-auto">
            Chez 7Eau, on aime bien ne pas se prendre trop au sérieux.
            Il nous arrive même de donner des petits surnoms à l’eau du robinet:
            <span className="block mt-1 font-medium italic text-water">
              « Château la Pompe », « pousse-moulin », « sirop de parapluie », « clos des chiottes »…
            </span>
            <span className="block mt-3">
              Vous en connaissez d’autres ? Proposez-les-nous et participez à la touche d’humour !
            </span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
