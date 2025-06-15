
import React from 'react';
import { Database, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TitleSlideProps {
  slide: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
  };
}

const TitleSlide: React.FC<TitleSlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
      <div className="flex items-center space-x-3 sm:space-x-6 mb-6 sm:mb-12">
        <Database className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600" />
        <Clock className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-green-600" />
      </div>
      <div className="space-y-3 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
          {slide.titleLine1}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
          {slide.titleLine2}
        </h2>
      </div>
      <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-5xl">
        {slide.subtitle}
      </p>
      <div className="mt-8 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-6">
        <Badge variant="outline" className="text-base sm:text-xl lg:text-2xl px-4 sm:px-6 py-2 sm:py-3">Time-Series Database</Badge>
        <Badge variant="outline" className="text-base sm:text-xl lg:text-2xl px-4 sm:px-6 py-2 sm:py-3">High Performance</Badge>
        <Badge variant="outline" className="text-base sm:text-xl lg:text-2xl px-4 sm:px-6 py-2 sm:py-3">NoSQL</Badge>
      </div>
    </div>
  );
};

export default TitleSlide;
