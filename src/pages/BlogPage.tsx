
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Les bienfaits du Pilates sur la posture",
    excerpt: "Découvrez comment la pratique régulière du Pilates peut transformer votre posture et soulager vos douleurs dorsales.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    author: "Sarah Martin",
    date: "15 mai 2023",
    category: "Pilates"
  },
  {
    id: 2,
    title: "Nutrition et performance : les clés d'une alimentation adaptée",
    excerpt: "Comment adapter votre alimentation pour optimiser vos performances sportives et votre récupération.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    author: "Léa Durand",
    date: "28 avril 2023",
    category: "Nutrition"
  },
  {
    id: 3,
    title: "5 exercices efficaces pour renforcer votre core",
    excerpt: "Focus sur 5 exercices simples mais puissants pour renforcer vos abdominaux et votre ceinture lombaire.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    author: "Hamza Hmidi",
    date: "10 avril 2023",
    category: "Entraînement"
  },
  {
    id: 4,
    title: "Récupération active : pourquoi et comment l'intégrer",
    excerpt: "L'importance de la récupération active dans votre programme d'entraînement et les meilleures stratégies pour l'optimiser.",
    image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    author: "Thomas Dubois",
    date: "22 mars 2023",
    category: "Récupération"
  },
  {
    id: 5,
    title: "HIIT vs entraînement continu : que choisir ?",
    excerpt: "Analyse comparative des avantages et inconvénients du HIIT et de l'entraînement continu pour atteindre vos objectifs.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    author: "Hamza Hmidi",
    date: "5 mars 2023",
    category: "Entraînement"
  },
  {
    id: 6,
    title: "Comment maintenir sa motivation sur le long terme",
    excerpt: "Stratégies et conseils pour rester motivé dans votre pratique sportive et atteindre vos objectifs.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    author: "Sarah Martin",
    date: "15 février 2023",
    category: "Motivation"
  }
];

const categories = ["Tous", "Pilates", "Nutrition", "Entraînement", "Récupération", "Motivation"];

const BlogPage = () => {
  return (
    <div>
      <HeroSection
        title="Le Blog FITFLEX"
        subtitle="Conseils, astuces et actualités sur le fitness et le bien-être"
        backgroundImage="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80"
        overlayOpacity="opacity-70"
        className="h-[60vh]"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Derniers Articles"
            subtitle="Restez informés avec nos dernières publications"
          />
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <Button 
                key={category}
                variant={category === "Tous" ? "default" : "outline"}
                className={category === "Tous" 
                  ? "bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black" 
                  : "border-fitflex-tan text-fitflex-black hover:bg-fitflex-tan/10"}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Featured Article */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-lg overflow-hidden shadow-xl">
              <div className="h-full">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-fitflex-tan/20 text-fitflex-brown px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-500">{blogPosts[0].author}</span>
                  </div>
                  <Button 
                    asChild
                    className="group bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black"
                  >
                    <Link to={`/blog/${blogPosts[0].id}`} className="flex items-center">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-fitflex-tan/20 text-fitflex-brown px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-500">{post.author}</span>
                    </div>
                    <Button 
                      asChild
                      variant="outline" 
                      className="text-fitflex-tan hover:text-fitflex-brown hover:bg-fitflex-tan/10 border-fitflex-tan"
                    >
                      <Link to={`/blog/${post.id}`}>Lire</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled className="border-gray-200">
                Précédent
              </Button>
              <Button className="bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black">
                1
              </Button>
              <Button variant="outline" className="border-fitflex-tan">
                2
              </Button>
              <Button variant="outline" className="border-fitflex-tan">
                3
              </Button>
              <Button variant="outline" className="border-fitflex-tan">
                Suivant
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-fitflex-beige/30 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Abonnez-vous à notre newsletter</h2>
          <p className="text-gray-600 mb-8">
            Recevez nos derniers articles, conseils fitness et offres spéciales directement dans votre boîte mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fitflex-tan"
              required
            />
            <Button className="bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black px-6">
              S'abonner
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
