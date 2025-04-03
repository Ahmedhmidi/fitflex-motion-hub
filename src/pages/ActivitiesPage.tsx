
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';

const activities = [
  {
    name: "Pilates Mat",
    description: "Renforcement des muscles profonds, amélioration de la posture et de la souplesse sur tapis.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    difficulty: "Tous niveaux",
    duration: "45-60 min"
  },
  {
    name: "Pilates Reformer",
    description: "Exercices sur machine pour un travail plus intense et ciblé des muscles profonds.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    difficulty: "Intermédiaire",
    duration: "45 min"
  },
  {
    name: "Circuit Training",
    description: "Entraînement intensif alternant exercices cardiovasculaires et renforcement musculaire.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    difficulty: "Intermédiaire à avancé",
    duration: "45 min"
  },
  {
    name: "HIIT",
    description: "Entraînement par intervalles à haute intensité pour brûler un maximum de calories.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    difficulty: "Avancé",
    duration: "30 min"
  },
  {
    name: "Core Training",
    description: "Renforcement ciblé des muscles abdominaux, lombaires et du plancher pelvien.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    difficulty: "Tous niveaux",
    duration: "30-45 min"
  },
  {
    name: "Stretching",
    description: "Séance d'étirements pour améliorer la souplesse et favoriser la récupération.",
    image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    difficulty: "Tous niveaux",
    duration: "45 min"
  }
];

const ActivitiesPage = () => {
  return (
    <div>
      <HeroSection
        title="Nos Activités"
        subtitle="Découvrez notre variété de cours et activités"
        backgroundImage="https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80"
        overlayOpacity="opacity-60"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Explorez Nos Activités"
            subtitle="Une variété de cours pour tous les niveaux et objectifs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-fitflex-tan text-fitflex-black px-3 py-1 rounded-full text-sm font-medium">
                    {activity.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-serif font-semibold">{activity.name}</h3>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {activity.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {activity.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Button 
                      asChild
                      variant="outline" 
                      className="text-fitflex-tan hover:text-fitflex-brown hover:bg-fitflex-tan/10 border-fitflex-tan"
                    >
                      <Link to="/planning">Voir les horaires</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-fitflex-black text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Prêt à Rejoindre Nos Cours?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Consultez notre planning pour trouver le cours qui vous convient et réservez votre place dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              className="bg-fitflex-tan hover:bg-fitflex-tan/90 text-fitflex-black"
            >
              <Link to="/planning">Consulter le Planning</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
