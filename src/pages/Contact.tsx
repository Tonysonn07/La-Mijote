import { useState } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Send, User, Calendar, Users, Utensils, AlertCircle, CheckCircle } from "lucide-react";
import { TikTokIcon, WhatsAppIcon, FacebookIcon, InstagramIcon } from "@/components/BrandIcons";
import { WHATSAPP_MAIN, WHATSAPP_BUFFET, FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from "@/lib/brand";
import restaurantInterior from "@/assets/hero-african.jpeg";

// Reservation Form Component
const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    whatsapp: '',
    nombrePersonnes: '1',
    date: '',
    heure: '',
    typeCommande: 'plats', // 'plats' ou 'personnalise'
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

    if (formData.typeCommande === 'personnalise' && !formData.commandePersonnalisee.trim()) {
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
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mr-3"
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                errors.nom ? 'border-red-500' : 'border-border'
              }`}
              placeholder="Votre nom complet"
            />
            {errors.nom && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
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
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                errors.whatsapp ? 'border-red-500' : 'border-border'
              }`}
              placeholder="+226 XX XX XX XX"
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.whatsapp}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nombre de personnes *
            </label>
            <select
              name="nombrePersonnes"
              value={formData.nombrePersonnes}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                <option key={num} value={num.toString()}>{num} personne{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                  errors.date ? 'border-red-500' : 'border-border'
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.date}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Heure *
              </label>
              <input
                type="time"
                name="heure"
                value={formData.heure}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                  errors.heure ? 'border-red-500' : 'border-border'
                }`}
              />
              {errors.heure && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
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
          <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary/30 transition-colors">
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

          <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary/30 transition-colors">
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
        </div>

        {/* Affichage conditionnel */}
        {formData.typeCommande === 'plats' && (
          <div className="mt-6">
            <label className="block text-sm font-medium text-foreground mb-3">
              Sélectionnez vos plats *
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              {platsDisponibles.map(plat => (
                <label key={plat} className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:border-primary/30 transition-colors">
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
              <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.platsSelectionnes}
              </p>
            )}
          </div>
        )}

        {formData.typeCommande === 'personnalise' && (
          <div className="mt-6">
            <label className="block text-sm font-medium text-foreground mb-3">
              Décrivez votre commande *
            </label>
            <textarea
              name="commandePersonnalisee"
              value={formData.commandePersonnalisee}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                errors.commandePersonnalisee ? 'border-red-500' : 'border-border'
              }`}
              placeholder="Ex: Je voudrais un poulet braisé avec du riz, mais sans oignons, et une salade composée..."
            />
            {errors.commandePersonnalisee && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
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
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
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
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
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
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              placeholder="Toute information supplémentaire pour votre commande..."
            />
          </div>

          <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary/30 transition-colors">
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
          className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
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

const Contact = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Parlons de votre prochaine commande
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Contactez-nous pour connaitre notre emplacement exact, nos disponibilités et le menu du jour.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-20">
            <AnimateOnScroll>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-green-600/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                  <WhatsAppIcon className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">WhatsApp Commandes</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">Pour vos commandes quotidiennes de plats mijotés et repas equilibrés.</p>
                <Button variant="whatsapp" className="w-full" asChild>
                  <a href={WHATSAPP_MAIN} target="_blank" rel="noopener noreferrer" className="text-primary-foreground font-semibold">
                    +226 64 11 11 59
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-orange-600/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-5">
                  <Phone className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Appel téléphonique</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">Réservations exclusives pour le buffet du week-end.</p>
                <Button variant="phone" className="w-full" asChild>
                  <a href={WHATSAPP_BUFFET} target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold">
                    +226 52 60 07 07
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-5">
                  <FacebookIcon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Facebook</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">Suivez-nous pour les nouveautés, photos et promotions.</p>
                <Button variant="facebook" className="w-full" asChild>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold">
                    @LaMijoteOuaga
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={450}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center mx-auto mb-5">
                  <InstagramIcon className="h-7 w-7 text-pink-500" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Instagram</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">Découvrez nos créations culinaires en photos et videos.</p>
                <Button variant="instagram" className="w-full" asChild>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold">
                    @la.mijote
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={600}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-red-600/30 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-5">
                  <TikTokIcon className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">TikTok</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">Vidéos courtes de nos plats et ambiance restaurant.</p>
                <Button variant="tiktok" className="w-full" asChild>
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold">
                    @la.mijote
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* INFO SECTION */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <img
                src={restaurantInterior}
                alt="Notre restaurant"
                className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </AnimateOnScroll>

            <div>
              <AnimateOnScroll>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Informations pratiques
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">Localisation</h3>
                      <p className="text-muted-foreground text-sm">Ouagadougou, Burkina Faso</p>
                      <p className="text-muted-foreground text-sm italic">Contactez-nous pour connaître notre emplacement exact.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">Disponibilité</h3>
                      <p className="text-muted-foreground text-sm">Commandes quotidiennes en semaine</p>
                      <p className="text-muted-foreground text-sm">Buffet le samedi et dimanche</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">Livraison</h3>
                      <p className="text-muted-foreground text-sm">Livraison disponible à Ouagadougou. Contactez-nous pour les détails et frais de livraison.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-card border border-border rounded-xl">
                  <p className="font-display font-bold text-foreground mb-2">Une question ?</p>
                  <p className="text-sm text-muted-foreground mb-4">N'hesitez pas à nous écrire sur WhatsApp. Nous répondons rapidement.</p>
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a href={WHATSAPP_MAIN} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-4 w-4" />
                      Ecrire sur WhatsApp
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

export default Contact;
