import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, ChevronLeft, ChevronRight, Flame, Sparkles, House, IceCreamBowl, CupSoda, UtensilsCrossed, HandPlatter } from "lucide-react";
import { WHATSAPP_MAIN } from "@/lib/brand";


import galleryPlat1 from "@/assets/plat_1.jpeg";
import galleryPlat2 from "@/assets/plat_2.jpeg";
import galleryPlat3 from "@/assets/plat_3.jpeg";
import galleryPlat4 from "@/assets/plat_4.jpeg";
import galleryPlat5 from "@/assets/plat_5.jpeg";
import galleryPlat6 from "@/assets/plat_6.jpeg";
import galleryPlat7 from "@/assets/plat_7.jpeg";
import galleryPlat8 from "@/assets/plat_8.jpeg";
import galleryPlat9 from "@/assets/plat_9.jpeg";
import galleryPlat10 from "@/assets/plat_10.jpeg";
import galleryPlat11 from "@/assets/plat_11.jpeg";
import galleryBuffet1 from "@/assets/buffet_1.jpeg";
import galleryBuffet2 from "@/assets/buffet_2.jpeg";
import galleryBuffet3 from "@/assets/buffet_3.jpeg";
import galleryBuffet4 from "@/assets/buffet_4.jpeg";
import galleryBuffet5 from "@/assets/buffet_5.jpeg";
import galleryBuffet6 from "@/assets/buffet_6.jpeg";
import galleryBuffet7 from "@/assets/buffet_7.jpeg";
import galleryBuffet8 from "@/assets/buffet_8.jpg";
import galleryBuffet9 from "@/assets/buffet_9.jpeg";
import galleryBuffet10 from "@/assets/buffet_10.jpeg";
import galleryBoisson1 from "@/assets/boisson_1.webp";
import galleryBoisson2 from "@/assets/boisson_2.webp";
import galleryBoisson3 from "@/assets/boisson_3.jpg";
import galleryBoisson4 from "@/assets/boisson_4.webp";
import galleryBoisson5 from "@/assets/boisson_5.jpg";
import galleryBoisson6 from "@/assets/boisson_6.jpg";
import galleryBoisson7 from "@/assets/boisson_7.jpg";
import galleryBoisson8 from "@/assets/boisson_8.webp";
import galleryBoisson9 from "@/assets/boisson_9.webp";
import galleryDessert1 from "@/assets/dessert_1.jpeg";
import galleryDessert2 from "@/assets/dessert_2.jpeg";
import galleryDessert3 from "@/assets/dessert_3.jpg";
import galleryDessert4 from "@/assets/dessert_4.jpg";
import galleryDessert5 from "@/assets/dessert_5.jpg";
import galleryPieces1 from "@/assets/pcs_1.jpeg";
import galleryPieces2 from "@/assets/pcs_2.jpeg";
import galleryPieces3 from "@/assets/pcs_3.jpeg";

type Category = "all" | "plats" | "buffet" | "desserts" | "boissons" | "salons";

interface Dish {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: Category;
  image: string;
  tags: string[];
}

const dishes: Dish[] = [
  {
    id: "plat-1",
    name: "Salade fraîche",
    description: "La fraîcheur qui réveille tous les sens",
    longDescription: "Une salade composée généreuse et colorée, dressée avec soin : un lit de laitue croquante, des tranches d'avocat crémeux, des sardines délicatement posées, des grains de maïs dorés, des olives noires brillantes, des cornichons acidulés, des tomates gorgées de soleil et des triangles de mangue sucrée pour une touche tropicale irrésistible.",
    category: "plats",
    image: galleryPlat1,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-2",
    name: "Poulet pané & frites maison",
    description: "L'assiette qui à la prestance d'un roi",
    longDescription: "Une cuisse de poulet pané, croustillante en surface et juteuse à cœur, accompagnée de frites maison dorées à la perfection. L'assiette est artistiquement dressée de légumes frais sculptés — carotte, concombre, tomate et olive noire — transformant chaque service en une véritable œuvre culinaire.",
    category: "plats",
    image: galleryPlat2,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-3",
    name: "Riz Gras",
    description: "Un dôme de riz rouge aux épices généreusement parfumé",
    longDescription: "Trônant fièrement sur un lit de sauce aux oignons fondants, poivrons caramélisés et herbes fraîches. Couronné d'un poisson entier frit à la peau croustillante et dorée, relevé d'une friture de pointe.",
    category: "plats",
    image: galleryPlat3,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-4",
    name: "Pâtes spéciales",
    description: "Quand l'Italie s'invite à la table africaine",
    longDescription: "Des spaghettis soyeuses au cœur de l'assiette, flanquées d'un jardin de légumes croquants — haricots verts, courgettes et carottes — et d'une généreuse sauce aux pois chiches mijotée aux épices africaines, légèrement relevée et profondément parfumée.",
    category: "plats",
    image: galleryPlat4,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-5",
    name: "Donkounou",
    description: "Le Donkounou, trésor culinaire de l'Afrique de l'Ouest",
    longDescription: "Servi dans son canari en terre accompagnés d'un poisson fumé, nappés d'une sauce tomate généreuse, relevée d'oignons rouges finement émincés et d'une pointe de piment pour les plus courageux.",
    category: "plats",
    image: galleryPlat5,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-6",
    name: "Allocos",
    description: "Le croustillant doré qui réchauffe le cœur",
    longDescription: "Des tranches de banane plantain mûre soigneusement sélectionnées, frites à la perfection jusqu'à obtenir cette belle robe dorée-caramélisée en surface et ce cœur fondant et sucré qui fait toute la magie de l'Aloco.",
    category: "plats",
    image: galleryPlat6,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-7",
    name: "Mouton cuit",
    description: "Des morceaux de mouton marinés aux épices africaines",
    longDescription: "Grillés à feu vif jusqu'à obtenir cette croûte fumée en surface et cette chair tendre et juteuse à l'intérieur. Dressés sur planche en bois avec un lit de laitue fraîche, des tomates, des rondelles d'oignons doux et deux quenelles de sauce moutarde maison.",
    category: "plats",
    image: galleryPlat7,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-8",
    name: "Poisson carpe",
    description: "Un poisson entier soigneusement mariné aux herbes fraîches",
    longDescription: "Dressé sur lit de laitue croquante et de tomates fraîches, il incarne la générosité simple et authentique de la table africaine.",
    category: "plats",
    image: galleryPlat8,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-9",
    name: "Pizza",
    description: "L'Italie réinventée aux saveurs de chez nous",
    longDescription: "Une pâte fine et croustillante généreusement nappée de sauce tomate maison, couverte d'un fromage fondant doré à souhait, garnie de morceaux de poulet tendres, de légumes colorés et d'un généreux saupoudrage d'herbes aromatiques et d'épices parfumées.",
    category: "plats",
    image: galleryPlat9,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-10",
    name: "Babinda",
    description: "L'âme de nos cuisines ancestrales dans un bol de saveurs",
    longDescription: "Le Babinda, sauce sacrée du terroir burkinabè, mijotée lentement avec des feuilles de baobab séchées et pilées, liées dans une base crémeuse et parfumée aux épices locales.",
    category: "plats",
    image: galleryPlat10,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "plat-11",
    name: "Les Planches croustillantes",
    description: "Le festin qui impressionne avant même la première bouchée",
    longDescription: "Nos Planches Royales sont l'expression ultime du savoir-faire de La Mijote : des plateaux en bois sculptés à la main, dressés somptueusement.",
    category: "plats",
    image: galleryPlat11,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-1",
    name: "Tô traditionnel façon buffet",
    description: "Un plateau gourmand dressé comme un bouquet",
    longDescription: "Formes artisanales en roses et cœurs, l'élégance traditionnel par excellence — parfait pour clôturer un repas en beauté, animer une table de buffet ou offrir en cadeau gourmand lors de vos événements les plus précieux.",
    category: "buffet",
    image: galleryBuffet1,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-2",
    name: "Riz gras façon buffet",
    description: "Le riz de la générosité et du partage",
    longDescription: "Inspiré des grands repas de fête West africains, ce riz gras mijote lentement dans une sauce tomate parfumée aux épices du terroir, agrémentée de carottes, maïs, petits pois et oignons fondants. Couronné de morceaux d'œufs brouillés dorés, il est servi en grand plat de buffet chaud, fidèle à la tradition du repas communautaire.",
    category: "buffet",
    image: galleryBuffet2,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-3",
    name: "Bouchées festives",
    description: "Quand la fête commence avant même de s'asseoir à table",
    longDescription: "Un plateau de bouchées festives soigneusement préparées pour éveiller les appétits : mini pizzas généreusement garnies, feuilletés croustillants aux saveurs épicées et à la farce parfumée. Ce plateau est la promesse d'un moment convivial où chaque bouchée raconte une histoire de savoir-faire et de gourmandise.",
    category: "buffet",
    image: galleryBuffet3,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-4",
    name: "Plateau Nems et Mini Pizza",
    description: "Nems croustillants et mini pizzas généreusement garnies.",
    longDescription: "Rouleaux frits croustillants, farcis de viande épicée et légumes. Accompagnés de mini pizzas généreusement garnies. Parfaits pour animer vos tables de buffet et ravir les papilles de tous vos convives, petits et grands. Un duo de saveurs et de textures qui fait l'unanimité à chaque occasion.",
    category: "buffet",
    image: galleryBuffet4,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-5",
    name: "Grande Salade Composée",
    description: "Une salade rafraîchissante et garnie de légumes frais",
    longDescription: "Une salade composée de laitue, tomates, concombres, oignons et vinaigrette au citron. Parfaite pour rafraîchir les papilles avant le repas principal.",
    category: "buffet",
    image: galleryBuffet5,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-6",
    name: "Couscous",
    description: "Un couscous délicieux et parfumé, parfait pour les grandes occasions",
    longDescription: "Un couscous fin et aérien, délicatement parfumé au curcuma pour sa belle robe dorée. Léger, généreux et profondément parfumé, il se marie aussi bien avec les viandes grillées qu'avec le poisson.",
    category: "buffet",
    image: galleryBuffet6,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-7",
    name: "Macaroni",
    description: "Des macaronis tendres mijotés dans une sauce épicée généreusement parfumée",
    longDescription: "agrémentés de morceaux de poulet fondants, de poivrons colorés et d'oignons caramélisés. Servis bien chauds, ils exhalent des arômes envoûtants qui ouvrent l'appétit dès le premier coup d'œil. Le Macaroni , c'est le plat de buffet qui disparaît en premier — chaleureux, généreux et irrésistible , fidèle à l'esprit convivial de La Mijote.",
    category: "buffet",
    image: galleryBuffet7,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-8",
    name: "Mini burgers briochés",
    description: "La fête dans la paume de la main",
    longDescription: "De délicieux mini burgers aux petits pains briochés saupoudrés de graines de sésame, garnis de laitue croquante, de tomate fraîche. Dressés sur planche en bois et piqués de leur cure-dent élégant, ils sont aussi beaux que savoureux.",
    category: "buffet",
    image: galleryBuffet8,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-9",
    name: "Vermicelles",
    description: "la chaleur du foyer dans chaque fil de pâte",
    longDescription: "Des vermicelles fins dorés et moelleux, généreusement garnis de morceaux de saucisse savoureux, de grains de maïs sucrés et d'olives noires brillantes. Un plat de buffet convivial, coloré et réconfortant — prêt à régaler petits et grands dès le premier service.",
    category: "buffet",
    image: galleryBuffet9,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "buffet-10",
    name: "Le Grand Buffet",
    description: "Le Grand Buffet est la signature des grands événements de La Mijote",
    longDescription: "Le Grand Buffet est la signature des grands événements de La Mijote : une table royale où s'alignent côte à côte nos salades composées généreuses — carottes râpées, petits pois, œufs durs, oignons, poivrons colorés — et nos plateaux de céréales finement dressés : couscous, mil et graines parfumées, couronnés de légumes frais et d'œufs dorés. Chaque plat est dressé à la main avec soin et élégance, recouvert et préservé jusqu'au moment du service.",
    category: "buffet",
    image: galleryBuffet10,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "dessert-1",
    name: "Gaufres",
    description: "La douceur qui met tout le monde d'accord",
    longDescription: "Des gaufres dorées à la pâte moelleuse, généreusement nappées de sauce chocolat fondante, parsemées d'éclats de noisettes croquants et de vermicelles colorés festifs. Dressées en plateau sur bois, elles sont aussi belles à regarder qu'irrésistibles à déguster.",
    category: "desserts",
    image: galleryDessert1,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "dessert-2",
    name: "Gâteau au chocolat",
    description: "Un délice chocolaté qui ravit les papilles",
    longDescription: "une génoise vanille dorée et moelleuse, enlacée d'une couche chocolat intense et fondante. Le tout enrobé d'un glaçage blanc soyeux et parsemé de copeaux de chocolat noir pour une finition digne des plus grandes pâtisseries. Le Gâteau , c'est l'équilibre parfait entre douceur et intensité — la pièce maîtresse de vos tables de desserts chez La Mijote.",
    category: "desserts",
    image: galleryDessert2,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "dessert-3",
    name: "Dégué",
    description: "La douceur ancestrale qui traverse les générations",
    longDescription: "Le dessert emblématique de l'Afrique de l'Ouest dans toute sa splendeur : un couscous de mil fin et délicat, enveloppé d'une crème lactée onctueuse et légèrement sucrée, couronné de raisins secs fondants. Servi en verrine individuelle, il allie la noblesse de la tradition à l'élégance du service moderne.",
    category: "desserts",
    image: galleryDessert3,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "dessert-4",
    name: "Crêpe Nature Classique",
    description: "Crêpe fine et dorée, pure et légère",
    longDescription: "Crêpe fine et dorée, préparée avec une pâte maison légère, sans garniture superflue. Parfaite pour savourer la pureté du beurre et de la farine de qualité.",
    category: "desserts",
    image: galleryDessert4,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "dessert-5",
    name: "Yaourt Maison Velouté",
    description: "Yaourt crémeux, frais et onctueux",
    longDescription: "Yaourt crémeux et onctueux, fermenté artisanalement avec du lait frais. Fraîcheur garantie, nature ou à personnaliser avec vos saveurs préférées.",
    category: "desserts",
    image: galleryDessert5,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "boisson-1",
    name: "Jus de Yamakou",
    description: "Une boisson maison préparée avec amour et des ingrédients frais",
    longDescription: "Du gingembre frais râpé et infusé, relevé d'un généreux trait de citron vert pressé et adouci selon les envies. Servi bien frais sur glaçons, il offre cette sensation unique — à la fois rafraîchissant et réchauffant — que seul le gingembre sait donner.",
    category: "boissons",
    image: galleryBoisson1,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "boisson-2",
    name: "Jus de Bissap",
    description: "Une boisson maison préparée avec amour et des ingrédients frais",
    longDescription: "Le Bissap, infusion de fleurs d'hibiscus séchées, préparé maison selon la tradition ouest-africaine — profondément rouge, légèrement acidulé et naturellement sucré. Servi sur glaçons généreux et couronné de feuilles de menthe fraîche, il est aussi beau dans le verre qu'irrésistible en bouche. Un classique qui rafraîchit et ravit à chaque gorgée.",
    category: "boissons",
    image: galleryBoisson2,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "boisson-3",
    name: "Jus d'Horcheta",
    description: "La douceur crémeuse qui apaise et réconforte à chaque gorgée",
    longDescription: "Une boisson artisanale préparée à base de souchet — cette petite graine dorée au goût naturellement sucré et noisette — finement broyé et infusé dans du lait frais onctueux. Le résultat : une boisson crémeuse, fraîche et légèrement sucrée, d'une couleur ivoire apaisante qui invite à la détente.",
    category: "boissons",
    image: galleryBoisson3,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "boisson-4",
    name: "Jus de Zoomkom",
    description: "La boisson de nos ancêtres, servie avec modernité et passion",
    longDescription: "Le Zoomkom, boisson ancestrale burkinabè à base de farine de sorgho ou de mil légèrement fermentée, filtré et préparé selon la tradition. Sa couleur dorée et ambrée, sa texture légèrement veloutée et son goût acidulé et naturellement sucré en font une boisson unique au monde.",
    category: "boissons",
    image: galleryBoisson4,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "boisson-5",
    name: "Jus de Tamarin",
    description: "Une boisson maison préparée avec amour et des ingrédients frais",
    longDescription: "Riche en vitamines et aux vertus digestives reconnues, le tamarin est la boisson qui réconcilie tradition et bien-être. A déguster frais, les yeux fermés.",
    category: "boissons",
    image: galleryBoisson5,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "boisson-6",
    name: "Dolo, Bière de Sorgho",
    description: "Une boisson traditionnelle préparée avec amour et des ingrédients frais",
    longDescription: "Bière traditionnelle burkinabè brassée artisanalement à partir de sorgho fermenté selon des techniques ancestrales transmises de génération en génération. Sa couleur ambrée et trouble, son goût légèrement acidulé et terreux et ses arômes chauds et profonds en font une boisson unique — authentiquement burkinabè.",
    category: "boissons",
    image: galleryBoisson6,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "boisson-7",
    name: "Fanta",
    description: "Une boisson pétillante et fruitée bien connue de tous",
    longDescription: "Proposée bien fraîche pour accompagner vos plats et égayer vos tables de buffet. Sucrée, pétillante et rafraîchissante — la boisson que petits et grands réclament toujours chez La Mijote.",
    category: "boissons",
    image: galleryBoisson7,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "boisson-8",
    name: "Sprite",
    description: "Une boisson soda au citron pétillant et désaltérant",
    longDescription: "Servie bien frais pour accompagner tous vos plats. Léger, transparent et rafraîchissant.",
    category: "boissons",
    image: galleryBoisson8,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "boisson-9",
    name: "Coca-Cola",
    description: "Une boisson soda emblématique au goût inimitable",
    longDescription: "Servi bien frais pour accompagner toutes vos bouchées et plats. Pétillant, caramélisé et désaltérant.",
    category: "boissons",
    image: galleryBoisson9,
    tags: ["Populaire", "Mijote"],
  },
  {
    id: "salon-1",
    name: "Salon Privé VIP",
    description: "Espace intime pour vos célébrations spéciales et dîners romantiques",
    longDescription: "Notre salon privé VIP offre une ambiance raffinée parfaite pour vos occasions spéciales. Éclairage tamisé, service personnalisé et menu exclusif. Idéal pour les anniversaires, demandes en mariage ou simplement un moment privilégié à deux. Réservez à l'avance pour garantir la disponibilité.",
    category: "salons",
    image: galleryPieces1,
    tags: ["VIP", "Romantique"],
  },
  {
    id: "salon-2",
    name: "Salon Privé VIP",
    description: "Espace intime pour vos célébrations spéciales et dîners romantiques",
    longDescription: "Notre salon privé VIP offre une ambiance raffinée parfaite pour vos occasions spéciales. Éclairage tamisé, service personnalisé et menu exclusif. Idéal pour les anniversaires, demandes en mariage ou simplement un moment privilégié à deux. Réservez à l'avance pour garantir la disponibilité.",
    category: "salons",
    image: galleryPieces2,
    tags: ["VIP", "Romantique"],
  },
  {
    id: "salon-3",
    name: "Salon Privé VIP",
    description: "Espace intime pour vos célébrations spéciales et dîners romantiques",
    longDescription: "Notre salon privé VIP offre une ambiance raffinée parfaite pour vos occasions spéciales. Éclairage tamisé, service personnalisé et menu exclusif. Idéal pour les anniversaires, demandes en mariage ou simplement un moment privilégié à deux. Réservez à l'avance pour garantir la disponibilité.",
    category: "salons",
    image: galleryPieces3,
    tags: ["VIP", "Romantique"],
  },
];

const categories: { label: string; value: Category; icon: typeof Flame }[] = [
  { label: "Tous", value: "all", icon: Sparkles },
  { label: "Plats", value: "plats", icon: UtensilsCrossed },
  { label: "Buffet", value: "buffet", icon: HandPlatter },
  { label: "Desserts", value: "desserts", icon: IceCreamBowl },
  { label: "Boissons", value: "boissons", icon: CupSoda },
  { label: "Salons Privés", value: "salons", icon: House },
];

const Gallery = () => {
  const [filter, setFilter] = useState<Category>("all");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = filter === "all" ? dishes : dishes.filter((d) => d.category === filter);

  const openLightbox = (dish: Dish) => {
    setSelectedDish(dish);
    setLightboxIndex(filtered.indexOf(dish));
  };

  const navigateLightbox = (dir: number) => {
    const newIndex = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightboxIndex(newIndex);
    setSelectedDish(filtered[newIndex]);
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Notre galerie</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nos plats en images
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Explorez notre selection de plats. Cliquez sur un plat pour decouvrir les details et commander directement.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  filter === cat.value
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
                }`}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dish, i) => (
              <AnimateOnScroll key={dish.id} delay={i * 10}>
                <button
                  onClick={() => openLightbox(dish)}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 text-left w-full"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-medium text-primary-foreground bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        Voir les details
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="bg-background rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "fadeUp 0.1s ease-out forwards" }}
          >
            <div className="relative">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
              <div className="absolute bottom-3 left-3 flex gap-1.5">
                {selectedDish.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">{selectedDish.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{selectedDish.longDescription}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" className="flex-1" asChild>
                  <a href={`${WHATSAPP_MAIN}?text=Bonjour, je souhaite commander : ${selectedDish.name}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Commander ce plat
                  </a>
                </Button>
                <Button variant="outline" size="lg" onClick={() => setSelectedDish(null)}>
                  Continuer à explorer
                </Button>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(24px) scale(0.96); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Gallery;
