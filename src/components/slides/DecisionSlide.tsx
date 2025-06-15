
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DecisionSlideProps {
  slide: {
    title: string;
    decision: {
      choose: string[];
      avoid: string[];
    };
  };
}

const DecisionSlide: React.FC<DecisionSlideProps> = ({ slide }) => {
  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">{slide.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        <Card className="p-4 sm:p-6 lg:p-8 border-green-200 bg-green-50">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="flex items-center justify-center space-x-3 text-green-800 text-xl sm:text-2xl lg:text-3xl">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0" />
              <span>Cuándo SÍ usar InfluxDB</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 sm:space-y-4">
              {slide.decision.choose.map((item: string, index: number) => (
                <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 text-base sm:text-lg lg:text-xl">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="p-4 sm:p-6 lg:p-8 border-red-200 bg-red-50">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="flex items-center justify-center space-x-3 text-red-800 text-xl sm:text-2xl lg:text-3xl">
              <XCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0" />
              <span>Cuándo considerar alternativas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 sm:space-y-4">
              {slide.decision.avoid.map((item: string, index: number) => (
                <li key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 text-base sm:text-lg lg:text-xl">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DecisionSlide;
