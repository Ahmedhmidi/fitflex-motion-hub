
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  return (
    <div>
      <HeroSection
        title="Nos Services"
        subtitle="Des programmes adaptés à vos besoins et objectifs"
        backgroundImage="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        overlayOpacity="opacity-60"
      />
      
      {/* Pilates Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Pilates</h2>
              <div className="h-1 w-20 bg-fitflex-tan mb-8"></div>
              <p className="text-lg mb-6">
                Le Pilates est une méthode d'entraînement complète qui renforce les muscles profonds, 
                améliore la posture et développe la conscience corporelle. Chez FITFLEX, nos cours de 
                Pilates sont dirigés par des instructeurs certifiés qui vous guideront à travers des 
                exercices précis et contrôlés.
              </p>
              <p className="text-lg mb-8">
                Que vous soyez débutant ou pratiquant avancé, nos cours s'adaptent à votre niveau 
                et vous aident à progresser à votre rythme.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Dumbbell className="h-6 w-6 text-fitflex-tan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Pilates Mat</h4>
                    <p>Exercices au sol avec petit matériel pour un travail en profondeur.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Dumbbell className="h-6 w-6 text-fitflex-tan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Pilates Reformer</h4>
                    <p>Séances sur machines spécifiques pour un travail ciblé et efficace.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80" 
                alt="Pilates chez FITFLEX" 
                className="rounded-lg shadow-xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Renforcement Musculaire */}
      <section className="py-20 bg-fitflex-beige/30 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                alt="Renforcement Musculaire chez FITFLEX" 
                className="rounded-lg shadow-xl hover-scale"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Renforcement Musculaire</h2>
              <div className="h-1 w-20 bg-fitflex-tan mb-8"></div>
              <p className="text-lg mb-6">
                Notre programme de renforcement musculaire est conçu pour vous aider à développer 
                force, endurance et tonicité. Avec un équipement de pointe et des coachs experts, 
                vous bénéficierez d'un accompagnement optimal pour atteindre vos objectifs.
              </p>
              <p className="text-lg mb-8">
                Que vous souhaitiez sculpter votre corps, améliorer vos performances sportives ou 
                simplement gagner en force au quotidien, notre approche personnalisée s'adapte à vos besoins.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Dumbbell className="h-6 w-6 text-fitflex-tan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Circuit Training</h4>
                    <p>Séances dynamiques pour un travail complet et efficace.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Dumbbell className="h-6 w-6 text-fitflex-tan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Musculation Ciblée</h4>
                    <p>Travail spécifique des différents groupes musculaires.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coaching Privé */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Coaching Privé</h2>
              <div className="h-1 w-20 bg-fitflex-tan mb-8"></div>
              <p className="text-lg mb-6">
                Notre service de coaching privé vous offre un accompagnement sur mesure pour 
                atteindre vos objectifs spécifiques. Votre coach vous guidera à travers un 
                programme personnalisé, adapté à votre niveau, vos préférences et vos contraintes.
              </p>
              <p className="text-lg mb-8">
                Ce suivi privilégié vous permettra de progresser plus rapidement, avec une 
                attention constante à votre technique et à votre motivation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Dumbbell className="h-6 w-6 text-fitflex-tan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Évaluation Initiale</h4>
                    <p>Analyse complète de votre condition physique et de vos objectifs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Dumbbell className="h-6 w-6 text-fitflex-tan mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">Suivi Personnalisé</h4>
                    <p>Séances individuelles et ajustements réguliers de votre programme.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Coaching Privé chez FITFLEX" 
                className="rounded-lg shadow-xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Price Packages */}
      <section className="py-20 bg-fitflex-black text-white px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Nos Formules"
            subtitle="Des offres adaptées à tous les budgets et objectifs"
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover-scale">
              <h3 className="text-xl font-serif font-semibold mb-2">Formule Découverte</h3>
              <p className="text-4xl font-bold mb-6">49€<span className="text-lg font-normal">/mois</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-fitflex-tan mr-2">✓</span>
                  Accès illimité à la salle
                </li>
                <li className="flex items-center">
                  <span className="text-fitflex-tan mr-2">✓</span>
                  2 cours collectifs par semaine
                </li>
                <li className="flex items-center">
                  <span className="text-fitflex-tan mr-2">✓</span>
                  Bilan initial
                </li>
                <li className="flex items-center opacity-50">
                  <span className="mr-2">✗</span>
                  Coaching privé
                </li>
              </ul>
              <Button 
                asChild
                className="w-full bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black"
              >
                <Link to="/contact">Choisir cette formule</Link>
              </Button>
            </div>
            
            {/* Premium */}
            <div className="bg-fitflex-tan text-fitflex-black p-8 rounded-lg hover-scale relative">
              <div className="absolute top-0 right-0 bg-fitflex-black text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Populaire
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Formule Premium</h3>
              <p className="text-4xl font-bold mb-6">79€<span className="text-lg font-normal">/mois</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-fitflex-black font-bold mr-2">✓</span>
                  Accès illimité à la salle
                </li>
                <li className="flex items-center">
                  <span className="text-fitflex-black font-bold mr-2">✓</span>
                  Cours collectifs illimités
                </li>
                <li className="flex items-center">
                  <span className="text-fitflex-black font-bold mr-2">✓</span>
                  Bilan personnalisé mensuel
                </li>
                <li className="flex items-center">
                  <span className="text-fitflex-black font-bold mr-2">✓</span>
                  1 session de coaching privé par mois
                </li>
              </ul>
              <Button 
                asChild
                className="w-full bg-fitflex-black hover:bg-fitflex-black/90 text-white"
              >
                <Link to="/contact">Choisir cette formule</Link>
              </Button>
            </div>
            
            {/* Elite */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover-scale">
              <h3 className="text-xl font-serif font-semibold mb-2">Formule Elite</h3>
              <p className="text-4xl font-bold mb-6">129€<span className="text-lg font-normal">/mois</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-fitflex-tan mr-2">✓</span>
                  Accès illimité à la salle
                </li>
                <li className="flex items-center">
                  <span className="text-fitflex-tan mr-2">✓</span>
                  Cours collectifs illimités
                </li>
                <li className="flex items-center">
                  <span className="text-fitflex-tan mr-2">✓</span>
                  Suivi personnalisé hebdomadaire
                </li>
                <li className="flex items-center">
                  <span className="text-fitflex-tan mr-2">✓</span>
                  4 sessions de coaching privé par mois
                </li>
              </ul>
              <Button 
                asChild
                className="w-full bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black"
              >
                <Link to="/contact">Choisir cette formule</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
