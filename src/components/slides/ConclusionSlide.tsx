import React from 'react';
import { Database, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
interface ConclusionSlideProps {
  slide: {
    title: string;
    points: string[];
  };
}
const ConclusionSlide: React.FC<ConclusionSlideProps> = ({
  slide
}) => {
  return <div className="flex flex-col justify-center min-h-[70vh] space-y-6 sm:space-y-8 lg:space-y-12 px-4 py-8 sm:py-[8px]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center xl:text-5xl">Conclusión</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {slide.points.map((point: string, index: number) => <Card key={index} className="p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow h-full flex flex-col justify-center relative">
            <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
              {index + 1}
            </div>
            <CardContent className="flex items-center justify-center text-center">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed">{point}</p>
            </CardContent>
          </Card>)}
      </div>
      <div className="text-center mt-8 sm:mt-12 lg:mt-16">
        <div className="flex items-center justify-center space-x-3 sm:space-x-6">
          <Database className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 xl:text-4xl">InfluxDB</h2>
          <Clock className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-green-600" />
        </div>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mt-4 sm:mt-6 xl:text-2xl">El futuro de las bases de datos temporales</p>
      </div>
    </div>;
};
export default ConclusionSlide;