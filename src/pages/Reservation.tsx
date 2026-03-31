import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Users, Utensils, Calendar, Clock, MapPin, Phone, CheckCircle, User, AlertCircle, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { WHATSAPP_MAIN, WHATSAPP_BUFFET } from "@/lib/brand";

type ReservationType = "repas" | "buffet" | "groupe" | "evenement";

interface ReservationOption {
  type: ReservationType;
  title: string;
  description: string;
  icon: typeof Users;
  whatsapp: string;
  features: string[];
  cta: string;
}

const options: ReservationOption[] = [
  {
    type: "repas",
    title: "Commande Individuelle selon vos préférences",
    description: "Commandez votre plat du jour ou votre favori. Récupération sur place ou livraison à Ouagadougou.",
    icon: Utensils,
    whatsapp: WHATSAPP_MAIN,
    features: [
      "Plats mijotés et repas équilibrés",
      "Livraison disponible à Ouagadougou",
      "Commande par WhatsApp simple et rapide",
      "Confirmation sous 10 minutes",
    ],
    cta: "Commander mon repas",
  },
  {
    type: "buffet",
    title: "Buffet Week-end",
    description: "Réservez votre place pour notre buffet du samedi ou dimanche. Variété et plaisir garantis.",
    icon: Calendar,
    whatsapp: WHATSAPP_BUFFET,
    features: [
      "Buffet varié chaque week-end",
      "Plus de 10 plats différents",
      "Idéal en famille ou entre amis",
      "Réservation",
    ],
    cta: "Réserver pour le buffet",
  },
  {
    type: "groupe",
    title: "Commande Groupe",
    description: "Repas pour votre équipe, bureau, réunion ou en famille. Nous préparons des quantités adaptées à votre programme.",
    icon: Users,
    whatsapp: WHATSAPP_MAIN,
    features: [
      "À partir de 5 personnes",
      "Menu adapté à vos préférences",
      "Livraison en entreprise possible",
      "Dévis rapide sur demande",
    ],
    cta: "Demander un dévis",
  },
  {
    type: "evenement",
    title: "Événement Privé",
    description: "Anniversaire, fête ou célébration — nous pouvons préparer un repas spécial pour votre événement.",
    icon: Calendar,
    whatsapp: WHATSAPP_MAIN,
    features: [
      "Menu personnalisé",
      "Quantités sur mesure",
      "Service traiteur possible",
      "Planification à l'avance",
    ],
    cta: "Planifier mon événement",
  },
];

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    whatsapp: '',
    nombrePersonnes: '1',
    date: '',
    heure: '',
    typeCommande: 'plats', // 'plats', 'personnalise', ou 'buffet-personnalise'
    platsSelectionnes: [] as string[],
    commandePersonnalisee: '',
    allergies: '',
    preferences: '',
    messageSupplementaire: '',
    evenement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Liste des plats disponibles
  const platsDisponibles = [
    'Riz gras au poulet',
    'Poulet braisé aux légumes',
    'Poisson grillé sauce tomate',
    'Mafé de bœuf',
    'Yassa de poulet',
    'Salade composée',
    'Grillades mixtes',
    'Spaghetti bolognaise'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePlatToggle = (plat: string) => {
    setFormData(prev => ({
      ...prev,
      platsSelectionnes: prev.platsSelectionnes.includes(plat)
        ? prev.platsSelectionnes.filter(p => p !== plat)
        : [...prev.platsSelectionnes, plat]
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) newErrors.nom = 'Le nom est obligatoire';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'Le numéro WhatsApp est obligatoire';
    if (!formData.date) newErrors.date = 'La date est obligatoire';
    if (!formData.heure) newErrors.heure = 'L\'heure est obligatoire';

    if (formData.typeCommande === 'plats' && formData.platsSelectionnes.length === 0) {
      newErrors.platsSelectionnes = 'Veuillez sélectionner au moins un plat';
    }

    if ((formData.typeCommande === 'personnalise' || formData.typeCommande === 'buffet-personnalise') && !formData.commandePersonnalisee.trim()) {
      newErrors.commandePersonnalisee = 'Veuillez décrire votre commande';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    let message = `Bonjour La Mijote, je souhaite faire une réservation :\n\n`;
    message += `👤 Nom : ${formData.nom}\n`;
    message += `📱 WhatsApp : ${formData.whatsapp}\n`;
    message += `👥 Nombre de personnes : ${formData.nombrePersonnes}\n`;
    message += `📅 Date : ${formData.date}\n`;
    message += `🕐 Heure : ${formData.heure}\n\n`;

    if (formData.typeCommande === 'plats') {
      message += `🍽️ Commande :\n${formData.platsSelectionnes.join('\n')}\n`;
    } else {
      message += `🍽️ Commande personnalisée :\n${formData.commandePersonnalisee}\n`;
    }

    if (formData.allergies) {
      message += `\n🚫 Allergies : ${formData.allergies}\n`;
    }

    if (formData.preferences) {
      message += `\n❤️ Préférences : ${formData.preferences}\n`;
    }

    if (formData.messageSupplementaire) {
      message += `\n💬 Message : ${formData.messageSupplementaire}\n`;
    }

    if (formData.evenement) {
      message += `\n🎉 Réservation pour un événement\n`;
    }

    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate WhatsApp URL with message
    const whatsappUrl = `${WHATSAPP_MAIN}?text=${generateWhatsAppMessage()}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          Demande envoyée avec succès !
        </h3>
        <p className="text-muted-foreground mb-6">
          Votre demande a bien été envoyée. Nous vous contacterons sur WhatsApp pour confirmer votre réservation.
        </p>
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="mr-5"
          >
            Faire une nouvelle demande
          </Button>
          <Button asChild>
            <a href={WHATSAPP_MAIN} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4 mr-2" />
              Ouvrir WhatsApp
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Informations client */}
      <div>
        <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          Informations client
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              className={`w-full h-12 px-4 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-foreground text-foreground ${
                errors.nom ? 'border-destructive' : 'border-input'
              }`}
              placeholder="Votre nom complet"
            />
            {errors.nom && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.nom}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Numéro WhatsApp *
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              className={`w-full h-12 px-4 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-foreground text-foreground ${
                errors.whatsapp ? 'border-destructive' : 'border-input'
              }`}
              placeholder="+226 XX XX XX XX"
            />
            {errors.whatsapp && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.whatsapp}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Nombre de personnes *
              </label>
            <select
              name="nombrePersonnes"
              value={formData.nombrePersonnes}
              onChange={handleInputChange}
              className="w-full h-12 px-4 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num.toString()}>{num} personne{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full h-12 px-4 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground 
                [&::-webkit-calendar-picker-indicator]:opacity-100
                [&::-webkit-calendar-picker-indicator]:cursor-pointer
                [&::-webkit-calendar-picker-indicator]:filter
                [&::-webkit-calendar-picker-indicator]:invert-[0.6]
                dark:[&::-webkit-calendar-picker-indicator]:invert-[0.4]
                ${errors.date ? 'border-destructive' : 'border-input'}`}
              />
              {errors.date && (
                <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.date}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Heure *
              </label>
              <input
                type="time"
                name="heure"
                value={formData.heure}
                onChange={handleInputChange}
                className={`w-full h-12 px-4 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground
                [&::-webkit-calendar-picker-indicator]:opacity-100
                [&::-webkit-calendar-picker-indicator]:cursor-pointer
                [&::-webkit-calendar-picker-indicator]:filter
                [&::-webkit-calendar-picker-indicator]:invert-[0.6]
                dark:[&::-webkit-calendar-picker-indicator]:invert-[0.4]
                ${errors.heure ? 'border-destructive' : 'border-input'}`}
              />
              {errors.heure && (
                <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.heure}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Type de commande */}
      <div>
        <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Utensils className="h-5 w-5 text-primary" />
          Type de commande
        </h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3 p-4 bg-card border border-input rounded-lg cursor-pointer hover:border-primary/50 hover:bg-primary/50 transition-colors">
            <input
              type="radio"
              name="typeCommande"
              value="plats"
              checked={formData.typeCommande === 'plats'}
              onChange={handleInputChange}
              className="text-primary focus:ring-primary"
            />
            <div>
              <span className="font-medium text-foreground">Choisir parmi les plats disponibles</span>
              <p className="text-sm text-muted-foreground">Sélectionnez vos plats préférés dans notre carte</p>
            </div>
          </label>

          <label className="flex items-center gap-3 p-4 bg-card border border-input rounded-lg cursor-pointer hover:border-primary/50 hover:bg-primary/50 transition-colors">
            <input
              type="radio"
              name="typeCommande"
              value="personnalise"
              checked={formData.typeCommande === 'personnalise'}
              onChange={handleInputChange}
              className="text-primary focus:ring-primary"
            />
            <div>
              <span className="font-medium text-foreground">Personnaliser ma commande</span>
              <p className="text-sm text-muted-foreground">Décrivez exactement ce que vous souhaitez</p>
            </div>
          </label>

          <label className="flex items-center gap-3 p-4 bg-card border border-input rounded-lg cursor-pointer hover:border-primary/50 hover:bg-primary/50 transition-colors">
            <input
              type="radio"
              name="typeCommande"
              value="buffet-personnalise"
              checked={formData.typeCommande === 'buffet-personnalise'}
              onChange={handleInputChange}
              className="text-primary focus:ring-primary"
            />
            <div>
              <span className="font-medium text-foreground">Personnaliser ma commande pour le buffet</span>
              <p className="text-sm text-muted-foreground">Décrivez ce que vous souhaitez pour le buffet du week-end</p>
            </div>
          </label>
        </div>

        {/* Affichage conditionnel */}
        {formData.typeCommande === 'plats' && (
          <div className="mt-6">
            <label className="block text-sm font-medium text-foreground mb-3">
              Sélectionnez vos plats *
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              {platsDisponibles.map(plat => (
                <label key={plat} className="flex items-center gap-3 p-3 bg-card border border-input rounded-lg cursor-pointer hover:border-primary/50 hover:bg-primary/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.platsSelectionnes.includes(plat)}
                    onChange={() => handlePlatToggle(plat)}
                    className="text-primary focus:ring-primary rounded"
                  />
                  <span className="text-sm text-foreground">{plat}</span>
                </label>
              ))}
            </div>
            {errors.platsSelectionnes && (
              <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.platsSelectionnes}
              </p>
            )}
          </div>
        )}

        {(formData.typeCommande === 'personnalise' || formData.typeCommande === 'buffet-personnalise') && (
          <div className="mt-6">
            <label className="block text-sm font-medium text-foreground mb-3">
              Décrivez votre commande *
            </label>
            <textarea
              name="commandePersonnalisee"
              value={formData.commandePersonnalisee}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-foreground text-foreground ${
                errors.commandePersonnalisee ? 'border-destructive' : 'border-input'
              }`}
              placeholder={formData.typeCommande === 'buffet-personnalise' 
                ? "Ex: Pour le buffet du week-end, je voudrais plus de poulet braisé et moins de légumes..."
                : "Ex: Je voudrais un poulet braisé avec du riz, mais sans oignons, et une salade composée..."
              }
            />
            {errors.commandePersonnalisee && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.commandePersonnalisee}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Personnalisation */}
      <div>
        <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Personnalisation de votre repas
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Allergies ou restrictions alimentaires
            </label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleInputChange}
              className="w-full h-12 px-4 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-foreground text-foreground"
              placeholder="Ex: arachides, gluten, lactose..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Préférences culinaires
            </label>
            <input
              type="text"
              name="preferences"
              value={formData.preferences}
              onChange={handleInputChange}
              className="w-full h-12 px-4 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-foreground text-foreground"
              placeholder="Ex: peu de sel, sans oignon, pas épicé..."
            />
          </div>
        </div>
      </div>

      {/* Informations complémentaires */}
      <div>
        <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Informations complémentaires
        </h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message supplémentaire
            </label>
            <textarea
              name="messageSupplementaire"
              value={formData.messageSupplementaire}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors placeholder:text-muted-foreground text-foreground"
              placeholder="Toute information supplémentaire pour votre commande..."
            />
          </div>

          <label className="flex items-center gap-3 p-4 bg-card border border-input rounded-lg cursor-pointer hover:border-primary/50 hover:bg-primary/50 transition-colors">
            <input
              type="checkbox"
              name="evenement"
              checked={formData.evenement}
              onChange={handleInputChange}
              className="text-primary focus:ring-primary rounded"
            />
            <div>
              <span className="font-medium text-foreground">Réservation pour un événement</span>
              <p className="text-sm text-muted-foreground">Anniversaire, fête, réunion professionnelle...</p>
            </div>
          </label>
        </div>
      </div>

      {/* Bouton CTA */}
      <div className="pt-6 border-t border-border">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Réserver maintenant
            </>
          )}
        </Button>
        <p className="text-center text-sm text-muted-foreground mt-4">
          En soumettant ce formulaire, vous serez redirigé vers WhatsApp pour finaliser votre réservation.
        </p>
      </div>
    </form>
  );
};

const Reservation = () => {
  const [selected, setSelected] = useState<ReservationType>("repas");
  const activeOption = options.find((o) => o.type === selected)!;

  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Réservation</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Réservez votre experience
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Que ce soit pour un repas quotidien, un buffet du week-end, un groupe ou un événement, nous avons la formule qu'il vous faut.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* TYPE SELECTOR */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {options.map((opt) => (
              <AnimateOnScroll key={opt.type}>
                <button
                  onClick={() => setSelected(opt.type)}
                  className={`w-full p-6 rounded-2xl border text-left transition-all duration-300 h-full flex flex-col ${
                    selected === opt.type
                      ? "bg-primary/5 border-primary shadow-lg shadow-primary/10"
                      : "bg-card border-border hover:border-primary/20 hover:shadow-md"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    selected === opt.type ? "bg-primary/15" : "bg-muted"
                  }`}>
                    <opt.icon className={`h-6 w-6 ${selected === opt.type ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <h3 className={`font-display font-bold mb-1 transition-colors ${
                    selected === opt.type ? "text-primary" : "text-foreground"
                  }`}>{opt.title}</h3>
                  <p className="text-muted-foreground text-sm flex-1">{opt.description}</p>
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          {/* SELECTED DETAIL */}
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll key={selected}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <activeOption.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-foreground">{activeOption.title}</h2>
                      <p className="text-muted-foreground text-sm">{activeOption.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {activeOption.features.map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-surface rounded-xl p-6 mb-8">
                    <h3 className="font-display font-bold text-foreground mb-4">Comment réserver</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { num: "01", title: "Contactez-nous", text: "Envoyez un message WhatsApp" },
                        { num: "02", title: "Précisez", text: "Nombre de personnes, date et préférences" },
                        { num: "03", title: "Confirmez", text: "Nous confirmons les détails et le tarif" },
                      ].map((step) => (
                        <div key={step.num} className="text-center">
                          <span className="inline-block w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mx-auto mb-2">
                            {step.num}
                          </span>
                          <p className="font-medium text-foreground text-sm">{step.title}</p>
                          <p className="text-muted-foreground text-xs">{step.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant={activeOption.type === "buffet" ? "whatsapp" : "hero"} size="lg" className="w-full" asChild>
                    <a
                      href={`${activeOption.whatsapp}?text=Bonjour, je souhaite faire une réservation (${activeOption.title}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      {activeOption.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* INFOS PRATIQUES */}
          <div className="mt-20 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Phone, title: "Commandes", text: "+226 64 11 11 59" },
              { icon: Phone, title: "Buffet Week-end", text: "+226 52 60 07 07" },
              { icon: MapPin, title: "Localisation", text: "Ouagadougou, Burkina Faso" },
            ].map((info, i) => (
              <AnimateOnScroll key={info.title} delay={i * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION FORM SECTION */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Réservation Premium</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Réservez votre expérience culinaire
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Commandez votre repas idéal ou réservez pour nos buffets du week-end. Une expérience personnalisée vous attend.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-xl">
                <ReservationForm />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
