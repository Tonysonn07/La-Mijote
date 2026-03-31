import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Utensils, Users, Calendar, Clock, CheckCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { WHATSAPP_BUFFET } from "@/lib/brand";
import buffetSpread from "@/assets/buffet-Spread.jpeg";
import buffetWeekend from "@/assets/buffet-Spread_1.jpeg";
import familyDining from "@/assets/buffet-Spread_3.jpeg";
import restaurantInterior from "@/assets/buffet-Spread_2.jpeg";

const perks = [
  { icon: Utensils, title: "Variété de plats", text: "Un choix généreux de plats différents pour satisfaire tous les goûts et toutes les envies." },
  { icon: Users, title: "Idéal en famille", text: "Un moment de partage et de convivialité autour d'une table bien garnie." },
  { icon: Calendar, title: "Chaque week-end", text: "Retrouvez notre buffet chaque samedi et dimanche. Une tradition gourmande." },
  { icon: Clock, title: "Gain de temps", text: "Plus besoin de cuisiner le week-end. Profitez de votre temps libre pendant qu'on s'occupe de tout." },
];

const includes = [
  "Entrées variées et salades fraîches",
  "Plats mijotés et grillades",
  "Accompagnements",
  "Sauces traditionnelles",
  "Boissons Fraîches",
  "Service attentionné",
];

const Buffet = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={buffetSpread} alt="Buffet La Mijote" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Chaque week-end</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Le buffet du week-end
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              Pas envie de cuisiner ce week-end ? Laissez-nous vous régaler avec un buffet varié et généreux, préparé frais pour votre plus grand plaisir.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_BUFFET} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Réserver pour le buffet : +226 52 60 07 07
              </a>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi choisir notre buffet
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Un moment de plaisir et de partage, sans aucune complication.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 100}>
                <div className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <p.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 gap-4">
                <img src={buffetWeekend} alt="Buffet plats" className="rounded-2xl shadow-xl w-full aspect-square object-cover" loading="lazy" />
                <img src={restaurantInterior} alt="Ambiance restaurant" className="rounded-2xl shadow-xl w-full aspect-square object-cover mt-8" loading="lazy" />
                <img src={familyDining} alt="Repas en famille" className="rounded-2xl shadow-xl w-full aspect-square object-cover col-span-2" loading="lazy" />
              </div>
            </AnimateOnScroll>

            <div>
              <AnimateOnScroll>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ce qui vous attend
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Notre buffet est pensé pour offrir une expérience complète. Des entrées aux plats principaux, chaque élément est préparé le jour même avec des ingrédients frais.
                </p>

                <ul className="space-y-3 mb-8">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="font-display font-bold text-foreground mb-2">Réservez votre place</p>
                  <p className="text-sm text-muted-foreground mb-4">Contactez-nous sur WhatsApp pour connaître les détails et réserver.</p>
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a href={WHATSAPP_BUFFET} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp Buffet : +226 52 60 07 07
                    </a>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Buffet;
