import blogPreparation from "@/assets/blog-preparation.jpg";
import blogMarche from "@/assets/blog-marche.jpg";
import blogMealprep from "@/assets/blog-mealprep.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";
import freshIngredients from "@/assets/fresh-ingredients.jpg";
import healthyPlate from "@/assets/healthy-plate.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "secrets-cuisine-mijotee",
    title: "Les secrets d'une bonne cuisine mijotée",
    excerpt: "Découvrez les techniques ancestrales qui rendent nos plats si tendres et savoureux. Un art transmis de génération en génération.",
    image: blogPreparation,
    author: "Equipe La Mijote",
    date: "12 mars 2026",
    readTime: "5 min",
    category: "Cuisine",
    content: [
      "La cuisine mijotée est bien plus qu'une simple méthode de cuisson. C'est un art ancestral qui transforme des ingrédients simples en plats extraordinaires. Chez La Mijote, nous avons fait de cet art notre spécialité.",
      "Le secret réside dans la patience. Un bon plat mijoté nécessite du temps — parfois plusieurs heures de cuisson lente à feu doux. C'est cette lenteur qui permet aux saveurs de se développer pleinement, aux viandes de devenir fondantes et aux sauces de gagner en profondeur.",
      "Nos chefs commencent toujours par sélectionner les meilleurs ingrédients au marché local. La fraîcheur des produits est la base de tout. Ensuite vient la préparation : les épices sont torréfiées pour libérer leurs arômes, les oignons sont caramélisés lentement, et chaque élément est ajouté au bon moment.",
      "La température est cruciale. Un plat mijoté ne doit jamais bouillir vigoureusement. Un frémissement doux et constant est la clé. C'est ce qui différencie un plat ordinaire d'un plat d'exception.",
      "Chez La Mijote, nous respectons ces traditions tout en y apportant notre touche personnelle. Chaque plat que nous servons a été mijoté avec amour, patience et un savoir-faire qui fait notre fierté. Venez le découvrir par vous-même.",
    ],
  },
  {
    slug: "marche-local-ouagadougou",
    title: "Du marché à votre assiette : notre engagement local",
    excerpt: "Comment nous sélectionnons chaque jour les meilleurs ingrédients au marché de Ouagadougou pour vous garantir fraîcheur et qualité.",
    image: blogMarche,
    author: "Equipe La Mijote",
    date: "5 mars 2026",
    readTime: "4 min",
    category: "Ingredients",
    content: [
      "Chaque matin, avant même que le soleil ne se lève complètement, notre équipe se rend au marché de Ouagadougou. Cette routine matinale est le fondement de notre engagement qualité.",
      "Nous croyons fermement que la qualité d'un plat commence par la qualité de ses ingrédients. C'est pourquoi nous achetons quotidiennement des produits frais, locaux et de saison. Pas de produits surgelés, pas de conserves — uniquement du frais.",
      "Nos relations avec les producteurs locaux sont précieuses. Au fil des années, nous avons tissé des liens de confiance avec les araîchers, les éleveurs et les pêcheurs de la région. Ils connaissent nos exigences et nous réservent leurs meilleurs produits.",
      "Les tomates doivent être mûres et juteuses. Les oignons fermes et parfumés. Les herbes fraîches coupées. Les viandes de première qualité. Chaque ingrédient est inspecté avec soin avant d'être intégré dans nos préparations.",
      "En choisissant des produits locaux, nous soutenons aussi l'économie de notre communauté. Chaque repas que vous commandez chez La Mijote contribue à faire vivre des familles de producteurs à Ouagadougou et dans les environs. C'est une démarche qui nous tient à cœur.",
    ],
  },
  {
    slug: "manger-sain-burkina",
    title: "Manger sain au Burkina Faso : guide pratique",
    excerpt: "Nos conseils pour adopter une alimentation équilibrée avec des ingrédients locaux. Manger sain n'a jamais été aussi simple et délicieux.",
    image: blogMealprep,
    author: "Equipe La Mijote",
    date: "28 février 2026",
    readTime: "6 min",
    category: "Santé",
    content: [
      "Manger sain au Burkina Faso n'est pas un luxe réservé à quelques-uns. C'est un choix accessible à tous, surtout quand on connaît les trésors nutritionnels de notre cuisine locale.",
      "La cuisine burkinabée est naturellement riche en nutriments. Les céréales complètes comme le mil et le sorgho, les légumineuses comme le haricot et le niébé, les légumes frais du marché — tous ces ingrédients forment la base d'une alimentation équilibrée.",
      "Notre conseil numéro un : variez vos repas. Ne mangez pas la même chose tous les jours. Alternez entre les protéines (viande, poisson, légumineuses), les féculents (riz, to, foutou) et les légumes. Chaque repas devrait contenir ces trois groupes.",
      "Évitez les excès de sel, de sucre et d'huile. Notre cuisine chez La Mijote prouve qu'on peut avoir des plats savoureux sans exagérer sur ces éléments. Les épices et les herbes sont vos meilleurs alliés pour donner du goût sans nuire à votre santé.",
      "La préparation des repas à l'avance (meal prep) est aussi un excellent moyen de manger sain même quand on est pressé. Chez La Mijote, nous proposons des repas équilibrés prêts à emporter, parfaits pour ceux qui manquent de temps mais ne veulent pas sacrifier leur santé.",
      "Enfin, n'oubliez pas de vous hydrater. Les jus de fruits frais — bissap, gingembre, tamarin — sont non seulement délicieux mais aussi riches en vitamines. Nous en proposons chaque jour au restaurant.",
    ],
  },
  {
    slug: "art-culinaire-africain",
    title: "L'art culinaire africain : richesse et diversité",
    excerpt: "Un voyage à travers les traditions culinaires de l'Afrique de l'Ouest et comment elles inspirent notre cuisine au quotidien.",
    image: chefCooking,
    author: "Equipe La Mijote",
    date: "20 février 2026",
    readTime: "5 min",
    category: "Culture",
    content: [
      "La cuisine africaine est l'une des plus riches et des plus diversifiées au monde. Chaque pays, chaque région, chaque village a ses propres traditions culinaires, ses recettes transmises de génération en génération.",
      "Au Burkina Faso, la cuisine est un acte social autant qu'un besoin nutritionnel. On cuisine ensemble, on mange ensemble, on partage. Le repas est un moment de communion familiale et communautaire.",
      "Les techniques de cuisson sont aussi variées que les plats eux-mêmes. La cuisson à l'étouffée, le fumage, la grillade au charbon, le mijotage — chaque méthode apporte ses propres saveurs et textures.",
      "Chez La Mijote, nous nous inspirons de cette richesse pour créer des plats qui respectent les traditions tout en s'adaptant aux besoins modernes. Nous utilisons les mêmes épices, les mêmes techniques, mais avec une attention particulière à l'équilibre nutritionnel.",
      "Notre objectif est de montrer au monde que la cuisine africaine n'est pas juste de la nourriture — c'est de la culture, de l'histoire et de l'amour dans chaque assiette.",
    ],
  },
  {
    slug: "bienfaits-epices-locales",
    title: "Les bienfaits des épices locales sur votre santé",
    excerpt: "Gingembre, soumbala, poivre de Guinée... Découvrez les vertus médicinales des épices que nous utilisons dans nos plats.",
    image: freshIngredients,
    author: "Equipe La Mijote",
    date: "10 février 2026",
    readTime: "4 min",
    category: "Santé",
    content: [
      "Les épices ne sont pas que des exhausteurs de goût. En Afrique, elles sont utilisées depuis des siècles pour leurs propriétés médicinales. Chez La Mijote, nous les intégrons dans nos plats autant pour le goût que pour leurs bienfaits.",
      "Le gingembre, omniprésent dans notre cuisine, est un anti-inflammatoire naturel puissant. Il facilite la digestion, renforce le système immunitaire et apporte cette chaleur si caractéristique à nos plats et jus frais.",
      "Le soumbala (graines de nere fermentees) est riche en proteines et en probiotiques. C'est un condiment traditionnel qui donne une profondeur de saveur unique a nos sauces tout en soutenant votre sante digestive.",
      "Le poivre de Guinée, plus parfumé que le poivre noir classique, possède des propriétés antioxydantes remarquables. Nous l'utilisons dans plusieurs de nos plats pour cette raison.",
      "En choisissant des plats chez La Mijote, vous ne faites pas que vous régaler — vous prenez soin de votre corps grâce aux vertus naturelles de nos épices soigneusement sélectionnées.",
    ],
  },
  {
    slug: "commander-repas-equilibre",
    title: "Comment composer un repas équilibré facilement",
    excerpt: "Guide simple pour construire une assiette saine et gourmande avec les bases de la nutrition. Applicable au quotidien.",
    image: healthyPlate,
    author: "Equipe La Mijote",
    date: "1 février 2026",
    readTime: "5 min",
    category: "Santé",
    content: [
      "Composer un repas équilibré ne devrait pas être compliqué. Voici notre méthode simple, inspirée de la nutrition moderne et adaptée à la cuisine africaine.",
      "La règle des trois tiers : divisez mentalement votre assiette en trois. Un tiers de protéines (viande, poisson ou légumineuses), un tiers de féculents (riz, to, igname) et un tiers de légumes. C'est la base d'un repas complet.",
      "Les protéines sont essentielles pour la construction musculaire et la satété. Variez entre viande rouge, volaille, poisson et protéines végétales comme le haricot ou le soja.",
      "Les féculents fournissent l'énergie nécessaire pour votre journée. Privilégiez les céréales complètes quand c'est possible — mil, sorgho, riz complet — pour un apport en fibres supplémentaire.",
      "Les légumes sont la clé d'un bon équilibre. Épinards, gombo, tomates, poivrons, aubergines — notre marché regorge de légumes nutritifs et savoureux. N'hésitez pas à en mettre généreusement dans votre assiette.",
      "Chez La Mijote, chacun de nos repas équilibrés est composé selon ces principes. Vous n'avez pas à y penser — nous le faisons pour vous. Il suffit de commander.",
    ],
  },
];