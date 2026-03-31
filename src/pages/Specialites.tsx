import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Flame, Leaf, ChefHat, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { WHATSAPP_MAIN } from "@/lib/brand";
import platMijote from "@/assets/plat_12.jpg";
import repasEquilibre from "@/assets/plat_2.jpeg";
import platSignature from "@/assets/plat_1.jpeg";
import stewCloseup from "@/assets/plat_11.jpeg";
import healthyPlate from "@/assets/plat_4.jpeg";
import freshIngredients from "@/assets/11.jpg";


const categories = [
  {
    title: "Plats Mijotés",
    description: "Nos plats phares, cuits lentement pour une tendreté et des saveurs incomparables. Viandes fondantes, légumes parfumés, sauces onctueuses.",
    longDesc: "Chaque plat est préparé avec patience, en respectant les temps de cuisson traditionnels. La viande devient fondante, les légumes s'imprègnent des épices, et les sauces développent une profondeur de goût unique.",
    image: platMijote,
    secondImage: stewCloseup,
    tag: "Signature",
    icon: Flame,
  },
  {
    title: "Repas Équilibrés",
    description: "Des assiettes complètes et nutritives pour ceux qui veulent bien manger sans compromis.",
    longDesc: "Protéines de qualité, légumes frais de saison, féculents bien dosés. Nos repas équilibrés prouvent que manger sain peut être un vrai plaisir gustatif. Idéal pour le déjeuner au bureau ou un dîner léger.",
    image: repasEquilibre,
    secondImage: healthyPlate,
    tag: "Healthy",
    icon: Leaf,
  },
  {
    title: "Recettes Signature",
    description: "Des créations originales qui mélangent tradition africaine et touches modernes.",
    longDesc: "Notre chef revisite les classiques de la cuisine burkinabè avec créativité. Des associations de saveurs surprenantes, des présentations soignées, et toujours cette exigence de qualité qui nous définit.",
    image: platSignature,
    secondImage: freshIngredients,
    tag: "Exclusif",
    icon: ChefHat,
  },
];

const Specialites = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Nos spécialités</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Des saveurs qui donnent envie de revenir
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Découvrez notre sélection de plats préparés avec passion et des ingrédients frais sélectionnés chaque jour. Contactez-nous pour connaître le menu du jour.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CATEGORIES DETAILLEES */}
      {categories.map((cat, i) => (
        <section
          key={cat.title}
          className={`section-padding ${i % 2 === 0 ? "" : "bg-surface"}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
              <AnimateOnScroll>
                <div className={`grid grid-cols-2 gap-4 ${i % 2 !== 0 ? "[direction:ltr]" : ""}`}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                  <img
                    src={cat.secondImage}
                    alt={`${cat.title} detail`}
                    className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover mt-8"
                    loading="lazy"
                  />
                </div>
              </AnimateOnScroll>

              <div className={i % 2 !== 0 ? "[direction:ltr]" : ""}>
                <AnimateOnScroll>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    <cat.icon className="h-4 w-4" />
                    {cat.tag}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{cat.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">{cat.description}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">{cat.longDesc}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" asChild>
                      <a href={WHATSAPP_MAIN} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="h-4 w-4" />
                        Commander ce plat
                      </a>
                    </Button>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* COMMENT CA MARCHE */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Comment commander
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-12 text-lg">
              Pas d'application compliquée, pas d'inscription. Commandez directement via WhatsApp en 3 étapes.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: WhatsAppIcon, num: "01", title: "Contactez-nous", text: "Envoyez un message WhatsApp avec votre commande ou vos questions." },
              { icon: ChefHat, num: "02", title: "On prépare", text: "Notre équipe prépare votre plat avec soin et des ingrédients frais." },
              { icon: Clock, num: "03", title: "Récupérez ou faites livrer", text: "Venez chercher votre commande ou recevez-la directement chez vous." },
            ].map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5 relative">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background text-foreground text-xs font-bold flex items-center justify-center">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{s.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold" asChild>
              <a href={WHATSAPP_MAIN} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Commander maintenant
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Specialites;
