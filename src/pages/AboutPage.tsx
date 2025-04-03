
import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutPage = () => {
  return (
    <div>
      <HeroSection
        title="À Propos de FITFLEX"
        subtitle="Découvrez notre histoire et notre philosophie"
        backgroundImage="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        overlayOpacity="opacity-60"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Notre Histoire"
            subtitle="Comment FITFLEX est devenu votre espace fitness de référence"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-lg mb-6">
                FITFLEX est né d'une passion profonde pour le fitness et le bien-être. Fondé en 2013 par une équipe 
                de professionnels passionnés, notre salle de sport s'est rapidement distinguée par son approche 
                personnalisée et sa qualité de service.
              </p>
              <p className="text-lg">
                Ce qui a commencé comme un petit studio s'est transformé en un espace premium offrant une variété 
                de services pour répondre aux besoins de notre communauté grandissante. Notre mission reste inchangée :
                vous aider à atteindre vos objectifs dans un environnement accueillant et motivant.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" 
                alt="Histoire de FITFLEX" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <SectionTitle 
            title="Notre Philosophie"
            subtitle="Bien plus qu'une simple salle de sport"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <h3 className="text-xl font-serif font-semibold mb-4">Personnalisation</h3>
              <p>
                Nous croyons que chaque parcours fitness est unique. C'est pourquoi nous mettons l'accent sur 
                des programmes personnalisés qui s'adaptent à vos objectifs et à votre niveau.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <h3 className="text-xl font-serif font-semibold mb-4">Excellence</h3>
              <p>
                Nous nous engageons à offrir un service d'excellence, tant au niveau de nos installations que 
                de notre équipe de professionnels qualifiés et passionnés.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <h3 className="text-xl font-serif font-semibold mb-4">Communauté</h3>
              <p>
                FITFLEX est bien plus qu'une salle de sport - c'est une communauté dynamique où vous vous 
                sentirez soutenu et motivé dans votre parcours fitness.
              </p>
            </div>
          </div>
          
          <SectionTitle 
            title="Notre Équipe"
            subtitle="Des professionnels passionnés à votre service"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Coach 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1597347316205-38311c2115bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80" 
                alt="Hamza Hmidi" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1">Hamza Hmidi</h3>
                <p className="text-gray-600 mb-4">Expert en Renforcement Musculaire</p>
                <p className="text-sm text-gray-500">
                  "Mon objectif est de vous aider à repousser vos limites et à atteindre votre plein potentiel."
                </p>
              </div>
            </div>
            
            {/* Coach 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1534368786749-b63e05c90863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Sarah Martin" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1">Sarah Martin</h3>
                <p className="text-gray-600 mb-4">Coach Pilates Certifiée</p>
                <p className="text-sm text-gray-500">
                  "Le Pilates est bien plus qu'un exercice - c'est un chemin vers l'équilibre entre le corps et l'esprit."
                </p>
              </div>
            </div>
            
            {/* Coach 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Thomas Dubois" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1">Thomas Dubois</h3>
                <p className="text-gray-600 mb-4">Spécialiste en Coaching Privé</p>
                <p className="text-sm text-gray-500">
                  "Je crois fermement qu'un accompagnement personnalisé est la clé pour des résultats durables."
                </p>
              </div>
            </div>
            
            {/* Coach 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Léa Durand" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1">Léa Durand</h3>
                <p className="text-gray-600 mb-4">Experte en Nutrition Sportive</p>
                <p className="text-sm text-gray-500">
                  "Une alimentation équilibrée est aussi importante que l'exercice physique pour atteindre vos objectifs."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-fitflex-beige/30 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Témoignages"
            subtitle="Ce que nos clients disent de nous"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <div className="text-5xl font-serif text-fitflex-tan opacity-20 absolute top-4 left-4">"</div>
              <p className="mb-6 relative z-10">
                FITFLEX a complètement transformé ma façon de m'entraîner. Les coachs sont attentifs et les 
                installations sont impeccables. Je recommande vivement!
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2622&q=80" 
                  alt="Julie Moreau" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">Julie Moreau</p>
                  <p className="text-sm text-gray-500">Cliente depuis 2020</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <div className="text-5xl font-serif text-fitflex-tan opacity-20 absolute top-4 left-4">"</div>
              <p className="mb-6 relative z-10">
                Le programme de Pilates chez FITFLEX est exceptionnel. J'ai vu des résultats impressionnants 
                en termes de posture et de force en seulement quelques semaines.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="Marc Bernard" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">Marc Bernard</p>
                  <p className="text-sm text-gray-500">Client depuis 2021</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <div className="text-5xl font-serif text-fitflex-tan opacity-20 absolute top-4 left-4">"</div>
              <p className="mb-6 relative z-10">
                Le coaching privé avec Thomas a été un investissement incroyable pour ma santé. Son approche 
                personnalisée m'a aidé à atteindre des objectifs que je pensais impossibles.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80" 
                  alt="Sophie Leclerc" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">Sophie Leclerc</p>
                  <p className="text-sm text-gray-500">Cliente depuis 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
