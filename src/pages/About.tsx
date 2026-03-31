import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Sparkles, Users, ShieldCheck, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { WHATSAPP_MAIN } from "@/lib/brand";
import chefCooking from "@/assets/accueil.jpeg";
import freshIngredients from "@/assets/fresh-ingredients.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import familyDining from "@/assets/family-dining.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const values = [
  { icon: Leaf, title: "Ingrédients frais", text: "Produits locaux sélectionnés chaque jour au marché pour garantir fraîcheur et qualité optimales." },
  { icon: Heart, title: "Cuisine saine", text: "Plats équilibrés, préparés sans excès de gras ni d'additifs. Votre santé est notre priorité." },
  { icon: Sparkles, title: "Goût authentique", text: "Le vrai goût de la cuisine africaine, mijoté lentement pour révéler toutes les saveurs." },
  { icon: Users, title: "Service attentionné", text: "Une équipe à l'écoute, disponible sur WhatsApp pour répondre à toutes vos questions." },
  { icon: ShieldCheck, title: "Hygiène rigoureuse", text: "Des normes strictes d'hygiène à chaque étape de la préparation de vos plats." },
  { icon: Clock, title: "Ponctualité", text: "Nous respectons les horaires convenus pour que vous receviez toujours votre commande à temps." },
];

const faqs = [
  { q: "Comment passer commande ?", a: "C'est très simple. Envoyez-nous un message sur WhatsApp au +226 64 11 11 59. Indiquez le plat souhaité, la quantité et l'heure de retrait ou livraison. Nous confirmons rapidement." },
  { q: "Proposez-vous la livraison ?", a: "Oui, nous livrons à Ouagadougou. Contactez-nous sur WhatsApp pour connaître les zones de livraison et les frais selon votre localisation." },
  { q: "Quels types de plats proposez-vous ?", a: "Nous sommes spécialisés dans les plats mijotés, les repas équilibrés et sains, ainsi que les buffets variés le week-end. Notre menu change régulièrement." },
  { q: "Puis-je commander pour un groupe ou un événement ?", a: "Absolument. Nous acceptons les commandes pour groupes, bureaux et petits événements. Contactez-nous à l'avance pour organiser votre commande." },
  { q: "Comment fonctionne le buffet du week-end ?", a: "Chaque week-end, nous proposons un buffet varié. Pour réserver, contactez le +226 52 60 07 07 sur WhatsApp. Nous vous communiquerons le menu et les détails." },
  { q: "Les plats sont-ils vraiment sains ?", a: "Oui. Nous utilisons des ingrédients frais et locaux, évitons les excès de gras et d'additifs. Notre mission est de prouver que manger sain peut aussi être délicieux." },
];

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Notre histoire</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                La qualité dans chaque bouchée
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Chez La Mijote, nous croyons qu'un bon repas ne devrait jamais être compliqué. Nos plats sont préparés avec des ingrédients frais et locaux, mijotés avec patience pour vous offrir des saveurs authentiques.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fondée à Ouagadougou en 2016 avec la conviction que manger sain et bien ne doit pas être un luxe, La Mijote s'est imposée comme une référence pour ceux qui cherchent une cuisine simple, légère, généreuse et bienveillante. Chaque plat raconte une histoire de tradition, de soin et de passion.
              </p>
              <Button variant="hero" asChild>
                <a href={WHATSAPP_MAIN} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  Nous contacter
                </a>
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img src={chefCooking} alt="Notre chef en cuisine" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover" loading="lazy" />
                <img src={freshIngredients} alt="Ingrédients frais" className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover mt-8" loading="lazy" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ce qui nous définit
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Nos engagements envers vous, chaque jour.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 100}>
                <div className="flex gap-4 items-start p-6 bg-card rounded-xl border border-border hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground mb-1">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIANCE */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateOnScroll>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Une expérience chaleureuse
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Au-delà de la cuisine, La Mijote c'est un lieu de partage. Un endroit où les familles se retrouvent, où les amis célèbrent les bons moments, et où chaque repas devient un souvenir.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Notre équipe met un point d'honneur à vous accueillir avec le sourire et à rendre chaque expérience mémorable. Que ce soit pour un repas quotidien ou un buffet du week-end, vous êtes chez vous chez La Mijote.
                </p>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                  <img src={restaurantInterior} alt="Intérieur du restaurant" className="rounded-2xl shadow-xl w-full aspect-square object-cover" loading="lazy" />
                <img src={familyDining} alt="Moment en famille" className="rounded-2xl shadow-xl w-full aspect-square object-cover mt-8" loading="lazy" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimateOnScroll className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Questions fréquentes</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vos questions, nos réponses
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="font-display font-semibold text-foreground text-left hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default About;
