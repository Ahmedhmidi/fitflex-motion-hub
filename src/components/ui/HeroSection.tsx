
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  overlayOpacity?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  buttonText,
  buttonLink = '/',
  className,
  overlayOpacity = 'opacity-50',
}) => {
  return (
    <section 
      className={cn(
        'relative h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center parallax"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : null}
      
      {/* Overlay */}
      <div className={cn(
        'absolute inset-0 bg-fitflex-black',
        overlayOpacity
      )} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-slide-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        
        {buttonText && (
          <Button 
            asChild
            className="text-lg px-8 py-6 bg-fitflex-tan text-fitflex-black hover:bg-fitflex-tan/90 animate-slide-in"
            style={{ animationDelay: '0.4s' }}
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
