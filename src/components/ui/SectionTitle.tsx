
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      
      <div className={cn(
        'h-1 w-24 bg-fitflex-tan mt-4',
        centered ? 'mx-auto' : ''
      )} />
    </div>
  );
};

export default SectionTitle;
