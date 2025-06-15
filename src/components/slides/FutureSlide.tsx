
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FutureSlideProps {
  slide: {
    title: string;
    future: Array<{
      title: string;
      description: string;
    }>;
    stats: string;
  };
}

const FutureSlide: React.FC<FutureSlideProps> = ({ slide }) => {
  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {slide.future.map((item: any, index: number) => (
          <Card key={index} className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-blue-600 text-center">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl text-center">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <CardContent className="text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">{slide.stats}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FutureSlide;
