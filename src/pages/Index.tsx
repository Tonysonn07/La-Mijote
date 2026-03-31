import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Camera, BookOpen, CalendarCheck, Shield, Moon, Car, Heart } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { WHATSAPP_MAIN } from "@/lib/brand";
import heroImg from "@/assets/hero-african.jpeg";
import platSignature from "@/assets/plat_1.jpeg";
import stewCloseup from "@/assets/plat_11.jpeg";
import healthyPlate from "@/assets/plat_4.jpeg";
import familyDining from "@/assets/hero-pcs.jpeg";
import ClientFeedback from "@/assets/testimony.jpeg";
import galleryYassa from "@/assets/plat_1.jpeg";
import galleryBrochettes from "@/assets/buffet_3.jpeg";
import galleryArachide from "@/assets/dessert_3.jpg";
import gallerySalade from "@/assets/plat_5.jpeg";

const Index = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Plat mijote africain" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/25" />
        </div>
        <div className="container mx-auto relative z-10 px-4 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-[fadeUp_0.5s_ease-out_forwards] border border-white/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Ouaga 2000 - Ouagadougou, Burkina Faso
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)] animate-[fadeUp_0.6s_ease-out_100ms_forwards] opacity-0">
              Nous mijotons{" "}
              <span className="bg-gradient-to-r from-red-700 to-orange-500 bg-clip-text text-transparent italic">vos plats préférés</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] max-w-lg mb-8 leading-relaxed animate-[fadeUp_0.6s_ease-out_200ms_forwards] opacity-0">
              Des repas sains, équilibrés et savoureux. Une cuisine simple, authentique et préparée avec amour pour votre bien-être au quotidien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-[fadeUp_0.6s_ease-out_300ms_forwards] opacity-0">
              <Button variant="hero" size="lg" className="font-semibold" asChild>
                <Link to="/reservation">
                  <WhatsAppIcon className="h-5 w-5" />
                  Passer une commande
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary/90 font-semibold" asChild>
                <Link to="/galerie">
                  Voir nos plats
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm animate-[fadeUp_0.6s_ease-out_400ms_forwards] opacity-0">
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white font-medium border border-white/20">#Manger Sain Burkina Faso</span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white font-medium border border-white/20">#Cuisine locale</span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white font-medium border border-white/20">+200 clients satisfaits</span>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Ce qui nous distingue</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Une cuisine pensée pour vous
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { img: stewCloseup, title: "Plats mijotés", desc: "Cuits lentement pour une saveur incomparable. Le goût de la patience dans chaque bouchée." },
              { img: healthyPlate, title: "Repas équilibrés", desc: "Des assiettes complètes et nutritives. Protéines, légumes frais et accompagnements soigneusement sélectionnés." },
              { img: platSignature, title: "Recettes signatures", desc: "Des créations originales qui mélangent tradition africaine et touches modernes pour un résultat unique." },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 150}>
                <Link to="/specialites" className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Un cadre discret et apaisant
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Offrez-vous une pause loin du bruit et du stress
            </p>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16">
            <AnimateOnScroll>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  La Mijote vous accueille dans un environnement calme et raffiné, pensé pour votre bien-être. Profitez de salons privés pour vos moments en toute intimité, d'un espace convivial pour partager en toute sérénité, et d'un parking accessible pour votre confort. Ici, tout est réuni pour vous offrir une expérience reposante, loin de l'agitation quotidienne.
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link to="/reservation">
                    Réserver maintenant
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative">
                <img src={familyDining} alt="Ambiance calme et reposante" className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
              </div>
            </AnimateOnScroll>
          </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Shield, title: "Salons privés", desc: "Pour vos moments en toute intimité" },
              { icon: Moon, title: "Cadre calme", desc: "Loin du bruit et du stress" },
              { icon: Car, title: "Parking disponible", desc: "Pour votre confort" },
              { icon: Heart, title: "Ambiance conviviale", desc: "Chaleureuse et accueillante" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <div className="group text-center bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Galerie</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Un aperçu de nos créations
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {[galleryYassa, galleryBrochettes, galleryArachide, gallerySalade].map((img, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <Link to="/galerie" className="group relative block aspect-square rounded-xl overflow-hidden">
                  <img src={img} alt="Plat La Mijote" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll className="text-center mt-8">
            <Button variant="outline" className="hover:bg-primary/90 font-semibold" asChild>
              <Link to="/galerie">
                Voir toute la galerie
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <AnimateOnScroll>
              <img src={ClientFeedback} alt="Clients heureux" className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" loading="lazy" />
            </AnimateOnScroll>
            <div>
              <AnimateOnScroll>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Nos clients temoignent</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Ils ont goûté, ils recommandent
                </h2>
              </AnimateOnScroll>
              <div className="space-y-5">
                {[
                  { name: "Aminata K.", text: "Je commande chez La Mijote chaque semaine. Les plats sont toujours bien assaisonnés et copieux. C'est comme manger à la maison, mais en mieux." },
                  { name: "Ibrahim S.", text: "Le buffet du week-end est devenu notre rituel familial. Grande variété, tout est frais et delicieux. Mes enfants adorent." },
                  { name: "Fatou D.", text: "Enfin un restaurant qui propose de la nourriture saine et savoureuse à Ouaga. Le rapport qualité-prix est excellent." },
                ].map((t, i) => (
                  <AnimateOnScroll key={t.name} delay={i * 120}>
                    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <p className="text-foreground text-sm leading-relaxed mb-3">"{t.text}"</p>
                      <p className="font-display font-bold text-foreground text-sm">— {t.name}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Explorez La Mijote
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {[
              { icon: CalendarCheck, title: "Réserver", desc: "Commande, buffet, groupe ou événement", to: "/reservation" },
              { icon: Camera, title: "Galerie", desc: "Découvrez nos plats en images", to: "/galerie" },
              { icon: BookOpen, title: "Blog", desc: "Conseils, recettes et actualités", to: "/blog" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <Link to={item.to} className="group block bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{item.desc}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à vous regaler ?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
              Commandez directement sur WhatsApp. Pas d'application, pas d'inscription — juste de la bonne cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-primary-foreground/10 font-semibold" asChild>
                <a href={WHATSAPP_MAIN} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5" />
                  Commander maintenant
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-secondary-foreground hover:bg-primary-foreground/10 font-semibold" asChild>
                <Link to="/reservation">
                  Toutes les options
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Index;