import { 
  Droplet, 
  Shield, 
  Wrench, 
  Timer, 
  Leaf, 
  Medal, 
  Star, 
  Send 
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import ComparisonTable from "@/components/ComparisonTable";
import Calculator from "@/components/Calculator";
import WaterQualityCheck from "@/components/WaterQualityCheck";
import FeatureCard from "@/components/FeatureCard";
import Accordion from "@/components/Accordion";
import HeroSection from "@/components/hero/HeroSection";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const comparisonFeatures = [
    {
      name: "Filtration fine",
      filtre7eau: "0,1",
      standard: "0,5",
      unit: "µm",
      isHighlighted: true,
    },
    {
      name: "Débit",
      filtre7eau: "7",
      standard: "2,5",
      unit: "L/min",
      isHighlighted: true,
    },
    {
      name: "Charbon actif",
      filtre7eau: "Oui",
      standard: "Variable",
    },
    {
      name: "Installation",
      filtre7eau: "Simple, sans travaux",
      standard: "Complexe",
    },
    {
      name: "Durée de vie",
      filtre7eau: "1 an",
      standard: "3-6 mois",
    },
    {
      name: "Certification",
      filtre7eau: "Industrielle",
      standard: "Variable",
    },
  ];

  const faqItems = [
    {
      title: "Comment installer le Filtre7Eau ?",
      content: (
        <p>
          L'installation est très simple et ne nécessite aucun travail de plomberie complexe. Le Filtre7Eau se
          connecte directement à votre robinet existant via un tube discret d'environ 50cm. Vous recevrez un
          guide d'installation détaillé avec votre commande, et l'installation prend généralement moins de 10 minutes.
        </p>
      ),
    },
    {
      title: "Quelle est la durée de vie du filtre ?",
      content: (
        <p>
          Le Filtre7Eau a une durée de vie d'un an en utilisation normale. Contrairement aux filtres standard 
          qui nécessitent un remplacement tous les 3 à 6 mois, notre technologie avancée permet une durée 
          d'utilisation prolongée tout en maintenant des performances optimales.
        </p>
      ),
    },
    {
      title: "Que filtre exactement mon Filtre UltraZéro ?",
      content: (
        <ScrollArea className="h-[350px] pr-4">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">La microfiltration 0,1 µm</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span role="img" aria-label="main">✋</span>
                  Bactéries (E. coli, Salmonella…)
                </li>
                <li className="flex items-center gap-2">
                  <span role="img" aria-label="microbe">🦠</span>
                  Parasites (kystes de Giardia, Cryptosporidium…)
                </li>
                <li className="flex items-center gap-2">
                  <span role="img" aria-label="brume">🌫️</span>
                  Microplastiques et particules (sédiments, limon, rouille…)
                </li>
                <li className="flex items-center gap-2">
                  <span role="img" aria-label="goutte">💧</span>
                  Turbidité et impuretés physiques (&gt; 0,1 µm)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Le charbon actif naturel</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span role="img" aria-label="robinet">🚰</span>
                  Chlore, goût et odeurs de javel
                </li>
                <li className="flex items-center gap-2">
                  <span role="img" aria-label="feuille">🌱</span>
                  Pesticides et solvants (traces de produits agricoles)
                </li>
                <li className="flex items-center gap-2">
                  <span role="img" aria-label="tube">🧪</span>
                  Micropolluants organiques (résidus de médicaments, hormones, PFAS longue chaîne…)
                </li>
                <li className="flex items-center gap-2">
                  <span role="img" aria-label="usine">🏭</span>
                  Certains métaux lourds (plomb, mercure…)
                </li>
                <li className="flex items-center gap-2">
                  <span role="img" aria-label="feuille">🍃</span>
                  Composés chimiques responsables du goût désagréable
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">
                <span role="img" aria-label="stop" className="mr-2">🛑</span>
                Ce qu&apos;il ne filtre pas
              </h4>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Les virus (trop petits pour 0,1 µm)</li>
                <li>Les sels dissous et minéraux (calcaire, nitrates, fluor…)</li>
                <li>Les bactéries colonisatrices si le filtre n&apos;est pas changé à temps</li>
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="font-semibold mb-2">Sources</h4>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                <li>Centers for Disease Control and Prevention (CDC), "Microfiltration of Drinking Water," CDC Water Treatment Technologies, 2018.</li>
                <li>World Health Organization (WHO), Guidelines for Drinking-water Quality, 4ᵉ édition, 2017.</li>
                <li>NSF International, NSF/ANSI Standard 42: Drinking Water Treatment Units—Aesthetic Effects, 2019.</li>
                <li>ANSES (Agence nationale de sécurité sanitaire), Rapport sur les techniques de traitement de l&apos;eau potable, 2019.</li>
                <li>Water Research, D. Shukla et al., "Removal of microplastics by membrane filtration: A review," Water Research, vol. 164, pp. 114–126, 2019.</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      ),
    },
    {
      title: "Comment remplacer la cartouche après un an ?",
      content: (
        <p>
          Le remplacement est simple : dévissez l'ancienne cartouche et installez la nouvelle. 
          L'opération prend moins de 2 minutes. Nous vous enverrons un rappel par email 
          avant la date d'expiration de votre cartouche pour vous rappeler de la changer.
        </p>
      ),
    },
    {
      title: "Est-ce que le Filtre7Eau retire les minéraux essentiels ?",
      content: (
        <p>
          Non, contrairement à certains systèmes comme l'osmose inverse, le Filtre7Eau préserve les 
          minéraux essentiels et bénéfiques présents dans l'eau. Il élimine uniquement les contaminants 
          nocifs tout en conservant les éléments nutritifs dont votre corps a besoin.
        </p>
      ),
    },
    {
      title: "Quel est le délai de livraison ?",
      content: (
        <p>
          Nous expédions toutes les commandes sous 24 à 48 heures ouvrées. La livraison en France 
          métropolitaine prend généralement 2 à 4 jours ouvrés. Vous recevrez un email de confirmation 
          avec un numéro de suivi dès que votre commande sera expédiée.
        </p>
      ),
    },
  ];

  return (
    <div className="relative">
      <HeroSection />
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className={`font-light text-xl tracking-wider ${isScrolled ? "text-water" : "text-white"}`}>7Eau</span>
          </div>
          <Button 
            variant={isScrolled ? "primary" : "outline"} 
            size="sm"
            onClick={() => {
              const element = document.getElementById("buy");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Commander
          </Button>
        </div>
      </header>

      {/* ====== NOUVELLE SECTION ABOUT : "Et l’eau du robinet, avec le sourire…" ====== */}
      <Section id="about" background="white">
        {/* ========== AJOUT "Une aventure humaine" et "Une association engagée" AU DÉBUT ========= */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-5">Une aventure humaine</h2>
            <p className="text-gray-700 text-lg">
              C&apos;est avant tout une aventure humaine. Lorsque nos deux co-fondateurs se sont rencontrés, ils ont découvert une passion commune pour l&apos;eau, la planète et le bien-être de chacun. Animés par la même envie d&apos;agir concrètement, ils ont décidé d&apos;unir leurs forces pour créer un produit aussi utile que durable. C&apos;est ainsi qu&apos;est né UltraZéro, un filtre à eau nouvelle génération qui incarne leur vision d&apos;une innovation au service du quotidien et de l&apos;environnement.
            </p>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[160px] flex items-start">
              <div>
                <span className="font-semibold text-lg text-gray-800">Les fondateurs de 7Eau</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-5">Une association engagée</h2>
            <p className="text-gray-700 text-lg mb-6">
              Chaque achat d&apos;UltraZéro finance directement l&apos;association 7Eau, fondée par nos deux passionnés pour garantir davantage de transparence et de qualité de l&apos;eau. Grâce à votre soutien, nous menons des actions concrètes — collecte citoyenne de données, sensibilisation et développement d&apos;outils durables — et partageons en toute transparence l&apos;usage des fonds et les résultats obtenus.
            </p>
            <a 
              href="#" 
              className="text-water hover:text-water-dark font-semibold inline-flex items-center gap-2 group"
            >
              En savoir plus sur l&apos;association 7Eau
              <svg 
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </a>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[160px] flex items-start">
              <div>
                <span className="font-semibold text-lg text-gray-800">Impact solidaire 7Eau</span>
              </div>
            </div>
          </div>
        </div>
        {/* ====== SECTION : "Et l’eau du robinet, avec le sourire…" ====== */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center pt-6">
          {/* Visuel typographique/fun */}
          <div className="flex flex-col items-center justify-center order-2 md:order-1">
            <div className="relative w-full flex justify-center mb-7">
              <div className="bg-water/10 rounded-2xl flex items-center justify-center p-5 shadow-lg max-w-xs w-full">
                <Droplet className="text-water mr-3" size={44} />
                <span className="text-2xl font-extrabold text-water drop-shadow select-none animate-slide-in">
                  À la tienne ! 
                </span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 justify-center">
              {/* Expressions visuelles - typo créative */}
              {[
                "Château La Pompe",
                "Ratafia de grenouille",
                "Pousse moulin",
                "Sirop de parapluie",
                "Anisette de barbillon",
                "Pinard de cantonnier",
                "Clos des escargots",
                "Vin du Château la Fontaine",
                "Anisette de Mme Wallace"
              ].map((expression, idx) => (
                <span
                  key={expression}
                  className={`rounded-full px-4 py-1 text-sm font-semibold tracking-tight
                    ${
                      idx % 2 === 0
                        ? "bg-water/10 text-water"
                        : "bg-eco/10 text-eco"
                    }
                    border border-water/5 shadow-sm animate-fade-in`}
                >
                  {expression}
                </span>
              ))}
            </div>
          </div>
          {/* Bloc texte explicatif, call to action humour */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-5">Et l’eau du robinet, avec le sourire…</h2>
            <p className="text-gray-700 text-lg mb-5">
              Chez 7Eau, on aime bien ne pas se prendre trop au sérieux. Il nous arrive même de donner des petits surnoms à l’eau du robinet : 
            </p>
            <ul className="mb-3 ml-4 list-disc text-gray-600 text-base">
              <li>'L'eau de distribution, l'eau courante, la flotte…'</li>
            </ul>
            <p className="text-gray-700 mb-5">
              ...mais aussi plein d'autres noms rigolos partagés par nos clients. 
            </p>
            <p className="text-water font-semibold mb-6">
              Vous en connaissez d’autres ? <br className="sm:hidden" />
              <span className="font-normal">Proposez-les-nous et participez à la touche d’humour !</span>
            </p>
            {/* SUGGESTION: formulaire input mini */}
            <form className="flex gap-2" onSubmit={e => {e.preventDefault(); alert("Merci pour votre suggestion !");}}>
              <input
                type="text"
                placeholder="Votre surnom pour l’eau…"
                className="flex-1 px-4 py-2 rounded-l-lg border border-water/30 focus:outline-none focus:ring-2 focus:ring-water text-base"
              />
              <Button variant="primary" type="submit" size="sm" className="rounded-r-lg">Envoyer</Button>
            </form>
          </div>
        </div>
        {/* ================================================ */}
      </Section>
      {/* ====== FIN NOUVELLE SECTION ABOUT ====== */}

      {/* Product Features Section */}
      <Section id="features" background="water">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Une technologie révolutionnaire
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des performances inégalées pour une eau plus pure, un débit plus élevé et une installation simplifiée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<Shield />}
            title="Filtration ultra-fine 0,1µm"
            description="5x plus fine que les filtres standards (0,5µm) pour éliminer efficacement les microplastiques et contaminants."
            className="animate-slide-in"
          />
          <FeatureCard
            icon={<Droplet />}
            title="Débit exceptionnel 7L/min"
            description="3x plus rapide que les solutions classiques (2,5L/min) pour un usage quotidien sans contrainte."
            className="animate-slide-in delay-100"
          />
          <FeatureCard
            icon={<Wrench />}
            title="Installation facile"
            description="Aucun travail de plomberie complexe requis. Installation rapide en moins de 10 minutes."
            className="animate-slide-in delay-200"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Comparaison avec les filtres standards
          </h3>
          <ComparisonTable features={comparisonFeatures} />
        </div>
      </Section>

      {/* Cost Calculator Section */}
      <Section id="calculator" background="sand">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Calculez vos économies
            </h2>
            <p className="text-gray-600 mb-6">
              Découvrez combien vous pourriez économiser en passant des bouteilles plastiques au Filtre7Eau, 
              tout en réduisant votre impact environnemental.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Timer className="text-water" size={24} />
                <div>
                  <h4 className="font-bold">Durée de vie d'un an</h4>
                  <p className="text-sm text-gray-600">3x plus longue que les filtres standards</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="text-eco" size={24} />
                <div>
                  <h4 className="font-bold">Réduction des déchets plastiques</h4>
                  <p className="text-sm text-gray-600">Jusqu'à 1000+ bouteilles plastiques économisées par an</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Notre filtre avancé offre non seulement des économies financières à long terme, 
              mais contribue également à réduire significativement votre empreinte carbone.
            </p>
          </div>
          <Calculator />
        </div>
      </Section>

      {/* Water Quality Section */}
      <Section id="water-quality" background="eco">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Eau pure dans la nature" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Connaissez-vous la qualité de votre eau ?
            </h2>
            <p className="text-gray-600 mb-6">
              La qualité de l'eau varie considérablement selon les régions en France. 
              Vérifiez la qualité de l'eau dans votre commune et découvrez comment 
              Filtre7Eau peut l'améliorer.
            </p>
            <WaterQualityCheck />
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" background="sand">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rejoignez les centaines de familles qui ont déjà adopté Filtre7Eau pour leur quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial
            quote="Nous utilisions des bouteilles en plastique depuis des années. Depuis que nous avons installé Filtre7Eau, non seulement nous économisons de l'argent, mais l'eau a un goût bien meilleur !"
            name="Sophie M."
            title="Mère de 2 enfants"
            className="animate-slide-in"
          />
          <Testimonial
            quote="Le débit est vraiment impressionnant comparé à mon ancien filtre. L'installation a été simplissime, même pour quelqu'un comme moi qui n'est pas bricoleur."
            name="Thomas L."
            title="Ingénieur"
            className="animate-slide-in delay-100"
          />
          <Testimonial
            quote="En tant que sportive, je bois beaucoup d'eau. Filtre7Eau me permet d'avoir une eau de qualité tout en réduisant considérablement mes déchets plastiques."
            name="Julie D."
            title="Coach sportive"
            className="animate-slide-in delay-200"
          />
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-2">
              <Medal className="text-water" size={24} />
              <span className="font-medium">Certification Industrielle</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-2">
              <Star className="text-water" size={24} />
              <span className="font-medium">5000+ utilisateurs satisfaits</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-2">
              <Shield className="text-water" size={24} />
              <span className="font-medium">Garantie 1 an</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Links Section */}
      <Section id="blog" background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Pour aller plus loin
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre blog pour en savoir plus sur la qualité de l'eau, les microplastiques, 
            et comment prendre soin de votre santé au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            href="#" 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="h-48 bg-water-light"></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Les dangers cachés des microplastiques dans l'eau</h3>
              <p className="text-gray-600">Découvrez pourquoi les microplastiques représentent un risque pour notre santé et comment s'en protéger efficacement.</p>
            </div>
          </a>
          <a 
            href="#" 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="h-48 bg-water-light"></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Comprendre la qualité de l'eau du robinet en France</h3>
              <p className="text-gray-600">Un guide complet sur les différents polluants présents dans l'eau du robinet et leurs impacts potentiels.</p>
            </div>
          </a>
          <a 
            href="#" 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="h-48 bg-water-light"></div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">5 raisons d'arrêter les bouteilles en plastique</h3>
              <p className="text-gray-600">Impact environnemental, coût élevé, risques sanitaires... Découvrez pourquoi il est temps de changer vos habitudes.</p>
            </div>
          </a>
        </div>
      </Section>

      {/* Buy Section */}
      <Section id="buy" background="water">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Prêt à transformer votre eau du robinet ?
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Filtre7Eau</h3>
                <span className="bg-water text-white font-bold px-3 py-1 rounded-full text-sm">Starter Pack</span>
              </div>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <Shield className="text-water shrink-0 mt-1" size={18} />
                  <span>Filtration ultra-fine 0,1µm</span>
                </li>
                <li className="flex items-start gap-2">
                  <Droplet className="text-water shrink-0 mt-1" size={18} />
                  <span>Débit exceptionnel 7L/min</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="text-eco shrink-0 mt-1" size={18} />
                  <span>Charbon actif intégré</span>
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="text-water shrink-0 mt-1" size={18} />
                  <span>Installation facile, sans travaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <Timer className="text-water shrink-0 mt-1" size={18} />
                  <span>Durée de vie d'un an</span>
                </li>
              </ul>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <div>
                  <span className="text-3xl font-bold">299€</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Recharge annuelle: 159€</span>
                </div>
              </div>
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Acheter maintenant
            </Button>
          </div>
          <div className="animate-float">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">FAQ</h3>
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Droplet className="text-water mr-2" size={24} />
                <span className="font-bold text-xl">Filtre7Eau</span>
              </div>
              <p className="text-gray-600 mb-4">
                L'eau pure à portée de robinet. Un filtre révolutionnaire pour une eau plus saine.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-water hover:text-water-dark">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-water hover:text-water-dark">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363-.416-2.427-.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 01-1.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.08c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h-.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-water hover:text-water-dark">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-water hover:text-water-dark">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-water">Accueil</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-water">À propos</a></li>
                <li><a href="#features" className="text-gray-600 hover:text-water">Caractéristiques</a></li>
                <li><a href="#testimonials" className="text-gray-600 hover:text-water">Témoignages</a></li>
                <li><a href="#buy" className="text-gray-600 hover:text-water">Commander</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Ressources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-water">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-water">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-water">Guide d'installation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-water">Remplacement du filtre</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <p className="text-gray-600 mb-4">Vous avez des questions ? N'hésitez pas à nous contacter.</p>
              <form>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-water"
                  />
                  <button
                    type="submit"
                    className="bg-water text-white px-4 py-2 rounded-r-md"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
            <p className="mb-2">
              © {new Date().getFullYear()} Filtre7Eau. Tous droits réservés.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-water">Mentions légales</a>
              <a href="#" className="hover:text-water">Politique de confidentialité</a>
              <a href="#" className="hover:text-water">CGV</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button
        className="fixed bottom-4 right-4 bg-water text-white p-4 rounded-full shadow-lg hover:bg-water-dark z-50"
        aria-label="Chat with us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
