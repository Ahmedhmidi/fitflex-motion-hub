
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dumbbell, Users } from 'lucide-react';

const Index = () => {
  return (
    <div>
      <HeroSection
        title="FITFLEX: Votre Espace de Fitness Premium"
        subtitle="Pilates, Renforcement Musculaire et Coaching Privé"
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2668&q=80"
        buttonText="Découvrir nos offres"
        buttonLink="/services"
      />

      {/* About Section Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Bienvenue chez FITFLEX"
            subtitle="Un espace dédié à votre santé et votre bien-être"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Chez FITFLEX, nous croyons que le fitness est une philosophie de vie. Notre espace élégant et 
                fonctionnel vous offre un environnement idéal pour atteindre vos objectifs, que vous soyez 
                débutant ou sportif aguerri.
              </p>
              <p className="text-lg">
                Nos coachs certifiés vous accompagnent dans votre parcours fitness avec des programmes 
                sur mesure et un suivi personnalisé.
              </p>
              <Button 
                asChild
                variant="outline" 
                className="mt-4 group"
              >
                <Link to="/a-propos" className="flex items-center">
                  En savoir plus 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" 
                alt="Espace FITFLEX" 
                className="rounded-lg shadow-xl hover-scale"
              />
              <div className="absolute -bottom-6 -left-6 bg-fitflex-tan p-4 rounded-lg shadow-lg">
                <p className="font-serif font-bold text-lg">10+ années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-fitflex-beige/30 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Nos Services"
            subtitle="Des programmes conçus pour répondre à vos besoins"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilates */}
            <div className="service-card h-96">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Pilates" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif font-semibold mb-2">Pilates</h3>
                <p className="mb-4">Renforcez votre corps et votre esprit</p>
                <Button 
                  asChild
                  className="bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black w-fit"
                >
                  <Link to="/services">Découvrir</Link>
                </Button>
              </div>
            </div>
            
            {/* Musculation */}
            <div className="service-card h-96">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Renforcement Musculaire" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif font-semibold mb-2">Renforcement Musculaire</h3>
                <p className="mb-4">Sculptez votre silhouette</p>
                <Button 
                  asChild
                  className="bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black w-fit"
                >
                  <Link to="/services">Découvrir</Link>
                </Button>
              </div>
            </div>
            
            {/* Coaching */}
            <div className="service-card h-96">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Coaching Privé" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif font-semibold mb-2">Coaching Privé</h3>
                <p className="mb-4">Un accompagnement personnalisé</p>
                <Button 
                  asChild
                  className="bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black w-fit"
                >
                  <Link to="/services">Découvrir</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-fitflex-black text-white px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-serif font-bold text-fitflex-tan">2300+</p>
              <p className="text-lg">Clients Satisfaits</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-serif font-bold text-fitflex-tan">15+</p>
              <p className="text-lg">Coachs Experts</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-serif font-bold text-fitflex-tan">50+</p>
              <p className="text-lg">Cours par Semaine</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-serif font-bold text-fitflex-tan">10+</p>
              <p className="text-lg">Années d'Expérience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80')` }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Prêt à Commencer Votre Parcours Fitness?</h2>
            <p className="text-xl mb-8">
              Rejoignez notre communauté FITFLEX et transformez votre vie avec nos programmes sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                className="bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black"
              >
                <Link to="/contact">Réserver une séance</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-fitflex-tan text-fitflex-black hover:bg-fitflex-tan/10"
              >
                <Link to="/planning">Voir le planning</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Coaches */}
      <section className="py-20 bg-fitflex-beige/30 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Nos Coachs Experts"
            subtitle="Une équipe de professionnels dédiés à votre succès"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coach 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1597347316205-38311c2115bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80" 
                alt="Hamza Hmidi" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">Hamza Hmidi</h3>
                <p className="text-gray-600 mb-4">Expert en Renforcement Musculaire</p>
                <div className="flex justify-end">
                  <Button 
                    asChild
                    variant="ghost" 
                    className="text-fitflex-tan hover:text-fitflex-brown hover:bg-fitflex-tan/10"
                  >
                    <Link to="/a-propos" className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      Profil
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Coach 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1534368786749-b63e05c90863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Sarah Martin" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">Sarah Martin</h3>
                <p className="text-gray-600 mb-4">Coach Pilates Certifiée</p>
                <div className="flex justify-end">
                  <Button 
                    asChild
                    variant="ghost" 
                    className="text-fitflex-tan hover:text-fitflex-brown hover:bg-fitflex-tan/10"
                  >
                    <Link to="/a-propos" className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      Profil
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Coach 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Thomas Dubois" 
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">Thomas Dubois</h3>
                <p className="text-gray-600 mb-4">Spécialiste en Coaching Privé</p>
                <div className="flex justify-end">
                  <Button 
                    asChild
                    variant="ghost" 
                    className="text-fitflex-tan hover:text-fitflex-brown hover:bg-fitflex-tan/10"
                  >
                    <Link to="/a-propos" className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      Profil
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline" 
              className="group"
            >
              <Link to="/a-propos" className="flex items-center">
                Voir toute l'équipe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
