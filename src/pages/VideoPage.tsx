
import React, { useState } from 'react';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play } from 'lucide-react';

// Mock data for videos
const videoData = {
  testimonials: [
    {
      id: 1,
      title: "Julie partage son expérience",
      description: "Julie raconte comment les cours de Pilates l'ont aidée à se remettre d'une blessure au dos.",
      thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2622&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Marc et sa transformation",
      description: "Après 6 mois de coaching privé, Marc partage sa transformation physique et mentale.",
      thumbnail: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Sophie et le renforcement musculaire",
      description: "Sophie explique comment les cours de renforcement musculaire ont transformé son quotidien.",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
  ],
  workouts: [
    {
      id: 4,
      title: "Pilates pour débutants",
      description: "Une séance d'introduction aux principes fondamentaux du Pilates, idéale pour les débutants.",
      thumbnail: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Circuit training intense",
      description: "Un circuit training de 30 minutes pour brûler un maximum de calories et renforcer tout le corps.",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Stretching post-entraînement",
      description: "Une séance d'étirements complète pour favoriser la récupération après l'effort.",
      thumbnail: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
  ],
  events: [
    {
      id: 7,
      title: "Masterclass Pilates",
      description: "Retour sur notre masterclass exceptionnelle de Pilates avec Sarah Martin.",
      thumbnail: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 8,
      title: "Workshop Nutrition",
      description: "Les moments forts de notre workshop sur la nutrition sportive avec Léa Durand.",
      thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
  ]
};

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<null | {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
  }>(null);
  
  const playVideo = (video: { id: number; title: string; description: string; videoUrl: string }) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div>
      <HeroSection
        title="Vidéothèque FITFLEX"
        subtitle="Témoignages, séances d'entraînement et événements en vidéo"
        backgroundImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        overlayOpacity="opacity-70"
        className="h-[60vh]"
      />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          {selectedVideo ? (
            <div className="mb-16">
              <div className="relative pb-[56.25%] overflow-hidden rounded-lg shadow-xl mb-6">
                <iframe 
                  src={selectedVideo.videoUrl} 
                  title={selectedVideo.title}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">{selectedVideo.title}</h2>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          ) : null}
          
          <Tabs defaultValue="testimonials">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="testimonials">Témoignages</TabsTrigger>
                <TabsTrigger value="workouts">Séances d'entraînement</TabsTrigger>
                <TabsTrigger value="events">Événements</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="testimonials">
              <SectionTitle 
                title="Témoignages Clients"
                subtitle="Découvrez les retours d'expérience de nos membres"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {videoData.testimonials.map(video => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale cursor-pointer"
                    onClick={() => playVideo(video)}
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity hover:bg-opacity-20">
                        <div className="w-16 h-16 rounded-full bg-fitflex-tan flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-2">{video.title}</h3>
                      <p className="text-gray-600">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="workouts">
              <SectionTitle 
                title="Séances d'Entraînement"
                subtitle="Des vidéos pour vous entraîner où que vous soyez"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {videoData.workouts.map(video => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale cursor-pointer"
                    onClick={() => playVideo(video)}
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity hover:bg-opacity-20">
                        <div className="w-16 h-16 rounded-full bg-fitflex-tan flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-2">{video.title}</h3>
                      <p className="text-gray-600">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="events">
              <SectionTitle 
                title="Événements"
                subtitle="Retrouvez les moments forts de nos événements"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoData.events.map(video => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale cursor-pointer"
                    onClick={() => playVideo(video)}
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity hover:bg-opacity-20">
                        <div className="w-16 h-16 rounded-full bg-fitflex-tan flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-semibold mb-2">{video.title}</h3>
                      <p className="text-gray-600">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default VideoPage;
