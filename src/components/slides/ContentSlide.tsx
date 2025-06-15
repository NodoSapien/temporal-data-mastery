
import React from 'react';
import { Database, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContentSlideProps {
  slide: {
    title: string;
    content: string[];
    features: string[];
  };
}

const ContentSlide: React.FC<ContentSlideProps> = ({ slide }) => {
  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        <Card className="p-4 sm:p-6 lg:p-8">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="flex items-center justify-center space-x-3 text-xl sm:text-2xl lg:text-3xl text-center">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600 flex-shrink-0" />
              <span>Descripción</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 sm:space-y-4">
              {slide.content.map((item: string, index: number) => (
                <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base sm:text-lg lg:text-xl text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="p-4 sm:p-6 lg:p-8">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="flex items-center justify-center space-x-3 text-xl sm:text-2xl lg:text-3xl text-center">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-green-600 flex-shrink-0" />
              <span>Características Clave</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 sm:space-y-4">
              {slide.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-base sm:text-lg lg:text-xl text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContentSlide;
