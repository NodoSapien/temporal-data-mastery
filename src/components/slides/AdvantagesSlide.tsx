
import React from 'react';
import { CheckCircle, Zap, Database, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AdvantagesSlideProps {
  slide: {
    title: string;
    categories: Array<{
      title: string;
      iconName: string;
      advantages: string[];
    }>;
  };
}

const getIcon = (iconName: string) => {
  const iconProps = { className: "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" };
  switch (iconName) {
    case 'zap':
      return <Zap {...iconProps} />;
    case 'database':
      return <Database {...iconProps} />;
    case 'trending-up':
      return <TrendingUp {...iconProps} />;
    default:
      return <Zap {...iconProps} />;
  }
};

const AdvantagesSlide: React.FC<AdvantagesSlideProps> = ({ slide }) => {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">{slide.title}</h1>
      <div className="grid gap-4 sm:gap-6">
        {slide.categories.map((category: any, index: number) => (
          <Card key={index} className="p-3 sm:p-4 lg:p-6">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="flex items-center justify-center space-x-3 sm:space-x-4 text-lg sm:text-xl lg:text-2xl">
                <div className="p-2 sm:p-3 lg:p-4 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                  {getIcon(category.iconName)}
                </div>
                <span>Ventajas {category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {category.advantages.map((advantage: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 lg:p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg">{advantage}</span>
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

export default AdvantagesSlide;
