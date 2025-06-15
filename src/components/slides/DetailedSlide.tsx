
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DetailedSlideProps {
  slide: {
    title: string;
    sections: Array<{
      title: string;
      points: string[];
    }>;
  };
}

const DetailedSlide: React.FC<DetailedSlideProps> = ({ slide }) => {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">{slide.title}</h1>
      <div className="grid gap-4 sm:gap-6">
        {slide.sections.map((section: any, index: number) => (
          <Card key={index} className="p-3 sm:p-4 lg:p-6">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl text-blue-600 text-center">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {section.points.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg lg:text-xl text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DetailedSlide;
