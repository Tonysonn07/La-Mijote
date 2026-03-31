import { Link, useParams } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Calendar, MessageCircle, User } from "lucide-react";
import { WHATSAPP_MAIN } from "@/lib/brand";
import { blogPosts } from "@/data/blog";

const BlogList = () => {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Notre blog</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Actualités et conseils
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Recettes, conseils nutrition et coulisses de notre cuisine. Plongez dans l'univers de La Mijote.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="mb-16">
            <Link to={`/blog/${blogPosts[0].slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    A la une
                  </span>
                </div>
                <div className="p-6 lg:p-10 flex flex-col justify-center">
                  <span className="text-primary text-sm font-semibold mb-2">{blogPosts[0].category}</span>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {blogPosts[0].date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {blogPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 100}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="pt-28 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Article non trouvé</h1>
          <Button variant="outline" asChild>
            <Link to="/blog"><ArrowLeft className="h-4 w-4" /> Retour au blog</Link>
          </Button>
        </div>
      </section>
    );
  }

  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      <section className="relative pt-16">
        <div className="h-64 sm:h-80 md:h-96 w-full overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-3xl -mt-20 relative z-10">
          <AnimateOnScroll>
            <div className="bg-card rounded-2xl border border-border p-6 sm:p-10 shadow-xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">{post.category}</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground"><Calendar className="h-4 w-4" /> {post.date}</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground"><Clock className="h-4 w-4" /> {post.readTime}</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground"><User className="h-4 w-4" /> {post.author}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8 leading-tight">{post.title}</h1>

              <div className="space-y-5">
                {post.content.map((paragraph, i) => (
                  <p key={i} className={`text-foreground/85 leading-relaxed ${i === 0 ? "text-lg" : ""}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="font-display font-bold text-foreground mb-2">Envie de goüter ?</h3>
                <p className="text-muted-foreground text-sm mb-4">Commandez nos plats directement sur WhatsApp et découvrez les saveurs dont nous parlons.</p>
                <Button variant="hero" asChild>
                  <a href={WHATSAPP_MAIN} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Commander sur WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-10 pt-8 border-t border-border flex justify-between gap-4">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.slug}`} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">{prevPost.title}</span>
                    <span className="sm:hidden">Précédent</span>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link to={`/blog/${nextPost.slug}`} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors text-right">
                    <span className="hidden sm:inline">{nextPost.title}</span>
                    <span className="sm:hidden">Suivant</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : <div />}
              </div>
            </div>
          </AnimateOnScroll>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/blog"><ArrowLeft className="h-4 w-4" /> Tous les articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export { BlogList, BlogArticle };